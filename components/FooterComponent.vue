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
    <div style="position: relative; left: 70%;">
      <router-link to="/impressum" class="nav-link"  title="Impressum" aria-label="Impressum">
        <span class="">Impressum</span>
      </router-link> &nbsp;
      <span class="">|</span> &nbsp;
      <router-link to="/admin" class="nav-link"  title="Impressum" aria-label="Impressum">
        <span class="">Verwaltung</span>
      </router-link> &nbsp; &nbsp;
      <span class="">|</span> &nbsp;
      <router-link to="/datenschutz" class="nav-link"  title="Impressum" aria-label="Impressum">
        <span class="">Datenschutz</span>
      </router-link> &nbsp;
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
  background-image: linear-gradient(to top, #e5dbdc 50%, #fafafa 100% );
}.damen{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to top, #c7dee6 50%, #ffffff 100% );
}
.kontakt{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to top, #c7e6ca 50%, #ffffff 100% );
}
.datenschutz{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to top, #e5dbdc 50%, #fafafa 100% );
}
.impressum{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to top, #e5dbdc 50%, #fafafa 100% );
}

.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
