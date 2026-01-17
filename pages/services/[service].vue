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
          <v-col v-if="stadt?.backlinkUrl !== null" cols="11" md="8">
            <a
                :href="stadt?.backlinkUrl"
                :title="stadt?.backlinkName ? `Mehr Informationen: ${stadt.backlinkName}` : 'Mehr Informationen'"
                class="linkdiv pt-1 d-block"
            >
              <p class="text-center" style="font-size: 22px">
                <b>
                {{ stadt?.backlinkName }}

                </b>
              </p>
            </a>
          </v-col>


          <v-col cols="11">
            <form class="layout_form cr_form cr_font" action="https://seu2.cleverreach.com/f/430331-415442/wcs/" method="post" target="_blank">
            <div class="cr_body cr_page cr_font formbox" style="background-color: transparent !important;">
              <div class="editable_content" style="text-align:left;background-color: transparent !important;">
                <div id="9467951" rel="email" class="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave" style="margin-bottom:0;">
                  <div class="cr_form-inputgroup cr_form-inputgroup--typeemail">
                    <label class="text-white" for="text9467951">Newsletter abonnieren</label>
                    <input class="cr_form-input" type="email" id="text9467951" name="email" value="" placeholder="name@example.com" style="width:100%;">
                  </div>
                </div>
                <div id="9467953" rel="button" class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable  submit_container">
                  <button type="submit" class="cr_form-block cr_button">Abonnieren</button>
                </div>
              </div>
              <noscript><a href="http://www.cleverreach.de" title="CleverReach">www.CleverReach.de</a></noscript>
            </div>


          </form>
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
      <nav class="d-flex footer-nav">
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
        <template v-if="desktop || tabletHorizontal">
          <span class="text-white mt-n1">|</span>
          <template v-for="(city, index) in cityLinks" :key="city.to">
            <span v-if="index > 0" class="text-white mt-n1">|</span>
            <NuxtLink :title="`Tiergesundheit ${city.label}`" :to="city.to" class="mx-2 footer-link text-white link">
              {{ city.label }}
            </NuxtLink>
          </template>
        </template>
        <template v-else>
          <span class="text-white mt-n1">|</span>
          <details class="footer-dropdown mx-2">
            <summary class="text-white footer-link link">Städte</summary>
            <div class="footer-dropdown-menu">
              <NuxtLink
                v-for="city in cityLinks"
                :key="city.to"
                :title="`Tiergesundheit ${city.label}`"
                :to="city.to"
                class="footer-dropdown-link text-white link"
              >
                {{ city.label }}
              </NuxtLink>
            </div>
          </details>
        </template>
      </nav>

      <!-- YouTube-Link als echter externer Link -->
      <a href="https://www.youtube.com/results?search_query=andrea+bachem" title="Andrea Bachem auf YouTube" aria-label="YouTube" class="mx-3 mt-n4" style="color: red; font-size: 40px">
        <Icon icon="grommet-icons:youtube" />
      </a>

      <!-- Instagram-Link -->
      <a href="https://www.instagram.com/andreabachem?igsh=MTIxZTJxZHRvd2wxeg==" title="Andrea Bachem auf Instagram" target="_blank" rel="noopener" aria-label="Instagram" class="mx-3 mt-n4" style="font-size: 40px">
        <Icon icon="skill-icons:instagram" />
      </a>
    </footer>

  </div>

</template>


<script setup>
import { navigateTo, useRoute } from '#imports';
import { useAsyncData } from '#app';

if (process.client) {
  function loadjQuery(src, callback) {
    const n = document.createElement("script")
    n.setAttribute("src", src)
    n.onload = callback
    n.onreadystatechange = function () {
      if (this.readyState === "complete" || this.readyState === "loaded") {
        callback()
      }
    }
    document.head.appendChild(n)
  }

  function main() {
    const $cr = jQuery.noConflict()
    let old_src

    $cr(document).ready(function () {
      // dein kompletter jQuery-Code hier …
    })

    function captcha_reload() {
      const timestamp = new Date().getTime()
      $cr("div[rel='captcha'] img:not(.captcha2_reload)")
          .attr("src", "")
          .attr("src", old_src + "?t=" + timestamp)
      return false
    }
  }

  if (typeof window.jQuery === "undefined") {
    loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js", main)
  } else {
    main()
  }
}

const cityLinks = [
  { label: 'Bonn', to: '/tiergesundheit-bonn' },
  { label: 'Erftstadt', to: '/tiergesundheit-erftstadt' },
  { label: 'Liblar', to: '/tiergesundheit-liblar' },
  { label: 'Lechenich', to: '/tiergesundheit-lechenich' },
  { label: 'Kierdorf', to: '/tiergesundheit-kierdorf' },
  { label: 'Köttingen', to: '/tiergesundheit-koettingen' },
  { label: 'Gymnich', to: '/tiergesundheit-gymnich' },
  { label: 'Bliesheim', to: '/tiergesundheit-bliesheim' },
  { label: 'Friesheim', to: '/tiergesundheit-friesheim' },
];

const route = useRoute();
const prefix = 'service';
const city = String(route.params.service || '');

if (!city.startsWith(prefix)) {
  navigateTo('/');
}

const stadtparam = city.slice(prefix.length);

const { data: stadtData } = await useAsyncData(`stadt-${stadtparam}`, () =>
    $fetch(`https://tier-gesundheitszentrum.com:8080/auth/seminare/url/${stadtparam}`)
);

const stadt = computed(() => stadtData.value || null);
useHead(() => {
  const baseTitle = stadt.value?.ueberschrift || '';
  const fullTitle = baseTitle.length < 30 ? `${baseTitle} – Tiergesundheitszentrum` : baseTitle;
  const clampedTitle = fullTitle.length > 64 ? fullTitle.slice(0, 64).trimEnd() : fullTitle;

  return {
    htmlAttrs: {
      lang: 'de',
    },
    title: clampedTitle,
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
        content: clampedTitle,
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
        content: clampedTitle,
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
  font-family: "Montserrat", sans-serif;
  color: #2c2a2a;
}
.linkdiv{
  height: 40px;
  background-color: white;
  border-radius: 4px;
}
.footer-nav {
  flex-wrap: wrap;
  align-items: center;
  max-width: 100%;
  row-gap: 4px;
}
.footer-link {
  font-size: 12px;
  text-decoration: none;
}
.footer-dropdown {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer-dropdown summary {
  cursor: pointer;
  list-style: none;
}
.footer-dropdown summary::-webkit-details-marker {
  display: none;
}
.footer-dropdown summary::after {
  content: "v";
  display: inline-block;
  margin-left: 6px;
  font-size: 10px;
  transition: transform 0.2s ease;
}
.footer-dropdown[open] summary::after {
  transform: rotate(180deg);
}
.footer-dropdown-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
  padding: 6px 8px;
  border-radius: 4px;
  background-color: rgba(0, 130, 194, 0.95);
}
.footer-dropdown-link {
  font-size: 12px;
}
</style>
