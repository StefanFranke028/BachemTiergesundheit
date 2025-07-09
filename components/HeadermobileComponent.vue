<template>
<div class="header1">
  <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      aria-label="Hauptnavigation"
  >
    <v-list density="compact" nav role="listbox" aria-label="Navigationsmenü">
      <v-list-item
          class="mt-2"
          v-for="item in menuItems"
          :key="item.title"
          :to="{ name: item.route }"
          role="option"
          :aria-label="item.title"
          nav
          link
      >
        <v-row style="width: 100%;" class="mx-0">
          <v-col>
            {{ item.title }}
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item
          class="mt-2"
          tag="a"
          href="https://gesundesfutterandreabachem.de/"
          role="option"
          :aria-label="'Ernährung'"
          nav
          link
      >
        <v-row style="width: 100%;" class="mx-0">
          <v-col>
            Ernährung
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

<v-row style="width: 100%; height: 100%" class="ma-0 px-2">
  <v-col cols="4" style="height: 100%" class="d-flex pa-0 align-center">
    <v-img  @click="navigateTo('/')" style="height: 90px; width: 90px; cursor: pointer" src="~/assets/logo-weiß.png"  alt="Andrea Bachem Logo"></v-img>
  </v-col>
  <v-col cols="5" class="d-flex align-center justify-center">
    <div class="d-flex justify-center" style="cursor: pointer">
      <span class="text-center" style="font-size: 14px; color: #bfbebe; ">
          Andrea <br>
        <b class="ml-n1" style="color: white">
        Bachem
        </b>
      </span>
    </div>

  </v-col>
  <v-col cols="3" style="height: 100%" class="d-flex justify-end align-center">
    <Icon @click.stop="drawer = !drawer" style="font-size: 30px; color: white" aria-label="Menü öffnen" icon="pajamas:hamburger" />
  </v-col>
</v-row>
</div>
</template>



<script >
import { Icon } from '@iconify/vue';

export default {
  name: "HeadermobileComponent",
  components:{
    Icon
  },
  computed:{
  },
  mounted() {

  },
  data(){
    return{
      drawer:false,
      menuItems: [
        { title: 'Chiropraktik', icon: 'heroicons:home-solid', route: 'chiropraktik' },
        { title: 'Osteopathie', icon: 'fluent:person-32-filled', route: 'osteopathie' },
        { title: 'Werbepartner', icon: 'fluent:people-team-16-filled', route: 'werbepartner' },
        { title: 'Berichte', icon: 'icon-park-solid:women', route: 'berichte' },
        { title: 'Produkte', icon: 'streamline:contact-phonebook-2-solid', route: 'produkte' },
        { title: 'Service', icon: 'foundation:pricetag-multiple', route: 'service' },
        { title: 'Preise', icon: 'mdi-book', route: 'preise' },
      ],
    }
  }
}
</script>



<style scoped>
.header1{
  height: 90px;
}

</style>
