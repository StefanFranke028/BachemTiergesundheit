<template>
  <div v-if="desktop|| tabletHorizontal">
    <v-img alt="schwarz-weis Hintergrundbild" cover src="~/assets/bg_komprimiert.webp"
           style="width: 100vw; height: 500px;"/>
    <div class="card">
      <div class="cardIn1">
        <div class="text-center text2 dosis" v-html="blog[0].text2">
        </div>
      </div>
      <div class="cardIn2">
        <div class="text3 ">
          <h1 class="text-center dm-serif" style="font-size: 22px" v-html="blog[0].text1">
          </h1>
        </div>
        <div class="line-with-dot">
        </div>
        <v-img alt="" cover
               src="~/assets/blog_1_komprimiert.webp"
               style="min-width: 100%; min-height: 100%; width: auto; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></v-img>
      </div>
      <div style="min-width: 100%; min-height: 100%; width: auto; height: auto; position: absolute; top: 142%; left: 80%; transform: translate(-50%, -50%);">
       <span
           v-for="(category, index) in categories"
           :key="index"
           :class="{ 'active-category': selectedCategory === category.value }"
           class="category"
           @click="selectedCategory = category.value"
       >
  {{ category.label }}
</span>
      </div>
    </div>

    <div class="mt-n2" style="width: 100vw; height:250px; background-color: #c7dee6">

    </div>


    <div>
      <v-row
          v-for="(blog, index) in blogs
    .slice()
    .reverse()
    .filter(blog => blog.magazin === selectedCategory)"
          :key="blog"
          class="ma-0 pa-0"
          style="width: 100%; height: 100%; min-height: 500px"
      >
        <v-col :class="{'bgwithe': index % 2 === 1}" class="bgblue" cols="12">
          <v-row class="ma-0" style="width: 100%; height: 100%;">
            <v-col class="d-flex align-center" cols="6">
              <v-img :src="blog.bild" alt="" cover max-height="700" style="z-index: 0;"></v-img>
            </v-col>
            <v-col class="pa-12" cols="6">
              <h2 class="text-center mt-4 dm-serif" style="font-size: 1.1vw" v-html="blog.ueberschrift"></h2>
              <h3 class="text-center dm-serif" style="color: #4a4949; font-size: 0.9vw" v-html="blog.unterUeberschrift"></h3>
              <br><br>
              <p class="dosis" v-html="blog.text"></p>
              <p class="mt-10" style="color: #4a4949" v-html="blog.autor"></p>
              <input v-model="blog.datum" aria-label="test" class="mt-10" disabled readonly style="color: #8e8c8c"
                     type="date"/>
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
             style="width: 75%; height: 400px;    background-color: #c7dee6;">
          <div class="vertical-marker-mobile">
          </div>
          <div style="height: 250px; width: 70%; background-color: white; ">
            <div class="text-center dosis" style="position: relative; top:-50px">
              <h1 class="text-center text5 dosis" v-html="blog[0].text1"></h1>

            </div>
            <p class="pa-3  dosis" style="font-size: 12px; text-align: justify;" v-html="blog[0].text2">
            </p>
            <router-link aria-label="Vita" to="vita">
              <v-btn class="text-center mt-3" style="position:absolute; top:80%" theme="dark">zur Vita</v-btn>
            </router-link>
          </div>
        </div>

      </div>

    </v-img>

    <v-img v-for="(blog, index) in blogs
    .slice()
    .reverse()
    .filter(blog => blog.magazin === selectedCategory)"
           :key="blog"
           :src="blog.bild"
           alt="schwarz-weiß Hintergrundbild"
           class="d-flex justify-center pb-5 align-center"
           cover
           style="width: 100%; padding-top: 20px;">

      <v-row class="ma-0 pa-0 mx-auto" style="width: 90%; height: 90%; min-height: 800px">
        <v-col :class="{'bgwitheMobile': index % 2 === 1}" class="bgblueMobile" cols="12">
          <v-row class="ma-0" style="width: 100%; height: 100%;">
            <v-col cols="12">
              <h2 class="text-center dm-serif" style="font-size: 12px" v-html="blog.ueberschrift"></h2>
              <h2 class="text-center dm-serif" style="color: #4a4949; font-size: 11px" v-html="blog.unterUeberschrift"></h2>
              <br><br>
              <p class="dosis" style="text-align: justify; font-size: 11px" v-html="blog.text"></p>
              <p class="mt-10" style="color: #4a4949" v-html="blog.autor"></p>
              <input v-model="blog.datum" aria-label="test" class="mt-10" disabled readonly style="color: #4a4949"
                     type="date"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>


  </div>
</template>

<script setup>
import {ref} from 'vue';

// Reaktives Array für Landingpage-Daten
const blog = ref([]);
const blogs = ref([])
const { proxy } = getCurrentInstance()


const route = useRoute()

const selectedCategory = ref("blog" ) // Startwert für Blog Beiträge

const categories = ref([
  { label: "Blog Beiträge", value:  "blog" },
  { label: "Feminine Finesse", value: "feminine" },
  { label: "1 x 1 für unsere Herren", value: "herren" }
])

onMounted(() => {
  if (route.query.special) {
    const special = route.query.special
    const isValid = categories.value.some(cat => cat.value === special)

    if (isValid) {
      selectedCategory.value = special
      console.log(`${special} wurde aktiviert`)
    }
  }
})


// Methode zum Abrufen der Landingpage-Daten mit useAsyncData
const {data: landingpage1, pending, error} = await useAsyncData('landingpage', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/blog", {
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

const {data: blogs1, pending1, error2} = await useAsyncData('blog', async () => {
  let token = null;

  if (process.client) {
    // Zugriff auf localStorage nur auf dem Client
    token = localStorage.getItem('token');
  }

  try {
    const response = await $fetch("http://5.45.97.75:8080/auth/blog/entries", {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response;
  } catch (e) {
    console.error('Fehler beim Laden der Landingpage:', e);
  }
})

blogs1.value

// Aktualisiere das `landingpage`-Array, wenn die Daten verfügbar sind
if (landingpage1.value) {
  blog.value.push(landingpage1.value);
}
if (blogs1.value) {
  blogs.value = blogs1.value
  blogs.value
console.log(blogs.value)
}


// Setze dynamisch den Head basierend auf den Landingpage-Daten
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: `https://mila-escort.de/magazin`,
    },
  ],
  title: 'Mila-Escort Blog',
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

import {useScreenStore} from "~/stores/screen.js";

export default {
  data() {

    return {
      blog: [{
        text1: 'Unsere Begleitpersonen',
        text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
        text3: 'Hier Coole Überschrift',
        text4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.et, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor',
      }],
      blogs: [
        {
          ueberschrift: 'Überschrift',
          bild: '',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          ueberschrift: 'Überschrift',
          bild: '',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          ueberschrift: 'Überschrift',
          bild: '',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          ueberschrift: 'Überschrift',
          bild: '',
          unterUeberschrift: 'Unterüberschrift',
          autor: 'Stefan Franke',
          datum: '30.10.2023',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
      ]
    }
  },
  components: {},
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

.card {
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


.cardIn1 {
  height: 400px;
  width: 300px;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 10%;
}

.cardIn2 {
  height: 300px;
  width: 250px;
  background-color: black;
  box-shadow: 2px -2px 5px rgba(67, 67, 67, 0.87);
  position: absolute;
  left: 28%;
  top: 40%;
}

.bgwithe {
  background-color: #c7dee6 !important;
}

.bgblue {
  background-color: #d4e2ea;
}
.bgwitheMobile {
  background-color: rgba(199, 222, 230, 0.86) !important;
}

.bgblueMobile {
  background-color: rgba(212, 226, 234, 0.86);
}
.text2 {
  color: #5e5d5d;
  position: relative;
  left: 50%;
  top: 10%;
  font-size: 30px;

}

.text3 {
  position: relative;
  width: 100%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  top: -50%;
  left: 0%;
}

.line-with-dot {
  position: relative;
  width: 50%; /* Breite des Striches anpassen */
  height: 2px; /* Höhe des Striches */
  background-color: black; /* Farbe des Striches */
  top: -24%;
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

h1 {
  font-size: 3vw;
}


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
.category {
  cursor: pointer;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 500;
  color: black;
  transition: color 0.3s ease-in-out;
}

.category:hover {
  color: #343fc5; /* Lila-Farbton als Highlight */
}

.active-category {
  font-weight: bold;
  color: #343fc5;
}
</style>
