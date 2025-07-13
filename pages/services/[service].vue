<template>
  <div class="background" style="overflow-y: scroll">
    <HeaderComponent v-if="desktop || tabletHorizontal"></HeaderComponent>
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <article itemscope itemtype="https://schema.org/Service">
      <!-- Einleitungstext (optional für SEO) -->
      <section class="text-center py-6">
        <h1 itemprop="name" class="line text-white" style="max-width: 800px; margin: auto; font-size: 35px ">
          {{stadt?.ueberschrift}}
        </h1>
      </section>

      <!-- Stadtbeschreibung -->
      <section >
        <v-row class="mx-0 justify-center">
          <v-col cols="11" md="8" class="d-flex align-center py-8">

            <v-card class="background-impressum" style="height: 60vh; width: 100%; overflow-y: scroll">
              <h2 itemprop="alternateName" class="text-center line">{{stadt?.unterUeberschrift}}</h2>
              <v-divider class="mx-12" />
              <v-card-text>
                <h3 itemprop="description" class="text-center line">{{ stadt?.miniUnterUeberschrift }}</h3>
                <div
                    itemprop="serviceType"
                    class="mt-3"
                    style="text-align: justify;"
                    :style="mobile ? 'font-size: 13px' : 'font-size: 15px'"
                    v-html="stadt?.text"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="11" md="4" class="d-flex align-center py-8">
            <v-card class="background-impressum" style="height: 60vh; width: 100%;">
              <NuxtImg :alt="stadt.unterUeberschrift" style="width: 100%; object-fit: cover"  cover  :src="stadt.image">
              </NuxtImg>
            </v-card>
          </v-col>
        </v-row>
      </section>

    </article>
    <footer class="d-flex" style="position: fixed; bottom: 10px; width: 100%;  align-items: center">
      <nav class="d-flex">
        <NuxtLink  title="Impressum von Andrea Bachem" to="/impressum" class="mx-2 footer-link text-white link">
          Impressum
        </NuxtLink>
        <span class="text-white mt-n1">|</span>

        <NuxtLink  title="Verwaltungsseite" rel="nofollow" to="/admin" class="mx-2 text-white footer-link link" >
          Verwaltung
        </NuxtLink>
        <span class="text-white mt-n1">|</span>

        <NuxtLink title="Datenschautz von Tiergesundheitszentrum.de"  to="/datenschutz" class="mx-2 footer-link text-white link" >
          Datenschutz
        </NuxtLink>
        <span class="text-white mt-n1">|</span>

        <NuxtLink title="Meine Vita und intressantes über mich" to="/ueberuns" class="mx-2 footer-link text-white link" >
          Über Uns
        </NuxtLink>
      </nav>

      <!-- YouTube-Link als echter externer Link -->
      <a href="https://www.youtube.com/results?search_query=andrea+bachem" aria-label="YouTube" class="mx-3 mt-n4" style="color: red; font-size: 40px">
        <Icon icon="grommet-icons:youtube" />
      </a>

      <!-- Instagram-Link -->
      <a href="https://www.instagram.com/andreabachem?igsh=MTIxZTJxZHRvd2wxeg==" target="_blank" rel="noopener" aria-label="Instagram" class="mx-3 mt-n4" style="font-size: 40px">
        <Icon icon="skill-icons:instagram" />
      </a>
    </footer>

  </div>

</template>


<script setup>


const route = useRoute();
import { useRoute, navigateTo } from '#imports';
import { useAsyncData } from '#app';
const city = route.params.service || '';

if (!city.startsWith('service')) {
  navigateTo('/');

}

const stadtparam = city.slice(8);

const { data: stadtData } = await useAsyncData(`stadt-${stadtparam}`, () =>
    $fetch(`https://tier-gesundheitszentrum.com:8080/auth/seminare/url/${stadtparam}`)
);

const stadt = computed(() => stadtData.value || null);
onMounted(() => {
  console.log('stadt:', stadt.value);
});

if (!city.startsWith('service')) {
  navigateTo('/');
}
useHead(() => {
  const baseTitle = stadt.value?.ueberschrift || '';
  const fullTitle = baseTitle.length < 30 ? `${baseTitle} – Tiergesundheitszentrum` : baseTitle;

  return {
    htmlAttrs: {
      lang: 'de',
    },
    title: fullTitle,
    meta: [
      {
        name: 'description',
        content: (stadt.value?.miniUnterUeberschrift?.slice(0, 155)) || 'Entdecken Sie unsere ganzheitlichen Behandlungen für Tiere in Ihrer Nähe.',
      },
      {
        name: 'keywords',
        content: `Tiergesundheit, ${stadtparam}, ${baseTitle}, Tierosteopathie, Chiropraktik, Naturheilkunde, Andrea Bachem, Tierheilpraxis, Service`,
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      // Open Graph
      {
        property: 'og:title',
        content: fullTitle,
      },
      {
        property: 'og:description',
        content: stadt.value?.miniUnterUeberschrift || '',
      },
      {
        property: 'og:image',
        content: stadt.value?.image || 'https://tier-gesundheitszentrum.com/favicon.png',
      },
      {
        property: 'og:url',
        content: `https://tier-gesundheitszentrum.com/services/${route.params.service}`,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: fullTitle,
      },
      {
        name: 'twitter:description',
        content: stadt.value?.miniUnterUeberschrift || '',
      },
      {
        name: 'twitter:image',
        content: stadt.value?.image || 'https://tier-gesundheitszentrum.com/logo.png',
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
        href: `https://tier-gesundheitszentrum.com/services/${route.params.service}`,
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": fullTitle,
          "description": stadt.value?.miniUnterUeberschrift,
          "provider": {
            "@type": "Organization",
            "name": "Tiergesundheitszentrum Andrea Bachem",
            "logo": {
              "@type": "ImageObject",
              "url": "https://tier-gesundheitszentrum.com/logo.png"
            }
          },
          "areaServed": {
            "@type": "Country",
            "name": "Deutschland"
          },
          "image": stadt.value?.image,
          "url": `https://tier-gesundheitszentrum.com/services/${route.params.service}`
        }),
      }
    ]
  };
});




</script>


<script>
import {useScreenStore} from "~/stores/screen.js";
import {Icon} from '@iconify/vue';

export default {
  name:'[Service]',
  components: {
    Icon
  },
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
  overflow-y: scroll;
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