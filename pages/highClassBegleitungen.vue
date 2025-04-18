<template>
  <div v-if="desktop|| tabletHorizontal" class="mt-3" style="width: 100vw;">
    <div class="card">

      <div class="cardIn1 px-5">
        <h1 class="dm-serif" style="margin-left: -90px; font-size: 22px" v-html="escort[0].text1"></h1>

        <div class="vertical-marker">
        </div>


        <p class="dosis" style="margin-top: -100px;" v-html="escort[0].text2"></p>
        <router-link style="position: relative; left: -14%; top:15vh" to="getInTouch">
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


    <div class="d-flex justify-center pb-5" style="width: 100vw; padding-top: 7%">
      <v-row class="d-flex justify-center" style="width: 70%;">
        <v-col v-for="dame in damen" :key="dame" class=" mb-4 mt-10 py-0 px-4 mx-2" cols="3">
          <v-row class="ma-0 px-5 damencard mt-5" style="width: 100%; height: 100%">
            <v-col class="pa-0 d-flex justify-center pt-5" cols="12">
              <v-carousel hide-delimiters style="height: 420px; width: 350px; border-radius: 5px" theme="dark">
                <v-carousel-item
                    v-for="bild in dame.bilder"
                    :key="bild" :src="bild.imageBase64"
                    alt="bild der Dame"
                    cover
                ></v-carousel-item>

              </v-carousel>
            </v-col>
            <v-col class="px-2 pb-8" cols="12">
              <h2 class="text-center dosis" style="font-size: 1vw;">{{
                  dame.name
                }}</h2>


              <p class="dosis mt-2" style="font-size: 12px;" v-html=" dame.beschreibung ">

              </p>
              <p v-if="dame.preisKategorie" class="dosis mt-2" style="font-size: 12px;">
                <b>Preiskategorie:</b> {{ dame.preisKategorie }}
              </p>
              <p v-if="dame.geburtsalter" class="dosis " style="font-size: 12px;">
                <b>Alter:</b> {{ dame.geburtsalter }}
              </p>
              <p v-if="dame.groesse" class="dosis " style="font-size: 12px;">
                <b>Größe:</b> {{ dame.groesse }}

              </p>
              <p v-if="dame.haarfarbe" class="dosis " style="font-size: 12px;">
                <b>Haarfarbe:</b> {{ dame.haarfarbe }}
              </p>
              <p v-if="dame.augenfarbe" class="dosis " style="font-size: 12px;">
                <b>Augenfarbe:</b> {{ dame.augenfarbe }}
              </p>
              <p v-if="dame.interessenHobbys" class="dosis mt-1" style="font-size: 12px;">
                <b>Interessen und Hobbys:</b> <br><p v-html="dame.interessenHobbys"/>
              </p>
              <p v-if="dame.dienstleistungen" class="dosis mt-1" style="font-size: 12px;">
                <b>Dienstleistungen:</b> <br> <p v-html="dame.dienstleistungen"/>
              </p>
              <p v-if="dame.reiseverfuegbarkeit" class="dosis mt-1" style="font-size: 12px;">
                <b>Geschenke Tipps:</b> {{ dame.reiseverfuegbarkeit }}
              </p>
              <p class="dosis mt-1" style="font-size: 13px;">
                <b>
                  Dating &amp; more
                </b>
              </p>
              <p v-if="dame.paarchenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Pärchen Begleitung:</b>
                <span v-if="dame.paarchenBegleitung">
                Ja
                </span>
              </p>
              <p v-if="!dame.paarchenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Pärchen Begleitung:</b>
                <span v-if="!dame.paarchenBegleitung">
                Nein
                </span>
              </p>

              <p v-if="dame.damenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Damen Begleitung:</b>
                <span v-if="dame.damenBegleitung">
                Ja
                </span>
              </p>
              <p v-if="!dame.damenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Damen Begleitung:</b>
                <span v-if="!dame.damenBegleitung">
                Nein
                </span>
              </p>
              <p v-if="dame.dinnerDate" class="dosis mt-1" style="font-size: 12px;">
                <b>Dinner Date:</b>
                <span v-if="dame.dinnerDate">
                Ja
                </span>
              </p>
              <p v-if="!dame.dinnerDate" class="dosis mt-1" style="font-size: 12px;">
                <b>Dinner Date:</b>
                <span v-if="!dame.dinnerDate">
                Nein
                </span>
              </p>
              <p v-if="dame.praesentation" class="dosis mt-1" style="font-size: 12px;">
                <b>Präsentation:</b> <br> <p v-html="dame.praesentation"/>
              </p>
              <p v-if="dame.staedte && dame.staedte.length > 0" class="dosis mt-1" style="font-size: 12px;">
                <b>Ich begleite Sie gerne in Städte wie:</b> <br>
                <span v-for="stadt in dame.staedte" :key="stadt">
                  {{ stadt.name }},
                </span>
              </p>

              <p>


              </p>
              <p class="mt-3" style="cursor: pointer; font-size: 12px; color: #d62f2f" @click="gotoHinweis(dame) ">
                Rechtlicher Hinweis!</p>
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
          <div style="height: 250px; width: 75%; background-color: white; ">
            <div class="text-center " style="position: relative; top:-50px">
              <h1 class="text-center text5 dosis" v-html="escort[0].text1">
              </h1>
            </div>
            <div class="pa-3 mt-n16 dosis" style="font-size: 11px; " v-html="escort[0].text2">

            </div>
            <router-link style=" " to="getInTouch">
              <v-btn class="text-center mt-3" style="position:absolute; top:80%" theme="dark">Kontakt</v-btn>
            </router-link>
          </div>
        </div>

      </div>

    </v-img>
    <div class="d-flex justify-center" style="width: 100vw; padding-top: 7%">
      <v-row class="d-flex justify-center" style="width: 70%;">
        <v-col v-for="dame in damen" :key="dame" class="damencard mb-4 mt-10 py-0 px-4 mx-2" cols="10">
          <v-row class="ma-0  mt-5" style="width: 100%; height: 100%">
            <v-col class="pa-0" cols="12">
              <v-carousel hide-delimiters style="height: 390px; border-radius: 4px" theme="dark">
                <v-carousel-item
                    v-for="bild in dame.bilder"
                    :key="bild" :src="bild.imageBase64"
                    alt="bild der Dame"
                    cover
                ></v-carousel-item>

              </v-carousel>
            </v-col>
            <v-col class="px-2 pb-8" cols="12">
              <h2 class="text-center dosis" style="font-size: 16px;">{{
                  dame.name
                }}</h2>


              <p class="dosis mt-2" style="font-size: 12px;" v-html=" dame.beschreibung ">

              </p>
              <p v-if="dame.preisKategorie" class="dosis mt-2" style="font-size: 12px;">
                <b>Preiskategorie:</b> {{ dame.preisKategorie }}
              </p>
              <p v-if="dame.geburtsalter" class="dosis" style="font-size: 12px;">
                <b>Alter:</b> {{ dame.geburtsalter }}
              </p>
              <p v-if="dame.groesse" class="dosis " style="font-size: 12px;">
                <b>Größe:</b> {{ dame.groesse }}

              </p>
              <p v-if="dame.haarfarbe" class="dosis " style="font-size: 12px;">
                <b>Haarfarbe:</b> {{ dame.haarfarbe }}
              </p>
              <p v-if="dame.augenfarbe" class="dosis " style="font-size: 12px;">
                <b>Augenfarbe:</b> {{ dame.augenfarbe }}
              </p>
              <p v-if="dame.interessenHobbys" class="dosis mt-1" style="font-size: 12px;">
                <b>Interessen und Hobbys:</b> <br> {{ dame.interessenHobbys }}
              </p>
              <p v-if="dame.dienstleistungen" class="dosis mt-1" style="font-size: 12px;">
                <b>Dienstleistungen:</b> <br> <span v-html="dame.dienstleistungen"/>

              </p>
              <p v-if="dame.reiseverfuegbarkeit" class="dosis mt-1" style="font-size: 12px;">
                <b>Geschenke Tipps:</b> {{ dame.reiseverfuegbarkeit }}
              </p>
              <p class="dosis mt-1" style="font-size: 13px;">
                <b>
                  Dating &amp; more
                </b>
              </p>
              <p v-if="dame.paarchenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Pärchen Begleitung:</b>
                <span v-if="dame.paarchenBegleitung">
                Ja
                </span>
              </p>
              <p v-if="!dame.paarchenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Pärchen Begleitung:</b>
                <span v-if="!dame.paarchenBegleitung">
                Nein
                </span>
              </p>

              <p v-if="dame.damenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Damen Begleitung:</b>
                <span v-if="dame.damenBegleitung">
                Ja
                </span>
              </p>
              <p v-if="!dame.damenBegleitung" class="dosis mt-1" style="font-size: 12px;">
                <b>Damen Begleitung:</b>
                <span v-if="!dame.damenBegleitung">
                Nein
                </span>
              </p>
              <p v-if="dame.dinnerDate" class="dosis mt-1" style="font-size: 12px;">
                <b>Dinner Date:</b>
                <span v-if="dame.dinnerDate">
                Ja
                </span>
              </p>
              <p v-if="!dame.dinnerDate" class="dosis mt-1" style="font-size: 12px;">
                <b>Dinner Date:</b>
                <span v-if="!dame.dinnerDate">
                Nein
                </span>
              </p>
              <p v-if="dame.praesentation" class="dosis mt-1" style="font-size: 12px;">
                <b>Präsentation:</b> <br> {{ dame.praesentation }}
              </p>
              <p v-if="dame.staedte && dame.staedte.length > 0" class="dosis mt-1" style="font-size: 12px;">
                <b>Ich begleite Sie gerne in Städte wie:</b> <br>
                <span v-for="stadt in dame.staedte" :key="stadt">
                  {{ stadt.name }},
                </span>
              </p>

              <p>


              </p>

              <p class="mt-3" style="cursor: pointer; font-size: 12px; color: #d62f2f" @click="gotoHinweis(dame) ">
                Rechtlicher Hinweis!</p>
            </v-col>
          </v-row>
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
    const response = await $fetch("https://mila-escort.de:8443/auth/escort", {
      method: 'GET',
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

const {data: damen1, pending2, error2} = await useAsyncData('damen', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://mila-escort.de:8443/auth/dame", {
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
  title: 'Mila Escort High-Class Begleitungen',
  link: [
    {
      rel: 'canonical',
      href: `https://mila-escort.de/highClassBegleitungen`,
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
import {useUserStore} from '@/stores/user';
import {mapActions} from 'pinia';

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
    formatCities(staedte) {
      const arr = Array.isArray(staedte) ? staedte : Array.from(staedte);
      const len = arr.length;
      if (len === 0) return "";
      if (len === 1) return arr[0].name;
      if (len === 2) return `${arr[0].name} und ${arr[1].name}`;
      // Bei mehr als 2 Einträgen: Alle bis zur vorletzten mit Komma trennen, dann " und " vor die letzte setzen
      const firstPart = arr.slice(0, len - 1).map(stadt => stadt.name).join(", ");
      return `${firstPart} und ${arr[len - 1].name}`;
    },
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
  letter-spacing: 0.10em;

}

p {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
}


.text5 {
  color: #4c4c4c;
  position: relative;
  left: 0%;
  top: 10%;
  font-size: 14px;

}

.damencard {
  border-radius: 7px;
  border: 2px solid black;
  box-shadow: 1px 1px 6px #7a7979;

}

</style>
