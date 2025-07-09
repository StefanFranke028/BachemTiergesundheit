<template>
  <div v-if="desktop || tabletHorizontal"  class="background">
    <v-row  class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center" style="width: 100%;">
      <v-col cols="3">
        <v-card>
          <v-img alt="Anatomisches Bild eines Katzenskeletts" class="" cover style="height: 70vh" src="~/assets/bilderPages/chirolinks.webp">

          </v-img>

        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="background-impressum pa-7" style="overflow: auto; max-height: 70vh; width: 100%">
          <h1 class="line">Chiropraktik für Tiere</h1>

          <h2 class="line">Ganzheitliche Therapie für Wirbelsäule und Gelenke</h2>
          <p>
            Die Chiropraktik beim Tier ist eine effektive und ganzheitliche Therapiemethode, die darauf abzielt,
            die Gesundheit und das Wohlbefinden des Tieres durch die Korrektur von Wirbelsäulen- und Gelenkproblemen zu verbessern.
          </p>

          <h2 class="line">Sanfte Justierungen zur Förderung der natürlichen Balance</h2>
          <p>
            Durch sanfte, präzise chiropraktische Justierungen werden Blockaden und Fehlstellungen im Körper des Tieres gelöst.
            Dadurch kann die natürliche Balance und Funktion des Bewegungsapparates wiederhergestellt werden.
          </p>

          <h3 class="line">Das Nervensystem als Schlüsselfaktor</h3>
          <p>
            Das Nervensystem spielt eine zentrale Rolle bei der Steuerung aller Körperfunktionen. Fehlstellungen der Wirbelsäule
            können die Nervenleitung stören – mit Auswirkungen auf Beweglichkeit, Schmerzempfinden und Organfunktionen.
          </p>

          <h2 class="line">Indikationen für eine chiropraktische Behandlung</h2>
          <p>
            Chiropraktik ist hilfreich bei Rückenschmerzen, Arthrose, Spondylose, Bandscheibenvorfällen, Entzündungen sowie Problemen
            mit Koordination, Muskelkraft und Verhalten. Auch Verdauungsstörungen oder Lahmheiten können positiv beeinflusst werden.
          </p>

          <h2 class="line">Für Hund und Pferd jeden Alters geeignet</h2>
          <p>
            Die Behandlungen sind schmerzfrei und für Tiere aller Altersgruppen und Rassen geeignet – ob zur Prävention,
            Rehabilitation oder begleitend zur tierärztlichen Therapie.
          </p>

          <h3 class="line">Deine zertifizierte Chiropraktikerin</h3>
          <p>
            Ich bin ausgebildete und geprüfte Tierchiropraktikerin an der renommierten Akademie für Tiernaturheilkunde (ATM).
            Mit meiner Spezialisierung auf den Bewegungsapparat unterstütze ich insbesondere Hunde und Pferde gezielt und professionell.
          </p>

          <v-row class="justify-end mt-5" style="width: 100%;">
            <v-col cols="2">
              <div class="chirosiegel"></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-img alt="Anatomisches Bild eines Katzenskeletts" class="" cover style="height: 70vh"  src="~/assets/bilderPages/chirorechts.webp">

          </v-img>

        </v-card>
      </v-col>

    </v-row>
  </div>
  <div v-if="mobile || tablet" class="background" style="padding-top: 20px">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <v-row class="justify-center mx-0 mt-2" style="overflow-y: scroll">

      <v-col style="height: 300px" cols="11">
        <v-card>
          <v-img alt="Anatomisches Bild eines Katzenskeletts" class="" cover style="height: 70vh" src="~/assets/bilderPages/chirolinks.webp">

          </v-img>

        </v-card>
      </v-col>
      <v-col cols="11">
        <v-card class="background-impressum pa-7" style="overflow: auto; max-height: 40vh; width: 100%">
          <h1 class="line">Chiropraktik für Tiere</h1>

          <h2 class="line">Ganzheitliche Therapie für Wirbelsäule und Gelenke</h2>
          <p style="font-size: 13px">
            Die Chiropraktik beim Tier ist eine effektive und ganzheitliche Therapiemethode, die darauf abzielt,
            die Gesundheit und das Wohlbefinden des Tieres durch die Korrektur von Wirbelsäulen- und Gelenkproblemen zu verbessern.
          </p>

          <h2 class="line">Sanfte Justierungen zur Förderung der natürlichen Balance</h2>
          <p style="font-size: 13px">
            Durch sanfte, präzise chiropraktische Justierungen werden Blockaden und Fehlstellungen im Körper des Tieres gelöst.
            Dadurch kann die natürliche Balance und Funktion des Bewegungsapparates wiederhergestellt werden.
          </p>

          <h3 class="line">Das Nervensystem als Schlüsselfaktor</h3>
          <p style="font-size: 13px">
            Das Nervensystem spielt eine zentrale Rolle bei der Steuerung aller Körperfunktionen. Fehlstellungen der Wirbelsäule
            können die Nervenleitung stören – mit Auswirkungen auf Beweglichkeit, Schmerzempfinden und Organfunktionen.
          </p>

          <h2 class="line">Indikationen für eine chiropraktische Behandlung</h2>
          <p style="font-size: 13px">
            Chiropraktik ist hilfreich bei Rückenschmerzen, Arthrose, Spondylose, Bandscheibenvorfällen, Entzündungen sowie Problemen
            mit Koordination, Muskelkraft und Verhalten. Auch Verdauungsstörungen oder Lahmheiten können positiv beeinflusst werden.
          </p>

          <h2 class="line">Für Hund und Pferd jeden Alters geeignet</h2>
          <p style="font-size: 13px">
            Die Behandlungen sind schmerzfrei und für Tiere aller Altersgruppen und Rassen geeignet – ob zur Prävention,
            Rehabilitation oder begleitend zur tierärztlichen Therapie.
          </p>

          <h3 class="line">Deine zertifizierte Chiropraktikerin</h3>
          <p style="font-size: 13px">
            Ich bin ausgebildete und geprüfte Tierchiropraktikerin an der renommierten Akademie für Tiernaturheilkunde (ATM).
            Mit meiner Spezialisierung auf den Bewegungsapparat unterstütze ich insbesondere Hunde und Pferde gezielt und professionell.
          </p>

          <v-row class="justify-end mt-5" style="width: 100%;">
            <v-col cols="2">
              <div class="chirosiegel"></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

    </v-row>


  </div>
</template>

<script setup>

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


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "chiropraktik",
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

.background {
  background-image: url("@/assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}




.line {
  font-family: "Dancing Script", cursive;
  color: rgba(44, 42, 42, 0.86);
}
a {
  text-decoration: none;
  color: inherit
}


.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}


.background-impressum {

  background-image: url("@/assets/paper.webp");
  background-size: cover;

}




a {
  text-decoration: none;
  cursor: pointer;
}

.chirosiegel {
  background-image: url("@/assets/chiroSiegel.webp");
  background-size: cover;
  margin-top: 30px;
  height: 70px;
  width: 70px;
}

a:focus {
  outline: 2px solid blue;
}
</style>