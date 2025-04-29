<template>
  <div v-if="desktop|| tabletHorizontal" class="mt-3" style="width: 100vw;">
    <div class="card">
      <div class="cardIn1 px-5">

        <h1 class="dm-serif mt-2 text-center" style="font-size: 22px" v-html="bewerben[0].text1"></h1>

        <div class="vertical-marker">
        </div>

        <p class="dosis mt-7" style="margin-bottom: 100px;margin-left: 30px; " v-html="bewerben[0].text2">
        </p>
      </div>
    </div>
    <div style="width: 100vw; height: 600px">
      <v-row class="mx-0 pa-0" style="width: 100%;">
        <v-col class="pa-0" cols="6">
          <v-img alt="" cover max-height="600px" src="~/assets/bewerben_2_komprimiert.webp" style="z-index: 0"></v-img>
        </v-col>
        <v-col class="pa-0" cols="6">
          <v-img alt="" cover max-height="600px" src="~/assets/bewerben_1_komprimiert.webp" style="z-index: 0"></v-img>
        </v-col>
      </v-row>
    </div>
    <div style="height: 70px">

    </div>
    <div class="d-flex justify-center  py-10"  style="width: 100vw;">
      <v-row style="width: 70%;" class="d-flex justify-center">
        <v-col  class=" mb-4 mt-10 py-0 px-4 mx-2" v-for="dame in damen" cols="3"  :key="dame">
          <v-row  class="ma-0 px-5 damencard " style="width: 100%; height: 100%">
            <v-col class="pa-0 d-flex justify-center pt-5" cols="12">
              <v-carousel hide-delimiters style="height: 420px; width: 350px; border-radius: 5px" theme="dark">
                <v-carousel-item
                    v-for="bild in dame.bilder"
                    :key="bild" :src="bild.imageBase64"
                    alt="bild der Dame"
                    cover
                ></v-carousel-item>

              </v-carousel>
            </v-col>
            <v-col class="px-2 pb-8" cols="12">

              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                {{ dame.ueberschrift1}}
                </b>
              </p>
              <p class="dosis " style="font-size: 12px;" v-html=" dame.text1 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift2}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text2 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift3}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text3 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift4}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text4 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift5}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text5 ">

              </p>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

<!--
   bewerben.text3, 4 und 5
-->

    <div style="width: 100vw; " class="">
      <v-row class="mx-0 pa-0" style="width: 100%; height: 100%">
        <v-col cols="12" style="background-color: #ede6e7; padding-top: 120px">
          <v-row class="ma-0 mt-10 justify-center " style="width: 100%; height: 100% ">
            <v-col cols="10">
              <div class="mt-n16 pb-10" style="width: 100%; ">
                <h2 style="font-size: 23px"  v-html="bewerben[0].text6"></h2>
                <br>
                <p v-html="bewerben[0].text7">

                </p> <br>
                <p  v-html="bewerben[0].text8">

                </p> <br>
                <p  v-html="bewerben[0].text9">

                </p> <br>
                <p  v-html="bewerben[0].text10">

                </p> <br>
                <p v-html="bewerben[0].text11">

                </p> <br>
                <p v-html="bewerben[0].text12">
                </p>
                <p style="cursor: pointer">
                  <Icon icon="ic:baseline-phone"/> &nbsp; Telefon: <a
                    :href="'tel:'+bewerben[0].telefon">{{ bewerben[0].telefon }}</a></p>
                <br>
                <p style="cursor: pointer">
                  <Icon icon="fluent-mdl2:edit-mail"/> &nbsp; E-Mail: <a :href="'mailto:'+bewerben[0].email">
                  {{ bewerben[0].email }}</a></p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
  <div v-if="mobile || tablet">
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex justify-center align-center" cover
           src="~/assets/bewerben_1_komprimiert.webp" style="width: 100%; height: 450px;  ">
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="d-flex justify-center align-center"
             style="width: 75%; height: 400px;    background-color: #e5dbdc;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h1 class="text-center text5 dosis" v-html="bewerben[0].text1">
              </h1>
            </div>
            <div class="pa-3 mt-n7 dosis" style="font-size: 11px; text-align: justify;" v-html="bewerben[0].text2">
            </div>
            <router-link aria-label="Vita" to="vita">
              <v-btn class="text-center mt-3" theme="dark">zur Vita</v-btn>
            </router-link>
          </div>
        </div>

      </div>

    </v-img>
    <div class="d-flex justify-center  py-10"  style="width: 100vw;">
      <v-row style="width: 70%;" class="d-flex justify-center">
        <v-col  class=" mb-4 mt-10 py-0 px-4 mx-2" v-for="dame in damen" cols="10"  :key="dame">
          <v-row  class="ma-0 px-5 damencard " style="width: 100%; height: 100%">
            <v-col class="pa-0 d-flex justify-center pt-5" cols="12">
              <v-carousel hide-delimiters style="height: 420px; width: 350px; border-radius: 5px" theme="dark">
                <v-carousel-item
                    v-for="bild in dame.bilder"
                    :key="bild" :src="bild.imageBase64"
                    alt="bild der Dame"
                    cover
                ></v-carousel-item>

              </v-carousel>
            </v-col>
            <v-col class="px-2 pb-8" cols="12">

              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift1}}
                </b>
              </p>
              <p class="dosis " style="font-size: 12px;" v-html=" dame.text1 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift2}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text2 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift3}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text3 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift4}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text4 ">

              </p>
              <p class="dosis mt-2" style="font-size: 15px;">
                <b>
                  {{ dame.ueberschrift5}}
                </b>
              </p>
              <p class="dosis" style="font-size: 12px;" v-html=" dame.text5 ">

              </p>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex py-5 justify-center align-center" cover
           src="~/assets/bewerben_2_komprimiert.webp"  style="width: 100%;">
      <div class="mx-auto pa-4"
           style="background-color: rgba(241,237,236,0.89); width: 85vw; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) ">
        <div class="ma-0" style="width: 100%;">
          <div class="" >
            <p style="cursor: pointer" >
              <Icon icon="ic:baseline-phone"/> &nbsp; Telefon: <a :href="'tel:'+ bewerben[0].telefon"
                                                                  v-html="bewerben[0].telefon"></a></p>
          </div>
          <div class="d-flex ">
            <p style="cursor: pointer">
              <Icon icon="fluent-mdl2:edit-mail"/> &nbsp; E-Mail: <a :href="'mailto:'+ bewerben[0].email"
                                                                     v-html="bewerben[0].email"></a></p>
          </div>

          <div class=" mt-5  pa-0" >
            <p style="" class="dm-serif  text4" v-html="bewerben[0].text3"></p>
            <p style="" class="dm-serif text4" v-html="bewerben[0].text4"></p>
            <p style="" class="dm-serif text4" v-html="bewerben[0].text5"></p>
          </div>
        </div>
      </div>
    </v-img>
    <v-img alt="schwarz-weis Hintergrundbild" class="d-flex py-5 justify-center align-center" cover
           src="~/assets/bewerben_3_komprimiert.webp" style="width: 100%;" >
      <div
          class="mx-auto px-4"
          style="background-color: rgba(241,237,236,0.85); width: 85vw; overflow: scroll; box-shadow: 2px 2px 5px rgba(0,0,0,0.82) ">
        <div  style="width: 100%;">
          <h2 style="font-size: 20px" class="mt-4 text-center" v-html="bewerben[0].text6"></h2>
          <p class="text4 dm-serif" v-html="bewerben[0].text7">

          </p> <br>
          <p class="text4 dm-serif" v-html="bewerben[0].text8">

          </p> <br>
          <p class="text4 dm-serif" v-html="bewerben[0].text9">

          </p> <br>
          <p class="text4 dm-serif" v-html="bewerben[0].text10">

          </p> <br>
          <p class="text4 dm-serif" v-html="bewerben[0].text11">

          </p> <br>
          <p class="text4 dm-serif" v-html="bewerben[0].text12">

          </p>
        </div>
      </div>

    </v-img>

  </div>
</template>
<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const bewerben = ref([]);
const damen = ref([]);


const {data: damen1, pending2, error2} = await useAsyncData('damen', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://mila-escort.de:8443/auth/casting", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    console.error('Fehler beim Laden der damen:', e);
    // Optional: Setzen von Fallback-Daten oder Fehlerbehandlung
  }
});


// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("https://mila-escort.de:8443/auth/bewerben", {
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

    };
  }
});


if (damen1.value) {
  damen.value = damen1.value;
  console.log(damen.value);
}
// Aktualisiere das `landingpage`-Array, wenn die Daten verfügbar sind
if (landingpage1.value) {
  bewerben.value.push(landingpage1.value);
  console.log(bewerben.value);
}

// Setze dynamisch den Head basierend auf den Landingpage-Daten
useHead({
  htmlAttrs: {
    lang: 'de'
  },

  link: [
    {
      rel: 'canonical',
      href: `https://mila-escort.de/casting`,
    },
  ],
  title: 'Mila Escort Service',
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
import {Icon} from '@iconify/vue';
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "kontakt",
  components: {
    Icon
  },
  data() {
    return {
      bewerben: [{
        text1: 'Casting für MAXI ESCORT',
        text2: '„Manchmal sind es die kleinen Momente, die unser Herz berühren und uns daran\n' +
            'erinnern, wie schön das Leben sein kann. Ein Lächeln, eine Umarmung oder ein\n' +
            'freundliches Wort können den Tag erhellen. Lassen Sie sich von der Magie des\n' +
            'Augenblicks verzaubern und genießen Sie die Wärme, die echte Emotionen mit sich\n' +
            'bringen“.',
        telefon: '+49 151-670 376 96',
        email: 'bewerbung@maxi-escort.de',
      }]
    }
  },

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

  methods: {}
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

.textsize {
  font-size: 13px;
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

.vertical-marker::before {
  content: '';
  position: absolute;
  top: 0vh; /* Positioniert den Punkt ganz oben */
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
  top: 0vh; /* Beginnt direkt unter dem Punkt */
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
  background-color: #e5dbdc;
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
.damencard {
  border-radius: 7px;
  border: 2px solid black;
  box-shadow: 1px 1px 6px #7a7979;

}
</style>
