<template>
  <div v-if="desktop || tabletHorizontal"  class="background">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="3">
        <v-card>
          <v-img alt="Bild von Andrea Bachem mit einem Hund auf dem Arm" class="" cover style="height: 70vh" src="~/assets/bilderPages/werbelinks.webp">
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="background-impressum pa-7" style="overflow: auto; height: 70vh; width: 100%">
          <h1 class="line">Unsere Werbepartner</h1>

          <h2 class="line mt-3">Starke Kooperationen für Tiergesundheit</h2>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem arbeiten wir mit ausgewählten Partnern zusammen, die unsere Werte teilen:
            Qualität, Vertrauen und das Wohl des Tieres.
            Ob Futter, Zubehör oder fachliche Zusammenarbeit – gemeinsam schaffen wir ganzheitliche Lösungen für Hund und Pferd.
          </p>

          <h2 class="line mt-3">Regionale Partner – gemeinsame Werte</h2>
          <p>
            Unsere Werbepartner stammen vor allem aus der Region Erftstadt und stehen für nachhaltige, tierfreundliche Angebote.
            Durch diese Kooperationen ergänzen wir unsere Leistungen sinnvoll und stärken das Netzwerk rund um Tiergesundheit.
          </p>

          <h3 class="line mt-3">Interesse an einer Zusammenarbeit?</h3>
          <p>
            Wenn Sie Werbepartner werden möchten, freuen wir uns über Ihre Anfrage.
          </p>
        <v-row style="width: 100%;" class="ma-0">

          <v-col
              v-for="partner in werbepartner"
              :key="partner.name"
              cols="12"
              md="4"
          >
            <a :href="partner.url" :target="partner.target" :rel="partner.rel">
              <v-card class="pa-4 text-center">
                <v-img :src="partner.image" :alt="partner.name" contain height="100" />
                <h3 class="mt-2">{{ partner.name }}</h3>
                <p class="text-caption">{{ partner.description }}</p>
              </v-card>
            </a>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-img alt="Bild von Andrea Bachem mit einem Hund auf dem Arm" class="" cover style="height: 70vh"  src="~/assets/bilderPages/werberechts.webp">

          </v-img>

        </v-card>
      </v-col>

    </v-row>
  </div>
  <div v-if="mobile || tablet" class="background" style="padding-top: 20px">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <v-row class="justify-center mx-0 mt-2" style="overflow-y: scroll">

      <v-col style="height: 300px" cols="11">
        <v-card>
          <v-img alt="Bild von Andrea Bachem mit einem Hund auf dem Arm" class="" cover style="height: 70vh" src="~/assets/bilderPages/werbelinks.webp">

          </v-img>

        </v-card>
      </v-col>
      <v-col cols="11">
        <v-card class="background-impressum pa-7" style="overflow: auto; max-height: 40vh; width: 100%">
          <h1 class="line">Unsere Werbepartner</h1>

          <h2 class="line mt-3">Starke Kooperationen für Tiergesundheit</h2>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem arbeiten wir mit ausgewählten Partnern zusammen, die unsere Werte teilen:
            Qualität, Vertrauen und das Wohl des Tieres.
            Ob Futter, Zubehör oder fachliche Zusammenarbeit – gemeinsam schaffen wir ganzheitliche Lösungen für Hund und Pferd.
          </p>

          <h2 class="line mt-3">Regionale Partner – gemeinsame Werte</h2>
          <p>
            Unsere Werbepartner stammen vor allem aus der Region Erftstadt und stehen für nachhaltige, tierfreundliche Angebote.
            Durch diese Kooperationen ergänzen wir unsere Leistungen sinnvoll und stärken das Netzwerk rund um Tiergesundheit.
          </p>

          <h3 class="line mt-3">Interesse an einer Zusammenarbeit?</h3>
          <p>
            Wenn Sie Werbepartner werden möchten, freuen wir uns über Ihre Anfrage.
          </p>

          <v-row style="width: 100%;" class="ma-0">

            <v-col
                v-for="partner in werbepartner"
                :key="partner.name"
                cols="12"
                md="4"
            >
              <a :href="partner.url" :target="partner.target" :rel="partner.rel">
                <v-card class="pa-4 text-center">
                  <v-img :src="partner.image" :alt="partner.name" contain height="100" />
                  <h3 class="mt-2">{{ partner.name }}</h3>
                  <p class="text-caption">{{ partner.description }}</p>
                </v-card>
              </a>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

    </v-row>


  </div>
</template>

<script setup>

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Werbepartner Andrea Bachem Tiergesundheitszentrum',
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
      href: 'https://tier-gesundheitszentrum.com/werbepartner',
    },
  ],
  meta: [
    {
      name: 'description',
      content:
          'Entdecken Sie unsere starken Werbepartner im Bereich Tiergesundheit. Gemeinsam mit regionalen Unternehmen stärken wir das Wohl von Hund und Pferd.',
    },
    {
      name: 'keywords',
      content:
          'Werbepartner Tiergesundheit, Kooperation Tiertherapie, Andrea Bachem Partner, Erftstadt Tiergesundheitszentrum, Tierwohl Zusammenarbeit, Hund Pferd Partnernetzwerk',
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
      content: 'Werbepartner | Andrea Bachem – Tiergesundheitszentrum Erftstadt'
    },
    {
      property: 'og:description',
      content:
          'Gemeinsam stark für Tiergesundheit: Lernen Sie die Werbepartner von Andrea Bachem in Erftstadt kennen – für ganzheitliche Versorgung von Hund & Pferd.',
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/werbepartner'
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
        "@type": "LocalBusiness",
        "name": "Tiergesundheitszentrum Andrea Bachem",
        "url": "https://tier-gesundheitszentrum.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Erftstadt",
          "addressCountry": "DE"
        },
        "description": "Kooperationen und Werbepartner im Bereich Tiergesundheit für Hund und Pferd."
      })
    }
  ]
});



</script>
<script>


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "chiropraktik",
  data(){
    return{
      werbepartner: [
        {
          name: 'Tierfutter Andera Bachem',
          url: 'https://gesundesfutterandreabachem.de/',
          description: 'Gesundes Futter | Andrea Bachem',
          image: 'https://gesundesfutterandreabachem.de/.cm4all/mediadb/.Andrea%20Bachem%20%288%29.png/picture-200',
          rel: 'notfollow noopener noreferrer',
          target: '_blank'
        }
      ]
    }
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

.background {
  background-image: url("@/assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}


.chirosiegel {
  background-image: url("@/assets/chiroSiegel.webp");
  background-size: cover;
  height: 170px;
  width: 170px;
  margin-top: -50px;

}


.line {
  font-family: "Dancing Script", cursive;
  color: rgba(44, 42, 42, 0.86);
}
a {
  text-decoration: none;
  color: inherit
}


.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}


.background-impressum {

  background-image: url("@/assets/paper.webp");
  background-size: cover;

}




a {
  text-decoration: none;
  cursor: pointer;
}

.chirosiegel {
  background-image: url("@/assets/chiroSiegel.webp");
  background-size: cover;
  height: 70px;
  width: 70px;
}

a:focus {
  outline: 2px solid blue;
}
</style>