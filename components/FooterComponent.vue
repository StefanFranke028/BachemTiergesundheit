<template>
  <div class="footer" >
    <v-row style="width: 100%" class="justify-center ma-0">
      <v-col cols="6">
        <h2 class="text-white">UNSEREN SERVICE LIVE ERLEBEN </h2>
        <p style="font-size: 14px" class="text-white mt-" >erotisch | leidenschaftlich | hautnah</p>
        <br>
        <p style="font-size: 12px" class="text-white mt-" >Escord:</p>
        <p style="font-size: 12px" class="text-white mt-" >Straße</p>
        <p style="font-size: 12px" class="text-white mt-" >PLZ ORT</p> <br>
        <p style="font-size: 12px" class="text-white mt-" >Kontakt:</p>
        <p style="font-size: 12px" class="text-white mt-" >email</p>

      </v-col>
      <v-col cols="2" class="d-flex justify-center">

      </v-col>
    </v-row>
    <div style="position: relative; left: 70%;">
      <router-link to="/impressum" class="nav-link"  title="Impressum" aria-label="Impressum">
        <span class="text-white">Impressum</span>
      </router-link> &nbsp;
      <span class="text-white">|</span> &nbsp;
      <router-link to="/admin" class="nav-link"  title="Impressum" aria-label="Impressum">
        <span class="text-white">Verwaltung</span>
      </router-link> &nbsp; &nbsp;
      <span class="text-white">|</span> &nbsp;
      <router-link to="/datenschutz" class="nav-link"  title="Impressum" aria-label="Impressum">
        <span class="text-white">Datenschutz</span>
      </router-link> &nbsp;
    </div>
  </div>
</template>

<script>

export default {
  name: "FooterComponent",
  components:{

  }
}
</script>

<style scoped>
.footer{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to right, #000000 10%, #595757 30%, #000000 100% );
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
