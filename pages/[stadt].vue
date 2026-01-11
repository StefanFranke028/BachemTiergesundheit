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
        <v-col v-if="stadt?.backlinkUrl !== null" cols="11" md="12">
          <a
              :href="stadt?.backlinkUrl"
              class="linkdiv pt-1 d-block"
          >
            <p class="text-center" style="font-size: 22px">
              <b>
                {{ stadt?.backlinkName }}

              </b>
            </p>
          </a>
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
const pageUrl = computed(() =>
    `https://tier-gesundheitszentrum.com/${encodeURI(String(route.params.stadt || ''))}`
);

const ogImage = computed(() => {
  const img = stadt.value?.image || '';
  return img.startsWith('http')
      ? img
      : 'https://tier-gesundheitszentrum.com/favicon.png';
});

useHead(() => {
  const baseTitle = stadt.value?.überschrift || '';
  const fullTitle = baseTitle.length < 30 ? `${baseTitle} – Tiergesundheitszentrum` : baseTitle;
  const desc = stadt.value?.miniUnterUeberschrift || 'Erfahren Sie mehr über ganzheitliche Tiergesundheit in Ihrer Stadt.';

  return {
    htmlAttrs: { lang: 'de' },
    title: fullTitle,
    meta: [
      { name: 'description', content: desc },
      { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },

      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: ogImage.value },
      { property: 'og:url', content: pageUrl.value },
      { property: 'og:type', content: 'article' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: ogImage.value },
    ],
    link: [
      { rel: 'canonical', href: pageUrl.value },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": fullTitle,
          "description": desc,
          "image": [ogImage.value],
          "datePublished": "2025-07-10",
          "dateModified": "2025-07-10",
          "author": { "@type": "Person", "name": "Andrea Bachem" },
          "publisher": {
            "@type": "Organization",
            "name": "Tiergesundheitszentrum Andrea Bachem",
            "logo": { "@type": "ImageObject", "url": "https://tier-gesundheitszentrum.com/logo.png" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl.value }
        })
      }
    ]
  };
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
  font-family: "Montserrat", sans-serif;
  color: #2c2a2a;
}
.linkdiv{
  height: 40px;
  background-color: white;
  border-radius: 4px;
}
</style>