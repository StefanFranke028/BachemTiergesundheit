<template>
  <div v-if="desktop || tabletHorizontal"  class="background" style="overflow-y: scroll">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <section class="intro-section">
      <div class="intro-container">
        <span class="intro-eyebrow">Empfehlungen</span>
        <h1 class="intro-title">
          Ausgewählte Tierprodukte für Gesundheit & Wohlbefinden
        </h1>
        <p class="intro-lead">
          Sorgfältig geprüfte Produkte renommierter Hersteller – mit Blick auf Wirkung, Qualität
          und Verträglichkeit. Nur das, was wir auch selbst verwenden würden.
        </p>

        <div class="intro-grid">
          <div class="intro-card">
            <div class="intro-card-num">01</div>
            <h3>Nahrungsergänzung</h3>
            <p>Unterstützung für Gelenke, Verdauung und Immunsystem – auf natürlicher Basis.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">02</div>
            <h3>Pflegeprodukte</h3>
            <p>Sanfte Pflege für Fell, Haut und Pfoten – tierschonend und wirksam.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">03</div>
            <h3>Therapeutische Hilfsmittel</h3>
            <p>Praktische Begleiter für die ergänzende Therapie zuhause oder unterwegs.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">04</div>
            <h3>Persönliche Beratung</h3>
            <p>Individuell, abgestimmt auf Alter, Rasse und Gesundheitszustand deines Tieres.</p>
          </div>
        </div>
      </div>
    </section>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="4" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              class="mx-auto my-12"
              height="500"
              style="background-color: rgb(255,255,255); backdrop-filter: blur(4px); box-shadow: 1px 1px 5px black"
              width="300"
          >


            <v-img
                :src="preis.bild"
                cover
                style="width: 300px; height: 270px"
                :alt="preis.ueberschrift"
                itemprop="image"
            ></v-img>

            <v-card-title class="text-center" itemprop="name">
              {{ preis.ueberschrift }}
            </v-card-title>

            <v-divider class="mx-8 opacity-80"></v-divider>

            <v-card-text class="text-center" style="height: 120px; overflow:hidden; overflow-y: scroll"  itemprop="description">
              {{ preis.text }}
            </v-card-text>

            <v-row style="width: 100%;" class="ma-0 mt-n5">
              <v-col cols="12" class="d-flex justify-center">
                <v-btn class="mt-3" style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                  <a :href="'https://' + preis.link" :title="preis.ueberschrift ? `Zum Produkt: ${preis.ueberschrift}` : 'Zum Produkt'" itemprop="url" style="text-decoration: none" rel="noopener" target="_blank">
                    Zum Produkt &gt;
                  </a>
                </v-btn>
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
        <span class="intro-eyebrow">Empfehlungen</span>
        <h1 class="intro-title">
          Ausgewählte Tierprodukte
        </h1>
        <p class="intro-lead">
          Sorgfältig geprüfte Produkte für Gesundheit & Wohlbefinden – nur das,
          was wir auch selbst verwenden würden.
        </p>
      </div>
    </section>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="11" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              :loading="loading"
              class="mx-auto my-12 "
              height="500"
              style="background-color: rgb(255,255,255); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
              width="300"
          >
            <template>
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>
            <v-img
                :src="preis.bild"
                cover
                style="width: 300px; height: 270px"
            ></v-img>
            <v-card-title class="text-center">{{ preis.ueberschrift }}</v-card-title>
            <v-divider class="mx-8 opacity-80"></v-divider>
            <v-card-text class="text-center" style="height: 120px; overflow-y: scroll">

              {{ preis.text }}


            </v-card-text>
            <v-row style="width: 100% ;" class="ma-0 mt-n4">
              <v-col cols="12" class="d-flex justify-center">
                <v-btn  class="mt-3 " style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">

                  <a :href="preis.link" :title="preis.ueberschrift ? `Zum Produkt: ${preis.ueberschrift}` : 'Zum Produkt'" rel="noopener" style="text-decoration: none" target="_blank">
                    Zum Produkt >
                  </a>
                </v-btn>
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
  const res = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/produkt');
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
  title: 'Tierprodukte für Hund & Pferd Empfehlungen & Kaufberatung',
  link: [
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
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/produkte',
    },
  ],
  meta: [
    {
      name: 'description',
      content:
          'Entdecke geprüfte Tierprodukte für Hund & Pferd: Nahrungsergänzung, Pflege & Therapie persönlich empfohlen von Andrea Bachem.',
    },
    {
      name: 'keywords',
      content:
          'Tierprodukte Hund, Tierprodukte Pferd, Ergänzungsfutter Hund, Ergänzungsfutter Pferd, Pflegeprodukte Tiere, Tierbedarf Erftstadt, Andrea Bachem Empfehlungen, Tiergesundheit Produkte',
    },
    {
      name: 'author',
      content: 'Andrea Bachem'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Tierprodukte für Hund & Pferd | Andrea Bachem – Empfehlungen & Kaufberatung'
    },
    {
      property: 'og:description',
      content:
          'Erprobte Produkte für Tiere – von erfahrenen Herstellern & mit tiertherapeutischer Empfehlung. Jetzt entdecken & beraten lassen!',
    },
    {
      property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/produkte'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Empfohlene Tierleistungen",
        "itemListElement": produkteArray.value.map((produkt, index) => ({
          "@type": "Service",
          "position": index + 1,
          "name": produkt.ueberschrift,
          "description": produkt.text,
          "url": produkt.link,
          "provider": {
            "@type": "Organization",
            "name": "Tiergesundheitszentrum Andrea Bachem"
          },
          "areaServed": {
            "@type": "country",
            "name": "Deutschland"
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
  name: "produkte",
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


.chirosiegel {
  background-image: url("@/assets/chiroSiegel.webp");
  background-size: cover;
  height: 170px;
  width: 170px;
  margin-top: -50px;

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
  text-shadow: 0 1px 6px rgba(0,0,0,0.5); background: rgba(0,0,0,0.25);
}
.intro-title {
  font-family: "Montserrat", sans-serif; font-weight: 600;
  font-size: clamp(2.2rem, 4.2vw, 3.4rem); line-height: 1.2;
  color: #fff; margin: 0 auto 20px; max-width: 900px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.55);
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





a {
  text-decoration: none;
  cursor: pointer;
}


.chirosiegel {
  background-image: url("@/assets/osteoSiegel.png");
  background-size: cover;
  height: 70px;
  width: 70px;
}

a:focus {
  outline: 2px solid blue;
}
</style>
