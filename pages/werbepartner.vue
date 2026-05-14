<template>
  <div class="background osteo-page">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent v-if="desktop || tabletHorizontal"></HeaderComponent>
        <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
      </v-col>
    </v-row>

    <!-- HERO -->
    <section class="osteo-hero">
      <div class="osteo-container">
        <div class="osteo-hero-content">
          <span class="osteo-eyebrow">Werbepartner & Kooperationen</span>
          <h1 class="osteo-title">
            Unsere Werbepartner
            <span class="osteo-title-accent">Starke Kooperationen für Tiergesundheit</span>
          </h1>
          <p class="osteo-lead">
            Im Tiergesundheitszentrum Andrea Bachem arbeiten wir mit ausgewählten Partnern zusammen,
            die unsere Werte teilen: Qualität, Vertrauen und das Wohl des Tieres.
          </p>
          <p class="osteo-lead">
            Ob Futter, Zubehör oder fachliche Zusammenarbeit – gemeinsam schaffen wir ganzheitliche
            Lösungen für Hund und Pferd.
          </p>
        </div>
        <div class="osteo-hero-images">
          <div class="osteo-image-card">
            <v-img
                src="~/assets/bilderPages/werbelinks.webp"
                alt="Andrea Bachem mit einem Hund auf dem Arm"
                cover
                class="osteo-img"
            />
          </div>
          <div class="osteo-image-card osteo-image-card--shift">
            <v-img
                src="~/assets/bilderPages/werberechts.webp"
                alt="Vertrauensvolle Zusammenarbeit – Andrea Bachem"
                cover
                class="osteo-img"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="osteo-content">
      <div class="osteo-container">
        <div class="osteo-text-block">
          <h2 class="osteo-h2">Regionale Partner – gemeinsame Werte</h2>
          <p>
            Unsere Werbepartner stammen vor allem aus der Region Erftstadt und stehen für nachhaltige,
            tierfreundliche Angebote. Durch diese Kooperationen ergänzen wir unsere Leistungen
            sinnvoll und stärken das Netzwerk rund um Tiergesundheit.
          </p>
        </div>

        <!-- PARTNER GRID -->
        <div class="partner-section">
          <div class="partner-section-header">
            <span class="osteo-eyebrow">Unser Netzwerk</span>
            <h2 class="osteo-faq-title">Mit denen wir zusammenarbeiten</h2>
          </div>

          <div class="partner-grid">
            <a
                v-for="partner in werbepartner"
                :key="partner.name"
                :href="partner.url"
                :title="partner.name ? `Werbepartner: ${partner.name}` : 'Werbepartner'"
                :target="partner.target || '_blank'"
                :rel="partner.rel || 'noopener'"
                class="partner-card-link"
            >
              <div class="partner-card">
                <div class="partner-image-wrap">
                  <img :src="partner.image" :alt="partner.name" class="partner-image" loading="lazy"/>
                </div>
                <div class="partner-info">
                  <h3 class="partner-name">{{ partner.name }}</h3>
                  <p class="partner-desc">{{ partner.description }}</p>
                </div>
                <div class="partner-cta">Zum Partner ›</div>
              </div>
            </a>
          </div>
        </div>

        <div class="osteo-text-block">
          <h2 class="osteo-h2">Interesse an einer Zusammenarbeit?</h2>
          <p>
            Wenn Sie Werbepartner werden möchten, freuen wir uns über Ihre Anfrage. Gemeinsam können
            wir das Netzwerk rund um Tiergesundheit weiter ausbauen und mehr Tieren ein gesundes,
            glückliches Leben ermöglichen.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="osteo-cta">
      <div class="osteo-container">
        <div class="osteo-cta-card">
          <div>
            <h2 class="osteo-cta-title">Werden Sie Werbepartner</h2>
            <p class="osteo-cta-text">
              Sie haben ein Produkt oder eine Leistung rund um Tiergesundheit und möchten Teil unseres
              Netzwerks werden? Wir freuen uns auf Ihre Anfrage.
            </p>
          </div>
          <NuxtLink to="/" class="osteo-cta-btn" title="Kontakt aufnehmen">
            Kontakt aufnehmen ›
          </NuxtLink>
        </div>
      </div>
    </section>

    <FooterComponent/>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'de' },
  title: 'Werbepartner Andrea Bachem Tiergesundheitszentrum',
  link: [
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap' },
    { rel: 'canonical', href: 'https://tier-gesundheitszentrum.com/werbepartner' },
  ],
  meta: [
    { name: 'description', content: 'Entdecken Sie unsere starken Werbepartner im Bereich Tiergesundheit. Gemeinsam mit regionalen Unternehmen stärken wir das Wohl von Hund und Pferd.' },
    { name: 'keywords', content: 'Werbepartner Tiergesundheit, Kooperation Tiertherapie, Andrea Bachem Partner, Erftstadt Tiergesundheitszentrum, Tierwohl Zusammenarbeit, Hund Pferd Partnernetzwerk' },
    { name: 'author', content: 'Andrea Bachem' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Werbepartner | Andrea Bachem – Tiergesundheitszentrum Erftstadt' },
    { property: 'og:description', content: 'Gemeinsam stark für Tiergesundheit: Lernen Sie die Werbepartner von Andrea Bachem in Erftstadt kennen – für ganzheitliche Versorgung von Hund & Pferd.' },
    { property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
    { property: 'og:url', content: 'https://tier-gesundheitszentrum.com/werbepartner' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Werbepartner | Andrea Bachem – Tiergesundheitszentrum Erftstadt' },
    { name: 'twitter:description', content: 'Werbepartner & Kooperationen des Tiergesundheitszentrums Andrea Bachem in Erftstadt.' },
    { name: 'twitter:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tiergesundheitszentrum Andrea Bachem",
        "url": "https://tier-gesundheitszentrum.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Erftstadt", "addressCountry": "DE" },
        "description": "Kooperationen und Werbepartner im Bereich Tiergesundheit für Hund und Pferd."
      })
    }
  ]
});
</script>

<script>
import { useScreenStore } from "~/stores/screen.js";

export default {
  name: "werbepartner",
  data() {
    return {
      werbepartner: [
        {
          name: 'Tierfutter Andera Bachem',
          url: 'https://gesundesfutterandreabachem.de/',
          description: 'Gesundes Futter | Andrea Bachem',
          image: 'https://gesundesfutterandreabachem.de/.cm4all/mediadb/.Andrea%20Bachem%20%288%29.png/picture-200',
          rel: 'noopener',
        },
        {
          name: 'Tierseminare Andrea Bachem',
          url: 'https://tierseminare.com/',
          description: 'Seminare zur Tiergesundheit | Andrea Bachem',
          image: 'https://tierseminare.com/assets/images/n/ed2fe928-8dbe-4598-b975-93fa7e09beaa-n5s42ktgf6qxfrv.jpeg',
          rel: 'noopener',
        },
        {
          name: 'Rehatechnik für Tiere',
          url: 'https://www.rehatechnik-tiere.de/index.html',
          description: 'Rehatechnik für Tiere, Hunderollstühle, Tierprothesen, Orthesen, Bandagen',
          image: 'https://www.rehatechnik-tiere.de/images/logo.png',
          rel: 'noopener',
        }
      ]
    };
  },
  computed: {
    wide() { return useScreenStore().wide; },
    desktop() { return useScreenStore().desktop; },
    mobile() { return useScreenStore().mobile; },
    tablet() { return useScreenStore().tablet; },
    tabletHorizontal() { return useScreenStore().tabletHorizontal; },
  },
}
</script>

<style scoped>
.osteo-page { min-height: 100vh; overflow-y: auto; }
.osteo-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* HERO */
.osteo-hero { padding: 40px 0 60px; }
.osteo-hero .osteo-container {
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center;
}
.osteo-hero-content { color: #fff; }
.osteo-eyebrow {
  display: inline-block; font-family: "Montserrat", sans-serif;
  font-size: 0.82rem; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: #fff;
  padding: 8px 18px; border: 1px solid rgba(255,255,255,0.55);
  border-radius: 2px; margin-bottom: 24px;
 background: rgba(0,0,0,0.25);
}
.osteo-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: clamp(2rem, 3.6vw, 3rem); line-height: 1.18; color: #fff;
  margin: 0 0 18px;
}
.osteo-title-accent {
  display: block; font-weight: 400; font-style: italic;
  font-size: 0.7em; color: rgb(0, 130, 194); margin-top: 10px;
}
.osteo-lead {
  font-family: "Montserrat", sans-serif; font-size: 1.05rem;
  line-height: 1.75; color: rgba(255,255,255,0.88);
  max-width: 620px; margin: 0 0 14px;
}
.osteo-hero-images { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.osteo-image-card {
  border-radius: 8px; overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.5); aspect-ratio: 3 / 4;
}
.osteo-image-card--shift { transform: translateY(36px); }
.osteo-img, .osteo-image-card :deep(img) {
  width: 100%; height: 100%; object-fit: cover; display: block;
}

/* CONTENT */
.osteo-content { padding: 40px 0 100px; }
.osteo-text-block {
  background: rgba(255,255,255,0.95);
  border-left: 3px solid rgb(0, 130, 194);
  border-radius: 6px; padding: 28px 32px;
  margin: 0 auto 24px; max-width: 980px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.25);
  font-family: "Montserrat", sans-serif; color: #2c2a2a;
}
.osteo-h2 {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: 1.4rem; color: #1a1a1a; margin: 0 0 14px; line-height: 1.3;
}
.osteo-text-block p {
  font-family: "Montserrat", sans-serif; font-size: 0.98rem;
  line-height: 1.75; color: #2c2a2a; margin: 0 0 12px;
}
.osteo-text-block p:last-child { margin-bottom: 0; }

/* PARTNER SECTION */
.partner-section { max-width: 1100px; margin: 40px auto 24px; }
.partner-section-header { text-align: center; color: #fff; margin-bottom: 28px; }
.osteo-faq-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: clamp(1.6rem, 2.6vw, 2rem); color: #fff;
  margin: 14px 0 0;
}
.partner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  align-items: stretch;
}
.partner-card-link { text-decoration: none; color: inherit; display: flex; height: 100%; }
.partner-card {
  background: rgba(255,255,255,0.96);
  border-radius: 8px;
  border-left: 3px solid rgb(0, 130, 194);
  padding: 24px 22px;
  display: flex; flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 18px rgba(0,0,0,0.25);
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}
.partner-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 26px rgba(0,0,0,0.35);
  background: #ffffff;
}
.partner-image-wrap {
  height: 110px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px;
}
.partner-image {
  max-height: 110px; max-width: 100%;
  object-fit: contain;
}
.partner-info { flex: 1; }
.partner-name {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: 1.05rem; color: #1a1a1a; margin: 0 0 6px;
  text-align: center;
}
.partner-desc {
  font-family: "Montserrat", sans-serif; font-size: 0.9rem;
  line-height: 1.6; color: #555; text-align: center; margin: 0;
}
.partner-cta {
  margin-top: 14px;
  text-align: center;
  font-family: "Montserrat", sans-serif; font-size: 0.9rem; font-weight: 600;
  color: rgb(0, 130, 194);
  padding-top: 14px;
  border-top: 1px solid rgba(0,0,0,0.08);
}

/* CTA */
.osteo-cta { padding: 20px 0 80px; }
.osteo-cta-card {
  max-width: 980px; margin: 0 auto;
  background: linear-gradient(135deg, rgb(0, 130, 194) 0%, rgb(0, 100, 160) 100%);
  border-radius: 8px; padding: 36px 40px;
  display: flex; align-items: center; justify-content: space-between; gap: 28px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.35);
}
.osteo-cta-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: 1.6rem; color: #fff; margin: 0 0 8px;
}
.osteo-cta-text {
  font-family: "Montserrat", sans-serif; font-size: 0.98rem;
  line-height: 1.65; color: rgba(255,255,255,0.92); margin: 0; max-width: 560px;
}
.osteo-cta-btn {
  display: inline-block; background: #fff; color: rgb(0, 130, 194);
  font-family: "Montserrat", sans-serif; font-weight: 600; font-size: 1rem;
  padding: 14px 26px; border-radius: 30px; text-decoration: none; white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.18);
  transition: transform 0.15s, box-shadow 0.15s;
}
.osteo-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(0,0,0,0.25); }

@media (max-width: 1100px) {
  .osteo-hero .osteo-container { grid-template-columns: 1fr; gap: 32px; }
  .osteo-hero-images { max-width: 520px; margin: 0 auto; }
}
@media (max-width: 720px) {
  .osteo-hero { padding: 24px 0 40px; }
  .osteo-content { padding: 24px 0 60px; }
  .osteo-container { padding: 0 16px; }
  .osteo-hero .osteo-container { gap: 24px; }
  .osteo-title { font-size: 1.8rem; line-height: 1.2; }
  .osteo-lead { font-size: 0.98rem; }
  .osteo-image-card--shift { transform: none; }
  .osteo-text-block { padding: 22px 20px; }
  .osteo-h2 { font-size: 1.2rem; }
  .partner-grid { grid-template-columns: 1fr; }
  .osteo-cta-card { flex-direction: column; text-align: center; padding: 28px 22px; gap: 20px; }
  .osteo-cta-title { font-size: 1.35rem; }
  .osteo-cta-text { font-size: 0.95rem; }
}

a { text-decoration: none; color: inherit; cursor: pointer; }
a:focus { outline: 2px solid rgb(0, 130, 194); }
</style>
