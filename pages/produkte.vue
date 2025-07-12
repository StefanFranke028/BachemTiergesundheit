<template>
  <div v-if="desktop || tabletHorizontal"  class="background" style="overflow-y: scroll">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">

      <v-col cols="12">
        <v-card class="pa-7" style="overflow: auto; max-height: 70vh; width: 100%; background-color: rgba(0,0,0,0.22)">
          <h1 class="line">Ausgewählte Tierprodukte für Gesundheit und Wohlbefinden</h1>

          <h2 class="line mt-3">Hochwertige Produkte – sorgfältig für dein Tier ausgewählt</h2>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem findest du eine Auswahl bewährter Produkte von renommierten Herstellern.
            Ob unterstützende Nahrungsergänzung, Pflegeprodukte oder therapeutische Hilfsmittel – jedes Produkt wurde mit Blick auf
            Wirkung, Qualität und Verträglichkeit geprüft.
          </p>

          <h2 class="line mt-3">Zusammenarbeit mit erfahrenen Marken</h2>
          <p>
            Unsere Empfehlungen basieren auf langjähriger Erfahrung in der tiergestützten Therapie. Wir arbeiten eng mit Herstellern
            zusammen, die sich durch tierschonende, wirksame und naturbasierte Ansätze auszeichnen. So findest du bei uns nur das,
            was wir auch selbst im Alltag verwenden würden.
          </p>

          <h3 class="line mt-3">Für Hund, Pferd und andere tierische Begleiter</h3>
          <p>
            Ganz gleich, ob du ein unterstützendes Produkt für deinen Hund suchst oder gezielt Ergänzungen für dein Pferd brauchst – wir helfen dir bei der Auswahl und beantworten gern deine Fragen zur Anwendung.
          </p>

          <h2 class="line mt-3">Individuelle Beratung vor Ort oder telefonisch</h2>
          <p>
            Du bist unsicher, welches Produkt zu deinem Tier passt? Sprich uns gerne an. Wir beraten dich individuell und kompetent – abgestimmt auf das Alter, die Bedürfnisse und den Gesundheitszustand deines Tieres.
          </p>

        </v-card>
      </v-col>


    </v-row>
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
                  <a :href="preis.link" itemprop="url" style="text-decoration: none" rel="noopener" target="_blank">
                    Zum Produkt &gt;
                  </a>
                </v-btn>
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
        <v-card class="pa-7" style="overflow: auto; max-height: 50vh; width: 100%; background-color: rgba(0,0,0,0.22)">
          <h1 class="line">Ausgewählte Tierprodukte für Gesundheit und Wohlbefinden</h1>

          <h2 class="line mt-3">Hochwertige Produkte – sorgfältig für dein Tier ausgewählt</h2>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem findest du eine Auswahl bewährter Produkte von renommierten Herstellern.
            Ob unterstützende Nahrungsergänzung, Pflegeprodukte oder therapeutische Hilfsmittel – jedes Produkt wurde mit Blick auf
            Wirkung, Qualität und Verträglichkeit geprüft.
          </p>

          <h2 class="line mt-3">Zusammenarbeit mit erfahrenen Marken</h2>
          <p>
            Unsere Empfehlungen basieren auf langjähriger Erfahrung in der tiergestützten Therapie. Wir arbeiten eng mit Herstellern
            zusammen, die sich durch tierschonende, wirksame und naturbasierte Ansätze auszeichnen. So findest du bei uns nur das,
            was wir auch selbst im Alltag verwenden würden.
          </p>

          <h3 class="line mt-3">Für Hund, Pferd und andere tierische Begleiter</h3>
          <p>
            Ganz gleich, ob du ein unterstützendes Produkt für deinen Hund suchst oder gezielt Ergänzungen für dein Pferd brauchst – wir helfen dir bei der Auswahl und beantworten gern deine Fragen zur Anwendung.
          </p>

          <h2 class="line mt-3">Individuelle Beratung vor Ort oder telefonisch</h2>
          <p>
            Du bist unsicher, welches Produkt zu deinem Tier passt? Sprich uns gerne an. Wir beraten dich individuell und kompetent – abgestimmt auf das Alter, die Bedürfnisse und den Gesundheitszustand deines Tieres.
          </p>

        </v-card>      </v-col>
    </v-row>
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

                  <a :href="preis.link" rel="noopener" style="text-decoration: none" target="_blank">
                    Zum Produkt >
                  </a>
                </v-btn>
              </v-col>
            </v-row>



          </v-card>

        </article>
      </v-col>
    </v-row>
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
  font-family: "Dancing Script", cursive;
  color: rgba(255, 255, 255, 0.86);
}
a {
  text-decoration: none;
  color: inherit
}
p{
  color: rgba(255, 255, 255, 0.86);

}



.background-impressum {

  background-image: url("@/assets/paper.webp");
  background-size: cover;

}

.background {
  background-image: url("@/assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
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