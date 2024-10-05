<template>
  <div v-if="desktop|| tabletHorizontal"  style="background-color: #ffffff" class="pa-5 mt-4">
    <v-row style="width: 100% ;" class="mx-0 justify-center">
      <v-col cols="7">
        <v-img src="../assets/1i.jpg" cover></v-img>
      </v-col> <v-col cols="7">
      <v-img src="../assets/2i.jpg" cover></v-img>
    </v-col>
    </v-row>

  </div>
  <div v-if="mobile || tablet">
    <v-row style="width: 100% ;" class="mx-0 justify-center">
      <v-col cols="12">
        <v-img src="../assets/1.jpg" cover></v-img>
      </v-col> <v-col cols="12">
      <v-img src="../assets/2.jpg" cover></v-img>
    </v-col> <v-col cols="12">
      <v-img src="../assets/3.jpg" cover></v-img>
    </v-col> <v-col cols="12">
      <v-img src="../assets/4.jpg" cover></v-img>
    </v-col> <v-col cols="12">
      <v-img src="../assets/5.jpg" cover></v-img>
    </v-col> <v-col cols="12">
      <v-img src="../assets/6.jpg" cover></v-img>
    </v-col>
    </v-row>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "KontaktView",
  components: {FooterComponent, HeaderComponent},
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
}
</script>

<style scoped>

</style>
