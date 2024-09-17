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

  data(){
    return{
      test:'hallo',
    }
  },
  created(){

  },
  mounted() {
    this.checkMobileView()
    this.resize()
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

      screenStore.setWide( window.innerWidth >= 2000)
      screenStore.setDesktop( window.innerWidth <=2000 && window.innerWidth >= 1400)
      screenStore.setTabletHorizontal(  window.innerWidth <= 1400 && window.innerWidth >= 1000)
      screenStore.setTablet( window.innerWidth <= 1000 && window.innerWidth >= 750)
      screenStore.setMobile( window.innerWidth <= 750)

    }
  }
}
</script>

<style>
button{
  border-radius: 30px !important;
  background-color: black !important;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
