<template>
  <div v-if="desktop|| tabletHorizontal" style="width: 100vw;" class="mt-3">
    <div class="card">
      <div class="cardIn1 px-5">
        <h1 style="margin-left: -90px" class="dm-serif">Bewirb dich <br> bei uns</h1>
        <div class="line-with-dot">
        </div>
        <p class="dosis"  style="margin-bottom: 100px;margin-left: 30px; ">
          Hey... wie schön, dass du hier bist! <br> <br>
          Ich bin Maxi, die Gründerin von Maxi Escort. Es ist mir eine Herzensangelegenheit,
          Ihnen unsere exklusiven Dienstleistungen anzubieten. Unser Ziel ist es, Ihnen
          unvergessliche Momente zu bereiten. Für Buchungen oder Fragen stehe ich Ihnen
          jederzeit gerne zur Verfügung. Kontaktieren Sie uns diskret und unkompliziert über
          die folgenden Wege:        </p>
      </div>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row style="width: 100%;" class="mx-0 pa-0">
        <v-col class="pa-0" cols="6">
          <v-img style="z-index: 0" max-height="600px" cover  src="~/assets/federn.webp"  alt=""></v-img>
        </v-col>
        <v-col class="pa-0" cols="6">
          <v-img style="z-index: 0" max-height="600px" cover src="~/assets/decke.jpg"  alt=""></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row style="width: 100%; height: 100%" class="mx-0 pa-0">
        <v-col style="background-color:  #f1edec" class="pa-0" cols="12">
          <v-row style="width: 100%; height: 100%" class="ma-0 mt-10 justify-center align-center">
            <v-col cols="7">
              <div style="width: 100%; height: 300px;" class="d-flex align-center">
                <v-row style="width: 100%; height: 30%" class="mt-n16  ma-0">
                  <v-col cols="12" class="d-flex ">
                    <p style="cursor: pointer" @click="dialPhoneNumber"><Icon icon="ic:baseline-phone" />  &nbsp; Telefon: <a href="">+49 151-670 376 96</a>  </p>
                  </v-col>
                  <v-col cols="12" class="d-flex ">
                    <p style="cursor: pointer" @click="openEmailProgram"><Icon icon="fluent-mdl2:edit-mail" /> &nbsp; E-Mail: <a href=""> bewerbung@maxi-escort.de</a>  </p>
                  </v-col>
                  <v-col cols="12" class="d-flex ">
                    <p  style="cursor: pointer; color: #8585d6"><a style="text-decoration: none" target="_blank" href="https://www.google.com/search?q=gerneperdu&rlz=1C1CHBF_deDE1080DE1080&oq=gerneperdu&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIGCAMQABgeMgYIBBAAGB4yBggFEAAYHjIICAYQABgKGB4yBggHEAAYHjIGCAgQABgeMgYICRAAGB7SAQgyOTAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">#GerneperDu</a> </p>
                  </v-col>
                  <v-col cols="12" class="d-flex ">
                    <p style="">Ich freue mich darauf, <br> euch kennenzulernen und euch ein unvergessliches Erlebnis
                      ermöglichen zu können.</p>
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
    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 450px;  " src="~/assets/bg.png" alt="schwarz-weis Hintergrundbild" >
      <div  style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div  class="d-flex justify-center align-center" style="width: 75%; height: 400px;    background-color: #e5dbdc;">
          <div class="vertical-marker-mobile">
          </div >
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div style="position: relative; top:-50px" class="text-center dosis">
              <h2 style="margin-left: -80px; " class="dm-serif mt-2"> {{bewerben[0].text1}}</h2>
            </div>
            <div style="font-size: 11px; text-align: justify;" class="pa-3 mt-n7 dosis">
              {{bewerben[0].text2}}
            </div>
            <router-link  aria-label="Vita" to="vita" >  <v-btn  theme="dark" class="text-center mt-7" >zur Vita</v-btn></router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 400px;  " src="~/assets/blumen.jpg" alt="schwarz-weis Hintergrundbild" >
      <div style="background-color: #f1edec; width: 85vw; height: 320px; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) " class="mx-auto pa-4">
        <v-row style="width: 100%; height: 30%" class="ma-0">
          <v-col cols="12" class="d-flex ">
            <p style="cursor: pointer" @click="dialPhoneNumber"><Icon icon="ic:baseline-phone" />  &nbsp; Telefon: <a href="">{{bewerben[0].telefon}}</a>  </p>
          </v-col>
          <v-col cols="12" class="d-flex ">
            <p style="cursor: pointer" @click="openEmailProgram"><Icon icon="fluent-mdl2:edit-mail" /> &nbsp; E-Mail: <a href=""> {{bewerben[0].email}}</a>  </p>
          </v-col>
          <v-col cols="12" class="d-flex ">
            <p  style="cursor: pointer; color: #8585d6"><a style="text-decoration: none" target="_blank" href="https://www.google.com/search?q=gerneperdu&rlz=1C1CHBF_deDE1080DE1080&oq=gerneperdu&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIGCAMQABgeMgYIBBAAGB4yBggFEAAYHjIICAYQABgKGB4yBggHEAAYHjIGCAgQABgeMgYICRAAGB7SAQgyOTAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">#GerneperDu</a> </p>
          </v-col>
          <v-col cols="12" class="d-flex ">
            <p style="">Ich freue mich darauf, <br> <br> euch kennenzulernen und euch ein unvergessliches Erlebnis
              ermöglichen zu können.</p>
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
      bewerben:[{
        text1: 'Bewirb dich bei uns',
        text2: 'Hey... wie schön, dass du hier bist! Ich bin Maxi, die Gründerin von Maxi Escort. Es ist mir eine Herzensangelegenheit, Ihnen unsere exklusiven Dienstleistungen anzubieten. Unser Ziel ist es, Ihnen unvergessliche Momente zu bereiten. Für Buchungen oder Fragen stehe ich Ihnen jederzeit gerne zur Verfügung. Kontaktieren Sie uns diskret und unkompliziert über die folgenden Wege:',
        telefon: '+49 151-670 376 96',
        email: 'bewerbung@maxi-escort.de',
      }]
    }
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
  methods:{
    dialPhoneNumber() {
      window.location.href = "tel:015167037696"; // Fügt die tatsächliche Telefonnummer hier ein
    },
    openEmailProgram() {
      window.location.href = "mailto:bewerbung@maxi-escort.de"; // Fügt die tatsächliche E-Mail-Adresse hier ein
    }
  }
}
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
  font-size: 2.5vw;
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
  background-color: #e5dbdc;
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
  line-height: 1.3;
}
.dosis1{
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
}

.line-with-dot {
  position: relative;
  width: 50%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  top: -12%;
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
</style>
