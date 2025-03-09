<template>
  <div v-if="desktop|| tabletHorizontal" class="mt-3" style="width: 100vw;">
    <div class="card">
      <div class="cardIn1 px-5">
        <h1 class="dm-serif" style="margin-left: -90px; font-size: 22px" v-html="honorare[0].text1"></h1>
        <div class="vertical-marker">
        </div>
        <p class="dosis " style="margin-top: -200px"  v-html="honorare[0].text2">
        </p>
        <div class="d-flex justify-center mt-10" style="width: 100%;">
          <router-link style="position: relative; left: -14%; top:11vh" to="damen">
            <v-btn class="text-center" theme="dark">ZU Unseren Escortmodels</v-btn>
          </router-link>

        </div>
      </div>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row class="mx-0 pa-0" style="width: 100%;">
        <v-col class="pa-0" cols="6">
          <v-img alt="" cover max-height="600px" src="~/assets/federn.webp" style="z-index: 0"></v-img>
        </v-col>
        <v-col class="pa-0" cols="6">
          <v-img alt="" cover max-height="600px" src="~/assets/decke_1_komprimiert.webp" style="z-index: 0"></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="width: 100vw; height: 900px">
      <v-row class="mx-0 pa-0" style="width: 100%; height: 100%">
        <v-col class="pa-0" cols="6" style="background-color: #d4e2ea">
          <v-row class="ma-0 align-center" style="width: 100%; height: 100%">
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <h2 class="text-center dm-serif" style="font-size: 2vw">Maxi Dinner Date</h2>
              <br>
              <br>
              <v-row style="width: 100%; border-radius: 10px">
                <v-col class="d-flex justify-center tabelleleft" cols="6">
                  <h3>
                    Dauer
                  </h3>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="d-flex justify-center tabelleright" cols="6">
                  <h3>
                    Geschenk

                  </h3>
                </v-col>


              </v-row>
              <v-row v-for="preis in dinnerPreise" :key="preis" style="width: 100%; ">
                <v-col class="d-flex justify-center tabelleleftmid" cols="6">
                  <p>
                    {{ preis.dauer }}
                  </p>
                </v-col>
                <v-col class="d-flex justify-center tabellerightmid" cols="6">
                  <p>
                    {{ preis.geschenk }}
                  </p>
                </v-col>
              </v-row>

            </v-col>
          </v-row>
        </v-col>
        <v-col class="pa-0" cols="6">
          <v-img alt="" cover max-height="900" src="~/assets/honorar_3_komprimiert.webp" style="z-index: 0;"></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="width: 100vw; height: 900px">
      <v-row class="mx-0 pa-0" style="width: 100%; height: 100%">
        <v-col class="pa-0" cols="6">
          <v-img alt="" cover max-height="900" src="~/assets/honorar_1_komprimiert.webp" style="z-index: 0;"></v-img>
        </v-col>
        <v-col class="pa-0" cols="6" style="background-color: #d4e2ea">
          <v-row class="ma-0 align-center" style="width: 100%; height: 100%">
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <h2 class="text-center dm-serif" style="font-size: 2vw">Maxi Escort Date</h2>
              <br>
              <br>
              <v-row style="width: 100%; border-radius: 10px">
                <v-col class="d-flex justify-center tabelleleft" cols="3">
                  <h3>
                    Dauer
                  </h3>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="d-flex justify-center tabelle" cols="3">
                  <h3>
                    Classic

                  </h3>
                </v-col>
                <v-divider vertical></v-divider>

                <v-col class="d-flex justify-center tabelle" cols="3">
                  <h3>
                    Exclusiv

                  </h3>
                </v-col>
                <v-divider vertical></v-divider>

                <v-col class="d-flex justify-center tabelleright" cols="3">
                  <h3>
                    VIP

                  </h3>
                </v-col>


              </v-row>
              <v-row v-for="preis in escortPreise" :key="preis" style="width: 100%; ">
                <v-col class="d-flex justify-center tabelleleftmid" cols="3">
                  <p class="text-center">
                    {{ preis.dauer }}
                  </p>
                </v-col>
                <v-col class="d-flex justify-center tabellerightmid" cols="3">
                  <p>
                    {{ preis.classic }}
                  </p>
                </v-col>
                <v-col class="d-flex justify-center tabellerightmid" cols="3">
                  <p>
                    {{ preis.exclusiv }}
                  </p>
                </v-col>
                <v-col class="d-flex justify-center tabellerightmid" cols="3">
                  <p>
                    {{ preis.vip }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
  <div v-if="mobile || tablet">
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/bg_komprimiert.webp" style="width: 100%; height: 450px;  ">
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="d-flex justify-center align-center"
             style="width: 75%; height: 400px;    background-color: #c7dee6;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h1 class="dm-serif " style="margin-left: -80px; " v-html="honorare[0].text1"></h1>
            </div>
            <div class="pa-3 mt-n7 dosis" style="font-size: 12px; text-align: justify;" v-html="honorare[0].text2">
            </div>
            <router-link aria-label="Vita" to="vita">
              <v-btn class="text-center mt-3" theme="dark">zur Vita</v-btn>
            </router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/honorar_3_komprimiert.webp" style="width: 100%; height: 450px;  ">

      <v-row class="ma-0 justify-center align-center" style="width: 100%; height: 100%">
        <v-col class=" " cols="12">
          <h2 class="text-center text-white dm-serif" style="font-size: 5vw; ">Maxi Dinner Date</h2>
          <br>
          <br>
          <v-row class="mx-0" style="width: 100%; border-radius: 10px">
            <v-col class="d-flex justify-center tabelleleft" cols="6">
              <h3>
                Dauer
              </h3>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col class="d-flex justify-center tabelleright" cols="6">
              <h3>
                Geschenk

              </h3>
            </v-col>
          </v-row>
          <v-row v-for="preis in dinnerPreise" :key="preis" class="mx-0" style="width: 100%; ">
            <v-col class="d-flex justify-center tabelleleftmid" cols="6">
              <p>
                {{ preis.dauer }}
              </p>
            </v-col>
            <v-col class="d-flex justify-center tabellerightmid" cols="6">
              <p>
                {{ preis.geschenk }}
              </p>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-img>
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/honorar_1_komprimiert.webp" style="width: 100%; height: 80%;  ">

      <v-row class="ma-0 justify-center align-center" style="width: 100%; height: 100%">
        <v-col class=" " cols="12">
          <h2 class="text-center dm-serif" style="font-size: 5vw; ">Maxi Escort Date</h2>
          <br>
          <br>
          <v-row class="ma-0" style="width: 100%; border-radius: 10px">
            <v-col class="d-flex justify-center tabelleleft" cols="3">
              <h3>
                Dauer
              </h3>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col class="d-flex justify-center tabelle" cols="3">
              <h3>
                Classic

              </h3>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col class="d-flex justify-center tabelle" cols="3">
              <h3>
                Exclusiv

              </h3>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col class="d-flex justify-center tabelleright" cols="3">
              <h3>
                VIP

              </h3>
            </v-col>


          </v-row>
          <v-row v-for="preis in escortPreise" :key="preis" class="ma-0" style="width: 100%; ">
            <v-col class="d-flex justify-center tabelleleftmid" cols="3">
              <p class="text-center">
                {{ preis.dauer }}
              </p>
            </v-col>
            <v-col class="d-flex justify-center tabellerightmid" cols="3">
              <p>
                {{ preis.classic }}
              </p>
            </v-col>
            <v-col class="d-flex justify-center tabellerightmid" cols="3">
              <p>
                {{ preis.exclusiv }}
              </p>
            </v-col>
            <v-col class="d-flex justify-center tabellerightmid" cols="3">
              <p>
                {{ preis.vip }}
              </p>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-img>

  </div>

</template>

<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const honorare = ref([]);
const escortPreise = ref([])
const dinnerPreise = ref([])
// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;


  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/honorare", {
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
      description: '',
      keywords: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      text9: '',
      text10: '',
    };
  }
});
const {data: escortPreise1, pending2, error2} = await useAsyncData('escortPreise', async () => {
  let token = null;


  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/escortpreise", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
    // Optional: Setzen von Fallback-Daten oder Fehlerbehandlung
    return [
      {dauer: 'Bis zu 2 Stunden', classic: '400 €', exclusiv: '600 €', vip: '800 €'},
      {dauer: '4 Stunden', classic: '900 €', exclusiv: '1.000 €', vip: '1.500 €'},
      {dauer: '6 Stunden', classic: '1.200 €', exclusiv: '1.400 €', vip: '2.000 €'},
      {dauer: '8 Stunden', classic: '1.500 €', exclusiv: '1.700 €', vip: '2.500 €'},
      {dauer: '12 Stunden', classic: '1.800 €', exclusiv: '2.100 €', vip: '3.000 €'},
      {dauer: '1 Tag / 24 Stunden', classic: '2.500 €', exclusiv: '3.000 €', vip: '4.500 €'},
      {dauer: '2 Tag / 48 Stunden', classic: '4.000 €', exclusiv: '5.000€', vip: '7.000 €'},
      {dauer: '7 Tag / 168 Stunden', classic: '6.000 €', exclusiv: '7.500 €', vip: 'Zu vereinbaren'},
      {dauer: 'Jeder weitere Tag', classic: '1.200 €', exclusiv: '1.400 €', vip: 'Zu vereinbaren'},
    ];
  }
});
const {data: dinnerPreise1, pending3, error3} = await useAsyncData('dinnerPreise', async () => {
  let token = null;


  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/dinnerpreise", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
    // Optional: Setzen von Fallback-Daten oder Fehlerbehandlung
    return [
      {dauer: 'Bis zu 2 Stunden', geschenk: '350 €'},
      {dauer: 'Bis zu 4 Stunden', geschenk: '550 €'},
      {dauer: 'Länger als 4 Stunden', geschenk: 'Individuell zu vereinbaren'}
    ];
  }
});

// Aktualisiere das `landingpage`-Array, wenn die Daten verfügbar sind
if (landingpage1.value) {
  honorare.value.push(landingpage1.value);
  console.log(honorare.value);
}
if (dinnerPreise1.value) {
  dinnerPreise.value = dinnerPreise1.value;
  console.log(dinnerPreise.value);
}
if (escortPreise1.value) {
  escortPreise.value = escortPreise1.value;
  console.log(escortPreise.value);
}

// Setze dynamisch den Head basierend auf den Landingpage-Daten
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Maxi Escort honorare',
  link: [
    {
      rel: 'canonical',
      href: `https://maxi-escort.de/honorare}`,
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

export default {
  name: "damen",
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
  data() {
    return {
      honorare: [{
        text1: 'Unsere Honorare',
        text2: 'Lieber Gast, unsere Agentur präsentiert vier exklusive Honorarkategorien. Dinner Date, Classic, Exklusiv und VIP. Jede Dame genießt die Freiheit, das aus den Honorarkategorien frei zu wählen.\n' +
            'Zudem entscheidet sie selbst, ob sie ausschließlich Dinner Dates oder Escort Dates anbieten möchte.',
      }],
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');


.cardIn1 {
  height: 400px;
  width: 430px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 20%;
}

h1 {
  font-size: 4vw;
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
  top: 10vh; /* Positioniert den Punkt ganz oben */
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
  top: 10vh; /* Beginnt direkt unter dem Punkt */
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
  line-height: 1.3;
}

.tabelleleft {
  background-color: #65c6ec;
  border-radius: 10px 0px 0px 0px;
}

.tabelleright {
  background-color: #65c6ec;
  border-radius: 0px 10px 0px 0px;

}

.tabelle {
  background-color: #65c6ec;
}

.tabelleleftmid {
  background-color: #b8ddec;
}

.tabellerightmid {
  background-color: #b8ddec;

}

</style>
