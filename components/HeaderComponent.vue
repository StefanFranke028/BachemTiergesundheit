
<template>
<div class="header">
  <v-row style="width: 100%; height: 100%" class="pa-0">
    <v-col cols="2" @click="navigateTo('/')" class="pa-0 d-flex justify-center align-center">
    <div style="cursor: pointer">
      <span style="font-size: 22px; color: #4e4e4e; ">
          MAXI
        <b class="ml-n1" style="color: black">
        ESCORT
        </b>
      </span>
    </div>
    </v-col>
    <v-col cols="8" class="pa-0 d-flex justify-center align-center">
      <v-row class="d-flex justify-center">
        <v-col class="d-flex justify-center" cols="1">
          <span  @click="navigateTo('vita')">VITA</span>
        </v-col>
        <v-col class="d-flex justify-center" cols="1">
          <span  @click="navigateTo('team')">TEAM</span>
        </v-col>
        <v-col class="d-flex justify-center" cols="1">
          <span  @click="navigateTo('damen')">ESCORT</span>
        </v-col>
        <v-col class="d-flex justify-center" cols="1">
          <span  @click="navigateTo('casting')">CASTING</span>
        </v-col>
        <v-col class="d-flex justify-center" cols="1">
          <span @click="navigateTo('kontakt')">KONTAKT</span>
        </v-col>
        <v-col class="d-flex justify-center" cols="1">
          <span @click="navigateTo('honorare')">HONORARE</span>
        </v-col>
        <v-col class="d-flex justify-center" cols="1">
          <span @click="navigateTo('blog')">BLOG</span>
        </v-col>
      </v-row>

    </v-col>
    <v-col cols="2" class="pa-0 d-flex justify-center align-center">
      <v-img class="mb-n4" @click="navigateTo('/')" style="height: 130px; width: 130px; cursor: pointer" src="~/assets/logo.png"  alt=""></v-img>
    </v-col>
  </v-row>
</div>
</template>

<script >
export default {
  name: "header"
}
</script>


<style scoped>
.v-row{
  width: 100%;
  padding:0px;
  margin:0px
}
.header{
   width: 100vw;
  height: 130px;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px black;
}
span{
  color: #494848;
  font-size: 13px;
  cursor: pointer;
}

</style>
