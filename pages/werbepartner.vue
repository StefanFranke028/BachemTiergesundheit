<template>
  <div v-if="desktop || tabletHorizontal" class="mt-3" style="width: 100vw;">
    <div class="card">
      <div class="cardIn1 px-5">
        <h1 class="dm-serif mt-2 text-center" style=" font-size: 22px " >Unsere Werbepartner</h1>

        <p class="dosis " style="margin-bottom: 100px;" >
          <br>
          <br>
          <br>
          <br>
          Wir arbeiten mit ausgewählten Partnern zusammen, die unser Angebot im Escort-Bereich sinnvoll ergänzen. Hier findest du eine Übersicht unserer Kooperationspartner mit einem Klick gelangst du direkt zu deren Webseiten. Vielen Dank für das Vertrauen und die gute Zusammenarbeit.
        </p>
        <div class="vertical-marker">
        </div>
      </div>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row class="mx-0 pa-0" style="width: 100%;">
        <v-col class="pa-0" cols="12">
          <v-img alt="" cover max-height="600px" src="~/assets/kontakt_1_komprimiert.webp" style="z-index: 0"></v-img>
        </v-col>

      </v-row>
    </div>
    <div style="width: 100vw; height: 800px; margin-top: 150px" >
      <v-row class="mx-0 pa-0" style="width: 100%; height: 100%">
        <v-col class="pa-0" cols="12"
               style="background-color: rgba(215,232,215,0.56)">
          <v-row class="ma-0 mt-n16 justify-center align-center" style="width: 100%; height: 100%">
            <v-col
                v-for="(partner, index) in partnerLinks"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                class="text-center"
            >
              <div v-html="partner.html"></div>
            </v-col>
          </v-row>
        </v-col>


      </v-row>
    </div>
  </div>
  <div v-if="mobile || tablet">
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/kontakt_1_komprimiert.webp" style="width: 100%; height: 450px;  ">
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="d-flex justify-center align-center"
             style="width: 75%; height: 400px;    background-color: #d1e3d3;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h1 class="text-center text5 dosis" >Unsere Werbepartner</h1>
            </div>
            <div class="pa-3  dm-serif" style="font-size: 11px; text-align: justify;" >
              Wir arbeiten mit ausgewählten Partnern zusammen, die unser Angebot im Escort-Bereich sinnvoll ergänzen. Hier findest du eine Übersicht unserer Kooperationspartner mit einem Klick gelangst du direkt zu deren Webseiten. Vielen Dank für das Vertrauen und die gute Zusammenarbeit.
            </div>
          </div>
        </div>
      </div>
    </v-img>

    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex py-4 justify-center align-center" cover
           src="~/assets/vita_3_komprimiert.webp" style="width: 100%;   ">
      <div
          class="mx-auto pa-4"
          style="background-color: rgba(215,232,215,0.89); width: 85vw;  box-shadow: 2px 2px 5px rgba(0,0,0,0.82) ">
        <v-row class="ma-0  justify-center align-center" style="width: 100%; height: 100%">
          <v-col
              v-for="(partner, index) in partnerLinks"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              class="text-center pa-0 mt-4"
          >
            <div v-html="partner.html"></div>

          </v-col>
        </v-row>
      </div>

    </v-img>

  </div>
</template>

<script setup>
import {ref} from 'vue';


useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Werbepartner - Mila Escort Service',
  link: [
    {
      rel: 'canonical',
      href: `https://mila-escort.de/werbepartner`,
    },
  ],
  meta: [
    {
      name: 'description',
      content: 'Unsere Werbepartner auf einen Blick!',
    },
    {
      name: 'keywords',
      content:  'werbepartner, Frankfurt,Escort,Nutten, Diskretion, Exklusivität, Mila Escort Service',
    },
  ],
});
</script>
<script>
import {Icon} from '@iconify/vue';
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "Werbepartner",
  components: {
    Icon
  },
  data() {
    return {
      partnerLinks: [
        {
          html: `
         <a href="https://www.escort-galerie.de/"  onclick="window.open(this.href); return false;"><img src="https://www.escort-galleries.com/images/banner/banner_300300_1.png" width="300" height="300" alt="Escort Galerie" class="notranslate" /></a>

          `
        },
        {
          html: `
          <!-- Banner HappyEscorts.com - Größte Escorts-Suchmaschine START--><a href="https://www.happyescorts.com/de/" title="HappyEscorts.com"><img title="HappyEscorts.com" style="margin: 0px;" alt="HappyEscorts.com" src="https://www.happyescorts.com/images/stories/banner/happy_escorts/de/300250__en_05__007.jpg" height="250" width="300" /></a><!-- Banner HappyEscorts.com - Größte Escorts-Suchmaschine END—>
          `
        },
        {
          html: `

          <a href="https://sexdo.com" target="_blank">
          <img src="https://banner.sexdo.com/intern/Websiegel/siegel_web_1.png" alt="Sexdo.de - Huren, Clubs und Hobbyhuren" border="0"></a>

            `
        },
        {
          html: `

            <div style="width: 100%; max-width: 200px; height: 200px; text-align: center; margin: 0 auto;">
      <a href="https://www.instagram.com/milamoretti2025/" target="_blank" style="text-decoration: none;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
               alt="Instagram"
               style="width: 200px; height: 200px;">

        </div>
      </a>
    </div>

            `
        },


      ],
      kontakt: [{
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

  methods: {},
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
  top: -25vh; /* Positioniert den Punkt ganz oben */
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
  top: -25vh; /* Beginnt direkt unter dem Punkt */
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
  background-color: #d1e3d3;
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
  font-size: 12px;

}
.text4{
  font-size: 12px;
}

</style>
