<template>
<div v-if="desktop || tabletHorizontal" style="width: 100vw;" class="mt-3">
  <div class="card">
    <div class="cardIn1 px-5">
      <h1 style="margin-left: -90px" class="dm-serif" v-html="kontakt[0].text1"></h1>
      <div class="line-with-dot">
      </div>
      <p class="dosis " style="margin-bottom: 100px;" v-html="kontakt[0].text2">

      </p>
    </div>
  </div>
  <div style="width: 100vw; height: 600px">
    <v-row style="width: 100%;" class="mx-0 pa-0">
      <v-col class="pa-0" cols="12">
        <v-img style="z-index: 0" max-height="600px" cover  src="~/assets/kontakt_1_komprimiert.webp"  alt=""></v-img>
      </v-col>

    </v-row>
  </div>
  <div style="width: 100vw; height: 600px">
    <v-row style="width: 100%; height: 100%" class="mx-0 pa-0">
      <v-col style="background-color: rgba(215,232,215,0.56)" class="pa-0" cols="12">
        <v-row style="width: 100%; height: 100%" class="ma-0 mt-10 justify-center align-center">
          <v-col cols="7">
            <div style="width: 100%; height: 270px;" class="d-flex mt-n16">
              <v-row style="width: 100%; height: 30%" class="  ma-0">
                <v-col cols="12" class="d-flex ">
                  <p style="cursor: pointer" ><Icon icon="ic:baseline-phone" />  &nbsp; Telefon: <a :href="'tel:'+kontakt[0].telefon">{{kontakt[0].telefon}}</a>  </p>
                </v-col>
                <v-col cols="12" class="d-flex ">
                  <p style="cursor: pointer"><Icon icon="fluent-mdl2:edit-mail" /> &nbsp; E-Mail: <a :href="'mailto:'+kontakt[0].email"> {{kontakt[0].email}}</a>  </p>
                </v-col>
                <v-col cols="12" class="d-flex ">
                  <p  style="cursor: pointer; color: #2c2cda"><a style="text-decoration: none" target="_blank" href="https://www.google.com/search?q=gerneperdu&rlz=1C1CHBF_deDE1080DE1080&oq=gerneperdu&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIGCAMQABgeMgYIBBAAGB4yBggFEAAYHjIICAYQABgKGB4yBggHEAAYHjIGCAgQABgeMgYICRAAGB7SAQgyOTAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">#GerneperDu</a> </p>
                </v-col>
                <v-col cols="12" class="d-flex ">
                  <p style="" v-html="kontakt[0].text3"></p>
                </v-col>
                <v-col cols="12" class="d-flex ">
                  <p style=" " v-html="kontakt[0].text4"></p>
                </v-col>
              </v-row>
            </div>

          </v-col>
        </v-row>
      </v-col>


    </v-row>
  </div>
</div>
  <div v-if="mobile || tablet">
    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 450px;  " src="~/assets/kontakt_1_komprimiert.webp" alt="schwarz-weis Hintergrundbild" >
      <div  style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div  class="d-flex justify-center align-center" style="width: 75%; height: 400px;    background-color: #d1e3d3;">
          <div class="vertical-marker-mobile">
          </div >
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div style="position: relative; top:-50px" class="text-center dosis">
              <h2 style="margin-left: -80px; " class="dm-serif mt-2" v-html="kontakt[0].text1"> </h2>
            </div>
            <div style="font-size: 11px; text-align: justify;" class="pa-3 mt-n7 dosis" v-html="kontakt[0].text2">

            </div>
            <router-link  aria-label="Vita" to="vita" >  <v-btn  theme="dark" class="text-center mt-7" >zur Vita</v-btn></router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 400px;  " src="~/assets/vita_3_komprimiert.webp" alt="schwarz-weis Hintergrundbild" >
      <div style="background-color: rgb(215,232,215); width: 85vw; height: 320px; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) " class="mx-auto pa-4">
        <v-row style="width: 100%; height: 30%; " class="ma-0">
          <v-col cols="12" class="d-flex ">
            <p style="cursor: pointer"><Icon icon="ic:baseline-phone" />  &nbsp; Telefon: <a href="" v-html="kontakt[0].telefon"></a>  </p>
          </v-col>
          <v-col cols="12" class="d-flex ">
            <p style="cursor: pointer" ><Icon icon="fluent-mdl2:edit-mail" /> &nbsp; E-Mail: <a href="" v-html="kontakt[0].email"></a>  </p>
          </v-col>
          <v-col cols="12" class="d-flex ">
            <p  style="cursor: pointer; color: #2d2de1"><a style="text-decoration: none" target="_blank" href="https://www.google.com/search?q=gerneperdu&rlz=1C1CHBF_deDE1080DE1080&oq=gerneperdu&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIGCAMQABgeMgYIBBAAGB4yBggFEAAYHjIICAYQABgKGB4yBggHEAAYHjIGCAgQABgeMgYICRAAGB7SAQgyOTAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">#GerneperDu</a> </p>
          </v-col>
          <v-col cols="12"  class="d-flex ">
            <p style=" font-size: 14px">Ich freue mich darauf, <br> euch kennenzulernen und euch ein unvergessliches Erlebnis
              ermöglichen zu können.</p><br> <br>

          </v-col>
          <v-col cols="12" class="d-flex ">

            <p style=" font-size: 14px ">Für Bewerbungen als Escort Modell nutze doch bitte unsere E-Mail <a href="mailto:bewerbung@maxi-escort.de">bewerbung@maxi-escort.de</a>.  Wir melden uns dann sehr gerne bei Dir.</p>

          </v-col>
        </v-row>
      </div>

    </v-img>

  </div>
</template>

<script >
import { Icon } from '@iconify/vue';
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "kontakt",
  components:{
    Icon
  },
  data(){
    return{
      kontakt:[{
        text1: 'Bewirb dich bei uns',
        text2: 'Hey... wie schön, dass du hier bist! Ich bin Maxi, die Gründerin von Maxi Escort. Es ist mir eine Herzensangelegenheit, Ihnen unsere exklusiven Dienstleistungen anzubieten. Unser Ziel ist es, Ihnen unvergessliche Momente zu bereiten. Für Buchungen oder Fragen stehe ich Ihnen jederzeit gerne zur Verfügung. Kontaktieren Sie uns diskret und unkompliziert über die folgenden Wege:',
        text3: 'Ich freue mich darauf, euch kennenzulernen und euch ein unvergessliches Erlebnis ermöglichen zu können.',
        text4: 'Für Bewerbungen als Escort Modell nutze doch bitte unsere E-Mail bewerbung@maxi-escort.de. Wir melden uns dann sehr gerne bei Dir.',
        telefon: '+49 151-670 376 96',
        email: 'office@maxi-escort.de',
      }]
    }
  },
  mounted() {

  },

  methods:{



  },
  computed:{
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

<script setup>
import FooterComponent from "~/components/FooterComponent.vue";
import { ref } from 'vue';

// Reaktives Array für Landingpage-Daten
const kontakt = ref([]);

// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const { data: landingpage1, pending, error } = await useAsyncData('landingpage', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://maxi-escort.de:8443/auth/kontakt", {
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');


.cardIn1{
  height: 400px;
  width: 400px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 10%;
}

h1{
  font-size: 3vw;
}
.vertical-marker {
  position: relative; /* Basis für absolute Positionierung des Punktes und des Striches */
  height: 100px; /* Gesamthöhe des Elements */
  width: 10px; /* Breite des Elements, schmal genug für einen Punkt und Strich */
  margin: 20px; /* Optional: Abstand von anderen Elementen */
  left:-80px;
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

.card{
  z-index: 300;
  height: 650px;
  width: 80vw;
  background-color: #d1e3d3;
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
.dosis{
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.10em;
  line-height: 1.3;
}
p{
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 1.3;
}

</style>
