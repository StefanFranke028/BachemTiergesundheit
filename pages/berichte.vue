<template>
  <div v-if="desktop || tabletHorizontal"  class="background" style="overflow-y: scroll">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <section class="intro-section">
      <div class="intro-container">
        <span class="intro-eyebrow">Praxiseinblicke</span>
        <h1 class="intro-title">
          Berichte aus der Praxis
        </h1>
        <p class="intro-lead">
          Ehrliche Einblicke in ganzheitliche Tierbehandlungen, Erfahrungsberichte unserer Kunden
          und besondere Ereignisse aus dem Tiergesundheitszentrum Andrea Bachem in Erftstadt.
        </p>

        <div class="intro-grid">
          <div class="intro-card">
            <div class="intro-card-num">01</div>
            <h3>Ganzheitliche Therapie</h3>
            <p>Homöopathie, Mykotherapie, Akupunktur und energetische Heilmethoden – wie individuelle Pläne wirken.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">02</div>
            <h3>Erfahrungsberichte</h3>
            <p>Authentische Stimmen unserer Tierhalter: Vertrauen, Achtsamkeit und nachhaltige Tiergesundheit.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">03</div>
            <h3>Workshops</h3>
            <p>Fortbildungen zu Fütterung, Verhalten und alternativen Heilmethoden – fachlich fundiert, verständlich.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">04</div>
            <h3>Transparenz</h3>
            <p>Wir zeigen, wie wir arbeiten – damit Sie wissen, worauf Sie sich verlassen können.</p>
          </div>
        </div>
      </div>
    </section>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col v-for="preis in produkteArray" :key="preis.id" cols="3" class="d-flex justify-center pa-1">
        <article itemscope itemtype="https://schema.org/Article">
          <v-card
              class="mx-auto my-4 pa-2 pb-4"
              width="300"
              style="background-color: transparent; box-shadow: none;"
          >
            <div class="phone-frame">
              <div class="phone-screen">
                <v-img
                    loading="lazy"
                    :src="preis.image"
                    cover
                    class="phone-image"
                    :alt="preis.überschrift"
                    itemprop="image"
                />
                <div class="phone-content">
                  <p itemprop="name" class="phone-title">
                    {{ preis.überschrift }}
                  </p>
                  <p class="phone-text" itemprop="description">
                    {{ preis.unterUeberschrift }}
                  </p>
                </div>
              </div>
            </div>

            <v-row style="width: 100%;" class="ma-0">
              <v-col cols="12" class="d-flex justify-center">
                <NuxtLink :to="'/tiergesundheit-' + preis.name"
                          :title="preis.überschrift ? `Zum Bericht: ${preis.überschrift}` : 'Zum Bericht'">
                  <v-btn class="mt-5"
                         style="background-color: rgb(0, 130, 194); color: white; border-radius: 20px">
                    Zum Bericht ›
                  </v-btn>
                </NuxtLink>
              </v-col>
            </v-row>
          </v-card>
        </article>
      </v-col>
    </v-row>

    <FooterComponent/>
  </div>
  <div v-if="mobile || tablet" class="background" style="padding-top: 20px;overflow-y: scroll">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <section class="intro-section intro-section--mobile">
      <div class="intro-container">
        <span class="intro-eyebrow">Praxiseinblicke</span>
        <h1 class="intro-title">
          Berichte aus der Praxis
        </h1>
        <p class="intro-lead">
          Ehrliche Einblicke in ganzheitliche Tierbehandlungen, Erfahrungen unserer Tierhalter und
          besondere Momente aus dem Tiergesundheitszentrum Andrea Bachem.
        </p>
      </div>
    </section>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col v-for="preis in produkteArray" :key="preis.id" cols="11" class="d-flex justify-center">
        <article itemscope itemtype="https://schema.org/Article">
          <v-card
              class="mx-auto my-8 pa-3 pb-4"
              width="320"
              style="background-color: transparent; box-shadow: none;"
          >
            <div class="phone-frame">
              <div class="phone-screen">
                <v-img
                    loading="lazy"
                    :src="preis.image"
                    cover
                    class="phone-image"
                    :alt="preis.überschrift"
                    itemprop="image"
                />
                <div class="phone-content">
                  <p itemprop="name" class="phone-title">
                    {{ preis.überschrift }}
                  </p>
                  <p class="phone-text" itemprop="description">
                    {{ preis.unterUeberschrift }}
                  </p>
                </div>
              </div>
            </div>

            <v-row style="width: 100%;" class="ma-0">
              <v-col cols="12" class="d-flex justify-center">
                <NuxtLink :to="'/tiergesundheit-' + preis.name"
                          :title="preis.überschrift ? `Zum Bericht: ${preis.überschrift}` : 'Zum Bericht'">
                  <v-btn class="mt-5"
                         style="background-color: rgb(0, 130, 194); color: white; border-radius: 20px">
                    Zum Bericht ›
                  </v-btn>
                </NuxtLink>
              </v-col>
            </v-row>
          </v-card>
        </article>
      </v-col>
    </v-row>

    <FooterComponent/>
  </div>
</template>

<script setup>
const { data: produkteArray } = await useAsyncData('produkte', async () => {
  const res = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/stadt');
  return res.map((item) => ({
    ...item,
    bild: `data:image/jpeg;base64,${item.bild}`
  }));
});
console.log("Produkte Array:", produkteArray.value);

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Berichte aus der Praxis Tiergesundheitszentrum Erftstadt',
  meta: [
    {
      name: 'description',
      content:
          'Erfahren Sie in unseren Praxisberichten mehr über Tierbehandlungen, Workshops & Erfahrungen rund um Tiergesundheit. von Andrea Bachem, Tierheilpraktikerin in Erftstadt.'
    },
    {
      name: 'keywords',
      content:
          'Tiergesundheit Berichte, Tierosteopathie Erfahrungen, Hund Behandlung, Pferde Chiropraktik, Andrea Bachem, Tierheilpraktikerin Erftstadt, Tierseminare, Tierheilung'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'author',
      content: 'Andrea Bachem'
    },
    {
      property: 'og:title',
      content: 'Berichte aus der Praxis | Andrea Bachem – Tiergesundheitszentrum Erftstadt'
    },
    {
      property: 'og:description',
      content:
          'Erhalten Sie ehrliche Einblicke in ganzheitliche Tierbehandlungen und Seminare bei Andrea Bachem. Lesen Sie echte Erfahrungen aus dem Praxisalltag.'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/berichte'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:image',
      content: 'https://tier-gesundheitszentrum.com/favicon.png'
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Berichte aus der Praxis | Andrea Bachem – Tiergesundheitszentrum Erftstadt' },
    { name: 'twitter:description', content: 'Erhalten Sie ehrliche Einblicke in ganzheitliche Tierbehandlungen und Seminare bei Andrea Bachem.' },
    { name: 'twitter:image', content: 'https://tier-gesundheitszentrum.com/favicon.png' },
    { name: 'publisher', content: 'Andrea Bachem' },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/berichte'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap'
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Praxisberichte Tiergesundheit",
        "itemListElement": produkteArray.value.map((bericht, index) => ({
          "@type": "Article",
          "position": index + 1,
          "headline": bericht.überschrift,
          "description": bericht.unterUeberschrift,
          "url": `https://tier-gesundheitszentrum.com/tiergesundheit-${bericht.name}`,
          "author": {
            "@type": "Person",
            "name": "Andrea Bachem"
          }
        }))
      })
    }
  ]
});






</script>
<script>


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "berichte",
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    wide() {
      const screenStore = useScreenStore();
      return screenStore.wide;
    },
    desktop() {
      const screenStore = useScreenStore();
      return screenStore.desktop;
    },
    mobile() {
      const screenStore = useScreenStore();
      return screenStore.mobile;
    },
    tablet() {
      const screenStore = useScreenStore();
      return screenStore.tablet;
    },
    tabletHorizontal() {
      const screenStore = useScreenStore();
      return screenStore.tabletHorizontal;
    },
  },
}
</script>


<style scoped>
/* Smartphone-Frame um Bild + Inhalt – analog zu /preise & /service */
.phone-frame {
  width: 260px;
  height: 430px;
  margin: 0 auto;
  border-radius: 24px;
  background: #111;
  padding: 16px 8px 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
}
.phone-frame::before {
  content: "";
  position: absolute;
  top: 6px; left: 50%; transform: translateX(-50%);
  width: 45px; height: 5px; background: #222;
  border-radius: 4px; z-index: 2;
}
.phone-screen {
  width: 100%; height: 100%;
  border-radius: 16px; background: #fff;
  overflow: hidden;
  display: flex; flex-direction: column;
}
.phone-image {
  width: 100%; height: 180px !important;
  max-height: 180px; flex-shrink: 0; overflow: hidden;
}
.phone-image :deep(.v-responsive),
.phone-image :deep(.v-responsive__content),
.phone-image :deep(.v-img__img) {
  height: 180px !important; max-height: 180px !important;
}
.phone-image :deep(.v-responsive__sizer) { display: none !important; }
.phone-image :deep(img) {
  width: 100%; height: 180px !important; max-height: 180px;
  object-fit: cover; display: block;
}
.phone-content {
  padding: 14px 14px 12px;
  flex: 1;
  display: flex; flex-direction: column;
  overflow: hidden;
}
.phone-title {
  font-family: "Dancing Script", "Montserrat", cursive;
  font-weight: 700; font-size: 1.05rem;
  color: #1a1a1a; margin: 4px 0 10px;
  text-align: center; line-height: 1.2;
  word-break: break-word;
}
.phone-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem; line-height: 1.45;
  color: #444; text-align: center;
  margin: 0; flex: 1; overflow-y: auto;
}

.line {
  font-family: "Montserrat", sans-serif;
  color: rgba(0, 0, 0, 0.86);
}
a {
  text-decoration: none;
  color: inherit
}
p{
  color: rgba(0, 0, 0, 0.86);

}


a {
  text-decoration: none;
  cursor: pointer;
}
/* INTRO-SECTION */
.intro-section { padding: 80px 24px 40px; color: #fff; }
.intro-section--mobile { padding: 40px 16px 20px; }
.intro-container { max-width: 1100px; margin: 0 auto; text-align: center; }
.intro-eyebrow {
  display: inline-block; font-family: "Montserrat", sans-serif;
  font-size: 0.82rem; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: #ffffff;
  padding: 8px 18px; border: 1px solid rgba(255,255,255,0.55);
  border-radius: 2px; margin-bottom: 28px;
 background: rgba(0,0,0,0.25);
}
.intro-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: clamp(2.2rem, 4.2vw, 3.4rem); line-height: 1.2;
  color: #fff; margin: 0 auto 20px; max-width: 900px;

}
.intro-lead {
  font-family: "Montserrat", sans-serif; font-size: 1.05rem;
  line-height: 1.75; color: rgba(255,255,255,0.85);
  max-width: 720px; margin: 0 auto 48px;
}
.intro-section--mobile .intro-lead { font-size: 0.95rem; margin-bottom: 16px; }
.intro-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px; margin-top: 32px;
}
.intro-card {
  text-align: left; padding: 24px 24px 26px;
  border-left: 3px solid rgb(0, 130, 194);
  background: rgba(255,255,255,0.92); border-radius: 6px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.25);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}
.intro-card:hover {
  background: #ffffff; transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}
.intro-card-num {
  font-family: "Montserrat", sans-serif; font-size: 0.85rem;
  font-weight: 600; letter-spacing: 0.1em;
  color: rgb(0, 130, 194); margin-bottom: 10px;
}
.intro-card h3 {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: 1.1rem; color: #1a1a1a; margin: 0 0 10px;
}
.intro-card p {
  font-family: "Montserrat", sans-serif; font-size: 0.92rem;
  line-height: 1.65; color: #444; margin: 0;
}

a:focus {
  outline: 2px solid blue;
}
</style>
