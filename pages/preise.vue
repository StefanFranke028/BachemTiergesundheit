<template>
  <div v-if="desktop || tabletHorizontal"  class="background" style="overflow-y: scroll">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <section class="intro-section">
      <div class="intro-container">
        <span class="intro-eyebrow">Preise & Leistungen</span>
        <h1 class="intro-title">
          Transparent, fair und individuell
        </h1>
        <p class="intro-lead">
          Faire Preise abgestimmt auf Hund, Pferd und Co. Vor jeder Behandlung führen wir ein
          ausführliches Anamnesegespräch – damit du genau weißt, was dein Tier braucht.
        </p>

        <div class="intro-grid">
          <div class="intro-card">
            <div class="intro-card-num">01</div>
            <h3>Tierosteopathie</h3>
            <p>Ganzheitliche Behandlungen zur Förderung der Selbstheilung und Mobilität.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">02</div>
            <h3>Tierphysiotherapie</h3>
            <p>Massagen, Dehnungen und aktive Übungen, individuell abgestimmt.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">03</div>
            <h3>Chiropraktik</h3>
            <p>Sanfte Justierungen zur Korrektur von Blockaden und mehr Beweglichkeit.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-num">04</div>
            <h3>Mobile Behandlung</h3>
            <p>Vor Ort bei dir zuhause oder im Stall – mit Anfahrtspauschale je nach Standort.</p>
          </div>
        </div>
      </div>
    </section>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="4" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              class="mx-auto my-12 pb-4"
              height="620"
              style="background-color: rgb(255,255,255); backdrop-filter: blur(4px); box-shadow: 1px 1px 5px black"
              width="300"
          >


            <v-img
                :src="preis.bild"
                cover
                style="width: 300px; height: 200px"
                :alt="preis.ueberschrift"
                itemprop="image"
            ></v-img>

            <v-card-title class="text-center" itemprop="name" style="white-space: normal; word-break: break-word;">
              {{ preis.ueberschrift }}
            </v-card-title>

            <v-divider class="mx-8 opacity-80"></v-divider>

            <v-card-text class="text-center" style="height: 130px; overflow-y: auto" itemprop="description">
              {{ preis.text }}
            </v-card-text>
            <div v-if="preis.preis" class="preis-badge" itemprop="priceSpecification">
              {{ preis.preis }}
            </div>




            <v-row style="width: 100%;" class="ma-0 mt-5">
              <v-col cols="12" class="d-flex justify-center">
                <v-btn class="mt-3" style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                  <NuxtLink to="/" title="Termin vereinbaren">
                    Termin Vereinbaren &gt;

                  </NuxtLink>

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
        <span class="intro-eyebrow">Preise & Leistungen</span>
        <h1 class="intro-title">
          Transparent, fair und individuell
        </h1>
        <p class="intro-lead">
          Faire Preise für Hund, Pferd und Co. – abgestimmt auf zeitlichen Aufwand und Tierart.
        </p>
      </div>
    </section>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="11" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              :loading="loading"
              class="mx-auto my-12 pb-4"
              height="600"
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
                style="width: 300px; height: 200px"
                itemprop="image"
            ></v-img>
            <v-card-title class="text-center" style="white-space: normal; word-break: break-word;">{{ preis.ueberschrift }}</v-card-title>
            <v-divider class="mx-8 opacity-80"></v-divider>
            <v-card-text class="text-center" style="height: 110px; overflow-y: auto">
              {{ preis.text }}
            </v-card-text>
            <div v-if="preis.preis" class="preis-badge">
              {{ preis.preis }}
            </div>
            <v-row style="width: 100% ;" class="ma-0 mt-5">
              <v-col cols="12" class="d-flex justify-center">
                <v-btn  class="mt-3 " style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">

                  <a :href="preis.link" :title="preis.ueberschrift ? `Mehr zu ${preis.ueberschrift}` : 'Mehr zur Leistung'" style="text-decoration: none" target="_blank">
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
  const res = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/preis');
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
  title: 'Tierprodukte & Preise Tiergesundheitszentrum Erftstadt',
  link: [
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/preise'
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
    }
  ],
  meta: [
    {
      name: 'description',
      content:
          'Entdecke hochwertige Tierprodukte & transparente Preise im Tiergesundheitszentrum Andrea Bachem. Beratung & Behandlung für Hund & Pferd in Erftstadt.'
    },
    {
      name: 'keywords',
      content:
          'Tierprodukte Hund Pferd, Tierpreise, Tierbehandlung Kosten, Osteopathie Preise Tiere, Andrea Bachem, Tiergesundheit, Tierosteopathie Erftstadt'
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
      content: 'Tierprodukte & Preise | Andrea Bachem – Tiergesundheitszentrum Erftstadt'
    },
    {
      property: 'og:description',
      content:
          'Transparente Preise & ausgewählte Tierprodukte im Tiergesundheitszentrum Andrea Bachem. Für Wohlbefinden & Gesundheit deines Tieres.'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/preise'
    },
    {
      property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: 'https://tier-gesundheitszentrum.com/images/social-share.jpg' // ← Falls du ein OG-Bild hast
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
          "provider": {
            "@type": "Organization",
            "name": "Tiergesundheitszentrum Andrea Bachem"
          },
          "areaServed": {
            "@type": "Country",
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



.preis-badge {
  margin: 8px 16px 0;
  padding: 10px 16px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #ffffff;
  background: rgb(0, 130, 194);
  border-radius: 6px;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
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
