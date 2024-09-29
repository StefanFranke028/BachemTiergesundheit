<template>
  <v-app>
    <v-main>
      <NuxtLayout></NuxtLayout>
    </v-main>
  </v-app>
</template>
<script>
import {useScreenStore} from "~/stores/screen.js";

export default {
  head() {
    return {
      title: 'My SSR App',
      meta: [
        { hid: 'description', name: 'description', content: 'This is an SSR page' }
      ]
    }
  },
  data(){
    return{
      test:'hallo',
    }
  },
  created(){

  },
  mounted() {

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
    resize() {
      window.addEventListener('resize', this.checkMobileView);
    },
    checkMobileView() {
      const screenStore = useScreenStore();

      screenStore.setWide( window.innerWidth >= 2800)
      screenStore.setDesktop( window.innerWidth <=2600 && window.innerWidth >= 1400)
      screenStore.setTabletHorizontal(  window.innerWidth <= 1400 && window.innerWidth >= 1000)
      screenStore.setTablet( window.innerWidth <= 1000 && window.innerWidth >= 750)
      screenStore.setMobile( window.innerWidth <= 750)

    }
  }
}
</script>

<style>
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
button{
  border-radius: 30px !important;
  background-color: black !important;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
