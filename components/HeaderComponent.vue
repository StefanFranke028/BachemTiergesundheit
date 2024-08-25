
<template>
<div class="header">
  <v-row style="width: 100%; height: 100%" class="pa-0">
    <v-col cols="2" @click="navigateTo('/')" class="pa-0 d-flex justify-center align-center">
    <p style="cursor: pointer">
      NAME
    </p>
    </v-col>
    <v-col cols="8" class="pa-0 d-flex justify-center align-center">
      <v-row class="d-flex justify-center">
        <v-col cols="2">
          <span  @click="navigateTo('damen')">DAMEN</span>
        </v-col>
        <v-col cols="2">
          <span @click="navigateTo('kontakt')">KONTAKT</span>
        </v-col>
        <v-col cols="2">
          <span  @click="navigateTo('impressum')">IMPRESSUM</span>
        </v-col>
        <v-col cols="2">
          <span  @click="navigateTo('datenschutz')">DETENSCHUTZ</span>
        </v-col>
      </v-row>

    </v-col>
    <v-col cols="2" class="pa-0 d-flex justify-center align-center">ICON</v-col>
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
  color: #8e8c8c;
  font-size: 13px;
  cursor: pointer;
}

</style>
