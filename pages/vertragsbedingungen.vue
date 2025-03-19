<template>
  <div v-if="desktop || tabletHorizontal">
    <div class="card">
      <div class="cardIn1">
        <div class="text-center text2 dosis" v-html="vertragsbedingungen[0].text2">
        </div>
      </div>
      <div class="cardIn2">
        <div class="text3">
          <h1 class="text-center dm-serif" style="font-size: 22px" v-html="vertragsbedingungen[0].text1">
          </h1>
        </div>
        <div class="line-with-dot">
        </div>
      </div>
    </div>

    <div class="mt-n2" style="width: 100vw; height:150px; background-color: #c7dee6">
    </div>

    <div>
      <v-row v-for="(vertrag, index) in vertragsbedingungen" :key="vertrag" class="ma-0 pa-0"
             style="width: 100%; height: 100%; min-height: 500px">
        <v-col :class="{'bgwithe': index % 2 === 1}" class="bgblue" cols="12">
          <v-row class="ma-0" style="width: 100%; height: 100%;">
            <v-col class="d-flex align-center" cols="6">
              <v-img :src="vertrag.bild" alt="" cover max-height="700" style="z-index: 0;"></v-img>
            </v-col>
            <v-col class="pa-12" cols="6">
              <h2 class="text-center mt-4 dm-serif" style="font-size: 1.1vw" v-html="vertrag.ueberschrift"></h2>

              <h3 class="text-center dm-serif" style="color: #4a4949; font-size: 0.9vw"
                  v-html="vertrag.unterUeberschrift"></h3>
              <br><br>
              <p class="dosis" style="text-align: justify;" v-html="vertrag.text"></p>
              <p class="mt-10" style="color: #4a4949" v-html="vertrag.autor"></p>
              <input v-model="vertrag.datum" aria-label="test" class="mt-10" disabled readonly style="color: #8e8c8c"
                     type="date"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

  </div>

  <div v-if="mobile || tablet">
    <v-img alt="Schwarz-Weiß-Hintergrundbild"
           aspect-ratio="1.78"
           class="d-flex justify-center align-center"
           src="~/assets/bg_komprimiert.webp"
           style="width: 100%; height: auto; object-fit: contain;">
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="d-flex justify-center align-center"
             style="width: 75%; height: 400px; background-color: #c7dee6;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white;">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h1 class="dm-serif" style="margin-left: -80px;" v-html="vertragsbedingungen[0].text1"></h1>
            </div>
            <div class="pa-3 mt-n7 dosis" style="font-size: 11px; text-align: justify;"
                 v-html="vertragsbedingungen[0].text2">
            </div>
            <router-link aria-label="Vita" to="vita">
              <v-btn class="text-center mt-3" theme="dark">zur Vita</v-btn>
            </router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img v-for="(vertrag, index) in vertragsbedingungen" :key="vertrag" :src="vertrag.bild"
           alt="schwarz-weiß Hintergrundbild"
           class="d-flex justify-center align-center" cover style="width: 100%; padding-top: 20px">

      <v-row class="ma-0 pa-0 mx-auto" style="width: 90%; height: 90%; min-height: 800px">
        <v-col :class="{'bgwithe': index % 2 === 1}" class="bgblue" cols="12">
          <v-row class="ma-0" style="width: 100%; height: 100%;">

            <v-col cols="12">
              <h2 class="text-center dm-serif" style="font-size: 12px" v-html="vertrag.ueberschrift"></h2>
              <h2 class="text-center dm-serif" style="color: #4a4949; font-size: 11px"
                  v-html="vertrag.unterUeberschrift"></h2>
              <br><br>
              <p class="dosis" style="text-align: justify; font-size: 11px" v-html="vertrag.text"></p>
              <p class="mt-10" style="color: #4a4949" v-html="vertrag.autor"></p>
              <input v-model="vertrag.datum" aria-label="test" class="mt-10" disabled readonly style="color: #4a4949"
                     type="date"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>

  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useScreenStore} from '~/stores/screen.js';

// Reaktive Daten und Computed Properties aus dem Store
const screenStore = useScreenStore();
const desktop = computed(() => screenStore.desktop);
const tabletHorizontal = computed(() => screenStore.tabletHorizontal);
const mobile = computed(() => screenStore.mobile);
const tablet = computed(() => screenStore.tablet);

// Reaktive Daten für Vertragsbedingungen
const vertragsbedingungen = ref([]);

// Abrufen von Daten (async)
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;
  if (process.client) {
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/blog", {
      method: 'GET',
      headers: {Authorization: token ? `Bearer ${token}` : undefined},
    });
    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
  }
});

const {data: blogs1, pending1, error2} = await useAsyncData('blog', async () => {
  let token = null;
  if (process.client) {
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/blog/entries", {
      method: 'GET',
      headers: {Authorization: token ? `Bearer ${token}` : undefined},
    });
    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Blogs:', e);
  }
});

// Setze die Daten in reaktive Variablen
if (landingpage1.value) vertragsbedingungen.value.push(landingpage1.value);
if (blogs1.value) vertragsbedingungen.value = blogs1.value;

// Setze den Head dynamisch für SEO
useHead({
  title: 'Maxi-Escort Blog',
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

export default {
  data() {
    return {
      vertragsbedingungen: [{ /* Beispiel Vertragsbedingungen */}],
    };
  },
  components: {
    FooterComponent,
  },
  computed: {
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
/* Stildefinitionen wie in deinem Beispiel */
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
  font-family: "Aptos", serif;
  font-weight: 400;
  font-style: normal;
}

.dosis {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.10em;
  line-height: 1.3;
}

p {
  font-family: "Aptos", sans-serif;
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
  color: #5e5d5d;
  position: relative;
  left: 50%;
  top: 10%;
  font-size: 30px;
}

.text3 {
  position: relative;
  width: 100%; /* Breite des Striches anpassen */
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

.vertical-marker-mobile {
  /* Stil für vertikale Markierungen auf mobilen Geräten */
  position: relative;
  top: 20px;
  left: 50%;
  width: 2px;
  height: 20px;
  background-color: black;
}
</style>
