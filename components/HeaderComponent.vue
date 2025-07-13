<template>
  <div class="header1 ">

    <v-row class="justify-center mx-0 px-6 bg" style="width: 100%">
      <v-col class="pa-0 d-flex  align-center" cols="2">
        <v-img alt="Tier-Gesundheits logo" class="" src="~/assets/logo-weiß.png"
               style="height: 130px; width: 130px; cursor: pointer" @click="navigateTo('/')"></v-img>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="7">
        <v-row style="width: 100%">
          <v-col class="d-flex align-center" cols="3">
            <p  class="link text-white text-center">
              <NuxtLink title="Chiropraktik für Tiere ist eine ganzheitliche Therapieform." style="font-size: 16px" aria-label="Chiropraktik" to="/chiropraktik">Chiropraktik</NuxtLink>
            </p>
          </v-col>
          <v-col  class="d-flex align-center" cols="3">
            <p
                 class="link text-white text-center">
              <NuxtLink title="Osteopathie für Tiere eine ganzheitliche Behandlungsmethode" style="font-size: 16px" aria-label="Osteopathie" to="/osteopathie">Osteopathie</NuxtLink>
            </p>
          </v-col>
          <v-col class="d-flex align-center" cols="3">
            <p
                 class="link text-white text-center" >
              <NuxtLink title="Infos für interessierte Werbepartner" style="font-size: 16px" aria-label="Werbepartner" to="/werbepartner">Werbepartner</NuxtLink>
            </p>
          </v-col>
          <v-col  class="d-flex align-center" cols="3">
            <p  class="link text-white text-center"
            >
              <a title="Ernährung ist für ihr Haustier wichtig" style="font-size: 16px" class="link" aria-label="Ernährung" rel="noopener noreferrer" target="_blank"  href="https://gesundesfutterandreabachem.de/">
                Ernährung
              </a>
            </p>
          </v-col>

          <v-col class="d-flex align-center" cols="3">
            <p  class="link text-white text-center">
              <NuxtLink title="Berichte aus unserer Praxis" style="font-size: 16px" aria-label="Berichte" to="/berichte">Berichte</NuxtLink>
            </p>

          </v-col>
          <v-col class="d-flex align-center" cols="3">
            <p  class="link text-white text-center">

              <NuxtLink title="Verschiedene Produkte empfehlung" style="font-size: 16px" aria-label="Produkte" to="/produkte">Produkte</NuxtLink>

            </p>

          </v-col>
          <v-col class="d-flex align-center" cols="3">
            <p  class="link text-white text-center">

              <NuxtLink title="unsre Service und Seminare" style="font-size: 16px" aria-label="Service" to="/service">Service</NuxtLink>

            </p>

          </v-col>
          <v-col class="d-flex align-center" cols="3">
            <p   class="link text-white text-center">

              <NuxtLink title="Meine Preise auf einen Blick" style="font-size: 16px" aria-label="Preise" to="/preise">Preise</NuxtLink>

            </p>

          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "header1",
  computed:{

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
