<template>
  <div v-if="desktop|| tabletHorizontal" style="width: 100vw;" class="mt-3">
    <div class="card">
      <div class="cardIn1 px-5">
        <h1 style="margin-left: -90px" class="dm-serif">Unsere  <br> Honorare </h1>
        <div class="vertical-marker">
        </div >
        <p  class="dosis" style="margin-top: -100px">
          Lieber Gast, unsere Agentur präsentiert vier exklusive
          Honorarkategorien. Dinner Date, Classic, Exklusiv und VIP.
          Jede Dame genießt die Freiheit, das aus den Honorarkategorien frei zu
          wählen. <br>
          Zudem entscheidet sie selbst, ob sie ausschließlich Dinner Dates oder
          Escort Dates anbieten möchte.
        </p>
        <div class="d-flex justify-center mt-10" style="width: 100%;">
          <router-link to="damen" style="position: relative; left: -14%; top:11vh">    <v-btn theme="dark" class="text-center" >ZU Unseren Begleitpersonen</v-btn></router-link>

        </div>
      </div>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row style="width: 100%;" class="mx-0 pa-0">
        <v-col class="pa-0" cols="6"><y
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
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <h2 style="font-size: 2vw" class="text-center dm-serif">Maxi Dinner Date</h2>
              <br>
              <br>
             <v-row style="width: 100%; border-radius: 10px">
              <v-col  cols="6" class="d-flex justify-center tabelleleft">
                <h3>
                  Dauer
                </h3>
              </v-col>
               <v-divider vertical></v-divider>
               <v-col cols="6" class="d-flex justify-center tabelleright">
                 <h3>
                  Geschenk

                 </h3>
              </v-col>


             </v-row>
              <v-row v-for="preis in dinnerPreise" :key="preise" style="width: 100%; ">
                <v-col  cols="6" class="d-flex justify-center tabelleleftmid">
                  <p>
                    {{ preis.dauer }}
                  </p>
                </v-col>
                <v-col cols="6" class="d-flex justify-center tabellerightmid">
                  <p>
                    {{ preis.preis }}
                  </p>
                </v-col>
              </v-row>

            </v-col>
          </v-row>
        </v-col>
        <v-col class="pa-0" cols="6">
          <v-img style="z-index: 0;" max-height="900"  cover src="~/assets/blumen.jpg"  alt=""></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="width: 100vw; height: 900px">
      <v-row style="width: 100%; height: 100%" class="mx-0 pa-0">
        <v-col class="pa-0" cols="6">
          <v-img style="z-index: 0;" max-height="900"  cover src="~/assets/blumen.jpg"  alt=""></v-img>
        </v-col>
        <v-col style="background-color: #d4e2ea" class="pa-0" cols="6">
          <v-row style="width: 100%; height: 100%" class="ma-0 align-center">
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <h2 style="font-size: 2vw" class="text-center dm-serif">Maxi Escort Date</h2>
              <br>
              <br>
              <v-row style="width: 100%; border-radius: 10px">
                <v-col  cols="3" class="d-flex justify-center tabelleleft">
                  <h3>
                    Dauer
                  </h3>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="3" class="d-flex justify-center tabelle">
                  <h3>
                    Classic

                  </h3>
                </v-col>
                <v-divider vertical></v-divider>

                <v-col cols="3" class="d-flex justify-center tabelle">
                  <h3>
                    Exclusiv

                  </h3>
                </v-col>
                <v-divider vertical></v-divider>

                <v-col cols="3" class="d-flex justify-center tabelleright">
                  <h3>
                    VIP

                  </h3>
                </v-col>


              </v-row>
              <v-row v-for="preis in escordPreise" :key="preise" style="width: 100%; ">
                <v-col  cols="3" class="d-flex justify-center tabelleleftmid">
                  <p class="text-center">
                    {{ preis.dauer }}
                  </p>
                </v-col>
                <v-col cols="3" class="d-flex justify-center tabellerightmid">
                  <p>
                    {{ preis.classic }}
                  </p>
                </v-col>
                <v-col cols="3" class="d-flex justify-center tabellerightmid">
                  <p>
                    {{ preis.exclusiv }}
                  </p>
                </v-col>
                <v-col cols="3" class="d-flex justify-center tabellerightmid">
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
    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 450px;  " src="~/assets/bg.png" alt="schwarz-weis Hintergrundbild" >
      <div  style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div  class="d-flex justify-center align-center" style="width: 75%; height: 400px;    background-color: #c7dee6;">
          <div class="vertical-marker-mobile">
          </div >
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div style="position: relative; top:-50px" class="text-center dosis">
              <h2 style="margin-left: -80px; " class="dm-serif mt-n5"> {{honorare[0].text1}}</h2>
            </div>
            <div style="font-size: 11px; text-align: justify;" class="pa-3 mt-n7 dosis">
              {{honorare[0].text2}}
            </div>
            <router-link  aria-label="Vita" to="vita" >  <v-btn  theme="dark" class="text-center mt-3" >zur Vita</v-btn></router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 450px;  " src="~/assets/blumen.jpg" alt="schwarz-weis Hintergrundbild" >

      <v-row style="width: 100%; height: 100%" class="ma-0 justify-center align-center">
        <v-col cols="12" class=" ">
          <h2 style="font-size: 8vw; color: #c7dee6" class="text-center dm-serif">Maxi Dinner Date</h2>
          <br>
          <br>
          <v-row style="width: 100%; border-radius: 10px" class="mx-0">
            <v-col  cols="6" class="d-flex justify-center tabelleleft">
              <h3>
                Dauer
              </h3>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="6" class="d-flex justify-center tabelleright">
              <h3>
                Geschenk

              </h3>
            </v-col>
          </v-row>
          <v-row v-for="preis in dinnerPreise" class="mx-0" :key="preis" style="width: 100%; ">
            <v-col  cols="6" class="d-flex justify-center tabelleleftmid">
              <p>
                {{ preis.dauer }}
              </p>
            </v-col>
            <v-col cols="6" class="d-flex justify-center tabellerightmid">
              <p>
                {{ preis.preis }}
              </p>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-img>
    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 800px;  " src="~/assets/blumen.jpg" alt="schwarz-weis Hintergrundbild" >

      <v-row style="width: 100%; height: 100%" class="ma-0 justify-center align-center">
        <v-col cols="12" class=" ">
          <h2 style="font-size: 8vw; color: #c7dee6" class="text-center dm-serif">Maxi Escort Date</h2>
          <br>
          <br>
          <v-row style="width: 100%; border-radius: 10px" class="ma-0">
            <v-col  cols="3" class="d-flex justify-center tabelleleft">
              <h3>
                Dauer
              </h3>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="3" class="d-flex justify-center tabelle">
              <h3>
                Classic

              </h3>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col cols="3" class="d-flex justify-center tabelle">
              <h3>
                Exclusiv

              </h3>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col cols="3" class="d-flex justify-center tabelleright">
              <h3>
                VIP

              </h3>
            </v-col>


          </v-row>
          <v-row v-for="preis in escordPreise" :key="preise" style="width: 100%; " class="ma-0">
            <v-col  cols="3" class="d-flex justify-center tabelleleftmid">
              <p class="text-center">
                {{ preis.dauer }}
              </p>
            </v-col>
            <v-col cols="3" class="d-flex justify-center tabellerightmid">
              <p>
                {{ preis.classic }}
              </p>
            </v-col>
            <v-col cols="3" class="d-flex justify-center tabellerightmid">
              <p>
                {{ preis.exclusiv }}
              </p>
            </v-col>
            <v-col cols="3" class="d-flex justify-center tabellerightmid">
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



<script >


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "damen",
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
  data(){
    return{
      honorare:[{
        text1: 'Unsere Begleitpersonen',
        text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
        text3: 'Hier Coole Überschrift',
        text4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.et, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor',
      }],
      dinnerPreise:[
        {dauer:'Bis zu 2 Stunden', preis:'350 €'},
        {dauer:'Bis zu 4 Stunden', preis:'550 €'},
        {dauer:'Länger als 4 Stunden', preis:'Individuell zu vereinbaren'}
      ],
      escordPreise:[
        {dauer:'Bis zu 2 Stunden', classic:'400 €',exclusiv:'600 €', vip:'800 €'},
        {dauer:'4 Stunden', classic:'900 €',exclusiv:'1.000 €', vip:'1.500 €'},
        {dauer:'6 Stunden', classic:'1.200 €',exclusiv:'1.400 €', vip:'2.000 €'},
        {dauer:'8 Stunden', classic:'1.500 €',exclusiv:'1.700 €', vip:'2.500 €'},
        {dauer:'12 Stunden', classic:'1.800 €',exclusiv:'2.100 €', vip:'3.000 €'},
        {dauer:'1 Tag / 24 Stunden', classic:'2.500 €',exclusiv:'3.000 €', vip:'4.500 €'},
        {dauer:'2 Tag / 48 Stunden', classic:'4.000 €',exclusiv:'5.000€', vip:'7.000 €'},
        {dauer:'7 Tag / 168 Stunden', classic:'6.000 €',exclusiv:'7.500 €', vip:'Zu vereinbaren'},
        {dauer:'Jeder weitere Tag', classic:'1.200 €',exclusiv:'1.400 €', vip:'Zu vereinbaren'},
      ]
  }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');


.cardIn1{
  height: 400px;
  width: 430px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 20%;
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
.tabelleleft{
background-color: #65c6ec;
  border-radius: 10px 0px 0px 0px;
}.tabelleright{
   background-color: #65c6ec;
   border-radius: 0px 10px 0px 0px;

 }
 .tabelle{
   background-color: #65c6ec;
 }
.tabelleleftmid{
background-color: #b8ddec;
}.tabellerightmid{
   background-color: #b8ddec;

 }
.dosis1{
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
}
</style>
