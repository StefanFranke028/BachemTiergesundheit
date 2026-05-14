<template>
  <div v-if="desktop || tabletHorizontal" class="background" style="overflow-y: scroll">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <section class="intro-section">
      <div class="intro-container">
        <span class="intro-eyebrow">Tiergesundheitszentrum Andrea Bachem</span>
        <h1 class="intro-title">
          Ganzheitliche Tiergesundheit mit Herz und Verstand
        </h1>
        <p class="intro-lead">
          Im Tiergesundheitszentrum Andrea Bachem in Erftstadt bieten wir ein breites Spektrum an
          ganzheitlichen Behandlungsmethoden für Hunde, Katzen, Pferde und andere Tiere – individuell,
          achtsam und auf den ganzen Körper bezogen.
        </p>

        <div class="intro-grid">
          <div class="intro-card">
            <div class="intro-card-num">01</div>
            <h3>Osteopathie & Chiropraktik</h3>
            <p>Wir lösen Blockaden, fördern Beweglichkeit und begleiten Ihr Tier zurück in die Balance.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">02</div>
            <h3>Fütterungsberatung</h3>
            <p>Individuelle Konzepte, abgestimmt auf Alter, Rasse, Vorerkrankungen und Lebensumstände.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">03</div>
            <h3>Ganzheitliche Therapie</h3>
            <p>Natürliche Methoden, die Körper, Geist und Seele Ihres Tieres in Einklang bringen.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">04</div>
            <h3>Persönliche Begleitung</h3>
            <p>Wir nehmen uns Zeit, hören zu und gehen auf die Bedürfnisse Ihres Tieres ein.</p>
          </div>
        </div>
      </div>
    </section>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;" dense>
      <v-col v-for="page in pages" :key="page.url" cols="3" class="d-flex justify-center pa-1">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              class="mx-auto my-4 pa-2"
              width="300"
              style="background-color: transparent; box-shadow: none;"
          >
            <div class="phone-frame">
              <iframe
                  :src="`/content/${page.url}`"
                  :title="page.title"
                  loading="lazy"
                  class="phone-iframe"
              />
            </div>

            <v-card-text>
              <p itemprop="name" class="text-black text-center" style="font-size: 18px; font-weight: 600;">
                {{ page.title }}
              </p>
            </v-card-text>

            <v-divider class="mx-8 opacity-80"></v-divider>

            <v-row style="width: 100%;" class="ma-0">
              <v-col cols="12" class="d-flex justify-center">
                <NuxtLink :to="`/content/${page.url}`"
                          :title="`Mehr erfahren: ${page.title}`">
                  <v-btn class="mt-5"
                         style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                    Mehr erfahren ›
                  </v-btn>
                </NuxtLink>
              </v-col>
            </v-row>
          </v-card>
        </article>
      </v-col>
    </v-row>
  </div>

  <div v-if="mobile || tablet" class="background" style="padding-top: 20px;overflow-y: scroll">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <section class="intro-section intro-section--mobile">
      <div class="intro-container">
        <span class="intro-eyebrow">Tiergesundheitszentrum Andrea Bachem</span>
        <h1 class="intro-title">
          Ganzheitlich, achtsam, individuell
        </h1>
        <p class="intro-lead">
          Osteopathie, Chiropraktik, Fütterungsberatung – ganzheitliche Methoden für Hund, Katze und Pferd
          im Tiergesundheitszentrum Erftstadt.
        </p>
      </div>
    </section>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col v-for="page in pages" :key="page.url" cols="11" class="d-flex justify-center">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              class="mx-auto my-8 pa-3"
              width="320"
              style="background-color: transparent; box-shadow: none;"
          >
            <div class="phone-frame">
              <iframe
                  :src="`/content/${page.url}`"
                  :title="page.title"
                  loading="lazy"
                  class="phone-iframe"
              />
            </div>

            <v-card-text>
              <p itemprop="name" class="text-black text-center mt-3" style="font-size: 16px; font-weight: 600;">
                {{ page.title }}
              </p>
            </v-card-text>

            <v-divider class="mx-8 opacity-80"></v-divider>

            <v-row style="width: 100%;" class="ma-0">
              <v-col cols="12" class="d-flex justify-center">
                <NuxtLink :to="`/content/${page.url}`"
                          :title="`Mehr erfahren: ${page.title}`">
                  <v-btn class="mt-5"
                         style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                    Mehr erfahren ›
                  </v-btn>
                </NuxtLink>
              </v-col>
            </v-row>
          </v-card>
        </article>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { data: pages } = await useAsyncData('page-meta-all', async () => {
  try {
    const res = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/page/meta/all');
    return Array.isArray(res) ? res : (res?.data || []);
  } catch (e) {
    console.error('[service] GET /auth/page/meta/all error:', e?.message || e);
    return [];
  }
});

useHead(() => ({
  htmlAttrs: { lang: 'de' },
  title: 'Leistungen – Tiergesundheit mit Herz Andrea Bachem',
  meta: [
    {
      name: 'description',
      content: 'Entdecken Sie die ganzheitlichen Leistungen im Tiergesundheitszentrum Andrea Bachem: Osteopathie, Chiropraktik, Fütterungsberatung & mehr für Ihr Tier.'
    },
    {
      name: 'keywords',
      content: 'Tiergesundheit Leistungen, Tierosteopathie, Chiropraktik Hund Pferd, Tierheilpraktikerin Erftstadt, Andrea Bachem, Tierberatung, Fütterung Tier'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Andrea Bachem' },
    { property: 'og:title', content: 'Service | Tiergesundheitszentrum Andrea Bachem – Erftstadt' },
    { property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
    {
      property: 'og:description',
      content: 'Ganzheitliche Tiergesundheit durch fundierte Methoden: Jetzt mehr über unsere Leistungen für Hund, Katze & Pferd erfahren.'
    },
    { property: 'og:url', content: 'https://tier-gesundheitszentrum.com/service' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://tier-gesundheitszentrum.com/service' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Unsere Leistungen – Tiergesundheitszentrum Andrea Bachem",
        "itemListElement": (pages.value || []).map((page, index) => ({
          "@type": "Service",
          "position": index + 1,
          "name": page.title,
          "url": `https://tier-gesundheitszentrum.com/content/${page.url}`,
          "provider": {
            "@type": "Organization",
            "name": "Tiergesundheitszentrum Andrea Bachem"
          },
          "areaServed": { "@type": "Country", "name": "Deutschland" }
        }))
      })
    }
  ]
}));
</script>

<script>
import { useScreenStore } from "~/stores/screen.js";

export default {
  name: "service",
  data() {
    return { loading: false };
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
.line {
  font-family: "Montserrat", sans-serif;
  color: rgba(0, 0, 0, 0.86);
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
p {
  color: rgba(0, 0, 0, 0.86);
}
/* INTRO-SECTION */
.intro-section {
  padding: 80px 24px 40px;
  color: #fff;
}
.intro-section--mobile {
  padding: 40px 16px 20px;
}
.intro-container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
.intro-eyebrow {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 2px;
  margin-bottom: 28px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.25);
}
.intro-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(2.2rem, 4.2vw, 3.4rem);
  line-height: 1.2;
  color: #fff;
  margin: 0 auto 20px;
  max-width: 900px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
}
.intro-title-accent {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: #ffffff;
  background: rgb(0, 130, 194);
  padding: 6px 18px;
  border-radius: 4px;
  margin-top: 16px;
  font-size: 0.7em;
  display: inline-block;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}
.intro-lead {
  font-family: "Montserrat", sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.8);
  max-width: 720px;
  margin: 0 auto 48px;
}
.intro-section--mobile .intro-lead {
  font-size: 0.95rem;
  margin-bottom: 16px;
}
.intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 32px;
}
.intro-card {
  text-align: left;
  padding: 24px 24px 26px;
  border-left: 3px solid rgb(0, 130, 194);
  background: rgba(255, 255, 255, 0.92);
  border-radius: 6px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}
.intro-card:hover {
  background: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
.intro-card-num {
  font-family: "Montserrat", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgb(0, 130, 194);
  margin-bottom: 10px;
}
.intro-card h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #1a1a1a;
  margin: 0 0 10px;
}
.intro-card p {
  font-family: "Montserrat", sans-serif;
  font-size: 0.92rem;
  line-height: 1.65;
  color: #444;
  margin: 0;
}
a:focus {
  outline: 2px solid blue;
}

/* Smartphone-Frame um das iframe */
.phone-frame {
  width: 260px;
  height: 470px;
  margin: 0 auto;
  border-radius: 24px;
  background: #111;
  padding: 10px 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
}
.phone-frame::before {
  content: "";
  position: absolute;
  top: 6px; left: 50%; transform: translateX(-50%);
  width: 45px; height: 5px;
  background: #222;
  border-radius: 4px;
}
.phone-iframe {
  width: 375px;
  height: 667px;
  border: 0;
  background: white;
  border-radius: 16px;
  /* Mobilansicht (375px) in 244px breiten Bereich einpassen (260 - 16 padding) */
  transform: scale(0.651);
  transform-origin: top left;
  display: block;
  pointer-events: none;
}
</style>
