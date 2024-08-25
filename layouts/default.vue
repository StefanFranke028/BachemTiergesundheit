<template>
  <div>
      <HeaderComponent></HeaderComponent>
      <NuxtPage></NuxtPage>
      <FooterComponent></FooterComponent>

  </div>
</template>

<script>

import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";

export default {
  components:{
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style scoped>


</style>
