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
          <h1 class="line mt-3">Unsere Leistungen – Ganzheitliche Tiergesundheit mit Herz und Verstand</h1>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem in Erftstadt bieten wir ein breites Spektrum an ganzheitlichen Behandlungsmethoden für Hunde, Katzen, Pferde und andere Tiere. Mit einem tiefen Verständnis für Tierkörper und -seele begleiten wir Ihr Tier individuell und achtsam auf seinem Weg zur Gesundheit.
          </p>

          <h2 class="line mt-3">Ganzheitliche Therapiekonzepte für Ihr Tier</h2>
          <p>
            Unsere Leistungen vereinen traditionelles Wissen mit moderner Tierheilkunde. Dabei setzen wir auf natürliche, sanfte Methoden, die Körper, Geist und Seele Ihres Tieres in Einklang bringen.
          </p>

          <h3 class="line mt-3">Osteopathie & Chiropraktik</h3>
          <p>
            Verspannungen, Lahmheiten oder Verhaltensauffälligkeiten? Mit gezielten osteopathischen und chiropraktischen Techniken lösen wir Blockaden und fördern die Beweglichkeit Ihres Tieres.
          </p>

          <h2 class="line mt-3">Zusatzleistungen für Tierhalter</h2>
          <p>
            Neben der Behandlung Ihres Tieres bieten wir umfassende Beratung und begleitende Leistungen – individuell, verständlich und praxisnah.
          </p>

          <h3 class="line mt-3">Fütterungsberatung</h3>
          <p>
            Die richtige Ernährung ist die Basis für Gesundheit. Wir erstellen individuelle Fütterungskonzepte abgestimmt auf Alter, Rasse, Vorerkrankungen und Lebensumstände.
          </p>


          <h2 class="line mt-3">Warum Sie uns vertrauen können</h2>
          <p>
            Fachliche Kompetenz, jahrelange Erfahrung und ein liebevoller Umgang mit Tier und Mensch das zeichnet unsere Praxis aus. Wir nehmen uns Zeit, hören zu und gehen individuell auf die Bedürfnisse Ihres Tieres ein.
          </p>


        </v-card>
      </v-col>


    </v-row>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="4" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Service">
          <v-card
              class="mx-auto my-12"
              height="480"
              style="background-color: rgb(255,255,255); backdrop-filter: blur(4px); box-shadow: 1px 1px 5px black"
              width="300"
          >

            <v-img
                loading="lazy"
                :src="preis.image"
                cover
                style="width: 300px; height: 270px"
                :alt="preis.ueberschrift"
                itemprop="image"
            ></v-img>
<v-card-text>

              <p itemprop="name" class="text-black text-center"  style="font-size: 16px">
                {{ preis.ueberschrift }}

              </p>

            <p class="text-black mt-3 text-center" style="font-size: 14px">
              {{ preis.unterUeberschrift }}

            </p>
</v-card-text>
            <v-divider class="mx-8 opacity-80"></v-divider>



            <v-row style="width: 100%;" class="ma-0 mt-n5">
              <v-col cols="12" class="d-flex justify-center">
                <v-btn class="mt-7" style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                  <NuxtLink :to="'/services/service-'+ preis.url">
                    Zum Service>
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
          <h1 class="line mt-3">Unsere Leistungen – Ganzheitliche Tiergesundheit mit Herz und Verstand</h1>
          <p>
            Im Tiergesundheitszentrum Andrea Bachem in Erftstadt bieten wir ein breites Spektrum an ganzheitlichen Behandlungsmethoden für Hunde, Katzen, Pferde und andere Tiere. Mit einem tiefen Verständnis für Tierkörper und -seele begleiten wir Ihr Tier individuell und achtsam auf seinem Weg zur Gesundheit.
          </p>

          <h2 class="line mt-3">Ganzheitliche Therapiekonzepte für Ihr Tier</h2>
          <p>
            Unsere Leistungen vereinen traditionelles Wissen mit moderner Tierheilkunde. Dabei setzen wir auf natürliche, sanfte Methoden, die Körper, Geist und Seele Ihres Tieres in Einklang bringen.
          </p>

          <h3 class="line mt-3">Osteopathie & Chiropraktik</h3>
          <p>
            Verspannungen, Lahmheiten oder Verhaltensauffälligkeiten? Mit gezielten osteopathischen und chiropraktischen Techniken lösen wir Blockaden und fördern die Beweglichkeit Ihres Tieres.
          </p>

          <h2 class="line mt-3">Zusatzleistungen für Tierhalter</h2>
          <p>
            Neben der Behandlung Ihres Tieres bieten wir umfassende Beratung und begleitende Leistungen – individuell, verständlich und praxisnah.
          </p>

          <h3 class="line mt-3">Fütterungsberatung</h3>
          <p>
            Die richtige Ernährung ist die Basis für Gesundheit. Wir erstellen individuelle Fütterungskonzepte abgestimmt auf Alter, Rasse, Vorerkrankungen und Lebensumstände.
          </p>


          <h2 class="line mt-3">Warum Sie uns vertrauen können</h2>
          <p>
            Fachliche Kompetenz, jahrelange Erfahrung und ein liebevoller Umgang mit Tier und Mensch das zeichnet unsere Praxis aus. Wir nehmen uns Zeit, hören zu und gehen individuell auf die Bedürfnisse Ihres Tieres ein.
          </p>


        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="11" v-for="preis in produkteArray" :key="preis.id">
        <article itemscope itemtype="https://schema.org/Service">
        <v-card
            class="mx-auto my-12"
            height="450"
            style="background-color: rgb(255,255,255); backdrop-filter: blur(4px); box-shadow: 1px 1px 5px black"
            width="300"
        >

          <v-img
              loading="lazy"
              :src="preis.image"
              cover
              style="width: 300px; height: 200px"
              :alt="preis.ueberschrift"
              itemprop="image"
          ></v-img>
<v-card-text>

            <p  itemprop="name" class="text-black text-center mt-5"  style="font-size: 16px">
              {{ preis.ueberschrift }}

            </p>

          <p class="text-black mt-7 text-center" style="font-size: 14px">
            {{ preis.unterUeberschrift }}

          </p>
</v-card-text>
          <v-divider class="mx-8 opacity-80"></v-divider>



          <v-row style="width: 100%;" class="ma-0 mt-n5">
            <v-col cols="12" class="d-flex justify-center">
              <v-btn class="mt-7" style="background-color:rgb(0, 130, 194); color: white; border-radius: 20px">
                <NuxtLink :to="'/services/service-'+ preis.url">
                  Zum Service >

                </NuxtLink>

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
  const res = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/seminare');
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
    {
      name: 'author',
      content: 'Andrea Bachem'
    },
    {
      property: 'og:title',
      content: 'Leistungen | Tiergesundheitszentrum Andrea Bachem – Erftstadt'
    },
    {
      property: 'og:description',
      content: 'Ganzheitliche Tiergesundheit durch fundierte Methoden: Jetzt mehr über unsere Leistungen für Hund, Katze & Pferd erfahren.'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/service'
    },
    {
      property: 'og:type',
      content: 'website'
    },
  ],
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
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/service'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Unsere Leistungen – Tiergesundheitszentrum Andrea Bachem",
        "itemListElement": produkteArray.value.map((service, index) => ({
          "@type": "Service",
          "position": index + 1,
          "name": service.ueberschrift,
          "description": service.unterUeberschrift,
          "url": `https://tier-gesundheitszentrum.com/services/service-${service.url}`,
          "provider": {
            "@type": "Organization",
            "name": "Tiergesundheitszentrum Andrea Bachem"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Erftstadt und Umgebung"
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
  name: "service",
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


a:focus {
  outline: 2px solid blue;
}
</style>