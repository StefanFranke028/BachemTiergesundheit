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

            <v-col>
              <v-card
                  class="mx-auto pa-5"
                  height="1200"
                  style="overflow-y: scroll;background-color: rgba(255,255,255,0.75)"
              >
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="name"  label="Name" variant="outlined" />
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="ueberschrift" label="Überschrift" variant="outlined" />
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="unterUeberschrift" label="Unter-Überschrift" variant="outlined" />
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="miniUnterUeberschrift" label="Mini Unter-Überschrift" variant="outlined" />
                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-text-field v-model="autor" label="Autor" variant="outlined" />
                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-file-input
                        v-model="bild"
                        accept="image/*"
                        label="Wählen Sie ein Bild aus"
                        prepend-icon="mdi-camera"
                        variant="outlined"
                        @change="handleFileChange"
                    ></v-file-input>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="10">
                    <v-card style="width: 100%" variant="outlined">
                      <v-card-item>
                        <v-textarea
                            v-model="text"
                            label="Text"
                            :options="editorOptions"
                            style="width: 100%"
                        ></v-textarea>
                      </v-card-item>
                    </v-card>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn @click="create">speichern</v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn @click="reset">leeren</v-btn>
                  </v-col>
                </v-row>
              </v-card>

            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        <v-row class="justify-center mt-3" style="width: 100%">
          <v-col cols="12">
            <v-data-table-virtual :items="bereinigtesBerichteArray" fixed-header
                                  height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.überschrift }}</td>
                  <td><v-img :src="item.image"></v-img></td>
                  <td>{{ item.autor }}</td>
                  <td>{{ item.unterUeberschrift }}</td>
                  <td>{{ item.miniUnterUeberschrift }}</td>
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

import {Icon} from "@iconify/vue/dist/iconify";





export default {
  name:'BerichteComponent',
  data() {
    return {
      tab: null,
      bild: '',
      datum: '',
      unterUeberschrift: '',
      miniUnterUeberschrift: '',
      name: '',
      autor: 'Andrea Bachem',
      image:'',
      ueberschrift: '',
      text: '',
      imageURL: '',
      berichteArray:[],
      editorOptions: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{'header': 2}],
            [{'color': []}, {'background': []}],
            ['clean']
          ]
        }
      }
    }
  },
  computed: {

    bereinigtesBerichteArray() {
      return this.berichteArray.map(item => {
        const newObj = Object.assign({...item, icon: 'fluent:delete-16-regular'}, item);
        delete newObj.bild;
        delete newObj.text;
        return newObj;
      });
    }
  },
  watch: {
    name(newVal) {
      this.name = newVal.toLowerCase().replace(/\s+/g, '-');
    }
  },
  methods: {

    reset() {
      this.name = ''
      this.text = ''
      this.ueberschrift = ''
      this.image = ''
      this.autor = 'Andrea Bachem'
      this.datum = ''
      this.unterUeberschrift = ''
      this.miniUnterUeberschrift = ''
      this.bild = ''
      this.imageURL = ''
    },

    async handleFileChange() {
      if (!this.bild) return;

      const compressAndResizeImage = (file, maxWidth = 400, maxHeight = 600, quality = 0.5) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
              let width = img.width;
              let height = img.height;

              // Seitenverhältnis erhalten
              const aspectRatio = width / height;
              if (width > maxWidth || height > maxHeight) {
                if (width > height) {
                  width = maxWidth;
                  height = Math.floor(maxWidth / aspectRatio);
                } else {
                  height = maxHeight;
                  width = Math.floor(maxHeight * aspectRatio);
                }
              }

              const canvas = document.createElement('canvas');
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, width, height);

              const base64 = canvas.toDataURL('image/jpeg', quality);
              resolve(base64);
            };
            img.onerror = reject;
            img.src = event.target.result;
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      };

      this.image = await compressAndResizeImage(this.bild, 800, 800, 0.7);
      console.log('Komprimiertes Bild:', this.image);
    },

    async create() {
      if (process.client) {
        if (this.image ===''){
          console.log(this.image)
          return
        }
        try {
          const token = localStorage.getItem('token')

          const body = {
            name: this.name,
            text: this.text.replaceAll('\n', '<br>'),
            überschrift: this.ueberschrift, // korrektes Feld aus v-model
            image: this.image,
            autor: this.autor,
            unterUeberschrift: this.unterUeberschrift,
            miniUnterUeberschrift: this.miniUnterUeberschrift
          }

          await $fetch('https://tier-gesundheitszentrum.com:8080/auth/stadt', {
            method: 'POST',
            body,
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          await this.get()

          this.name = ''
          this.text = ''
          this.ueberschrift = ''
          this.image = ''
          this.autor = 'Andrea Bachem'
          this.unterUeberschrift = ''
          this.miniUnterUeberschrift = ''
        } catch (e) {
          alert('Bitte füllen Sie alle Felder korrekt aus.')
        }
      }
    },


    async deleteMethod(bericht) {
      if (process.client) {
        try {
          const token = localStorage.getItem('token')
          await $fetch(`https://tier-gesundheitszentrum.com:8080/auth/stadt/${bericht.id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          await this.get()
        } catch (e) {
          alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie bitte den Administrator.')
        }
      }
    },
    async get() {
      if (process.client) {
        try {
          const token = localStorage.getItem('token')
          const response = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/stadt', {
            baseURL: '',
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          const berichteArray = response.data || response
          this.berichteArray = Object.freeze(berichteArray.map(item => ({
            ...item,
            bild: `data:image/jpeg;base64,${item.bild}`
          })))
        } catch (e) {
          alert('Fehler beim Laden der Berichte.')
        }
      }
    }

  },
  components: {
    Icon
  },
  beforeCreate() {

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

.container {
  background-color: rgba(255, 255, 255, 0.74);
  transform: scale(0.4);
  border: 2px solid black;
  padding: 20px;
  width: 70%;
  margin: 50px auto;
  position: absolute;
  top: 0px;
  overflow: hidden;
  border-radius: 5px;
  transform-origin: 25px 25px;
}

.image {
  float: left; /* Float links für das Bild */
  margin-right: 20px; /* Abstand zum Text rechts vom Bild */
}

.text {
  text-align: justify;
}
</style>