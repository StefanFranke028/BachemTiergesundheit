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
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="ueberschrift" label="Überschrift" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-file-input
                        v-model="bild"
                        accept="image/*"
                        label="Wählen Sie ein Bild aus"
                        prepend-icon="mdi-camera"
                        variant="outlined"
                        @change="handleFileChange"
                    ></v-file-input>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field
                        v-model="preis"
                        label="Preis"
                        variant="outlined"
                        @input="updatePreis"
                    />
                  </v-col>
                  <v-col class="d-flex justify-center" cols="4">
                    <v-text-field v-model="dauer" label="Dauer" variant="outlined"/>
                  </v-col>
                  <v-col cols="3">
                    <v-select v-model="einheit" label="Einheit" :items="[' Minuten', ' Stunden', ' Tage', ' Wochen', ' Monate']"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-textarea v-model="text"  clearable counter label="Beschreibung"
                                no-resize variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn
                        :disabled="isSavingPreis"
                        :loading="isSavingPreis"
                        @click="create"
                    >
                      {{ editingPreisId ? 'aktualisieren' : 'speichern' }}
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn @click="reset">
                      {{ editingPreisId ? 'abbrechen' : 'leeren' }}
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
            <v-data-table-virtual
                :headers="preisHeaders"
                :items="bereinigtesPreisArray"
                fixed-header="true"
                height="550"
                items-per-page="7"
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.ueberschrift }}</td>
                  <td>{{ item.preis }}</td>
                  <td>{{ item.dauer }}</td>
                  <td>
                    <Icon class="edit-icon" icon="mdi:pencil-outline" title="Preis bearbeiten" @click="startEdit(item)"/>
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
  name: 'PreiseComponent',
  data() {
    return {
      tab: null,
      ueberschrift: '',
      preis: '',
      bild: null,
      imageURL: null,
      einheit: '',
      dauer: '',
      text: '',
      preiseArray:[],
      editingPreisId: null,
      isSavingPreis: false,
      preisHeaders: [
        { title: 'ID', key: 'id' },
        { title: 'Überschrift', key: 'ueberschrift' },
        { title: 'Preis', key: 'preis' },
        { title: 'Dauer', key: 'dauer' },
        { title: 'Aktionen', key: 'actions', sortable: false },
      ],
      rules: [v => v.length <= 214 || 'Maximale Zeichenanzahl 215 erreicht'],
    }
  },
  computed: {
    bereinigtesPreisArray() {
      return this.preiseArray.map(item => {
        const newObj = Object.assign({...item, icon: 'fluent:delete-16-regular'}, item);
        return newObj;
      });
    }
  },
  methods: {
    updatePreis() {
      this.preis = this.preis.replace(/€/g, '');
      if (!this.preis.endsWith('€')) {
        this.preis += '€';
      }
    },
    reset() {
      this.bild = null;
      this.imageURL = null;
      this.text = '';
      this.preis = '';
      this.dauer = '';
      this.einheit = '';
      this.ueberschrift = '';
      this.editingPreisId = null;
    },
    handleFileChange() {
      if (this.bild ) {
        const file = this.bild;
        this.imageURL = URL.createObjectURL(file);
      }
    },
    splitDauer(value) {
      const einheiten = [' Minuten', ' Stunden', ' Tage', ' Wochen', ' Monate'];
      const dauerText = value || '';
      const einheit = einheiten.find(x => dauerText.endsWith(x)) || '';

      return {
        dauer: einheit ? dauerText.slice(0, -einheit.length) : dauerText,
        einheit
      };
    },
    startEdit(item) {
      const dauerParts = this.splitDauer(item.dauer);
      this.editingPreisId = item.id;
      this.ueberschrift = item.ueberschrift || '';
      this.preis = item.preis || '';
      this.dauer = dauerParts.dauer;
      this.einheit = dauerParts.einheit;
      this.text = item.text || '';
      this.bild = null;
      this.imageURL = item.bild || null;
      this.tab = 0;
    },
    async create() {
      try {
        const file = Array.isArray(this.bild) ? this.bild[0] : this.bild;
        if (!this.editingPreisId && !file) {
          alert('Bitte wählen Sie ein Bild aus.');
          return;
        }

        this.isSavingPreis = true;

        const formData = new FormData();
        if (file) {
          formData.append('files', file);
        }
        formData.append('text', this.text);
        formData.append('ueberschrift', this.ueberschrift);
        formData.append('preis', this.preis);
        formData.append('dauer', this.dauer + this.einheit);

        const endpoint = this.editingPreisId
            ? `https://tier-gesundheitszentrum.com:8080/auth/preis/${this.editingPreisId}`
            : 'https://tier-gesundheitszentrum.com:8080/auth/preis';
        const response = await fetch(endpoint, {
          method: this.editingPreisId ? 'PUT' : 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        });

        if (!response.ok) throw new Error(this.editingPreisId ? 'Fehler beim Aktualisieren' : 'Fehler beim Erstellen');

        await this.get();
        this.reset();
      } catch (e) {
        alert('Bitte füllen Sie alle Felder aus.');
      } finally {
        this.isSavingPreis = false;
      }
    },
    async deleteMethod(preis) {
      try {
        const response = await fetch(`https://tier-gesundheitszentrum.com:8080/auth/preis/${preis.id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) throw new Error('Löschen fehlgeschlagen');

        await this.get();
      } catch (e) {
        alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie bitte den Administrator.');
      }
    },
    async get() {
      try {
        const response = await fetch('https://tier-gesundheitszentrum.com:8080/auth/preis');
        const preiseArray = await response.json();

        this.preiseArray = preiseArray.map(item => ({
          ...item,
          bild: item.bild && item.bild.startsWith('data:image')
              ? item.bild
              : item.bild
                  ? `data:image/jpeg;base64,${item.bild}`
                  : null
        }));
      } catch (e) {
        console.error('Fehler beim Laden der Preise:', e);
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

.edit-icon {
  color: #4a6741;
  cursor: pointer;
  font-size: 28px;
  margin-right: 12px;
  transition: color 0.16s ease, transform 0.16s ease;
}

.edit-icon:hover {
  color: #1f3527;
  transform: scale(1.08);
}
</style>
