<template>
<div style="width: 100vw;" class="mt-3">
  <div class="card">
    <div class="cardIn1">
      <h1 style="margin-left: -90px" class="dm-serif">About The <br> experience</h1>
      <div class="vertical-marker">
      </div >
      <p class="dosis" style="margin-top: -100px;margin-left: 200px; margin-right: -70px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd </p>
    <v-btn theme="dark" style="position: relative; left: -14%; top:15vh">Beispielknopf</v-btn>
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
  <div style="width: 100vw; height: 900px">
    <v-row style="width: 100%; height: 100%" class="mx-0 pa-0">
      <v-col style="background-color: #d4e2ea" class="pa-0" cols="6">
        <v-row style="width: 100%; height: 100%" class="ma-0 align-center">
          <v-col cols="5"></v-col>
          <v-col cols="6">
            <h2 style="font-size: 2vw" class="text-center dm-serif">Hallo Testüberschrift</h2>
            <br>
            <br>
            <p class="dosis" style=" text-align: justify;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              <br>
              <br>
              et, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
            </p>
            <div class="d-flex justify-center mt-10" style="width: 100%;">
              <v-btn theme="dark" class="text-center">beispielknopf</v-btn>

            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pa-0" cols="6">
        <v-img style="z-index: 0;" max-height="900"  cover src="~/assets/blumen.jpg"  alt=""></v-img>
      </v-col>
    </v-row>
  </div>
</div>
</template>



<script >


export default {
  name: "damen"
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
  background-color: #c7dee6;
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
</style>
