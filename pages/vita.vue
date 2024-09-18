<template>
  <div v-if="desktop|| tabletHorizontal" style="width: 100vw;" class="mt-3">
    <div class="card">
      <div class="cardIn1 px-5" >
        <h1 style="margin-left: -90px" class="dm-serif"> Meine Vita</h1>
        <div class="vertical-marker">
        </div >
        <p class="dosis" style="margin-top: -100px;">
          Unsere Agentur wurde im Jahr 2007 unter dem Namen Maxi &amp; Friends
          Escort gegründet, inspiriert von der Vision, außergewöhnliche
          Begleitungen für besondere Anlässe zu bieten. Seitdem haben wir uns
          kontinuierlich weiterentwickelt und sind stolz darauf, eine der führenden
          Agenturen in der Branche zu sein. Heute präsentieren wir uns im neuen
          Gewand als Maxi Escort, um Ihnen weiterhin erstklassige Erlebnisse zu
          bieten.
        </p>
        <router-link aria-label="Escort" to="damen" style="position: relative; left: -14%; top:13vh">  <v-btn theme="dark" class="text-center" > zum Escort</v-btn></router-link>

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
        <v-col class="pa-0" cols="6">
          <v-img style="z-index: 0;" max-height="900"  cover src="~/assets/blumen.jpg"  alt=""></v-img>
        </v-col>
        <v-col style="background-color: rgba(215,232,215,0.56)" class="pa-0 pl-16" cols="6">
          <v-row style="width: 100%; height: 100%" class="ma-0 align-center">

            <v-col cols="7">
              <h2 style="font-size: 1.6vw" class="text-center dm-serif">Was mich dazu inspiriert hat, Maxi Escort zu gründen?</h2>
              <br>
              <br>
              <p class="dosis" style=" text-align: justify;">
                Ich habe Maxi Escort gegründet, weil ich eine Leidenschaft für erstklassigen Service
                und unvergessliche Erlebnisse habe. Es war mir wichtig, einen Ort zu schaffen, an
                dem sich unsere Kunden wohl und geschätzt fühlen. Unsere Dienstleistungen sind
                darauf ausgerichtet, höchste Ansprüche zu erfüllen und besondere Momente zu
                kreieren.
                <br>
                <br>
                Ich wollte etwas Einzigartiges schaffen, das sich durch Diskretion, Professionalität
                und persönliche Betreuung auszeichnet. Maxi Escort ist mehr als nur ein Service –
                es ist eine Erfahrung, die in Erinnerung bleibt.
                <br>
                <br>
                Maxi Escort ist einzigartig, weil wir auf höchste Qualität und Diskretion setzen.
                Unsere Dienstleistungen sind maßgeschneidert, um Ihre individuellen Wünsche zu
                erfüllen. Hier sind einige Punkte, die uns besonders machen:
              </p>


            </v-col>
            <v-col cols="5"></v-col>
          </v-row>
        </v-col>

      </v-row>
    </div>
    <div style="width: 100vw; height: 900px">
      <v-row style="width: 100%; height: 100%" class="mx-0 pa-0">
        <v-col style="background-color: rgba(215,232,215,0.56)" class="pa-0 pl-16" cols="6">
          <v-row style="width: 100%; height: 100%" class="ma-0 mt-16">
            <v-col cols="3"></v-col>

            <v-col class="" cols="7">

              <h5 style="font-size: 1.2vw" class="text-center dm-serif">Exklusivität</h5>

              <p class="dosis" style=" text-align: justify;">
                Wir bieten ausschließlich Begleitungen an, die durch uns sorgfältig ausgewählt
                wurden, um unseren und Ihren Ansprüchen immer gerecht werden zu können.

              </p>
              <h5 style="font-size: 1.2vw" class="text-center dm-serif mt-10">Diskretion</h5>

              <p class="dosis" style=" text-align: justify;">
                Ihre Privatsphäre ist uns heilig. Wir garantieren und stehen für absolute
                Vertraulichkeit.
              </p>
              <h5 style="font-size: 1.2vw" class="text-center dm-serif mt-10">Personalisierter Service</h5>

              <p class="dosis" style=" text-align: justify;">
                Jeder Kunde erhält eine individuelle Betreuung, um
                sicherzustellen, dass fast alle Wünsche erfüllt werden.
              </p>
              <h5 style="font-size: 1.2vw" class="text-center dm-serif mt-10">Erfahrung</h5>

              <p class="dosis" style=" text-align: justify;">
                Mit jahrelanger Erfahrung in der Branche wissen wir genau, wie wir Ihre
                Erwartungen übertreffen können.
                Wir freuen uns darauf, Ihnen einen unvergesslichen Service zu bieten!

                Unsere Begleitpersonen sind das Herzstück von Maxi Escort.
              </p>
              <h5 style="font-size: 1.2vw" class="text-center dm-serif mt-10">Erfahrung</h5>

              <p class="dosis" style=" text-align: justify;">
                Mit jahrelanger Erfahrung in der Branche wissen wir genau, wie wir Ihre
                Erwartungen übertreffen können.
                Wir freuen uns darauf, Ihnen einen unvergesslichen Service zu bieten!

                Unsere Begleitpersonen sind das Herzstück von Maxi Escort.
              </p>

              <div class="d-flex justify-center mt-10" style="width: 100%;">
                <router-link to="damen">  <v-btn theme="dark" class="text-center" >  Zu unseren Begleitpersonen</v-btn></router-link>

              </div>
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
        <v-col style="background-color: rgba(215,232,215,0.56)" class="pa-0 pl-16" cols="6">
          <v-row style="width: 100%; height: 100%" class="ma-0 mt-16">

            <v-col cols="7">
              <h1 style="font-size: 1.6vw" class="text-center dm-serif">Was macht sie besonders?</h1>
              <h2 style="font-size: 1.2vw" class="text-center dm-serif mt-5">Vielfalt</h2>

              <p class="dosis" style=" text-align: justify;">
                Unsere Begleitpersonen kommen aus verschiedenen Hintergründen und
                Kulturen, sodass wir für jeden Geschmack die passende Begleitung bieten können.

              </p>
              <h2 style="font-size: 1.2vw" class="text-center dm-serif mt-8">Professionalität</h2>

              <p class="dosis" style=" text-align: justify;">
                Jede Begleitperson wird sorgfältig ausgewählt, um höchsten
                Ansprüchen gerecht werden zu können, sei es Öffentlicher Auftritt, Eloquenz oder
                Einfühlungsvermögen. Nichts ist schlimmer als eine unprofessionelle Begleitung.

              </p>

              <h2 style="font-size: 1.2vw" class="text-center dm-serif mt-8">Charme und Intelligenz</h2>

              <p class="dosis" style=" text-align: justify;">
                Unsere Begleitpersonen sind nicht nur attraktiv, sondern
                auch charmant und intelligent. Sie können sich in jeder Gesellschaft bewegen und
                interessante Gespräche führen.

              </p>

              <h2 style="font-size: 1.2vw" class="text-center dm-serif mt-8">Diskretion und Vertraulichkeit</h2>

              <p class="dosis" style=" text-align: justify;">
                Ihre Privatsphäre ist uns wichtig. Unsere
                Begleitpersonen sind diskret und respektieren Ihre Vertraulichkeit.

              </p>
              <br><br>
              <p>
                Ich bin stolz darauf, ein Team zu haben, das so engagiert und professionell ist.
              </p>
              <p>
                Diese Kombination aus Erfahrung, Professionalität, Exklusivität und
                Kundenzufriedenheit macht Maxi Escort zu einer herausragenden Agentur in der
                Branche.
              </p>
              <div class="d-flex justify-center mt-10" style="width: 100%;">
                <router-link to="damen">  <v-btn theme="dark" class="text-center" >  Zu unseren Begleitpersonen</v-btn></router-link>

              </div>
            </v-col>
            <v-col cols="5"></v-col>
          </v-row>
        </v-col>

      </v-row>
    </div>

  </div>
  <div v-if="mobile || tablet">
    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 450px;  " src="~/assets/bg.png" alt="schwarz-weis Hintergrundbild" >
      <div  style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div  class="d-flex justify-center align-center" style="width: 75%; height: 400px;    background-color: #d1e3d3;">
            <div class="vertical-marker-mobile">
            </div >
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div style="position: relative; top:-50px" class="text-center dosis">
              <h2 style="margin-left: -120px;" class="dm-serif mt-2"> {{vita[0].text1}}</h2>
            </div>
            <div style="font-size: 11px; text-align: justify;" class="pa-3 mt-n7 dosis">
              {{vita[0].text2}}
            </div>
             <router-link  aria-label="Escort" to="damen" >  <v-btn  theme="dark" class="text-center mt-3" >zum Escort</v-btn></router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 450px;  " src="~/assets/blumen.jpg" alt="schwarz-weis Hintergrundbild" >
      <div style="background-color: rgb(215,232,215); width: 85vw; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) " class="mx-auto pa-4">
        <h2 style="font-size: 5vw" class="text-center dm-serif">{{vita[0].text3}}</h2>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text4}}
        </p>
      </div>

    </v-img>
    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 630px;  " src="~/assets/blumen.jpg" alt="schwarz-weis Hintergrundbild" >
      <div style="background-color: rgb(215,232,215); width: 85vw; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) " class="mx-auto pa-7">
        <h1 style="font-size: 5vw" class="text-center dm-serif">{{vita[0].text5}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text6}}
        </p>
        <h1  style="font-size: 5vw" class="text-center mt-4 dm-serif">{{vita[0].text7}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text8}}
        </p>
        <h1  style="font-size: 5vw" class="text-center mt-4 dm-serif">{{vita[0].text9}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text10}}
        </p>
        <h1  style="font-size: 5vw" class="text-center mt-4 dm-serif">{{vita[0].text11}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text12}}
        </p>
      <router-link to="damen" >  <v-btn theme="dark" class="mt-5 text-center" >  Zu unseren Begleitpersonen</v-btn></router-link>
      </div>


    </v-img>

    <v-img  class="d-flex justify-center align-center" cover style="width: 100%; height: 600px;  " src="~/assets/blumen.jpg" alt="schwarz-weis Hintergrundbild" >
      <div style="background-color: rgb(215,232,215); width: 85vw; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) " class="mx-auto pa-7">
        <h1 style="font-size: 5vw" class="text-center dm-serif">{{vita[0].text13}}</h1>
        <h1 style="font-size: 5vw" class="text-center dm-serif">{{vita[0].text14}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text15}}
        </p>
        <h1  style="font-size: 5vw" class="text-center mt-4 dm-serif">{{vita[0].text16}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text17}}
        </p>
        <h1  style="font-size: 5vw" class="text-center mt-4 dm-serif">{{vita[0].text18}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text19}}
        </p>
        <h1  style="font-size: 5vw" class="text-center mt-4 dm-serif">{{vita[0].text20}}</h1>

        <p class="dosis mt-2"  style=" text-align: justify; font-size: 12px">
          {{vita[0].text21}}
        </p>
      </div>


    </v-img>
  </div>
</template>



<script >


import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "damen",
  data(){
    return{
      vita:[{
        text1:'Meine Vita',
        text2:'Unsere Agentur wurde im Jahr 2007 unter dem Namen Maxi & Friends Escort gegründet, inspiriert von der Vision, außergewöhnliche Begleitungen für besondere Anlässe zu bieten. Seitdem haben wir uns kontinuierlich weiterentwickelt und sind stolz darauf, eine der führenden Agenturen in der Branche zu sein. Heute präsentieren wir uns im neuen Gewand als Maxi Escort, um Ihnen weiterhin erstklassige Erlebnisse zu bieten.',
        text3:'Was mich dazu inspiriert hat, Maxi Escort zu gründen?',
        text4:'Ich habe Maxi Escort gegründet, weil ich eine Leidenschaft für erstklassigen Service und unvergessliche Erlebnisse habe. Es war mir wichtig, einen Ort zu schaffen, an dem sich unsere Kunden wohl und geschätzt fühlen. Unsere Dienstleistungen sind darauf ausgerichtet, höchste Ansprüche zu erfüllen und besondere Momente zu kreieren.\n' +
            '\n' +
            'Ich wollte etwas Einzigartiges schaffen, das sich durch Diskretion, Professionalität und persönliche Betreuung auszeichnet. Maxi Escort ist mehr als nur ein Service – es ist eine Erfahrung, die in Erinnerung bleibt.\n' +
            '\n' +
            'Maxi Escort ist einzigartig, weil wir auf höchste Qualität und Diskretion setzen. Unsere Dienstleistungen sind maßgeschneidert, um Ihre individuellen Wünsche zu erfüllen. Hier sind einige Punkte, die uns besonders machen:',
        text5:'Exklusivität',
        text6:'Wir bieten ausschließlich Begleitungen an, die durch uns sorgfältig ausgewählt wurden, um unseren und Ihren Ansprüchen immer gerecht werden zu können.',
        text7:'Diskretion',
        text8:'Ihre Privatsphäre ist uns heilig. Wir garantieren und stehen für absolute Vertraulichkeit.',
        text9:'Personalisierter Service',
        text10:'Jeder Kunde erhält eine individuelle Betreuung, um sicherzustellen, dass fast alle Wünsche erfüllt werden.',
        text11:'Erfahrung',
        text12:'Mit jahrelanger Erfahrung in der Branche wissen wir genau, wie wir Ihre Erwartungen übertreffen können. Wir freuen uns darauf, Ihnen einen unvergesslichen Service zu bieten! Unsere Begleitpersonen sind das Herzstück von Maxi Escort.',
        text13:'Was macht sie besonders?',
        text14:'Vielfalt',
        text15:'Unsere Begleitpersonen kommen aus verschiedenen Hintergründen und Kulturen, sodass wir für jeden Geschmack die passende Begleitung bieten können.',
        text16:'Professionalität',
        text17:'Jede Begleitperson wird sorgfältig ausgewählt, um höchsten Ansprüchen gerecht werden zu können, sei es Öffentlicher Auftritt, Eloquenz oder Einfühlungsvermögen. Nichts ist schlimmer als eine unprofessionelle Begleitung.',
        text18:'Charme und Intelligenz',
        text19:'Unsere Begleitpersonen sind nicht nur attraktiv, sondern auch charmant und intelligent. Sie können sich in jeder Gesellschaft bewegen und interessante Gespräche führen.',
        text20:'Diskretion und Vertraulichkeit',
        text21:'Ihre Privatsphäre ist uns wichtig. Unsere Begleitpersonen sind diskret und respektieren Ihre Vertraulichkeit.',
        text22:'Ich bin stolz darauf, ein Team zu haben, das so engagiert und professionell ist.\n' +
            '\n' +
            'Diese Kombination aus Erfahrung, Professionalität, Exklusivität und Kundenzufriedenheit macht Maxi Escort zu einer herausragenden Agentur in der Branche.',
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
}.vertical-marker-mobile {
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
