<template>
  <div v-if="desktop || tabletHorizontal" >
    <img style="width: 100vw; height: 500px;" src="~/assets/bg.png" alt="schwarz-weis Hintergrundbild" />
    <div class="card">
      <div class="cardIn1">
        <div  class="text-center text2 dosis">„Ein Mädchen sollte <br> zwei Sachen sein: <br> elegant und fabulös.“ <br> Coco Chanel.
          <br>

          <div class="d-flex justify-center mt-10" style="width: 100%;">
            <router-link to="vita">  <v-btn theme="dark" class="text-center" >  Zur Vita</v-btn></router-link>

          </div>
        </div>
      </div>
      <div class="cardIn2">
        <div class="text3 ">
          <p class="">
            {{landingpage[0].text2 }}
          </p>
        </div>
        <div class="text4 ">
          <p class="">
           {{landingpage[0].text3}}
          </p>
        </div>
        <div class="line-with-dot">
        </div>
        <div style="width: 100%; height: 100%; overflow: hidden; position: relative; ">
          <img src="~/assets/frau.webp" style="min-width: 90%; min-height: 90%; width: auto; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" alt="">
        </div>
      </div>
    </div>
    <div class="mt-n2" style="width: 100vw; height:150px; background-color: #e5dbdc">

    </div>
    <div >
      <v-row style="width: 100%; height: 100%" class="ma-0 pa-0">
        <v-col style="background-color: black" class="pa-0" cols="6">
          <v-img style="z-index: 0" src="~/assets/bild-links.webp"  alt=""></v-img>
        </v-col>
        <v-col style="background-color: #f1edec" class="pa-0" cols="6">
          <v-row  style="width: 50%; height: 30%; position: absolute;" class="d-flex justify-center align-end">
            <v-col cols="6">
              <p style="font-size: 2vh">

                Unsere Kernwerte sind Diskretion, Professionalität, Eleganz und
                Kundenzufriedenheit. Diese Werte sind in jedem Aspekt unseres
                Betriebs verankert und leiten uns bei der Auswahl unserer Begleitungen
                sowie im Umgang mit unseren Kunden.
              </p>
              <br>
              <br>

              <div class="d-flex justify-center mt-10" style="width: 100%;">
                <router-link to="damen">  <v-btn theme="dark" class="text-center" >  ZU Unseren Begleitpersonen</v-btn></router-link>

              </div>
            </v-col>

          </v-row>
          <div style="position: relative; top: 20% ; left:-40%">
            <h1 class="text-white text-center dm-serif">Unsere Werte &amp; </h1>
            <h1 class="text-white text-center dm-serif">Grundsätze</h1>
            <div class="vertical-marker">
            </div>
          </div>

        </v-col>
      </v-row>
    </div>
    <div style="height: 450px; width: 100vw;" class="d-flex justify-center align-center">
        <div  style="background-color: #f1edec; max-height: 400px; width: 800px;margin-top: 300px; margin-left: -20%">
          <v-row style=" width: 130%; margin-top: -15%; margin-left: 70px">
            <v-col cols="6" class="d-flex justify-center">

              <v-img  style="height: 80%; box-shadow: 2px 2px 5px black" cover src="~/assets/frau-unten.jpg">

              </v-img>
            </v-col>
            <v-col class="d-flex justify-center" style="margin-top: 15%" cols="6">
              <div style="height: 80%" class="ml-16">
                <h1 style="color: #615f5f" class="dosis1">Maxi Escort Team</h1>
                <p  style="color: #615f5f" >
                  Unser Team besteht aus erfahrenen und diskreten Profis, die sich darauf
                  konzentrieren, Ihnen den besten Service zu bieten. Jeder von uns bringt
                  einzigartige Fähigkeiten und Erfahrungen mit, um sicherzustellen, dass
                  Ihre Wünsche erfüllt werden.
                </p>
                <br>
                <br>
                <p>
                  Genießen Sie den Tag. <br> <br>

                  Maxi Escort Service Frankfurt. <br> <br>
                  Ihre
                  Maxi
                </p>
              </div>

            </v-col>
          </v-row>
        </div>
    </div>
    <div class="mt-n2" style="width: 100vw; height:300px; background-color: white">

  </div>

  </div>
  <div style="width: 100vw; " v-if="mobile || tablet">
    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 450px;  " src="~/assets/bg.png" alt="schwarz-weis Hintergrundbild" >
      <div  style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div  style="width: 75%; height: 400px;  background-color: #e5dbdc;">
          <div style="height: 250px; width: 70%; background-color: white; position: relative; left:21%; top: 10%">
            <div class="text-center px-4 text5 dosis">
              {{landingpage[0].text1}}

            </div>
          </div>
          <v-img  src="~/assets/frau.webp" cover style="height: 200px; width: 50%; background-color: black; position: relative; left:5%; top: -15%; box-shadow: 2px -3px 5px rgba(0,0,0,0.75)">
          </v-img>
        </div>
      </div>
    </v-img>
    <div  style="background-color:  #e5dbdc; width: 100vw; height: 120px" class="pa-6">
      <p style="font-size: 12px" class="text-center">
        {{landingpage[0].text2}}
        {{landingpage[0].text3}}
      </p>
    </div>
    <div style="background-color:  #f1edec; width: 100vw; height: 200px" class="">
      <div class="pt-5">
        <h1 class="mt-3 text-center h1mobile dm-serif">{{ landingpage[0].text4}}</h1>

      </div>
      <div class="px-10 mt-4">
        <p style="font-size: 14px" class="text-center">
          {{landingpage[0].text5}}
        </p>
      </div>
    </div>
    <div style="background-color:  white; width: 100vw; height: 350px" class="">
      <v-row style="width: 100%;height: 100%" class="ma-0 justify-center align-center">
        <v-col style="background-color: #f1edec; height: 80%" cols="10">
          <v-row style="width: 100%;" class="ma-0">
            <v-col cols="6">
              <div>
                <v-img src="~/assets/frau-unten.jpg" cover class="mt-n10" style="width: 100%; height: 170%;">

                </v-img>
                <p  style="color: #615f5f;font-size: 11px" class="dosis1 mt-2">{{landingpage[0].text8}}</p>
                <p  style="color: #615f5f;font-size: 11px" class="dosis1 mt-2">{{landingpage[0].text9}}</p>
                <p  style="color: #615f5f;font-size: 11px" class="dosis1 mt-2">{{landingpage[0].text10}}</p>
              </div>
            </v-col>
            <v-col cols="6">
              <h1  style="color: #615f5f;font-size: 15px" class="dosis1">{{landingpage[0].text6}}</h1>
              <p  style="color: #615f5f;font-size: 11px" class="dosis1 mt-2">{{landingpage[0].text7}}</p>

            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </div>
  </div>
</template>

<script >

import FooterComponent from "~/components/FooterComponent.vue";
import {useScreenStore} from "~/stores/screen.js";

export default {
  data(){

    return{
      landingpage:[
        {
          text1: 'Ein Mädchen sollte zwei Sachen sein:  elegant und fabulös.“  Coco Chanel.',
          text2: 'Willkommen bei Maxi Escort, wo Exklusivität und Diskretion auf höchstem Niveau garantiert sind.',
          text3: 'Unsere Mission ist es, Ihnen unvergessliche Erlebnisse zu bieten, die durch Eleganz und Professionalität geprägt sind.',
          text4: 'Unsere Werte & Grundsätze',
          text5: 'Unsere Kernwerte sind Diskretion, Professionalität, Eleganz und Kundenzufriedenheit. Diese Werte sind in jedem Aspekt unseres Betriebs verankert und leiten uns bei der Auswahl unserer Begleitungen sowie im Umgang mit unseren Kunden.',
          text6: 'Maxi Escort Team',
          text7: 'Unser Team besteht aus erfahrenen und diskreten Profis, die sich darauf konzentrieren, Ihnen den besten Service zu bieten. Jeder von uns bringt einzigartige Fähigkeiten und Erfahrungen mit, um sicherzustellen, dass Ihre Wünsche erfüllt werden.',
          text8: 'Genießen Sie den Tag',
          text9: 'Maxi Escort Service Frankfurt.',
          text10: 'Ihre Maxi',

        }
      ]
    }
  },
  components:{
    FooterComponent
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


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');

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
.cardIn1{
  height: 400px;
  width: 350px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 10%;
}
.cardIn2{
   height: 300px;
   width: 250px;
   background-color: black;
  box-shadow: 2px -2px 5px rgba(67, 67, 67, 0.87);
   position: absolute;
   left: 28%;
   top: 40%;
 }
 .text2{
   color: #8e8c8c;
   position: relative;
   left: 50%;
   top:10%;
   font-size: 30px;

 }
.text5{
  color: #8e8c8c;
  position: relative;
  left: 0%;
  top:10%;
  font-size: 15px;

}
 .text3{
   position: relative;
   width: 50%; /* Breite des Striches anpassen */
   height: 2px; /* Höhe des Striches */
   top:-50%;
   left: 0%;
 }
.text4{
   position: relative;
   width: 60%; /* Breite des Striches anpassen */
   height: 2px; /* Höhe des Striches */
   top:40%;
   left: 110%;
 }
.line-with-dot {
  position: relative;
  width: 50%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  top:-24%;
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
h1{
  font-size: 3vw;
}
.h1mobile{
  font-size: 6vw;
}
style>
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
