<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mt-3 text-white"
        color="black"
        style="height: 100%"
    >
      <v-tab :value="0" style="color: blue">Erstellen</v-tab>
      <v-tab :value="1" style="color: blue">Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container fluid>
          <v-row>


            <v-col cols="12">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="700"
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="10">
                    <v-text-field v-model="ueberschrift" label="Überschrift" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="link" label="Link" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-file-input
                        v-model="bild"
                        :multiple="false"
                        accept="image/*"
                        label="Wählen Sie ein Bild aus"
                        prepend-icon="mdi-camera"
                        variant="outlined"
                        @change="handleFileChange"
                    ></v-file-input>

                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-textarea v-model="text"   clearable counter label="Beschreibung"
                                no-resize variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn @click="create">
                      speichern
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn>
                      leeren
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        <v-row class="justify-center mt-3" style="width: 100%">
          <v-col cols="10">
            <v-data-table-virtual :items="bereinigtesProdukteArray" fixed-header="true" height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.ueberschrift }}</td>
                  <td><a :href="item.link" target="_blank">{{ item.link }}</a></td>
                  <td>
                    <Icon :icon="item.löschen" color="red" style="font-size: 30px" @click="deleteMethod(item)"/>
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
  name:'ProdukteComponent',
  data() {
    return {
      produkteArray:[],
      tab: null,
      imageURL: '',
      bild: '',
      text: '',
      ueberschrift: '',
      link: '',
      rules: [v => v.length <= 132 || 'Maximale Zeichenanzahl 133 erreicht'],
    }
  },
  computed: {
    bereinigtesProdukteArray() {
      return this.produkteArray.map(item => {
        const newObj = Object.assign({...item, löschen: 'fluent:delete-16-regular'}, item);
        delete newObj.bild;
        delete newObj.text;
        return newObj;
      });
    }
  },
  methods: {
    handleFileChange() {
      console.log(this.bild)
      if (this.bild) {
        const file = this.bild;

        console.log(file)
        if (file.type.startsWith("image/")) {
          this.imageURL = URL.createObjectURL(file);
          console.log(this.imageURL)
        } else {
          this.bild = null
          alert("Bitte wählen Sie eine Bilddatei aus.");
          this.imageURL = '';
        }
      }
    },

    async create() {
      try {
        const formData = new FormData()
        formData.append('files', this.bild)
        formData.append('text', this.text)
        formData.append('ueberschrift', this.ueberschrift)
        formData.append('link', this.link)

       var response = await fetch('https://tier-gesundheitszentrum.com:8080/auth/produkt', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        })

        console.log(response)
        await this.get()

        this.bild = null
        this.imageURL = ''
        this.text = ''
        this.link = ''
        this.ueberschrift = ''
      } catch (e) {
        alert('Bitte füllen Sie alle Felder aus.')
      }
    },

    async deleteMethod(produkt) {
      try {
        await fetch(`https://tier-gesundheitszentrum.com:8080/auth/produkt/${produkt.id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        await this.get()
      } catch (e) {
        alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie bitte den Administrator.')
      }
    },

    async get() {
      try {
        const response = await fetch('https://tier-gesundheitszentrum.com:8080/auth/produkt')
        const data = await response.json()

        Object.freeze(data)

        this.produkteArray = data.map(item => {
          return {
            ...item,
            bild: `data:image/jpeg;base64,${item.bild}`
          }
        })
        console.log(this.produkteArray)
      } catch (e) {
        console.error('Fehler beim Laden der Produkte:', e)
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