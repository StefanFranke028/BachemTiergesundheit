<template>
  <div class="header1">
    <v-row class="pa-0" style="width: 100%; height: 100%">
      <v-col class="pa-0 d-flex justify-center align-center" cols="2">
        <v-img alt="" class="" src="~/assets/LogoNew.svg"
               style="height: 130px; width: 130px; cursor: pointer" @click="navigateTo('/')"></v-img>
      </v-col>

      <v-col class="pa-0 d-flex justify-center align-center" cols="8">
        <v-row class="d-flex justify-center">
          <v-col class="d-flex justify-center align-center" cols="2">
            <span @click="navigateTo('vita')">Unsere Vita</span>
          </v-col>
          <v-col class="d-flex justify-center  align-center" cols="2">
            <span @click="navigateTo('arrangement')">Arrangement</span>
          </v-col>
          <v-col class="d-flex justify-center  align-center align-center" cols="2">
            <span @click="navigateTo('highClassBegleitungen')">High-Class Begleitungen</span>
          </v-col>
          <v-col class="d-flex justify-center  align-center" cols="2">
            <span @click="navigateTo('casting')">Casting</span>
          </v-col>
          <v-col class="d-flex justify-center  align-center" cols="2">
            <span @click="navigateTo('getInTouch')">Get in Touch</span>
          </v-col>
          <v-col class="d-flex justify-center  align-center" cols="2">
            <span @click="navigateTo('konditionen')">Konditionen</span>
          </v-col>

        </v-row>

      </v-col>
      <v-col class="pa-0 d-flex justify-center align-center" cols="2" @click="navigateTo('/')">
        <div style="cursor: pointer">
      <span style="font-size: 22px; color: #4e4e4e; ">
          MILA
        <b class="ml-n1" style="color: black">
        ESCORT
        </b>
      </span>
        </div>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  name: "header1"
}
</script>


<style scoped>
.v-row {
  width: 100%;
  padding: 0px;
  margin: 0px
}

.header {
  width: 100vw;
  height: 130px;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px black;
}

span {
  color: #494848;
  font-size: 13px;
  cursor: pointer;
}

</style>
