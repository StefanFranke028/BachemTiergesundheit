<template>
  <div v-if="desktop|| tabletHorizontal">
    <img alt="schwarz-weis Hintergrundbild" src="~/assets/bg_komprimiert.webp" style="width: 100vw; height: 500px;"/>
    <div class="card">
      <div class="cardIn1">
        <div class="text-center text2 dosis" v-html="blog[0].text2">
        </div>
      </div>
      <div class="cardIn2">
        <div class="text3 ">
          <p class="text-center" v-html="blog[0].text1">
          </p>
        </div>
        <div class="line-with-dot">
        </div>
        <v-img alt="" cover
               src="~/assets/blog_1_komprimiert.webp"
               style="min-width: 100%; min-height: 100%; width: auto; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></v-img>
      </div>
    </div>

    <div class="mt-n2" style="width: 100vw; height:150px; background-color: #c7dee6">

    </div>


    <div>
      <v-row v-for="(blog, index) in blogs" :key="blog" class="ma-0 pa-0"
             style="width: 100%; height: 100%; min-height: 500px">
        <v-col :class="{'bgwithe': index % 2 === 1}" class="bgblue" cols="12">
          <v-row class="ma-0" style="width: 100%; height: 100%;">
            <v-col cols="6">
              <v-img :src="blog.bild" alt="" cover max-height="700" style="z-index: 0;"></v-img>
            </v-col>
            <v-col class="pa-12" cols="6">
              <h1 class="text-center dm-serif">{{ blog.ueberschrift }}</h1>
              <h2 class="text-center dm-serif" style="
              color: #4a4949">{{ blog.unterUeberschrift }}</h2>
              <br><br>
              <p class="dosis" style="text-align: justify;">{{ blog.text }}</p>
              <p class="mt-10" style="color: #4a4949">{{ blog.autor }}</p>
              <input v-model="blog.datum" class="mt-10" disabled readonly style="color: #8e8c8c" type="date"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>


  </div>
  <div v-if="mobile || tablet">
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover src="~/assets/bg_komprimiert.webp"
           style="width: 100%; height: 450px;  ">
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="d-flex justify-center align-center"
             style="width: 75%; height: 400px;    background-color: #c7dee6;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h2 class="dm-serif mt-n5" style="margin-left: -80px; " v-html="blog[0].text1"></h2>
            </div>
            <div class="pa-3 mt-n7 dosis" style="font-size: 11px; text-align: justify;" v-html="blog[0].text2">
            </div>
            <router-link aria-label="Vita" to="vita">
              <v-btn class="text-center mt-3" theme="dark">zur Vita</v-btn>
            </router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img v-for="(blog, index) in blogs" :key="blog" alt="schwarz-weis Hintergrundbild"
           class="d-flex justify-center align-center"
           cover :src="blog.bild" style="width: 100%; height: 1000px;  ">

      <v-row class="ma-0 pa-0 mx-auto" style="width: 90%; height: 90%; min-height: 800px">
        <v-col :class="{'bgwithe': index % 2 === 1}" class="bgblue" cols="12">
          <v-row class="ma-0" style="width: 100%; height: 100%;">

            <v-col cols="12">
              <h1 class="text-center dm-serif" style="font-size: 28px">{{ blog.ueberschrift }}</h1>
              <h3 class="text-center dm-serif" style="color: #4a4949">{{ blog.unterUeberschrift }}</h3>
              <br><br>
              <p class="dosis" style="text-align: justify;">{{ blog.text }}</p>
              <p class="mt-10" style="color: #4a4949">{{ blog.autor }}</p>
              <input v-model="blog.datum" class="mt-10" disabled readonly style="color: #4a4949" type="date"/></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>

  </div>
</template>

<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const blog = ref([]);
const blogs = ref([]);

// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://maxi-escort.de:8443/auth/blog", {
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

const {data: blogs1, pending1, error2} = await useAsyncData('blog', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://maxi-escort.de:8443/auth/blog/entries", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
  }
});
// Aktualisiere das `landingpage`-Array, wenn die Daten verfügbar sind
if (landingpage1.value) {
  blog.value.push(landingpage1.value);
  console.log(blog.value);
}
if (blogs1.value) {
  blogs.value = blogs1.value;
  console.log(blogs.value);
}

// Setze dynamisch den Head basierend auf den Landingpage-Daten
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: landingpage1.value ? 'Maxi Escort Service' : 'Maxi Escort Service',
  meta: [
    {
      name: 'description',
      content: landingpage1.value?.description || 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Maxi Escort Service in Frankfurt.',
    },
    {
      name: 'keywords',
      content: landingpage1.value?.keywords || 'Escort, Frankfurt, Diskretion, Exklusivität, Maxi Escort Service',
    },
  ],
});
</script>

<script>

import FooterComponent from "~/components/FooterComponent.vue";
import {useScreenStore} from "~/stores/screen.js";

export default {
  data() {

    return {
      blog: [{
        text1: 'Unsere Begleitpersonen',
        text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
        text3: 'Hier Coole Überschrift',
        text4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.et, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor',
      }],
      blogs: [
        {
          ueberschrift: 'Überschrift',
          bild: 'data:image/webp;base64,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',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          ueberschrift: 'Überschrift',
          bild: 'data:image/webp;base64,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',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          ueberschrift: 'Überschrift',
          bild: 'data:image/webp;base64,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',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          ueberschrift: 'Überschrift',
          bild: 'data:image/webp;base64,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',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
      ]
    }
  },
  components: {
    FooterComponent,
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
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');

.card {
  z-index: 300;
  height: 650px;
  width: 80vw;
  background-color: #c7dee6;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}

.dm-serif {
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
}

.dosis {
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.10em;
  line-height: 1.3;
}

p {
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
}

.dosis1 {
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
}

.cardIn1 {
  height: 400px;
  width: 300px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 10%;
}

.cardIn2 {
  height: 300px;
  width: 250px;
  background-color: black;
  box-shadow: 2px -2px 5px rgba(67, 67, 67, 0.87);
  position: absolute;
  left: 28%;
  top: 40%;
}

.bgwithe {
  background-color: #c7dee6 !important;
}

.bgblue {
  background-color: #d4e2ea;
}

.text2 {
  color: #8e8c8c;
  position: relative;
  left: 50%;
  top: 10%;
  font-size: 30px;

}

.text3 {
  position: relative;
  width: 50%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  top: -50%;
  left: 0%;
}

.line-with-dot {
  position: relative;
  width: 50%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  top: -24%;
  left: 50%;
}

.line-with-dot::after {
  content: '';
  position: absolute;
  right: 0; /* Positioniert den Punkt rechts */
  top: 50%; /* Zentriert den Punkt vertikal */
  width: 10px; /* Größe des Punktes */
  height: 10px; /* Größe des Punktes */
  background-color: black; /* Farbe des Punktes */
  border-radius: 50%; /* Macht den Punkt rund */
  transform: translate(50%, -50%); /* Zentriert den Punkt richtig auf der Linie */
}

h1 {
  font-size: 3vw;
}

style >
.vertical-marker {
  position: relative; /* Basis für absolute Positionierung des Punktes und des Striches */
  height: 30vh; /* Gesamthöhe des Elements */
  width: 10px; /* Breite des Elements, schmal genug für einen Punkt und Strich */
  margin: 20px; /* Optional: Abstand von anderen Elementen */
}

.vertical-marker::before {
  content: '';
  position: absolute;
  top: 20vh; /* Positioniert den Punkt ganz oben */
  left: 50%; /* Zentriert den Punkt horizontal */
  width: 10px; /* Größe des Punktes */
  height: 10px; /* Größe des Punktes */
  background-color: black; /* Farbe des Punktes */
  border-radius: 50%; /* Macht den Punkt rund */
  transform: translateX(-50%); /* Zentriert den Punkt horizontal */
}

.vertical-marker::after {
  content: '';
  position: absolute;
  top: 20vh; /* Beginnt direkt unter dem Punkt */
  left: 50%; /* Zentriert den Strich horizontal */
  width: 2px; /* Breite des Striches */
  height: 50vh; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  transform: translateX(-50%); /* Zentriert den Strich horizontal */
}
</style>
