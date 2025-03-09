<template>
  <div v-if="desktop|| tabletHorizontal" class="mt-3" style="width: 100vw;">
    <div class="card">
      <div class="cardIn1 px-5">
        <h1 class="dm-serif" style="margin-left: -90px; font-size: 22px" v-html="escort[0].text1"></h1>
        <div class="vertical-marker">
        </div>
        <p class="dosis" style="margin-top: -100px;" v-html="escort[0].text2"></p>
        <router-link style="position: relative; left: -14%; top:15vh" to="kontakt">
          <v-btn class="text-center" theme="dark">Kontakt</v-btn>
        </router-link>
      </div>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row class="mx-0 pa-0" style="width: 100%;">
        <v-col class="pa-0" cols="6">
          <v-img alt="Federn" cover max-height="600px" src="~/assets/federn.webp" style="z-index: 0"></v-img>
        </v-col>
        <v-col class="pa-0" cols="6">
          <v-img alt="Decke" cover max-height="600px" src="~/assets/decke_1_komprimiert.webp"
                 style="z-index: 0"></v-img>
        </v-col>
      </v-row>
    </div>


    <div class="d-flex justify-center" style="width: 100vw; padding-top: 7%">
      <v-row style="width: 70%;" class="d-flex justify-center">
        <v-col class="damencard mb-4 mt-10 py-0 px-4" v-for="dame in damen" cols="3">
          <v-row :key="dame" class="ma-0  mt-5" style="width: 100%; height: 100%">
            <v-col class="pa-0" cols="12">
              <v-carousel style="height: 500px" theme="dark">
                <v-carousel-item
                    v-for="bild in dame.bilder"
                    :key="bild" :src="bild.imageBase64"
                    alt="bild der Dame"
                    cover
                ></v-carousel-item>

              </v-carousel>
            </v-col>
            <v-col class="px-2 pb-12" cols="12">
              <h2 class="text-center" style="font-size: 2vw; font-family: 'Edwardian Script ITC', Serif">{{
                dame.name
                }}</h2>


              <p style="cursor: pointer; font-size: 12px; color: #d62f2f" @click="gotoHinweis(dame) ">Rechtlicher Hinweis!</p>

              <p  class="dosis mt-2" style=" font-size: 14px; text-align: justify;">{{ dame.beschreibung }}
                <br>

                <b v-if="dame.geburtsalter">Alter:</b> <span style="font-family: 'Zapfino', Serif">
                  {{ dame.geburtsalter }}
                </span>

                <br>
                <b v-if="dame.groesse">Größe:</b> {{ dame.groesse }}

                <br>
                <b v-if="dame.haarfarbe">Haarfarbe:</b> {{ dame.haarfarbe }}

                <br>
                <b v-if="dame.augenfarbe">Interessen und Hobbys:</b> {{ dame.augenfarbe }}

                <br>
                <b v-if="dame.dienstleistungen">Dienstleistungen:</b> {{ dame.dienstleistungen }}

                <br>
                <b v-if="dame.reiseverfuegbarkeit">Ich begleite Sie gerne in Städte wie:</b> {{ dame.reiseverfuegbarkeit }}

                <br>
                <b v-if="dame.paarchenBegleitung">Pärchen Begleitung:</b>
                <span v-if="dame.paarchenBegleitung">
                Ja
                </span>
                <b v-if="!dame.paarchenBegleitung">Pärchen Begleitung:</b>
                <span v-if="!dame.paarchenBegleitung">
                  Nein

                </span>
                <br>
                <b v-if="dame.damenBegleitung">Damen Begleitung:</b>
                <span v-if="dame.damenBegleitung">

                Ja
                </span>
                <b v-if="!dame.damenBegleitung">Damen Begleitung:</b>
                <span v-if="!dame.damenBegleitung">
                    Nein
                </span>
                <br>
                <b v-if="dame.praesentation">Damen Begleitung:</b>  {{ dame.praesentation }}
                <br>
                <b v-if="dame.staedte && dame.staedte.length > 0">Städte: &nbsp;</b>
                <span v-for="stadt in dame.staedte" :key="stadt">
                  {{ stadt.name }}, &nbsp;
                </span>

              </p>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

  </div>
  <div v-if="mobile || tablet">
    <v-img alt="Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/bg_komprimiert.webp"
           style="width: 100%; height: 450px;  ">
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="d-flex justify-center align-center"
             style="width: 75%; height: 400px;    background-color: #c7dee6;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h1 class="dm-serif mt-2" style="margin-left: -80px; " v-html="escort[0].text1"></h1>
            </div>
            <div class="pa-3 mt-n7 dosis" style="font-size: 11px; text-align: justify;" v-html="escort[0].text2">

            </div>
            <router-link style="position: relative; left: -8%; top:5vh" to="kontakt">
              <v-btn class="text-center" theme="dark">Kontakt</v-btn>
            </router-link>
          </div>
        </div>

      </div>

    </v-img>
    <div v-for="dame in damen" :key="dame" class="pb-8" style="width: 100vw; ">
      <v-row class="mx-0 pa-0" style="width: 100%; ">
        <v-col class="pa-0" cols="12">
          <v-carousel style="height: 600px" theme="dark">
            <v-carousel-item
                v-for="bild in dame.bilder"
                :key="bild" :src="bild.imageBase64"
                alt="Damenbild"
                cover
            ></v-carousel-item>

          </v-carousel>
        </v-col>
        <v-col class="mx-auto" cols="11">
          <h2 class="text-center dm-serif mt-n2" style="font-size: 8vw; font-family: 'Edwardian Script ITC', Serif">
            {{ dame.name }}</h2>
          <br>
          <br>
          <p @click="navigateTo('hinweis')">Rechtlicher Hinweis</p>
          <p class="dosis mt-n10" style=" text-align: justify; font-size: 13px">{{ dame.vita }}
            <br>

            <b v-if="dame.motto">Mein Motto:</b>
            <span style="font-family: 'Zapfino', Serif">
                {{ dame.motto }}
            </span>
            <br>

            <b v-if="dame.interessen">Meine Interessen:</b> {{ dame.interessen }}
            <br>

            <b v-if="dame.nutzungMeinerZeit">Nutzung meiner Zeit:</b> {{ dame.nutzungMeinerZeit }}
            <br>

            <b v-if="dame.getränke">Getränke:</b> {{ dame.getränke }}

            <br>
            <b v-if="dame.cuisine">Cuisine:</b> {{ dame.cuisine }}

            <br>
            <b v-if="dame.blume">Blume:</b> {{ dame.blume }}

            <br>
            <b v-if="dame.parfüm">Parfüm:</b> {{ dame.parfüm }}

            <br>
            <b v-if="dame.staedte && dame.staedte.length > 0">Städte: &nbsp;</b>
            <span v-for="stadt in dame.staedte" :key="stadt">
                  {{ stadt.name }}, &nbsp;
                </span>

            <br>
            <b v-if="dame.weitereGeschenkideen">Weitere Geschenkideen:</b> {{ dame.weitereGeschenkideen }}

            <br>
            <b v-if="dame.arrangements">Arrangements:</b> {{ dame.arrangements }}
          </p>

        </v-col>
      </v-row>
    </div>

  </div>
</template>


<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const escort = ref([]);
const damen = ref([]);

// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/escort", {
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

const {data: damen1, pending2, error2} = await useAsyncData('damen', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/dame", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der damen:', e);
    // Optional: Setzen von Fallback-Daten oder Fehlerbehandlung
  }
});

// Aktualisiere das `landingpage`-Array, wenn die Daten verfügbar sind
if (landingpage1.value) {
  escort.value.push(landingpage1.value);
  console.log(escort.value);
}
if (damen1.value) {
  damen.value = damen1.value;
  console.log(damen.value);
}

// Setze dynamisch den Head basierend auf den Landingpage-Daten
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Maxi Escort Damen',
  link: [
    {
      rel: 'canonical',
      href: `https://maxi-escort.de/damen`,
    },
  ],
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


import {useScreenStore} from "~/stores/screen.js";
import { useUserStore } from '@/stores/user';
import { mapActions } from 'pinia';

export default {
  name: "damen",
  data() {
    return {
      dameInput: '',
      escort: [{
        text1: 'Unsere Begleitpersonen',
        text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      }],

    }
  },
  mounted() {
  },
  methods: {
    ...mapActions(useUserStore, ['setDame']),
    setDameInStore(dame) {
      if (dame && dame.trim() !== '') {
        this.setDame(dame);
        console.log('Dame gesetzt:', useUserStore().dame); // Korrekte Zugriffsmethode in Pinia
      }
    },

    gotoHinweis(dame) {
      this.setDameInStore(dame.name);
      navigateTo('/hinweis'); // Sicherstellen, dass die Route existiert
    },

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


.cardIn1 {
  height: 400px;
  width: 400px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 10%;
}

.vertical-marker-mobile {
  position: relative; /* Basis für absolute Positionierung des Punktes und des Striches */
  height: 84px; /* Gesamthöhe des Elements */
  width: 10px; /* Breite des Elements, schmal genug für einen Punkt und Strich */
  margin: 20px; /* Optional: Abstand von anderen Elementen */
  left: 0px;
  top: -30vh
}

.vertical-marker-mobile::before {
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

.vertical-marker-mobile::after {
  content: '';
  position: absolute;
  top: 20vh; /* Beginnt direkt unter dem Punkt */
  left: 50%; /* Zentriert den Strich horizontal */
  width: 2px; /* Breite des Striches */
  height: 330%; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  transform: translateX(-50%); /* Zentriert den Strich horizontal */
}

h1 {
  font-size: 3vw;
}

.vertical-marker {
  position: relative; /* Basis für absolute Positionierung des Punktes und des Striches */
  height: 100px; /* Gesamthöhe des Elements */
  width: 10px; /* Breite des Elements, schmal genug für einen Punkt und Strich */
  margin: 20px; /* Optional: Abstand von anderen Elementen */
  left: -80px;
  top: -20vh
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
  height: 330%; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  transform: translateX(-50%); /* Zentriert den Strich horizontal */
}

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

}

p {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
}
.damencard{
  border-radius: 7px;
border:2px solid black;
}

</style>
