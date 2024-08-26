<template>
  <v-app>
    <v-main>
      <NuxtLayout></NuxtLayout>
    </v-main>
  </v-app>
</template>
<script>
export default {

  data(){
    return{
      test:'hallo'
    }
  }
}
</script>

<style>
button{
  border-radius: 30px !important;
  background-color: black !important;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
