<template>
<div class="header1">
  <v-navigation-drawer
      v-model="drawer"
      temporary
      :class="formattedPath"
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
    </v-list>
  </v-navigation-drawer>

<v-row style="width: 100%; height: 100%" class="ma-0 px-2">
  <v-col cols="4" style="height: 100%" class="d-flex align-center">
    <v-img class="Mila Escort Logo" @click="navigateTo('/')" style="height: 80px; width: 80px; cursor: pointer" src="~/assets/LogoNew.svg"  alt=""></v-img>
  </v-col>
  <v-col cols="5" class="d-flex align-center ">
    <div style="cursor: pointer">
      <span style="font-size: 16px; color: #4e4e4e; ">
          MILA - &nbsp;
        <b class="ml-n1" style="color: black">
        ESCORT
        </b>
      </span>
    </div>

  </v-col>
  <v-col cols="3" style="height: 100%" class="d-flex justify-end align-center">
    <Icon @click.stop="drawer = !drawer" style="font-size: 30px" aria-label="Menü öffnen" icon="pajamas:hamburger" />
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
    formattedPath() {
      // Überprüfe, ob der Pfad mehr als nur ein "/" enthält
      if (this.$route.path !== '/') {
        // Entferne das führende "/" vom Pfad
        return this.$route.path.substring(1);
      }
      // Wenn der Pfad nur aus "/" besteht, gib ihn unverändert zurück
      return 'footer';
    }
  },
  data(){
    return{
      drawer:false,
      menuItems: [
        { title: 'Startseite', icon: 'heroicons:home-solid', route: 'index' },
        { title: 'Unsere Vita', icon: 'fluent:person-32-filled', route: 'Vita' },
        { title: 'Vision', icon: 'fluent:people-team-16-filled', route: 'Vision' },
        { title: 'High-Class Begleitungen', icon: 'icon-park-solid:women', route: 'HighClassBegleitungen' },
        { title: 'Casting', icon: 'fluent:chart-person-48-filled', route: 'Casting' },
        { title: 'Get in Touch', icon: 'streamline:contact-phonebook-2-solid', route: 'GetInTouch' },
        { title: 'Konditionen', icon: 'foundation:pricetag-multiple', route: 'Konditionen' },
        { title: 'Magazin', icon: 'mdi-book', route: 'Magazin' },
      ],
    }
  }
}
</script>



<style scoped>
.header1{
  height: 90px;
  box-shadow: 1px 1px 5px black;
}
.footer {

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.highClassBegleitungen {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}
.konditionen {

  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.getInTouch {
  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100%);
}

.datenschutz {
  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.impressum {
  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.vita {
  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100%);
}

.casting {
  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.magazin {
  background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100%);
}

.footer {
  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100%);
}

.vision {
  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100%);
}
</style>
