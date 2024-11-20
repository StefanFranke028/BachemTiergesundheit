<template>
<div class="header">
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
      >
        <v-row style="width: 100%;" class="mx-0">
          <v-col cols="2">
            <Icon style="font-size: 25px" :icon="item.icon" />
          </v-col>
          <v-col>
            {{ item.title }}
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

<v-row style="width: 100%; height: 100%" class="ma-0 px-2">
  <v-col cols="4" style="height: 100%" class="d-flex align-center">
    <v-img class="mb-n4" @click="navigateTo('/')" style="height: 80px; width: 80px; cursor: pointer" src="~/assets/logo.png"  alt=""></v-img>
  </v-col>
  <v-col cols="4" class="d-flex align-center ">
    <div style="cursor: pointer">
      <span style="font-size: 16px; color: #4e4e4e; ">
          MAXI
        <b class="ml-n1" style="color: black">
        ESCORT
        </b>
      </span>
    </div>

  </v-col>
  <v-col cols="4" style="height: 100%" class="d-flex justify-end align-center">
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
        { title: 'Vita', icon: 'fluent:person-32-filled', route: 'vita' },
        { title: 'Team', icon: 'fluent:people-team-16-filled', route: 'team' },
        { title: 'Escort', icon: 'icon-park-solid:women', route: 'damen' },
        { title: 'Casting', icon: 'fluent:chart-person-48-filled', route: 'casting' },
        { title: 'Kontakt', icon: 'streamline:contact-phonebook-2-solid', route: 'kontakt' },
        { title: 'Honorare', icon: 'foundation:pricetag-multiple', route: 'honorare' },
        { title: 'Blog', icon: 'mdi-book', route: 'blog' },
      ],
    }
  }
}
</script>



<style scoped>
.header{
  height: 90px;
  box-shadow: 1px 1px 5px black;
}
.footer{

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}.damen{

   background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
 }.honorare{

    background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
  }
.kontakt{

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100% );
}
.datenschutz{

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}
.impressum{

  background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
}
.vita{

  background-image: linear-gradient(to bottom, #d1e3d3 50%, #ffffff 100% );
}.bewerben{

   background-image: linear-gradient(to bottom, #e5dbdc 50%, #fafafa 100% );
 }.blog{
    background-image: linear-gradient(to bottom, #c7dee6 50%, #ffffff 100% );
  }
</style>
