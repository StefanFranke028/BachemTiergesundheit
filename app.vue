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


  mounted() {
    const screenStore = useScreenStore();
    screenStore.initializeScreen();
  },
  computed: {
    wide() {
      const screenStore = useScreenStore();
      return process.client ? screenStore.wide : false;
    },
    desktop() {
      const screenStore = useScreenStore();
      return process.client ? screenStore.desktop : true;
    },
    mobile() {
      const screenStore = useScreenStore();
      return process.client ? screenStore.mobile : false;
    },
    tablet() {
      const screenStore = useScreenStore();
      return process.client ? screenStore.tablet : false;
    },
    tabletHorizontal() {
      const screenStore = useScreenStore();
      return process.client ? screenStore.tabletHorizontal : false;
    },

  },

}
</script>



<style>
@font-face {
  font-family: "Aptos";
  src: url("assets/fonts/Aptos.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "Aptos", sans-serif;
}



::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
