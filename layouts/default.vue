<template>
  <div v-if="desktop || tabletHorizontal">
    <HeaderComponent v-if="!isVerwaltung"></HeaderComponent>
    <NuxtPage></NuxtPage>
    <FooterComponent></FooterComponent>
  </div>
  <div v-if="mobile || tablet">
    <HeadermobileComponent></HeadermobileComponent>
    <v-main>
      <NuxtPage></NuxtPage>
    </v-main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import {useScreenStore} from "~/stores/screen.js";
import HeadermobileComponent from "~/components/HeadermobileComponent.vue";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    HeadermobileComponent
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
    isVerwaltung() {
      const route = useRoute();
      return route.path === '/verwaltung';
    }
  },

}
</script>

<style scoped>


</style>
