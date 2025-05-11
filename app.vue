<template>
  <v-app>
    <v-main>
      <NuxtLayout></NuxtLayout>
    </v-main>
  </v-app>
</template>


<script setup>
import {useHead} from '#app'

useHead({
  title: 'Mila Escort Service',
  link: [
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap',
      as: 'style',
      onload: "this.rel='stylesheet'"
    },
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap',
      as: 'style',
      onload: "this.rel='stylesheet'"
    },
    {
      rel: 'preload',
      href: '/_nuxt/index.fNBpe6BQ.css',
      as: 'style',
      onload: "this.rel='stylesheet'"
    }
  ],
  meta: [
    {
      name: 'description',
      content: 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Mila Escort Service in Frankfurt.',
    },
    {
      name: 'keywords',
      content: 'Exklusivität und Diskretion auf höchstem Niveau – Ihr Mila Escort Service in Frankfurt.',
    },
  ],
})
</script>
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
