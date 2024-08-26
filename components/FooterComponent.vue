<template>
  <div class="footer" >
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

  }
}
</script>

<style scoped>
.footer{
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to right, #e5dbdc 40%,  #c7dee6 100% );
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
