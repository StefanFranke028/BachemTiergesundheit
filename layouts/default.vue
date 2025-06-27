<template>
  <div>
    <HeaderComponent v-if="!isVerwaltung && (desktop || tabletHorizontal)"></HeaderComponent>
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <NuxtPage></NuxtPage>
    <FooterComponent v-if="$route.path !== '/rechnung'"></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import HeadermobileComponent from "~/components/HeadermobileComponent.vue";
import {useScreenStore} from "~/stores/screen.js";

export default {
  data() {
    return {
      isVerwaltung: false,
    };
  },
  watch: {
    '$route.path'(newPath) {
      this.isVerwaltung = newPath === '/admin' || newPath === '/rechnung';
    }
  },
  mounted() {
    this.isVerwaltung = this.$route.path === '/admin' || this.$route.path === '/rechnung';
  },
  computed: {
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
  components: {
    FooterComponent,
    HeaderComponent,
    HeadermobileComponent,
  },
};
</script>

<style scoped>
</style>
