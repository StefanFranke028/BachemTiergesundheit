<template>
  <div v-if="desktop || tabletHorizontal"  class="background" style="overflow-y: scroll">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">

      <v-col cols="12">
        <v-card class="pa-7" style="overflow: auto; max-height: 60vh; width: 100%; background-color: rgba(0,0,0,0.22)">
          <h1 class="line">Preise & Leistungen im Tiergesundheitszentrum Andrea Bachem</h1>

          <h2 class="line mt-3">Transparente Kosten für Behandlung, Beratung & Zusatzservices</h2>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem in Erftstadt stehen die Gesundheit und das Wohlbefinden deines Tieres im Mittelpunkt. Unsere Preise sind transparent, fair und auf die individuellen Bedürfnisse von Hund, Pferd und anderen tierischen Begleitern abgestimmt. Hier findest du eine Übersicht über alle Leistungen und deren Kosten.
          </p>

          <h2 class="line mt-4">Therapeutische Behandlungen für Hund und Pferd</h2>

          <h3 class="line mt-3">Tierosteopathie</h3>
          <p>
            Ganzheitliche osteopathische Behandlungen zur Förderung der Selbstheilung und Mobilität deines Tieres. Geeignet bei Bewegungseinschränkungen, Verspannungen und chronischen Beschwerden.
          </p>

          <h3 class="line mt-3">Tierphysiotherapie</h3>
          <p>
            Gezielte physiotherapeutische Maßnahmen wie Massagen, Dehnungen, aktive Übungen und mehr – individuell abgestimmt auf den Zustand deines Tieres.
          </p>

          <h3 class="line mt-3">Chiropraktik für Tiere</h3>
          <p>
            Sanfte chiropraktische Justierungen zur Korrektur von Blockaden und zur Förderung der Beweglichkeit. Ideal für sportlich geführte Tiere oder nach Verletzungen.
          </p>

          <h2 class="line mt-4">Weitere Leistungen & Zusatzangebote</h2>

          <h3 class="line mt-3">Ernährungsberatung</h3>
          <p>
            Individuelle Beratung zur artgerechten und gesundheitsfördernden Ernährung deines Tieres – abgestimmt auf Alter, Rasse und Beschwerden.
          </p>

          <h3 class="line mt-3">Mobile Tierbehandlung</h3>
          <p>
            Behandlungen vor Ort direkt bei dir zuhause oder im Stall. Ideal für Tiere, die den Transport schlecht vertragen oder sich in gewohnter Umgebung wohler fühlen. Es fällt eine Anfahrtspauschale an, abhängig vom Standort.
          </p>

          <h3 class="line mt-3">Kooperation mit Tierärzten & Therapeuten</h3>
          <p>
            Interdisziplinäre Zusammenarbeit mit Tierärzten, Hufschmieden und weiteren Therapeuten für eine bestmögliche Versorgung deines Tieres.
          </p>

          <h2 class="line mt-4">Was du noch wissen solltest</h2>
          <p>
            Alle Preise richten sich nach dem zeitlichen Aufwand und der jeweiligen Tierart. Vor der ersten Behandlung führen wir ein ausführliches Anamnesegespräch durch. Gerne beraten wir dich auch telefonisch zu individuellen Anliegen.
          </p>

          <h3 class="line mt-3">Individuelle Angebote auf Anfrage</h3>
          <p>
            Du hast besondere Anforderungen oder möchtest mehrere Leistungen kombinieren? Sprich uns an – wir erstellen dir ein passendes Paketangebot.
          </p>



        </v-card>
      </v-col>


    </v-row>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="4" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Product">
          <v-card
              class="mx-auto my-12"
              height="500"
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

            <v-card-title class="text-center" itemprop="name">
              {{ preis.ueberschrift }}
            </v-card-title>

            <v-divider class="mx-8 opacity-80"></v-divider>

            <v-card-text class="text-center" style="height: 150px ;overflow-y: scroll"  itemprop="description">
              {{ preis.text }} <br>
              {{ preis.preis }}
            </v-card-text>




            <v-row style="width: 100%;" class="ma-0 mt-5">
              <v-col cols="12" class="d-flex justify-center">
                <v-btn class="mt-3" style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                  <NuxtLink to="/">
                    Termin Vereinbaren &gt;

                  </NuxtLink>

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
          <h1 class="line">Preise & Leistungen im Tiergesundheitszentrum Andrea Bachem</h1>

          <h2 class="line mt-3">Transparente Kosten für Behandlung, Beratung & Zusatzservices</h2>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem in Erftstadt stehen die Gesundheit und das Wohlbefinden deines Tieres im Mittelpunkt. Unsere Preise sind transparent, fair und auf die individuellen Bedürfnisse von Hund, Pferd und anderen tierischen Begleitern abgestimmt. Hier findest du eine Übersicht über alle Leistungen und deren Kosten.
          </p>

          <h2 class="line mt-4">Therapeutische Behandlungen für Hund und Pferd</h2>

          <h3 class="line mt-3">Tierosteopathie</h3>
          <p>
            Ganzheitliche osteopathische Behandlungen zur Förderung der Selbstheilung und Mobilität deines Tieres. Geeignet bei Bewegungseinschränkungen, Verspannungen und chronischen Beschwerden.
          </p>

          <h3 class="line mt-3">Tierphysiotherapie</h3>
          <p>
            Gezielte physiotherapeutische Maßnahmen wie Massagen, Dehnungen, aktive Übungen und mehr – individuell abgestimmt auf den Zustand deines Tieres.
          </p>

          <h3 class="line mt-3">Chiropraktik für Tiere</h3>
          <p>
            Sanfte chiropraktische Justierungen zur Korrektur von Blockaden und zur Förderung der Beweglichkeit. Ideal für sportlich geführte Tiere oder nach Verletzungen.
          </p>

          <h2 class="line mt-4">Weitere Leistungen & Zusatzangebote</h2>

          <h3 class="line mt-3">Ernährungsberatung</h3>
          <p>
            Individuelle Beratung zur artgerechten und gesundheitsfördernden Ernährung deines Tieres – abgestimmt auf Alter, Rasse und Beschwerden.
          </p>

          <h3 class="line mt-3">Mobile Tierbehandlung</h3>
          <p>
            Behandlungen vor Ort direkt bei dir zuhause oder im Stall. Ideal für Tiere, die den Transport schlecht vertragen oder sich in gewohnter Umgebung wohler fühlen. Es fällt eine Anfahrtspauschale an, abhängig vom Standort.
          </p>

          <h3 class="line mt-3">Kooperation mit Tierärzten & Therapeuten</h3>
          <p>
            Interdisziplinäre Zusammenarbeit mit Tierärzten, Hufschmieden und weiteren Therapeuten für eine bestmögliche Versorgung deines Tieres.
          </p>

          <h2 class="line mt-4">Was du noch wissen solltest</h2>
          <p>
            Alle Preise richten sich nach dem zeitlichen Aufwand und der jeweiligen Tierart. Vor der ersten Behandlung führen wir ein ausführliches Anamnesegespräch durch. Gerne beraten wir dich auch telefonisch zu individuellen Anliegen.
          </p>

          <h3 class="line mt-3">Individuelle Angebote auf Anfrage</h3>
          <p>
            Du hast besondere Anforderungen oder möchtest mehrere Leistungen kombinieren? Sprich uns an – wir erstellen dir ein passendes Paketangebot.
          </p>


        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="11" v-for="preis in produkteArray" :key="preis.id">
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
              style="width: 300px; height: 200px"
          ></v-img>
          <v-card-title class="text-center">{{ preis.ueberschrift }}</v-card-title>
          <v-divider class="mx-8 opacity-80"></v-divider>
          <v-card-text class="text-center" style="overflow-y: scroll;height: 130px">

            {{ preis.text }}


          </v-card-text>
          <v-row style="width: 100% ;" class="ma-0 mt-5">
            <v-col cols="12" class="d-flex justify-center">
              <v-btn  class="mt-3 " style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">

                <a :href="preis.link" style="text-decoration: none" target="_blank">
                  Zum Produkt >
                </a>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
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
            "@type": "Place",
            "name": "Erftstadt"
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