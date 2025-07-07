<template>
  <div class="header1">

    <v-row class="justify-center mx-0 px-6 bg" style="width: 100%">
      <v-col class="pa-0 d-flex  align-center" cols="2">
        <v-img alt="Tier-Gesundheits logo" class="" src="~/assets/logo-weiß.png"
               style="height: 130px; width: 130px; cursor: pointer" @click="navigateTo('/')"></v-img>
      </v-col>
      <v-col cols="10">
        <v-row style="width: 100%">
          <v-col class="d-flex align-center" cols="2">
            <h5  :class="{ 'active': isPhysioRoute }" class="link text-white text-center">
              <router-link aria-label="Chiropraktik" class="link" to="/Chiropraktik">
                Chiropraktik
              </router-link>
            </h5>
          </v-col>
          <v-col  class="d-flex align-center" cols="2">
            <h5  :class="{ 'active': isPhysioRoute }"
                 class="link text-white text-center">
              <router-link class="link" aria-label="Osteopathie"  to="/Osteopathie">
                Osteopathie
              </router-link>
            </h5>
          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h5  :class="{ 'active': isPhysioRoute }"
                 class="link text-white text-center" >
              <router-link class="link" aria-label="Physiotherapie"  to="/Physiotherapie">
                Physiotherapie
              </router-link>
            </h5>
          </v-col>
          <v-col  class="d-flex align-center" cols="2">
            <h5 :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
            >
              <a class="link" aria-label="Ernährung" target="_blank"  href="https://gesundesfutterandreabachem.de/">
                Ernährung
              </a>
            </h5>
          </v-col>
          <v-col class="pl-0" cols="3">

          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h5 :class="{ 'active': isPhysioRoute }" class="link text-white text-center">
              <router-link class="link" aria-label="Berichte"  to="/berichte">
                Berichte
              </router-link>
            </h5>

          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h5 :class="{ 'active': isPhysioRoute }" class="link text-white text-center">
              <router-link class="link" aria-label="Produkte"  to="/Produkt">
                Produkt
              </router-link>
            </h5>

          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h5 :class="{ 'active': isPhysioRoute }" class="link text-white text-center">
              <router-link class="link" aria-label="Seminare"  to="/Seminare">
                Seminare
              </router-link>
            </h5>

          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h5  :class="{ 'active': isPhysioRoute }" class="link text-white text-center">
              <router-link class="link" aria-label="Preise"  to="/Preise">
                Preise
              </router-link>
            </h5>

          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "header1",
  computed:{
    isPhysioRoute() {
      return this.$route.path === '/Physiotherapie' || this.$route.path === '/Osteopathie' || this.$route.path === '/Chiropraktik' || this.$route.path === '/Ernaehrung' || this.$route.path === '/berichte' || this.$route.path === '/Preise' || this.$route.path === '/Video' || this.$route.path === '/Produkt' || this.$route.path === '/Seminare';
    }
  }
}
</script>


<style scoped>
.logo {
  background-image: url("../assets/logo-weiß.png");
  background-size: cover;
  width: 248px;
  height: 93px;
}
.header1{
  background-color: black;
}
.logo-tablet {
  background-image: url("../assets/logo-weiß.png");
  background-size: cover;
  margin-left: -70px;
  width: 248px;
  height: 93px;
}

.logo1 {
  background-image: url("../assets/Logo2.png");
  background-size: cover;
  width: 210px;
  height: 93px;
}

.logo1-tablet {
  background-image: url("../assets/Logo2.png");
  background-size: cover;
  margin-left: -50px;
  width: 210px;
  height: 93px;
}

.link {
  cursor: pointer;
  text-decoration: none;
  color: #0082c2 !important;
}

.active {
  color: #0082c2 !important;
  text-shadow: 1px 1px 1px black;
}

.link:hover {
  color: white !important;
}

.logoscale {
  transform: scale(0.8);
  transform-origin: top left;
  margin-top: -10px;
}
</style>
