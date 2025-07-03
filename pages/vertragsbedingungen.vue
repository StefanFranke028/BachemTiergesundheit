<template>
  <div>
    <div>
      <v-row style="width: 100%;" class="d-flex justify-center ma-0 mt-10">
        <v-col class="d-flex justify-center" cols="8">
          <div style="width: 100%;">
            <h1>
              Vertragsbedingungen
            </h1>
            <div>

              <h2 v-html="kontakt[0].überschrift1">

              </h2>

                <br>
              <p v-html="kontakt[0].text1">
              </p>
              <br>
            </div>
            <div>
              <h3 style="font-size: 14px">
                <b v-html="kontakt[0].überschrift2">

                </b>
              </h3>
              <br>
              <p v-html="kontakt[0].text2">
              </p>
              <br>
            </div>
            <div>
              <h3 style="font-size: 14px">
                <b v-html="kontakt[0].überschrift3">

                </b>
              </h3>
              <br>
              <p v-html="kontakt[0].text3">
              </p>
              <br>
            </div>
            <div>
              <h3 style="font-size: 14px">
                <b v-html="kontakt[0].überschrift4">

                </b>
              </h3>
              <br>
              <p v-html="kontakt[0].text4">
              </p>
              <br>
            </div>
            <div>
              <h3 style="font-size: 14px">
                <b v-html="kontakt[0].überschrift5">

                </b>
              </h3>
              <br>
              <p v-html="kontakt[0].text5">
              </p>
              <br>
            </div>
            <div>
                <h3 v-html="kontakt[0].überschrift6">

                </h3>
              <br>
              <p v-html="kontakt[0].text6">
              </p>
              <br>
            </div>
            <div>
              <h3 style="font-size: 14px">
                <b v-html="kontakt[0].überschrift7">

                </b>
              </h3>
              <br>
              <p v-html="kontakt[0].text7">
              </p>
              <br>
            </div>
            <div>
              <p style="font-size: 14px">
                <b v-html="kontakt[0].überschrift8">

                </b>
              </p>
              <br>
              <p v-html="kontakt[0].text8">
              </p>
              <br>
            </div>
            <div>
              <p style="font-size: 14px">
                <b v-html="kontakt[0].überschrift9">

                </b>
              </p>
              <br>
              <p v-html="kontakt[0].text9">
              </p>
              <br>
            </div>
            <div>
              <h3 style="font-size: 14px">
                <b v-html="kontakt[0].überschrift10">

                </b>
              </h3>
              <br>
              <p v-html="kontakt[0].text10">
              </p>
              <br>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const kontakt = ref([]);

// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://mila-escort.de:8443/auth/vertragsbedingungen", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
    // Optional: Setzen von Fallback-Daten oder Fehlerbehandlung
    return {
      description: 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Maxi Escort Service in Frankfurt.',
      keywords: 'Escort, Frankfurt, Diskretion, Exklusivität, Maxi Escort Service',
      text1: 'Ein Mädchen sollte zwei Sachen sein: elegant und fabelhaft.“ – Coco Chanel.',
      text2: 'Wo Exklusivität und Diskretion auf höchstem Niveau garantiert sind.',
      text3: 'Unsere Mission ist es, Ihnen unvergessliche Erlebnisse zu bieten, die durch Eleganz und Professionalität geprägt sind.',
      text4: 'Unsere Werte & Grundsätze',
      text5: 'Unsere Kernwerte sind Diskretion, Professionalität, Eleganz und Kundenzufriedenheit. Diese Werte sind in jedem Aspekt unseres Betriebs verankert und leiten uns bei der Auswahl unserer Begleitungen sowie im Umgang mit unseren Kunden.',
      text6: 'Maxi Escort Team',
      text7: 'Unser Team besteht aus erfahrenen und diskreten Profis, die sich darauf konzentrieren, Ihnen den besten Service zu bieten. Jeder von uns bringt einzigartige Fähigkeiten und Erfahrungen mit, um sicherzustellen, dass Ihre Wünsche erfüllt werden.',
      text8: 'Genießen Sie den Tag',
      text9: 'Maxi Escort Service Frankfurt.',
      text10: 'Ihre Maxi',
    };
  }
});

// Aktualisiere das `landingpage`-Array, wenn die Daten verfügbar sind
if (landingpage1.value) {
  kontakt.value.push(landingpage1.value);
  console.log(kontakt.value);
}

// Setze dynamisch den Head basierend auf den Landingpage-Daten
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Vertragsbedingungen - Mila Escort Service',
  link: [
    {
      rel: 'canonical',
      href: `https://mila-escort.de/vertragsbedingungen`,
    },
  ],
  meta: [
    {
      name: 'description',
      content:  'Transparente Vertragsbedingungen für Ihren diskreten Mila Escort Service. Erfahren Sie alles zu Buchung, Diskretion, Datenschutz und Stornierung.',
    },
    {
      name: 'keywords',
      content: 'Vertragsbedingungen Escort, Mila Escort Frankfurt, Buchungsbedingungen Escort, Stornierung Escortservice, Escort Diskretion, Escort AGB, Escort Datenschutz',
    },
  ],
});
</script>

<script>

import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "Vertragsbedingungen",
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
p {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
  font-size: 0.8rem;
}
</style>
