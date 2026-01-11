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
          <h1 class="line mt-3">Podcast Tiergesundheit – Wissen, Erfahrungen & Impulse aus der Praxis</h1>

          <p>
            In unserem Podcast zur Tiergesundheit teilen wir fundiertes Fachwissen, langjährige Praxiserfahrung und persönliche Einblicke aus der täglichen Arbeit mit Tieren. Als ganzheitliche Tiertherapeutin spricht Andrea Bachem über Gesundheit, Bewegung, Heilungsprozesse und den achtsamen Umgang mit Hund, Pferd und weiteren Tierarten.
          </p>

          <h2 class="line mt-3">Ehrliche Einblicke in die ganzheitliche Tiertherapie</h2>

          <p>
            Der Podcast richtet sich an Tierhalter, Therapeuten und alle, die ihre Tiere besser verstehen möchten. In jeder Folge beleuchten wir Themen aus der ganzheitlichen Tiergesundheit praxisnah, verständlich und ohne Fachchinesisch. Dabei geht es nicht um schnelle Lösungen, sondern um nachhaltige Gesundheit und individuelle Wege.
          </p>

          <h3 class="line mt-3">Themen rund um Hund, Pferd & Bewegungsapparat</h3>

          <p>
            Schwerpunkte unseres Podcasts sind unter anderem Beschwerden des Bewegungsapparates, chronische Erkrankungen, Verhaltensauffälligkeiten sowie Zusammenhänge zwischen Körper, Psyche und Umwelt. Auch häufige Fragen zu Arthrose, Bandscheibenvorfällen, Blockaden oder Fütterung werden offen und praxisnah besprochen.
          </p>

          <h3 class="line mt-3">Praxiswissen verständlich erklärt</h3>

          <p>
            In jeder Podcast-Folge fließen reale Erfahrungen aus der täglichen Arbeit mit ein. Komplexe Zusammenhänge aus der Tiermedizin, Chiropraktik, Osteopathie oder Naturheilkunde werden so erklärt, dass sie für Tierhalter gut nachvollziehbar und direkt anwendbar sind.
          </p>

          <h2 class="line mt-3">Podcast-Folgen mit Mehrwert für Tierhalter</h2>

          <p>
            Unser Tiergesundheits-Podcast soll Ihnen helfen, Warnsignale frühzeitig zu erkennen, Zusammenhänge besser zu verstehen und informierte Entscheidungen für Ihr Tier zu treffen. Dabei ersetzen die Inhalte keine tierärztliche Diagnose, bieten aber wertvolle Orientierung und Wissen aus der Praxis.
          </p>

          <h3 class="line mt-3">Erfahrungen, Wissen & persönliche Impulse</h3>

          <p>
            Neben fachlichen Themen sprechen wir auch über persönliche Erfahrungen, häufige Fehler in der Tierhaltung und Denkansätze, die Tierhalter zum Umdenken anregen dürfen. Offen, ehrlich und immer mit dem Ziel, das Wohl des Tieres in den Mittelpunkt zu stellen.
          </p>

          <h2 class="line mt-3">Warum dieser Podcast zur Tiergesundheit entstanden ist</h2>

          <p>
            Der Podcast entstand aus dem Wunsch heraus, Wissen zugänglich zu machen und Tierhaltern Orientierung zu geben. Transparenz, Aufklärung und ein respektvoller Umgang mit Tier und Mensch stehen dabei im Vordergrund. Jede Folge soll informieren, stärken und das Verständnis für ganzheitliche Tiergesundheit vertiefen.
          </p>

          <p>
            Hören Sie rein, lassen Sie sich inspirieren und begleiten Sie uns auf dem Weg zu mehr Gesundheit, Beweglichkeit und Lebensfreude für Ihr Tier.
          </p>


        </v-card>
      </v-col>


    </v-row>
    <div class="podcast-embed d-flex justify-center" >
      <iframe
          :src="iframeSrc"
          width="1080"
          height="450"
          style="border:0; overflow:hidden;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  </div>

  <div v-if="mobile || tablet" class="background " style="overflow-y: scroll">
    <HeadermobileComponent />

    <v-row class="ma-0 justify-center">
      <v-col cols="11">
        <v-card
            class="pa-5"
            style="overflow:auto; max-height:65vh; background-color: rgba(0,0,0,0.22)"
        >
          <h1 class="line mt-3" style="font-size: 22px">
            Podcast Tiergesundheit – Wissen, Erfahrungen & Impulse aus der Praxis
          </h1>

          <p class="mt-3" style="font-size: 14px">
            In unserem Podcast zur Tiergesundheit teilen wir fundiertes Fachwissen,
            langjährige Praxiserfahrung und persönliche Einblicke aus der täglichen
            Arbeit mit Tieren. Andrea Bachem spricht über Gesundheit, Bewegung,
            Heilungsprozesse und ganzheitliche Tiertherapie.
          </p>

          <h2 class="line mt-3">Ganzheitliche Tiergesundheit verständlich erklärt</h2>

          <p class="mt-3" style="font-size: 14px">
            Der Podcast richtet sich an Tierhalter und Interessierte, die ihre Tiere
            besser verstehen möchten. Themen wie Bewegungsapparat, Arthrose,
            Bandscheibenvorfälle, Blockaden und Fütterung werden praxisnah erklärt.
          </p>

          <h3 class="line mt-3">Praxiswissen & echte Erfahrungen</h3>

          <p class="mt-3" style="font-size: 14px">
            Jede Folge basiert auf realen Erfahrungen aus der täglichen Arbeit mit
            Hund und Pferd. Komplexe medizinische Zusammenhänge werden verständlich
            aufbereitet und eingeordnet.
          </p>

          <p class="mt-3" style="font-size: 14px">
            Hören Sie rein und begleiten Sie uns auf dem Weg zu mehr Gesundheit,
            Beweglichkeit und Lebensfreude für Ihr Tier.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Podcast Player -->
    <v-row class="ma-0 justify-center mt-5">
      <v-col cols="12">
        <div class="podcast-embed">
          <iframe
              :src="iframeSrc"
              width="100%"
              height="500"
              style="border:0; overflow:hidden;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </div>

</template>

<script setup>
const iframeSrc = "https://player.pdcstrcdn.de?p=a07dfc74-5f16-4772-9a00-9b675094b2ad&e=f667a661-1903-4b46-a3b1-1c1ecf05e6ad&v=1765718607";
useHead({
  htmlAttrs: { lang: "de" },

  // Podcast-Seite
  title: "Podcast | Andrea Bachem – Tiergesundheitszentrum",

  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
    },
    {
      rel: "canonical",
      href: "https://tier-gesundheitszentrum.com/podcast",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],

  meta: [
    {
      name: "description",
      content:
          "Podcast zur Tiergesundheit von Andrea Bachem: ganzheitliche Tiertherapie, Praxiswissen & Erfahrungen rund um Hund und Pferd – verständlich erklärt.",
    },
    {
      name: "keywords",
      content:
          "Podcast Tiergesundheit, Andrea Bachem Podcast, ganzheitliche Tiertherapie, Tiergesundheitszentrum, Hund, Pferd, Bewegungsapparat, Blockaden, Arthrose, Bandscheibe, Osteopathie, Chiropraktik",
    },
    { name: "author", content: "Andrea Bachem" },
    {
      name: "robots",
      content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },

    // OpenGraph
    { property: "og:title", content: "Podcast Tiergesundheit | Andrea Bachem" },
    {
      property: "og:description",
      content:
          "Wissen, Erfahrungen & Impulse aus der Praxis: Podcast zur ganzheitlichen Tiergesundheit mit Fokus auf Hund und Pferd.",
    },
    { property: "og:image", content: "https://tier-gesundheitszentrum.com/favicon.png" },
    { property: "og:url", content: "https://tier-gesundheitszentrum.com/podcast" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "de_DE" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Podcast Tiergesundheit | Andrea Bachem" },
    {
      name: "twitter:description",
      content:
          "Podcast zur ganzheitlichen Tiergesundheit: Praxiswissen, Erfahrungen und verständliche Einblicke für Tierhalter.",
    },
    { name: "twitter:image", content: "https://tier-gesundheitszentrum.com/favicon.png" },
  ],

  script: [
    // LocalBusiness bleibt ok, ergänzt um URL + sameAs (optional)
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tiergesundheitszentrum Andrea Bachem",
        "url": "https://tier-gesundheitszentrum.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Erftstadt",
          "addressCountry": "DE",
        },
        "description":
            "Ganzheitliche Tiergesundheit: Tierchiropraktik, Osteopathie und Physiotherapie für Hund und Pferd.",
      }),
    },

    // Podcast-Seite als WebPage (für Google sauber)
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Podcast Tiergesundheit | Andrea Bachem",
        "url": "https://tier-gesundheitszentrum.com/podcast",
        "description":
            "Podcast zur Tiergesundheit mit Praxiswissen, Erfahrungen und Impulsen aus der ganzheitlichen Tiertherapie.",
        "inLanguage": "de-DE",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Tiergesundheitszentrum Andrea Bachem",
          "url": "https://tier-gesundheitszentrum.com",
        },
      }),
    },
  ],
});



</script>
<script>

import {Icon} from '@iconify/vue';
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "chiropraktik",
  components:{Icon},
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
  font-family: "Montserrat", sans-serif;
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
.podcast-embed {
  width: 100%;
}


</style>