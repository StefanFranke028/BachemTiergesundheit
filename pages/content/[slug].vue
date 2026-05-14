<template>
  <div class="content-page">
    <div v-if="entry" v-html="bodyHtml"/>
    <div v-else class="not-found">
      <h1>Inhalt nicht gefunden</h1>
      <p>Für den Slug "{{ slug }}" wurde kein Eintrag gefunden.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from '#imports';
import { useAsyncData } from '#app';
import { computed, onMounted } from 'vue';

const route = useRoute();
const slug = String(route.params.slug || '');

const { data: entry } = await useAsyncData(`content-${slug}`, async () => {
  const sideTag = process.server ? '[SSR]' : '[CSR]';
  try {
    console.log(`${sideTag} [content/${slug}] GET /auth/page/${slug}`);
    const res = await $fetch(`https://tier-gesundheitszentrum.com:8080/auth/page/${slug}`);
    console.log(`${sideTag} [content/${slug}] GET /auth/page/${slug} response:`, res);
    return res || null;
  } catch (e) {
    console.error(`${sideTag} [content/${slug}] GET /auth/page/${slug} error:`, e?.message || e);
    return null;
  }
});

onMounted(() => {
  console.log(`[CLIENT] [content/${slug}] entry:`, entry.value);
});

// HTML parsen: <title>, <meta>, <link> aus dem Backend-HTML extrahieren und
// gleichzeitig aus dem zu rendernden Body entfernen, damit sie nicht doppelt
// (einmal im <head> via useHead, einmal im Body via v-html) auftauchen.
function parseAttrs(raw) {
  const attrs = {};
  const attrRe = /(\w[\w:-]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g;
  let a;
  while ((a = attrRe.exec(raw)) !== null) {
    attrs[a[1].toLowerCase()] = a[3] ?? a[4] ?? a[5] ?? '';
  }
  return attrs;
}

function extractFromHtml(html) {
  if (!html) return { title: null, metas: [], links: [], body: '' };

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  const metas = [];
  const metaRe = /<meta\b([^>]*)>/gi;
  let m;
  while ((m = metaRe.exec(html)) !== null) {
    const attrs = parseAttrs(m[1]);
    if (!Object.keys(attrs).length) continue;
    const name = (attrs.name || '').toLowerCase();
    // viewport + charset werden bereits durch Nuxt/Browser-Defaults gesetzt
    // -> aus dem HTML rausfiltern, damit es nicht zu Duplikaten kommt.
    if (name === 'viewport' || 'charset' in attrs) continue;
    metas.push(attrs);
  }

  const links = [];
  const linkRe = /<link\b([^>]*)>/gi;
  while ((m = linkRe.exec(html)) !== null) {
    const attrs = parseAttrs(m[1]);
    if (Object.keys(attrs).length) links.push(attrs);
  }

  // <style>-Tags des HTMLs sammeln, damit sie nach dem Strippen des <head> erhalten bleiben.
  const styleBlocks = [];
  const styleRe = /<style\b[^>]*>[\s\S]*?<\/style>/gi;
  let s;
  while ((s = styleRe.exec(html)) !== null) {
    styleBlocks.push(s[0]);
  }

  // Body extrahieren / "head" entfernen, damit die Meta-Tags nicht zusätzlich im Body landen.
  let body = html;
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    body = bodyMatch[1];
  } else {
    body = body.replace(/<head\b[^>]*>[\s\S]*?<\/head>/gi, '');
  }
  // Verbleibende einzelne <title>, <meta>, <link>-Tags und Style-Tags im Body entfernen
  // (Style-Tags fügen wir gleich kontrolliert wieder ein, sonst kämen sie doppelt).
  body = body
      .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
      .replace(/<meta\b[^>]*>/gi, '')
      .replace(/<link\b[^>]*>/gi, '')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<\/?(html|body)\b[^>]*>/gi, '');

  // Style-Tags aus dem ursprünglichen HTML voranstellen, damit das CSS der Seite greift.
  body = styleBlocks.join('\n') + '\n' + body;

  return { title, metas, links, body };
}

const parsed = computed(() => extractFromHtml(entry.value?.content));
const bodyHtml = computed(() => parsed.value.body);

const canonicalUrl = `https://tier-gesundheitszentrum.com/content/${slug}`;

useHead(() => {
  const effectiveTitle =
      parsed.value.title || entry.value?.title || 'Tiergesundheitszentrum Andrea Bachem';

  const hasName = (n) =>
      parsed.value.metas.some(m => (m.name || '').toLowerCase() === n);
  const hasProp = (p) =>
      parsed.value.metas.some(m => (m.property || '').toLowerCase() === p);

  const defaultDescription =
      'Ganzheitliche Tiergesundheit: Osteopathie, Chiropraktik und Naturheilkunde von Andrea Bachem.';
  const defaultImage = 'https://tier-gesundheitszentrum.com/logo.png';

  // Defaults nur ergänzen, wenn im HTML kein entsprechender Tag vorhanden ist
  const fallbackMetas = [
    !hasName('description') && { name: 'description', content: defaultDescription },
    !hasName('robots') && { name: 'robots', content: 'index, follow' },
    !hasName('author') && { name: 'author', content: 'Andrea Bachem' },
    !hasName('keywords') && {
      name: 'keywords',
      content: `Tiergesundheit, ${slug}, ${effectiveTitle}, Tierosteopathie, Chiropraktik, Naturheilkunde, Andrea Bachem`,
    },
    !hasProp('og:title') && { property: 'og:title', content: effectiveTitle },
    !hasProp('og:description') && { property: 'og:description', content: defaultDescription },
    !hasProp('og:url') && { property: 'og:url', content: canonicalUrl },
    !hasProp('og:type') && { property: 'og:type', content: 'website' },
    !hasProp('og:image') && { property: 'og:image', content: defaultImage },
    !hasName('twitter:card') && { name: 'twitter:card', content: 'summary_large_image' },
    !hasName('twitter:title') && { name: 'twitter:title', content: effectiveTitle },
    !hasName('twitter:description') && { name: 'twitter:description', content: defaultDescription },
    !hasName('twitter:image') && { name: 'twitter:image', content: defaultImage },
  ].filter(Boolean);

  // HTML-Metas zuerst (haben Vorrang), Fallbacks danach – mit Key für saubere Dedup
  const mergedMeta = [...parsed.value.metas, ...fallbackMetas].map(m => {
    const key = m.name || m.property || m['http-equiv'] || (m.charset ? 'charset' : undefined);
    return key ? { ...m, key } : m;
  });

  // Aus den Links aus dem HTML alle Canonicals, Alternates und das Apple-Touch-Icon entfernen.
  // Diese werden gezielt unten einmal gesetzt – Canonical ist IMMER die tatsächliche URL.
  const linksFromHtml = parsed.value.links.filter(l => {
    const rel = (l.rel || '').toLowerCase();
    return rel !== 'apple-touch-icon' && rel !== 'canonical' && rel !== 'alternate';
  });

  const finalLinks = [
    ...linksFromHtml,
    // Canonical: IMMER die tatsächliche URL (überschreibt etwaige HTML-Canonicals)
    { rel: 'canonical', href: canonicalUrl, key: 'canonical' },
    // Self-referential hreflang (Pflicht für sauberes SEO, auch bei nur einer Sprache)
    { rel: 'alternate', hreflang: 'de', href: canonicalUrl, key: 'alt-de' },
    { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl, key: 'alt-xd' },
    // Apple Touch Icon bleibt fest gesetzt
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180', key: 'apple-touch-icon' },
  ];

  return {
    htmlAttrs: { lang: 'de' },
    title: effectiveTitle,
    meta: mergedMeta,
    link: finalLinks,
  };
});
</script>

<style scoped>
.content-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.not-found {
  text-align: center;
  padding: 40px;
}
</style>
