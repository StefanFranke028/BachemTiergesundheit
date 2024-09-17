<template>
  <div v-if="desktop|| tabletHorizontal" class="desktop" :class="formattedPath" >
    <v-row style="width: 100%" class="justify-center ma-0">
      <v-col cols="6">
        <h2 class="">ELEGANZ TRIFFT LEIDENSCHAFT </h2>
        <p style="font-size: 14px" class=" mt-" >erotisch | leidenschaftlich | hautnah</p>
        <br>
        <br>
        <br>
        <br>
        <br>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">

      </v-col>
    </v-row>
    <div style="position: relative;" class="d-flex justify-center mt-5">
      <p style="font-size: 11px">
        Copyright © 2024 Maxi Escort ® • Alle Rechte vorbehalten •
        <router-link to="/impressum" class="nav-link"  title="Impressum" aria-label="Impressum">
          <span class="">Anbieterkennzeichnung</span>
        </router-link> &nbsp;
        •
        <router-link to="/datenschutz" class="nav-link"  title="Impressum" aria-label="Impressum">
          <span class=""> Disclaimer & Datenschutzerklärung </span>
        </router-link> &nbsp;
        •
        <router-link to="/verwaltung" class="nav-link"  title="Impressum" aria-label="Impressum">
          <span class="">Sitemap</span>
        </router-link> &nbsp;


      </p>
    </div>

  </div>
  <div v-if="mobile|| tablet" class="mobile" :class="formattedPath" >
    <v-row style="width: 100%" class="justify-center ma-0">
      <v-col cols="10">
        <h3 class="">ELEGANZ TRIFFT LEIDENSCHAFT </h3>
        <p style="font-size: 12px"  >erotisch | leidenschaftlich | hautnah</p>
        <br>

      </v-col>
      <v-col cols="2" class="d-flex justify-center">

      </v-col>
    </v-row>
    <div style="position: relative;" class="d-flex justify-center px-2">
      <p style="font-size: 6px">
        Copyright © 2024 Maxi Escort ® • Alle Rechte vorbehalten •
        <router-link to="/impressum" class="nav-link"  title="Impressum" aria-label="Impressum">
          <span class="">Anbieterkennzeichnung</span>
        </router-link> &nbsp;
        •
        <router-link to="/datenschutz" class="nav-link"  title="Impressum" aria-label="Impressum">
          <span class=""> Disclaimer & Datenschutzerklärung </span>
        </router-link> &nbsp;
        •
        <router-link to="/verwaltung" class="nav-link"  title="Impressum" aria-label="Impressum">
          <span class="">Sitemap</span>
        </router-link> &nbsp;
      </p>
    </div>
  </div>
</template>

<script>

import {useScreenStore} from "~/stores/screen.js";

export default {
  name: "FooterComponent",
  components:{

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
    formattedPath() {
      // Überprüfe, ob der Pfad mehr als nur ein "/" enthält
      if (this.$route.path !== '/') {
        // Entferne das führende "/" vom Pfad
        return this.$route.path.substring(1);
      }
      // Wenn der Pfad nur aus "/" besteht, gib ihn unverändert zurück
      return 'footer';
    }
  }
}
</script>

<style scoped>
.footer{

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}.damen{

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
}.honorare{

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
}
.kontakt{

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100% );
}
.datenschutz{

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}
.impressum{

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}
.vita{

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100% );
}.bewerben{

   background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}.blog{

    background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
}

.mobile{
  width: 100%;
  height: 110px;
}
.desktop{
        width: 100%;
        height: 250px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
