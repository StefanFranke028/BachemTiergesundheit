<template>
  <div v-if="desktop || tabletHorizontal">
    <img alt="schwarz-weis Hintergrundbild" src="~/assets/startseite_bg_komprimiert.webp"
         style="width: 100vw; height: auto;"/>
    <div class="card">
      <div class="cardIn1">
        <div class="text-center text2 dosis">
          <h1 style="font-size: 25px" v-html="landingpage[0].text1 ">
          </h1>
          <br>
          <div class="d-flex justify-center mt-10" style="width: 100%;">
            <router-link style="display: inline-block;" to="vita">
              <v-btn
                  aria-label="Zur Vita"
                  class="text-center mt-n12"
                  style="min-width: 48px; min-height: 48px; padding: 12px 24px;"
                  theme="dark"
              >
                Zur Vita
              </v-btn>
            </router-link>
          </div>
        </div>
      </div>
      <div class="cardIn2">
        <div class="text3 ">

          <h2 style="font-size: 14px" v-html="landingpage[0].text2">


          </h2>
        </div>
        <div class="text4 ">
          <p class="" v-html="landingpage[0].text3">
          </p>
        </div>
        <div class="line-with-dot">
        </div>
        <div class="mt-n3" style=" width: 400px ;margin-left: -140px">
          <v-img alt="Frau und Mann"
                 fetchpriority="high"
                 cover
                 src="~/assets/startseiteBild2.jpeg"
                 style="min-width:100%; height: 310px; width: 560px; min-height: 100%; ">

          </v-img>
        </div>
      </div>
    </div>
    <div class="mt-n2" style="width: 100vw; height:250px; background-color: #e5dbdc">

    </div>
    <div>
      <v-row class="ma-0 pa-0" style="width: 100%; height: 100%">
        <v-col class="pa-0" cols="6" style="background-color: black">
          <v-img alt="frau und mann" fetchpriority="high" src="~/assets/startseite_1_komprimiert.webp" style="z-index: 0"></v-img>
        </v-col>
        <v-col class="pa-0" cols="6" style="background-color: #f1edec">
          <v-row class="d-flex justify-center align-end" style="width: 50%; height: 25%; position: absolute;">
            <v-col cols="6">
              <p v-html="landingpage[0].text5">
              </p>
              <br>
              <br>

              <div class="d-flex justify-center mt-10" style="width: 100%;">
                <router-link to="highClassBegleitungen">
                  <v-btn aria-label="Zu unseren Escortmodels" class="text-center" theme="dark"> ZU Unseren
                    Escortmodels
                  </v-btn>
                </router-link>
              </div>
            </v-col>

          </v-row>
          <div class="pt-16" style="position: relative; top: 10vw ; left:-40%">
            <h3 class=" text-center dm-serif" style="font-size: 22px" v-html="landingpage[0].text4"></h3>
            <div class="vertical-marker">
            </div>
          </div>

        </v-col>
      </v-row>
    </div>
    <div class="d-flex justify-center align-center" style="height: 450px; width: 100vw;">
      <div style="background-color: #f1edec; max-height: 400px; width: 800px;margin-top: 300px; margin-left: -20%">
        <v-row style=" width: 130%; margin-top: -15%; margin-left: 70px">
          <v-col class="d-flex justify-center" cols="6">

            <v-img fetchpriority="high" alt="frau uns mann" cover src="~/assets/startseiteBild1.jpeg"
                   style="height: 80%; box-shadow: 2px 2px 5px black">

            </v-img>
          </v-col>
          <v-col class="d-flex justify-center" cols="6" style="margin-top: 15%">
            <div class="ml-16" style="height: 80%">
              <h2 class="dosis1" style="color: #000000 ;font-size: 26px" v-html="landingpage[0].text6"></h2>
              <p class="mt-2" style="color: #000000" v-html="landingpage[0].text7">

              </p>
              <br>
              <br>
              <p v-html="landingpage[0].text8">


              </p>
              <br>
              <p v-html="landingpage[0].text9">

              </p>
              <br>
              <p v-html="landingpage[0].text10">

              </p>

            </div>

          </v-col>
        </v-row>
      </div>
    </div>
    <div class="mt-n2" style="width: 100vw; height:300px; background-color: white">

    </div>

  </div>
  <div v-if="mobile || tablet" style="width: 100vw; ">
    <v-img fetchpriority="high" alt="Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/startseite_bg_komprimiert_mobile.webp"
           style="width: 100%; height: 450px;  ">
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div style="width: 75%; height: 400px;  background-color: #e5dbdc;">
          <div style="height: 250px; width: 70%; background-color: white; position: relative; left:21%; top: 10%">
            <h1 class="text-center px-4 text5 dosis" v-html="landingpage[0].text1">


            </h1>
          </div>
          <v-img fetchpriority="high" alt="Frau und Mann" cover src="~/assets/startseiteBild2.jpeg"
                 style="height: 180px; width: 70%; background-color: black; position: relative; left:5%; top: -15%; box-shadow: 2px -3px 5px rgba(0,0,0,0.75)">
          </v-img>
        </div>
      </div>
    </v-img>
    <div class="pa-6" style="background-color:  #e5dbdc; width: 100vw; height: 130px">
      <h2 class="mt-n2 text-center h1mobile dm-serif" style="font-size: 15px">Willkommen bei Mila Escort,</h2>
      <p class="text-center mt-3" style="font-size: 12px" v-html="landingpage[0].text2+' ' + landingpage[0].text3">


      </p>
    </div>

    <div class="" style="background-color:  white; width: 100vw; margin-top: 50px; margin-bottom: 40px">
      <v-row class="ma-0 justify-center align-center" style="width: 100%;height: 100%">
        <v-col cols="10" style="background-color: #f1edec; height: 80%">
          <v-row class="ma-0" style="width: 100%;">
            <v-col cols="6">
              <div>
                <v-img fetchpriority="high" alt="frau und mann" class="mt-n10" cover src="~/assets/startseiteBild1.jpeg"
                       style=" height: 120px;">

                </v-img>
                <p class="dm-serif mt-2" style="color: #000000;font-size: 12px" v-html="landingpage[0].text8"></p>
                <p class="dm-serif mt-2" style="color: #000000;font-size: 12px" v-html="landingpage[0].text9"></p>
                <p class="dm-serif mt-2" style="color: #000000;font-size: 12px" v-html="landingpage[0].text10"></p>
              </div>
            </v-col>
            <v-col cols="6">
              <h2 class="dm-serif" style="color: #000000;font-size: 12px" v-html="landingpage[0].text6"></h2>
              <p class="dm-serif mt-2" style="color: #000000;font-size: 12px" v-html="landingpage[0].text7"></p>

            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </div>
    <div class="" style="background-color:  #f1edec; width: 100vw; padding-bottom: 20px">
      <div class="pt-5">
        <h3  class="mt-3 text-center  dm-serif" style="font-size: 13px" v-html="landingpage[0].text4"></h3>

      </div>
      <div class="px-10 mt-4">
        <p class="text-center" style="font-size: 14px" v-html="landingpage[0].text5">

        </p>
      </div>
    </div>
  </div>
</template>



<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const landingpage = ref([]);

// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://mila-escort.de:8443/auth/landingpage", {
      method: 'GET',
      server: true,
      lazy: true,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
    // Optional: Setzen von Fallback-Daten oder Fehlerbehandlung
    return {};
  }
});

// Aktualisiere das `landingpage`-Array, wenn die Daten verfügbar sind
if (landingpage1.value) {
  landingpage.value.push(landingpage1.value);
}


useHead({
  htmlAttrs: {
    lang: 'de' // Setzt die Sprache auf Deutsch
  },
  title: 'Mila Escort Frankfurt – Luxus Begleitservice mit Niveau',
  link: [
    {
      rel: 'preload',
      href: '/_nuxt/assets/startseite_bg_komprimiert_mobile.webp',
      as: 'image',
      media: '(max-width: 600px)', // Optional: nur bei kleinen Screens
    },
    {
      rel: 'preload',
      href: '/startseite_bg_komprimiert.webp',
      as: 'image',
      media: '(min-width: 601px)', // Optional
    },
    {
      rel: 'preload',
      href: '/startseite_bg_komprimiert.webp',
      as: 'image',
    },
    {
      rel: 'canonical',
      href: `https://mila-escort.de`,
    },
  ],
  meta: [
    {
      name: 'description',
      content: landingpage1.value?.description ?? 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Mila Escort Service in Frankfurt.',
    },
    {
      name: 'keywords',
      content: landingpage1.value?.keywords ?? 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Maxi Escort Service in Frankfurt.',
    },
  ],
});
</script>
<script>
import {useScreenStore} from "~/stores/screen.js";
import {Icon} from '@iconify/vue';

export default {
  name: "Mila-Escort",

  components: {
    Icon,
  },
  data() {
    return {};
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

  mounted() {

  },
  methods: {},
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');

.card {
  z-index: 300;
  height: 650px;
  width: 80vw;
  background-color: #e5dbdc;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}

.dm-serif {
  font-family: "Aptos", serif;
  font-weight: 100;
  font-style: normal;
}

.dosis {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.10em;

}

p {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
}

.dosis1 {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

.cardIn1 {
  height: 400px;
  width: 350px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 10%;
}

.cardIn2 {
  height: 300px;
  width: 250px;
  box-shadow: 2px -2px 5px rgba(67, 67, 67, 0.87);
  position: absolute;
  left: 28%;
  top: 40%;
}

.text2 {
  color: #5a5959;
  position: relative;
  left: 50%;
  top: 10%;
  font-size: 30px;

}

.text5 {
  color: #4c4c4c;
  position: relative;
  left: 0%;
  top: 10%;
  font-size: 15px;

}

.text3 {
  position: relative;
  width: 50%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  top: -50%;
  left: 0%;
}

.text4 {
  position: relative;
  width: 60%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  top: 40%;
  left: 110%;
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
  font-size: 2.3vw;
}

.h1mobile {
  font-size: 6vw;
}

.vertical-marker {
  position: relative; /* Basis für absolute Positionierung des Punktes und des Striches */
  height: 30vh; /* Gesamthöhe des Elements */
  width: 10px; /* Breite des Elements, schmal genug für einen Punkt und Strich */
  margin: 20px; /* Optional: Abstand von anderen Elementen */
}

.vertical-marker::before {
  content: '';
  position: absolute;
  top: 8vw; /* Positioniert den Punkt ganz oben */
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
  top: 8vw; /* Beginnt direkt unter dem Punkt */
  left: 50%; /* Zentriert den Strich horizontal */
  width: 2px; /* Breite des Striches */
  height: 25vw; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  transform: translateX(-50%); /* Zentriert den Strich horizontal */
}
</style>
