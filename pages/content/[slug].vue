<template>
  <div class="content-page">
    <div v-if="entry" v-html="entry.content"/>
    <div v-else class="not-found">
      <h1>Inhalt nicht gefunden</h1>
      <p>Für den Slug "{{ slug }}" wurde kein Eintrag gefunden.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from '#imports';
import { useAsyncData } from '#app';
import { onMounted } from 'vue';

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

function extractFromHtml(html) {
  if (!html) return { title: null, metas: [], links: [] };
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  const metas = [];
  const metaRe = /<meta\b([^>]*)>/gi;
  let m;
  while ((m = metaRe.exec(html)) !== null) {
    const attrs = {};
    const attrRe = /(\w[\w:-]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g;
    let a;
    while ((a = attrRe.exec(m[1])) !== null) {
      attrs[a[1].toLowerCase()] = a[3] ?? a[4] ?? a[5] ?? '';
    }
    if (Object.keys(attrs).length) metas.push(attrs);
  }

  const links = [];
  const linkRe = /<link\b([^>]*)>/gi;
  while ((m = linkRe.exec(html)) !== null) {
    const attrs = {};
    const attrRe = /(\w[\w:-]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g;
    let a;
    while ((a = attrRe.exec(m[1])) !== null) {
      attrs[a[1].toLowerCase()] = a[3] ?? a[4] ?? a[5] ?? '';
    }
    if (Object.keys(attrs).length) links.push(attrs);
  }

  return { title, metas, links };
}

const parsed = computed(() => extractFromHtml(entry.value?.content));

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

  const defaults = [
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

  const mergedMeta = [...parsed.value.metas, ...defaults].map(m => {
    const key = m.name || m.property || m['http-equiv'] || (m.charset ? 'charset' : undefined);
    return key ? { ...m, key } : m;
  });

  return {
    htmlAttrs: { lang: 'de' },
    title: effectiveTitle,
    meta: mergedMeta,
    link: [
      ...parsed.value.links.filter(l => (l.rel || '').toLowerCase() !== 'canonical'),
      { rel: 'canonical', href: canonicalUrl },
    ],
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
