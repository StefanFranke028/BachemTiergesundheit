<template>
  <div v-if="desktop || tabletHorizontal" class="background" style="overflow-y: scroll">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="10">
        <div class="pa-7 d-flex justify-center background-impressum"
             style="overflow: auto; max-height: 60vh; width: 100%; background-color: rgba(0,0,0,0)">
          <div>
            <h1 class="line mt-3">Unsere Leistungen <br> Ganzheitliche Tiergesundheit mit Herz und Verstand</h1>
            <p>
              Im Tiergesundheitszentrum Andrea Bachem in Erftstadt bieten wir ein breites Spektrum an <br>
              ganzheitlichen Behandlungsmethoden für Hunde, Katzen, Pferde und andere Tiere. <br>
              Mit einem tiefen Verständnis für Tierkörper und -seele begleiten wir Ihr <br>
              Tier individuell und achtsam auf seinem Weg zur Gesundheit.
            </p>
            <h2 class="line mt-3">Ganzheitliche Therapiekonzepte für Ihr Tier</h2>
            <p>
              Unsere Leistungen vereinen traditionelles Wissen mit moderner Tierheilkunde. Dabei setzen wir auf
              natürliche, <br>
              sanfte Methoden, die Körper, Geist und Seele Ihres Tieres in Einklang bringen.
            </p>
            <h3 class="line mt-3">Osteopathie & Chiropraktik</h3>
            <p>
              Verspannungen, Lahmheiten oder Verhaltensauffälligkeiten? Mit gezielten osteopathischen und <br>
              chiropraktischen Techniken lösen wir Blockaden und fördern die Beweglichkeit Ihres Tieres.
            </p>
            <h2 class="line mt-3">Zusatzleistungen für Tierhalter</h2>
            <p>
              Neben der Behandlung Ihres Tieres bieten wir umfassende Beratung und begleitende Leistungen <br>
              individuell, verständlich und praxisnah.
            </p>
            <h3 class="line mt-3">Fütterungsberatung</h3>
            <p>
              Die richtige Ernährung ist die Basis für Gesundheit. Wir erstellen individuelle Fütterungskonzepte <br>
              abgestimmt auf Alter, Rasse, Vorerkrankungen und Lebensumstände.
            </p>
            <h2 class="line mt-3">Warum Sie uns vertrauen können</h2>
            <p>
              Fachliche Kompetenz, jahrelange Erfahrung und ein liebevoller Umgang mit Tier und Mensch das zeichnet <br>
              unsere Praxis aus. Wir nehmen uns Zeit, hören zu und gehen individuell auf die Bedürfnisse Ihres Tieres
              ein.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col v-for="page in pages" :key="page.url" cols="4" class="d-flex justify-center">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              class="mx-auto my-12 pa-3"
              width="340"
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
    <v-row class="justify-center mx-0 mt-2" style="overflow-y: scroll">
      <v-col cols="11">
        <v-card class="pa-7"
                style="overflow: auto; max-height: 50vh; width: 100%; background-color: rgba(0,0,0,0.22)">
          <h1 class="line mt-3">Unsere Leistungen – Ganzheitliche Tiergesundheit mit Herz und Verstand</h1>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem in Erftstadt bieten wir ein breites Spektrum an ganzheitlichen
            Behandlungsmethoden für Hunde, Katzen, Pferde und andere Tiere.
          </p>
          <h2 class="line mt-3">Ganzheitliche Therapiekonzepte für Ihr Tier</h2>
          <p>
            Unsere Leistungen vereinen traditionelles Wissen mit moderner Tierheilkunde.
          </p>
        </v-card>
      </v-col>
    </v-row>

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
.background-impressum {
  background-image: url("@/assets/paper.webp");
  background-size: cover;
}
a:focus {
  outline: 2px solid blue;
}

/* Smartphone-Frame um das iframe */
.phone-frame {
  width: 300px;
  height: 540px;
  margin: 0 auto;
  border-radius: 28px;
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
  width: 50px; height: 6px;
  background: #222;
  border-radius: 4px;
}
.phone-iframe {
  width: 375px;
  height: 667px;
  border: 0;
  background: white;
  border-radius: 18px;
  /* Mobilansicht (375px) in 284px breiten Bereich einpassen */
  transform: scale(0.757);
  transform-origin: top left;
  display: block;
  pointer-events: none; /* Klicks an die Karte/den CTA Button delegieren */
}
</style>
