<template>
  <div>
    <HeaderComponent v-if="!isVerwaltung && (desktop || tabletHorizontal)"></HeaderComponent>
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <NuxtPage></NuxtPage>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import HeadermobileComponent from "~/components/HeadermobileComponent.vue";
import {useScreenStore} from "~/stores/screen.js";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    HeadermobileComponent,
  },
  computed: {
    wide() {
      const screenStore = useScreenStore();
      return process.client ? screenStore.wide : false;
    },
    desktop() {
      const screenStore = useScreenStore();
      return process.client ? screenStore.desktop : true; // Standardmäßig Desktop während SSR
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
      return this.$route.path === '/admin';
    },
  },
};
</script>

<style scoped>
/* Ihre Styles bleiben unverändert */
</style>
