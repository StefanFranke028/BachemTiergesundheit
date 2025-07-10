<template>
<div class="background" style="overflow-y: scroll; height: 100vh" >
  <HeaderComponent v-if="desktop || tabletHorizontal"></HeaderComponent>
  <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
  <article>
    <!-- Einleitungstext (optional für SEO) -->
    <section class="text-center py-6">
      <h1 class="line text-white" style="max-width: 800px; margin: auto; font-size: 35px ">
        {{stadt?.überschrift}}
      </h1>
    </section>

    <!-- Stadtbeschreibung -->
    <section style="  overflow-y: scroll">
      <v-row class="mx-0 justify-center">
        <v-col cols="11" md="8" class="d-flex align-center py-8">

          <v-card class="background-impressum" style="height: 60vh; width: 100%;overflow-y: scroll">
            <h2 class="text-center line">{{stadt?.unterUeberschrift}}</h2>
            <v-divider class="mx-12" />
            <v-card-text>
              <h3 class="text-center line">{{ stadt?.miniUnterUeberschrift }}</h3>
              <div
                  class="mt-3"
                  style="text-align: justify;"
                  :style="mobile ? 'font-size: 12px' : ''"
                  v-html="stadt?.text"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="11" md="4" class="d-flex align-center py-8">
          <v-card class="background-impressum" style="height: 60vh; width: 100%;">
            <v-img :alt="stadt.unterUeberschrift" style="height: 600px" cover  :src="stadt.image">

            </v-img>

          </v-card>
        </v-col>
      </v-row>
    </section>

  </article>
</div>

</template>


<script setup>


const route = useRoute();
import { useRoute, navigateTo } from '#imports';
import { useAsyncData } from '#app';
const city = route.params.stadt || '';

if (!city.startsWith('tiergesundheit')) {
  navigateTo('/');

}

const stadtparam = city.slice(15);

const { data: stadtData } = await useAsyncData(`stadt-${stadtparam}`, () =>
    $fetch(`https://tier-gesundheitszentrum.com:8080/auth/stadt/name/${stadtparam}`)
);

const stadt = computed(() => stadtData.value || null);
onMounted(() => {
  console.log('stadt:', stadt.value);
});

if (!city.startsWith('tiergesundheit')) {
  navigateTo('/');
}
useHead(() => ({
  htmlAttrs: {
    lang: 'de',
  },
  title: `${stadt.value?.überschrift}`,
  meta: [
    {
      name: 'description',
      content: stadt.value?.miniUnterUeberschrift || 'Erfahren Sie mehr über ganzheitliche Tiergesundheit in Ihrer Stadt.',
    },
    {
      name: 'keywords',
      content: `Tiergesundheit, Bericht, ${stadtparam}, Andrea Bachem, Tierosteopathie, Chiropraktik, Naturheilkunde`,
    },
    {
      property: 'og:title',
      content: `${stadt.value?.überschrift} – Tiergesundheitszentrum`,
    },
    {
      property: 'og:description',
      content: stadt.value?.miniUnterUeberschrift || '',
    },
    {
      property: 'og:image',
      content: stadt.value?.image || 'https://tier-gesundheitszentrum.com/logo.png',
    },
    {
      property: 'og:url',
      content: `https://tier-gesundheitszentrum.com/${route.params.stadt}`,
    },
    {
      property: 'og:type',
      content: 'article',
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://tier-gesundheitszentrum.com/${route.params.stadt}`,
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
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": stadt.value?.überschrift,
        "description": stadt.value?.miniUnterUeberschrift,
        "author": {
          "@type": "Person",
          "name": "Andrea Bachem"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Tiergesundheitszentrum Andrea Bachem",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tier-gesundheitszentrum.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://tier-gesundheitszentrum.com/${route.params.stadt}`
        }
      })
    }
  ]
}));


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

.background {
  background-image: url("@/assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;

  width: 100vw;
}
.background-impressum {

  background-image: url("@/assets/paper.webp");
  background-size: cover;

}
.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}
</style>