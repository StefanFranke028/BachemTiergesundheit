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

const route = useRoute();
const slug = String(route.params.slug || '');

const { data: entry } = await useAsyncData(`content-${slug}`, async () => {
  try {
    const list = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/page');
    const arr = Array.isArray(list) ? list : (list?.data || []);
    return arr.find(e => e.url === slug) || null;
  } catch (e) {
    console.error('[content/' + slug + '] fetch error:', e?.message || e);
    return null;
  }
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

useHead(() => ({
  title: parsed.value.title || entry.value?.title || 'Inhalt nicht gefunden',
  meta: parsed.value.metas,
  link: [
    ...parsed.value.links.filter(l => (l.rel || '').toLowerCase() !== 'canonical'),
    { rel: 'canonical', href: canonicalUrl },
  ],
}));
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
