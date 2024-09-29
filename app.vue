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
</style>
