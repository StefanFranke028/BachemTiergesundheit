<template>
  <div>
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/Stadt.jpg" style="width: 100%; height: 450px;  ">
      <div class="d-flex justify-center align-center"
           style="height: 450px; width: 100vw; background-color: rgba(0,0,0,0.6); z-index: 9000;">
        <h1 class="text-white text-center dm-serif">Luxusbegleitung für besondere Momente<br> in <br> {{ stadtparam }}
        </h1>


      </div>
    </v-img>
    <div class="d-flex align-center" style="background-color: #f1f0f0; min-height: 750px">
      <v-row class="mx-0 justify-center" style="width: 100%; min-height: 500px">
        <v-col class="d-flex align-center py-8" cols="12" md="10" style="width: 100%; min-height: 500px">
          <v-card style="min-height: 300px ; width: 100%">
            <h2 class="text-center"> Unsere Damen aus {{ stadtparam }}</h2>
            <v-divider class="mx-12"></v-divider>
            <v-card-text>
              <h3 class="text-center">
                {{ stadt?.überschrift }}
                <br>

              </h3>
              <p :style="mobile ? 'font-size: 12px':'' " class="mt-3" style="text-align: justify;   "
                 v-html="stadt?.text ">

              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="pb-10" style="background-color: #ffffff; min-height: 400px">
      <v-row class="mx-0 mt-4 justify-center" style="width: 100%; height: 100%">
        <v-col v-for="dame in stadtDamen" :key="dame" class="d-flex justify-center" cols="11" md="3" xl="3">
          <v-card style="width: 350px">
            <v-img :src="dame.bilder[0].imageBase64" alt="Bilder der Damen" class="d-flex justify-center align-center" cover
                   style="width: 100%; height: 450px;  ">
            </v-img>
            <v-card-title class="text-center">{{ dame.name }}</v-card-title>
            <v-card-subtitle class="text-center">Aus {{ stadtparam }} | {{ dame.geburtsalter }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>


const route = useRoute();
import { useRoute, navigateTo } from '#imports';
import { useAsyncData } from '#app';
const city = route.params.stadt || '';

if (!city.startsWith('MilaEscort')) {
  navigateTo('/');
}

const stadtparam = city.slice(11);

const { data: stadtData } = await useAsyncData(`stadt-${stadtparam}`, () =>
    $fetch(`https://mila-escort.de:8443/auth/stadt/${stadtparam}`)
);

const stadt = computed(() => stadtData.value || null);
const stadtDamen = computed(() => stadt.value?.damen || []);

if (!city.startsWith('MilaEscort')) {
  navigateTo('/');
}


useHead({
  htmlAttrs: {
    lang: 'de',
  },
  title:  `Luxus Escort in ${city.slice(11)} - Mila Escort Service`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: `Erleben Sie luxuriöse Escort-Begleitung in ${city.slice(11)}. Unsere Damen bieten niveauvolle Gesellschaft für besondere Anlässe.`,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: `Escort, Begleitservice, ${city.slice(11)}, Luxus Escort, Mila`,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mila Escort",
        "image": "https://mila-escort.de/logo.png",
        "url": `https://mila-escort.de/${route.params.stadt}`,
        "description": `Luxus Escort Service in ${city.slice(11)}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.slice(11),
          "addressCountry": "DE"
        },
        "areaServed": {
          "@type": "Place",
          "name": city.slice(11)
        },
        "serviceType": "Begleitservice, Escort",
        "priceRange": "$$$"
      })
    }
  ],


  link: [
    {
      rel: 'canonical',
      href: `https://mila-escort.de/${route.params.stadt}`,
    },
  ],
});
</script>


<script>
import {useScreenStore} from "~/stores/screen.js";

export default {
  data() {
    return {
      stadtparam: '',
      damen: [],
      stadt: null
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


};

</script>
<style scoped>
.dm-serif {
  font-family: "Aptos", serif;
  font-weight: 400;
  font-style: normal;
}
</style>