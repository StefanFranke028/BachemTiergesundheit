<template>
  <div :class="formattedPath" >
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
</template>

<script>

export default {
  name: "FooterComponent",
  components:{

  },
  computed:{
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
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}.damen{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
}.honorare{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
}
.kontakt{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100% );
}
.datenschutz{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}
.impressum{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}
.vita{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100% );
}.bewerben{
  width: 100%;
  height: 250px;
   background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}.blog{
  width: 100%;
  height: 250px;
    background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
}

.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
