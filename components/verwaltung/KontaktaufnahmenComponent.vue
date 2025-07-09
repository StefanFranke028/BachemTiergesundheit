<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mt-3 text-white"
        color="black"
        style="height: 100%"
    >
      <v-tab :value="0" style="color: blue">Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">

      <v-window-item value="0">
        <v-row class="justify-center mt-3" style="width: 100%">
          <v-col cols="10">
            <v-data-table-virtual :items="bereinigtesKontaktaufnahmenArray" fixed-header height="550"
                                  items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>
                    <a :href="'mailto:' + item.email" target="_blank">
                      {{ item.email }}
                    </a>
                  </td>
                  <td>{{ item.telefonnummer }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.text }}</td>
                  <td>
                    <Icon :icon="item.icon" color="red" style="font-size: 30px" @click="deleteMethod(item)"/>
                  </td>
                </tr>
              </template>
            </v-data-table-virtual>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>


  </div>
</template>

<script>

import {Icon} from "@iconify/vue";

export default {
  name:'KontaktaufnahmeComponent',
  data() {
    return {
      tab: null,
      email: '',
      telefonnummer: '',
      name: '',
      text: '',
      kontaktaufnahmenArray:[]
    }
  },
  computed: {
    bereinigtesKontaktaufnahmenArray() {
      return this.kontaktaufnahmenArray.map(item => {
        const newObj = Object.assign({...item, icon: 'fluent:delete-16-regular'}, item);
        return newObj;
      });
    }
  },
  methods: {

    async get() {
      if (process.client) {
        try {
          const token = localStorage.getItem('token')
          const response = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/kontaktaufnahme', {
            baseURL: 'https://tier-gesundheitszentrum.com:8080/auth',
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          const kontaktaufnahmeArray = response.data || response;
          this.kontaktaufnahmenArray = Object.freeze(kontaktaufnahmeArray)
        } catch (error) {
          alert("Fehler beim Laden der Kontaktaufnahmen. Bitte versuchen Sie es erneut.")
        }
      }
    },

    async deleteMethod(kontaktaufnahme) {
      if (process.client) {
        try {
          const token = localStorage.getItem('token')
          await $fetch(`https://tier-gesundheitszentrum.com:8080/auth/kontaktaufnahme/${kontaktaufnahme.id}`, {
            method: 'DELETE',
            baseURL: 'https://tier-gesundheitszentrum.com:8080/auth',
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          await this.get()
        } catch (e) {
          alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie bitte den Administrator.")
        }
      }
    }
  },
  components: {
    Icon
  },
  mounted() {
    this.get()
  },
  created() {
  }
}
</script>

<style scoped>
.v-row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>