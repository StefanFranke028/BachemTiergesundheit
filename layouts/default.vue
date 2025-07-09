<template>
  <div>
    <NuxtPage>

    </NuxtPage>
  </div>
</template>

<script>

import {useScreenStore} from "~/stores/screen.js";

export default {
  data() {
    return {
    };
  },

  mounted() {
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
  },
};
</script>

<style scoped>
</style>
