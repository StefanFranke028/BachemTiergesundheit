<template>
  <v-app>

    <v-main>
      <NuxtLayout></NuxtLayout>
    </v-main>
  </v-app>
</template>


<script setup>

</script>

<script>
import {useScreenStore} from "~/stores/screen.js";

export default {

  head() {
    return {title: 'My SSR App', meta: [{hid: 'description', name: 'description', content: 'This is an SSR page'}]}
  },
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
    isVerwaltung() {
      return this.$route.path === '/verwaltung';
    },
  },

}
</script>

<style>
.vertical-marker-mobile {
  position: relative;
  height: 84px;
  width: 10px;
  margin: 20px;
  left: 0px;
  top: -30vh;
}

.vertical-marker-mobile::before {
  content: '';
  position: absolute;
  top: 20vh;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  transform: translateX(-50%);
}

.vertical-marker-mobile::after {
  content: '';
  position: absolute;
  top: 20vh;
  left: 50%;
  width: 2px;
  height: 330%;
  background-color: black;
  transform: translateX(-50%);
}

button {
  border-radius: 30px !important;
  background-color: black !important;
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
