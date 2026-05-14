<template>
  <div class="background osteo-page">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent v-if="desktop || tabletHorizontal"></HeaderComponent>
        <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
      </v-col>
    </v-row>

    <article itemscope itemtype="https://schema.org/Article">
      <!-- HERO -->
      <section class="osteo-hero">
        <div class="osteo-container osteo-hero-grid">
          <div class="osteo-hero-content">
            <span class="osteo-eyebrow">Tiergesundheit · Bericht</span>
            <h1 itemprop="headline" class="osteo-title">
              {{ stadt?.überschrift }}
              <span v-if="stadt?.unterUeberschrift" class="osteo-title-accent">
                {{ stadt.unterUeberschrift }}
              </span>
            </h1>
            <p v-if="stadt?.miniUnterUeberschrift" itemprop="description" class="osteo-lead">
              {{ stadt.miniUnterUeberschrift }}
            </p>
          </div>
          <div v-if="stadt?.image" class="osteo-hero-image">
            <img
                :src="stadt.image"
                :alt="stadt?.unterUeberschrift || stadt?.überschrift || ''"
                itemprop="image"
                loading="lazy"
            />
          </div>
        </div>
      </section>

      <!-- CONTENT -->
      <section class="osteo-content">
        <div class="osteo-container">
          <div class="osteo-text-block">
            <div
                itemprop="articleBody"
                class="article-html"
                v-html="stadt?.text"
            />
          </div>

          <div v-if="stadt?.backlinkUrl" class="osteo-text-block osteo-backlink">
            <a
                :href="stadt.backlinkUrl"
                :title="stadt.backlinkName ? `Mehr Informationen: ${stadt.backlinkName}` : 'Mehr Informationen'"
                target="_blank"
                rel="noopener"
                class="backlink-card"
            >
              <Icon icon="mdi:open-in-new" class="backlink-icon"/>
              <div>
                <span class="backlink-label">Mehr erfahren</span>
                <span class="backlink-name">{{ stadt.backlinkName || stadt.backlinkUrl }}</span>
              </div>
              <span class="backlink-arrow">›</span>
            </a>
          </div>
        </div>
      </section>
    </article>

    <!-- CTA -->
    <section class="osteo-cta">
      <div class="osteo-container">
        <div class="osteo-cta-card">
          <div>
            <h2 class="osteo-cta-title">Mehr über ganzheitliche Tiergesundheit?</h2>
            <p class="osteo-cta-text">
              Entdecke unsere Leistungen oder vereinbare direkt einen Termin – wir nehmen uns Zeit
              für dich und dein Tier.
            </p>
          </div>
          <NuxtLink to="/" class="osteo-cta-btn" title="Termin vereinbaren">
            Termin vereinbaren ›
          </NuxtLink>
        </div>
      </div>
    </section>

    <FooterComponent/>
  </div>
</template>


<script setup>
import { navigateTo, useRoute } from '#imports';
import { useAsyncData } from '#app';

const route = useRoute();
const prefix = 'tiergesundheit';
const city = String(route.params.stadt || '');

if (!city.startsWith(prefix)) {
  navigateTo('/');
}

const stadtparam = city.slice(prefix.length + 1);

const { data: stadtData } = await useAsyncData(`stadt-${stadtparam}`, () =>
    $fetch(`https://tier-gesundheitszentrum.com:8080/auth/stadt/name/${stadtparam}`)
);

const stadt = computed(() => stadtData.value || null);
const pageUrl = computed(() =>
    `https://tier-gesundheitszentrum.com/${encodeURI(String(route.params.stadt || ''))}`
);

const ogImage = computed(() => {
  const img = stadt.value?.image || '';
  return img.startsWith('http')
      ? img
      : 'https://tier-gesundheitszentrum.com/favicon.png';
});

useHead(() => {
  const baseTitle = stadt.value?.überschrift || '';
  const fullTitle = baseTitle.length < 30 ? `${baseTitle} – Tiergesundheitszentrum` : baseTitle;
  const clampedTitle = fullTitle.length > 64 ? fullTitle.slice(0, 64).trimEnd() : fullTitle;
  const desc = stadt.value?.miniUnterUeberschrift || 'Erfahren Sie mehr über ganzheitliche Tiergesundheit in Ihrer Stadt.';

  return {
    htmlAttrs: { lang: 'de' },
    title: clampedTitle,
    meta: [
      { name: 'description', content: desc },
      { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'author', content: 'Andrea Bachem' },
      { name: 'publisher', content: 'Andrea Bachem' },
      { property: 'og:title', content: clampedTitle },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: ogImage.value },
      { property: 'og:url', content: pageUrl.value },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: clampedTitle },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: ogImage.value },
    ],
    link: [
      { rel: 'canonical', href: pageUrl.value },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap' },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": clampedTitle,
          "description": desc,
          "image": [ogImage.value],
          "datePublished": "2025-07-10",
          "dateModified": "2025-07-10",
          "author": { "@type": "Person", "name": "Andrea Bachem" },
          "publisher": {
            "@type": "Organization",
            "name": "Tiergesundheitszentrum Andrea Bachem",
            "logo": { "@type": "ImageObject", "url": "https://tier-gesundheitszentrum.com/logo.png" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl.value }
        })
      }
    ]
  };
});
</script>


<script>
import { useScreenStore } from "~/stores/screen.js";
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
  computed: {
    wide() { return useScreenStore().wide; },
    desktop() { return useScreenStore().desktop; },
    mobile() { return useScreenStore().mobile; },
    tablet() { return useScreenStore().tablet; },
    tabletHorizontal() { return useScreenStore().tabletHorizontal; },
  },
};
</script>


<style scoped>
.osteo-page { min-height: 100vh; overflow-y: auto; }
.osteo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* HERO */
.osteo-hero { padding: 40px 0 60px; }
.osteo-hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}
.osteo-hero-content { color: #fff; }
.osteo-eyebrow {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.82rem; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: #fff;
  padding: 8px 18px;
  border: 1px solid rgba(255,255,255,0.55);
  border-radius: 2px;
  margin-bottom: 24px;

  background: rgba(0,0,0,0.25);
}
.osteo-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.18;
  color: #fff;
  margin: 0 0 18px;

}
.osteo-title-accent {
  display: block;
  font-weight: 400;
  font-style: italic;
  font-size: 0.7em;
  color: rgb(0, 130, 194);
  margin-top: 10px;
}
.osteo-lead {
  font-family: "Montserrat", sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.9);
  max-width: 620px;
  margin: 0 0 14px;
}
.osteo-hero-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  max-width: 380px;
  width: 100%;
  margin: 0 auto;
  line-height: 0;
}
.osteo-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* CONTENT */
.osteo-content { padding: 30px 0 60px; }
.osteo-text-block {
  background: rgba(255,255,255,0.95);
  border-left: 3px solid rgb(0, 130, 194);
  border-radius: 6px;
  padding: 32px 36px;
  margin: 0 auto 20px;
  max-width: 980px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.25);
  font-family: "Montserrat", sans-serif;
  color: #2c2a2a;
}
.article-html {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #2c2a2a;
  text-align: justify;
}
.article-html :deep(h1),
.article-html :deep(h2),
.article-html :deep(h3),
.article-html :deep(h4) {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #1a1a1a;
  margin: 22px 0 12px;
  line-height: 1.3;
}
.article-html :deep(h1) { font-size: 1.6rem; }
.article-html :deep(h2) { font-size: 1.35rem; }
.article-html :deep(h3) { font-size: 1.15rem; }
.article-html :deep(p) {
  margin: 0 0 14px;
  line-height: 1.8;
}
.article-html :deep(ul),
.article-html :deep(ol) {
  padding-left: 22px;
  margin: 0 0 14px;
}
.article-html :deep(li) {
  margin-bottom: 6px;
  line-height: 1.7;
}
.article-html :deep(a) {
  color: rgb(0, 130, 194);
  font-weight: 600;
  text-decoration: underline;
}
.article-html :deep(a:hover) { color: rgb(0, 100, 160); }
.article-html :deep(strong) { color: rgb(0, 130, 194); }
.article-html :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 14px 0;
}

/* BACKLINK */
.osteo-backlink { padding: 0 !important; background: transparent; box-shadow: none; border-left: none; }
.backlink-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 28px;
  background: linear-gradient(135deg, rgb(0, 130, 194) 0%, rgb(0, 100, 160) 100%);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.3);
  transition: transform 0.15s, box-shadow 0.15s;
}
.backlink-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
}
.backlink-icon { font-size: 28px; flex-shrink: 0; }
.backlink-card > div { flex: 1; display: flex; flex-direction: column; }
.backlink-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.85;
}
.backlink-name {
  font-size: 1.05rem;
  font-weight: 600;
  margin-top: 4px;
  word-break: break-word;
}
.backlink-arrow {
  font-size: 1.6rem;
  font-weight: 300;
  flex-shrink: 0;
}

/* CTA */
.osteo-cta { padding: 20px 0 60px; }
.osteo-cta-card {
  max-width: 980px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgb(0, 130, 194) 0%, rgb(0, 100, 160) 100%);
  border-radius: 8px;
  padding: 36px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.35);
}
.osteo-cta-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
  margin: 0 0 8px;
}
.osteo-cta-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.98rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.92);
  margin: 0;
  max-width: 560px;
}
.osteo-cta-btn {
  display: inline-block;
  background: #fff;
  color: rgb(0, 130, 194);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 14px 26px;
  border-radius: 30px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  transition: transform 0.15s, box-shadow 0.15s;
}
.osteo-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

@media (max-width: 1100px) {
  .osteo-hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .osteo-hero-image { max-width: 320px; }
}
@media (max-width: 640px) {
  .osteo-hero { padding: 24px 0 36px; }
  .osteo-content { padding: 20px 0 40px; }
  .osteo-container { padding: 0 16px; }
  .osteo-title { font-size: 1.7rem; line-height: 1.2; }
  .osteo-lead { font-size: 0.96rem; }
  .osteo-text-block { padding: 22px 18px; }
  .article-html :deep(h2) { font-size: 1.2rem; }
  .article-html :deep(h3) { font-size: 1.05rem; }
  .backlink-card {
    flex-wrap: wrap;
    padding: 18px 20px;
    gap: 12px;
  }
  .backlink-name { font-size: 0.96rem; }
  .osteo-cta-card {
    flex-direction: column;
    text-align: center;
    padding: 28px 22px;
    gap: 20px;
  }
  .osteo-cta-title { font-size: 1.3rem; }
}

a { text-decoration: none; color: inherit; cursor: pointer; }
a:focus { outline: 2px solid rgb(0, 130, 194); }
</style>
