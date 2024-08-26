<template>
  <div >
    <img style="width: 100vw; height: 500px;" src="~/assets/bg.png" alt="schwarz-weis Hintergrundbild" />
    <div class="card">
      <div class="cardIn1">
        <div  class="text-center text2 dosis">discover your <br> authentic style and <br> be the stunning lady <br> you naturally are
          <br>
          <v-btn theme="dark" class="mt-6">irgend ein text</v-btn>
        </div>
      </div>
      <div class="cardIn2">
        <div class="text3 ">
          <p class="text-center">
            Hier könnte noch ein weiterer beliebiger Text stehen
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
          <v-row  style="width: 50%; height: 33%; position: absolute;" class="d-flex justify-center align-end">
            <v-col cols="6">
              <p style="font-size: 2vh">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              <v-btn  theme="dark" class="mt-10">testKnopf</v-btn>
            </v-col>

          </v-row>
          <div style="position: relative; top: 20% ; left:-35%">
            <h1 class="text-white text-center dm-serif">It's about way more.</h1>
            <h1 class="text-white text-center dm-serif">than just a pretty outfit.</h1>
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
                <h1 style="color: #615f5f" class="dosis1">details</h1>
                <p  style="color: #615f5f" >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem

                </p>
              </div>

            </v-col>
          </v-row>
        </div>
    </div>
    <div class="mt-n2" style="width: 100vw; height:300px; background-color: white">

  </div>

  </div>
</template>

<script >

import FooterComponent from "~/components/FooterComponent.vue";

export default {
  components:{
    FooterComponent
  }
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
  width: 300px;
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
 .text3{
   position: relative;
   width: 50%; /* Breite des Striches anpassen */
   height: 2px; /* Höhe des Striches */
   top:-50%;
   left: 0%;
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
