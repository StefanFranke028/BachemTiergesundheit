<template>
  <div v-if="desktop|| tabletHorizontal" class="mt-3" style="width: 100vw;">
    <div class="card">
      <div class="cardIn1 px-5">
        <h1 class="dm-serif" style="margin-left: -90px; font-size: 22px" v-html="team[0].text1"></h1>
        <div class="vertical-marker">
        </div>
        <p class="dosis" style="margin-top: -100px;" v-html="team[0].text2">
        </p>
        <router-link aria-label="Escort" style="position: absolute; left: -5%; top:46vh" to="highClassBegleitungen">
          <v-btn class="text-center" theme="dark"> zu unseren escortdamen</v-btn>
        </router-link>

      </div>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row class="mx-0 pa-0" style="width: 100%;">
        <v-col class="pa-0" cols="12">
          <v-img alt="" cover max-height="600px" src="~/assets/vita_bg_komprimiert.webp" style="z-index: 0"></v-img>
        </v-col>

      </v-row>
    </div>
    <div style="width: 100vw; height: 900px">
      <v-row class="mx-0 pa-0" style="width: 100%; height: 100%">
        <v-col class="pa-0 d-flex align-center" cols="6" style="background-color: rgba(215,232,215,0.56)">
          <v-img max-height="500" src="~/assets/team_1_komprimiert.webp" style="z-index: 0;"></v-img>
        </v-col>
        <v-col class="pa-0 pl-16" cols="6" style="background-color: rgba(215,232,215,0.56)">
          <v-row class="ma-0 align-center" style="width: 100%; height: 100%">

            <v-col class="mt-16" cols="9">
              <br>
              <br>
              <h2 class="text-center dm-serif" style="font-size: 16px" v-html="team[0].text3"></h2>
              <br>
              <br>
              <p class="dm-serif text-center" style="font-size: 16px"  v-html="team[0].text4">
              </p>


            </v-col>
            <v-col cols="5"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div style="width: 100vw; height: 900px">
      <v-row class="ma-0 pa-0" style="width: 100%; height: 100%">
        <v-col class="pa-0 d-flex align-center" cols="6" style="background-color: rgba(215,232,215,0.56)">
          <v-img alt="" max-height="500" src="~/assets/team_2_komprimiert.webp" style="z-index: 0; "></v-img>
        </v-col>
        <v-col class="pa-0 pl-16" cols="6" style="background-color: rgba(215,232,215,0.56)">
          <v-row class="ma-0 mt-16" style="width: 100%; height: 100%">

            <v-col class="" cols="9">

              <h2 class="text-center dm-serif" style="font-size: 16px" v-html="team[0].text5"></h2>

              <p class="dm-serif mt-5 text-center" style="font-size: 16px" v-html="team[0].text6">
              </p>

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
             style="width: 75%; height: 400px;    background-color: #d1e3d3;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h1 class="text-center  text5 dosis" v-html="team[0].text1">
              </h1>

            </div>
            <div class="pa-3 mt-n11 dosis" style="font-size: 11px; text-align: justify;" v-html="team[0].text2">
            </div>
            <router-link aria-label="Escort" to="highClassBegleitungen">
              <v-btn class="text-center mt-3" style="position:absolute; top:80%" theme="dark">Unseren Escortdamen</v-btn>

            </router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex py-3 justify-center align-center" cover
           src="~/assets/team_1_komprimiert.webp" style="width: 100%;">

      <div class="mx-auto pa-4"
           style="background-color: rgba(215,232,215,0.87); width: 85vw; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) ">
        <p class="text-center dm-serif" style=" font-size: 12px" v-html="team[0].text3"></p>

        <p class="dm-serif text-center mt-2" style=" font-size: 12px" v-html="team[0].text4">

        </p>
      </div>
    </v-img>
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/team_2_komprimiert.webp" style="width: 100%;  ">
      <div class="mx-auto pa-7"
           style="background-color: rgba(215,232,215,0.87); width: 85vw; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) ">
        <p class="text-center dm-serif" style="font-size: 12px" v-html="team[0].text5"></p>

        <p class="dm-serif text-center mt-5" style="  font-size: 12px" v-html="team[0].text6">


        </p>

      </div>


    </v-img>


  </div>
</template>


<script setup>
import {ref} from 'vue';

const team = ref([]);

// Methode zum Abrufen der Team-Daten mit useAsyncData
const {data: teamData, pending, error} = await useAsyncData('team', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/team", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });
    console.log(response);

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Teamseite:', e);
    // Optional: Setzen von Fallback-Daten oder Fehlerbehandlung
    return {
      description: 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Maxi Escort Service in Frankfurt.',
      keywords: 'Escort, Frankfurt, Diskretion, Exklusivität, Maxi Escort Service',
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

if (teamData.value) {
  team.value.push(teamData.value);
}

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Mila Escort Arrangement',
  link: [

    {
      rel: 'canonical',
      href: `https://mila-escort.de/arrangement`,
    },
  ],
  meta: [
    {
      name: 'description',
      content: teamData.value?.description,
    },
    {
      name: 'keywords',
      content: teamData.value?.keywords,
    },
  ],
});
</script>


<script>


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "damen",
  data() {
    return {
      team: [{
        text1: 'Meine Vita',
        text2: 'Unsere Agentur wurde im Jahr 2007 unter dem Namen Maxi & Friends Escort gegründet, inspiriert von der Vision, außergewöhnliche Begleitungen für besondere Anlässe zu bieten. Seitdem haben wir uns kontinuierlich weiterentwickelt und sind stolz darauf, eine der führenden Agenturen in der Branche zu sein. Heute präsentieren wir uns im neuen Gewand als Maxi Escort, um Ihnen weiterhin erstklassige Erlebnisse zu bieten.',
        text3: 'Was mich dazu inspiriert hat, Maxi Escort zu gründen?',
        text4: 'Ich habe Maxi Escort gegründet, weil ich eine Leidenschaft für erstklassigen Service und unvergessliche Erlebnisse habe. Es war mir wichtig, einen Ort zu schaffen, an dem sich unsere Kunden wohl und geschätzt fühlen. Unsere Dienstleistungen sind darauf ausgerichtet, höchste Ansprüche zu erfüllen und besondere Momente zu kreieren.\n' +
            '\n' +
            'Ich wollte etwas Einzigartiges schaffen, das sich durch Diskretion, Professionalität und persönliche Betreuung auszeichnet. Maxi Escort ist mehr als nur ein Service – es ist eine Erfahrung, die in Erinnerung bleibt.\n' +
            '\n' +
            'Maxi Escort ist einzigartig, weil wir auf höchste Qualität und Diskretion setzen. Unsere Dienstleistungen sind maßgeschneidert, um Ihre individuellen Wünsche zu erfüllen. Hier sind einige Punkte, die uns besonders machen:',
        text5: 'Exklusivität',
        text6: 'Wir bieten ausschließlich Begleitungen an, die durch uns sorgfältig ausgewählt wurden, um unseren und Ihren Ansprüchen immer gerecht werden zu können.',
        text7: 'Diskretion',
        text8: 'Ihre Privatsphäre ist uns heilig. Wir garantieren und stehen für absolute Vertraulichkeit.',
        text9: 'Personalisierter Service',
        text10: 'Jeder Kunde erhält eine individuelle Betreuung, um sicherzustellen, dass fast alle Wünsche erfüllt werden.',
        text11: 'Erfahrung',
        text12: 'Mit jahrelanger Erfahrung in der Branche wissen wir genau, wie wir Ihre Erwartungen übertreffen können. Wir freuen uns darauf, Ihnen einen unvergesslichen Service zu bieten! Unsere Begleitpersonen sind das Herzstück von Maxi Escort.',
        text13: 'Was macht sie besonders?',
        text14: 'Vielfalt',
        text15: 'Unsere Begleitpersonen kommen aus verschiedenen Hintergründen und Kulturen, sodass wir für jeden Geschmack die passende Begleitung bieten können.',
        text16: 'Professionalität',
        text17: 'Jede Begleitperson wird sorgfältig ausgewählt, um höchsten Ansprüchen gerecht werden zu können, sei es Öffentlicher Auftritt, Eloquenz oder Einfühlungsvermögen. Nichts ist schlimmer als eine unprofessionelle Begleitung.',
        text18: 'Charme und Intelligenz',
        text19: 'Unsere Begleitpersonen sind nicht nur attraktiv, sondern auch charmant und intelligent. Sie können sich in jeder Gesellschaft bewegen und interessante Gespräche führen.',
        text20: 'Diskretion und Vertraulichkeit',
        text21: 'Ihre Privatsphäre ist uns wichtig. Unsere Begleitpersonen sind diskret und respektieren Ihre Vertraulichkeit.',
        text22: 'Ich bin stolz darauf, ein Team zu haben, das so engagiert und professionell ist.\n' +
            '\n' +
            'Diese Kombination aus Erfahrung, Professionalität, Exklusivität und Kundenzufriedenheit macht Maxi Escort zu einer herausragenden Agentur in der Branche.',
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
  font-size: 2.5vw;
}

.vertical-marker {
  position: relative; /* Basis für absolute Positionierung des Punktes und des Striches */
  height: 100px; /* Gesamthöhe des Elements */
  width: 10px; /* Breite des Elements, schmal genug für einen Punkt und Strich */
  margin: 20px; /* Optional: Abstand von anderen Elementen */
  left: -80px;
  top: -20vh
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
  font-size: 15px;

}
</style>
