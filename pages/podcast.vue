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

  <div v-if="mobile || tablet" class="background" style="padding-top: 20px">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
  </div>
</template>

<script setup>
const iframeSrc = "https://player.pdcstrcdn.de?p=a07dfc74-5f16-4772-9a00-9b675094b2ad&e=f667a661-1903-4b46-a3b1-1c1ecf05e6ad&v=1765718607";
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Tierchiropraktik Hund & Pferd | Andrea Bachem Erftstadt',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap'
    },
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/chiropraktik',
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
  meta: [
    {
      name: 'description',
      content:
          'Chiropraktische Behandlung für Hund und Pferd – Andrea Bachem in Erftstadt hilft bei Arthrose, Spondylose, Bandscheibenvorfällen & mehr.',
    },
    {
      name: 'keywords',
      content:
          'Tierchiropraktik Hund, Tierchiropraktik Pferd, Chiropraktikerin Andrea Bachem, Bewegungsapparat Tier, Arthrose Hund, Bandscheibenvorfall Pferd, Spondylose Therapie Tier, Erftstadt Tiergesundheit, Tiertherapie Erftstadt',
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
      content: 'Tierchiropraktik Hund & Pferd | Andrea Bachem Erftstadt'
    },
    {
      property: 'og:image',
      content: 'https://tier-gesundheitszentrum.com/favicon.png'
    },
    {
      property: 'og:description',
      content:
          'Chiropraktische Behandlung für den Bewegungsapparat von Hund und Pferd – individuell, sanft & effektiv. Jetzt Termin in Erftstadt vereinbaren.',
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/chiropraktik'
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
        "description": "Tierchiropraktik, Osteopathie und Physiotherapie für Hund und Pferd."
      })
    }
  ]
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