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
      <v-tab @click="get" :value="1" style="color: blue">Rechnungen/Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container fluid>
          <v-row>
            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="6">
                    <v-text-field v-model="name" label="Name" type="name" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="6">
                    <v-text-field v-model="vorname" label="Vorname" type="firstname" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="straße" label="Straße" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="hausnummer" label="Hausnummer" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="ort" label="Ort" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="plz" label="PLZ" type="number" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="text" label="Leistung" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="preis" label="Preis" variant="outlined" @input="updatePreis"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="menge" label="Menge" type="number" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="calculatedPreis" disabled="true" label="Gesamtpreis" type="number"
                                  variant="outlined"/>
                  </v-col>
                  <v-row style="width: 100%;" class="ma-0 mt-8">
                    <v-col class=" pa-0 d-flex justify-center" cols="4">
                      <v-switch
                          v-model="isTierGesundheitszentrum"
                          :label="isTierGesundheitszentrum ? 'Tier-Gesundheitszentrum' : 'Ernährungsberatung Bachem'"
                          color="primary"
                      ></v-switch>

                    </v-col>
                    <v-col class=" pa-0 d-flex justify-center" cols="4">
                      <v-btn @click="leistungSpeichern">
                        Leistung Speichern
                      </v-btn>
                    </v-col>
                  <v-col class="d-flex pa-0  " cols="4">
                    <v-btn :disabled="leistungen.length === 0 ? true: false" @click="create">
                      Rechnung Speichern
                    </v-btn>
                  </v-col>
                  </v-row>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="mt-12">
                <v-data-table-virtual
                    :items="bereinigtestLeistungsArray"
                    fixed-header>
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.text }}</td>
                      <td>{{ item.menge }}</td>
                      <td>{{ calculateTotal(item.menge, item.preis) }}</td>
                      <td>
                        <Icon :icon="item.löschen" color="red" style="font-size: 30px" @click="deleteLeistung(item)"/>
                      </td>
                    </tr>
                  </template>
                </v-data-table-virtual>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item style="height: 100%" value="1">
        <v-row class="justify-center mt-3" style="width: 100%; height: 100%">
          <v-col cols="12">
            <v-data-table-virtual :items="bereinigtesRechnungsArray" fixed-header  height="550"
                                  >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.vorname }}</td>
                  <td>{{ item.straße }}</td>
                  <td>{{ item.hausnummer }}</td>
                  <td>{{ item.plz }}</td>
                  <td>{{ item.ort }}</td>
                  <td>{{ item.preis }}</td>
                  <td>{{ item.datum }}</td>
                  <td>{{ item.firma === 't' ? 'Tier-Gesundheitszentrum' : 'Ernährungsberatung' }}</td>
                  <td>{{ item.leistungen.length }}</td>
                  <td>
                    <Icon :icon="item.löschen" color="red" style="font-size: 30px" @click="deleteMethod(item)"/>
                  </td>
                  <td>
                    <Icon :icon="item.pdf" color="black" style="font-size: 30px"
                          @click="generatePDF(item, item.leistungen)"/>
                  </td>

                  <div class="pdf-content pa-8" style="display: none">
                    <div id="pdf-content" class="pa-8">
                      <v-row>
                        <v-col>
                          <h1 style="color:#0082c2 ">Rechnung</h1>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="4">
                          <p>
                            Rechnungsdatum: {{ pdf.datum }}
                          </p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <br> <br>
                          <h2>{{ pdf.firma === 't' ? 'Tier Gesundheitszentrum' : 'Ernährungsberatung Bachem Gbr'}} </h2>
                        </v-col>
                      </v-row>
                      <v-row class="mt-10">
                        <v-col cols="5">
                          <p class="mt-n7">{{ pdf.vorname }} {{ pdf.name }}</p> <br>
                          <p class="mt-n7"> {{ pdf.straße }} {{ pdf.hausnummer }}</p> <br>
                          <p class="mt-n7">{{ pdf.plz }} {{ pdf.ort }}</p> <br>
                        </v-col>
                        <v-col cols="4"></v-col>
                        <v-col cols="3">
                          <p class="mt-n7">Andrea Bachem</p> <br>
                          <p class="mt-n7"> Colonialstraße 18</p> <br>
                          <p class="mt-n7">50169 Kerpen</p> <br>
                          <p class="mt-n7">Tel.: 0178/6915915 </p> <br>
                          <p class="mt-n7">Steuernummer: {{pdf.firma === 't' ? '203/5008/2253' : '203/5832/1992'}} </p> <br>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <p>Im Folgenden die erworbenen Leistungen, die ich in Rechnung stelle:</p>
                        </v-col>
                      </v-row>
                      <v-row class="mx-0" style="width: 100%; background-color: #0082c2">
                        <v-col cols="1">
                          <p style="color: #f2f2f2; margin-bottom: 6px">POS</p>
                        </v-col>
                        <v-col class="d-flex justify-start" cols="5">
                          <p style="color: #f2f2f2; margin-bottom: 6px">LEISTUNG</p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p style="color: #f2f2f2; margin-bottom: 6px">MENGE</p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p style="color: #f2f2f2; margin-bottom: 6px">EINZELPREIS</p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p style="color: #f2f2f2; margin-bottom: 6px">GESAMTPREIS</p>
                        </v-col>

                      </v-row>

                      <v-row v-for="(x, index) in pdf.leistungen" :key="x" class="mx-0"
                             style="width: 100%; background-color: rgba(210,204,204,0.75)">
                        <v-col cols="1">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ index + 1 }}
                          </p>
                        </v-col>
                        <v-col class="d-flex justify-start" cols="5">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ x.text }}
                          </p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ x.menge }}

                          </p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ x.preis }}

                          </p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ calculateTotal(x.menge, x.preis) }} €
                          </p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                        </v-col>
                        <v-col cols="6">
                          <v-row class="justify-lg-space-between">
                            <v-col cols="8">
                              <p>
                                <b>Summe Positionen</b>
                              </p>
                            </v-col>

                            <v-col cols="4">
                              <p style="font-size: 20px">
                                {{ pdf.preis }}
                              </p>
                            </v-col>
                            <v-col class="mt-2" cols="12">
                              <v-divider></v-divider>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>

                      <v-row class="mt-12 align-content-end">
                        <p class="ml-5">
                          Gemäß §19 UStG wird keine Umsatzsteuer berechnet. <br>
                          Bitte überweisen Sie den Rechnungsbetrag auf das untenstehende Konto.
                        </p>
                      </v-row>
                      <v-divider class="ma-5 "></v-divider>
                      <v-row class="ml-2">
                        <v-col cols="6" style="color: #0082c2">
                          <p>Andrea Bachem</p>
                          <p>Reifeisenbank Frechen-Hürth EG</p> <br>
                          <p class="mt-n7"> IBAN: {{pdf.firma === 't'? 'DE98 3706 2365 2806 5420 19' : 'DE 29 3706 2365 2806 5420 00'}}</p> <br>
                          <p class="mt-n7"> BIC: GENODED1FHH</p> <br>
                        </v-col>

                      </v-row>
                    </div>
                  </div>
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
  name:'RechnungComponent',
  data() {
    return {
      currentDate: null,
      tab: null,
      name: '',
      vorname: '',
      straße: '',
      hausnummer: '',
      plz: '',
      ort: '',
      text: '',
      preis: '',
      rechnungArray:[],
      leistungen: [],
      menge: '',
      pdf: {},
      rules: [v => v.length <= 132 || 'Maximale Zeichenanzahl 133 erreicht'],

      isTierGesundheitszentrum: true
    }
  },
  computed: {
    formattedDate() {
      if (!this.currentDate) return '';

      const date = new Date(this.currentDate);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Monate sind 0-basiert, daher +1
      const year = date.getFullYear();

      return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    },
    calculatedPreis() {
      const gesamtPreis = this.leistungen.reduce((accumulator, current) => {
        const preis = parseFloat(current.preis.replace('€', '').replace(',', '.'));
        const menge = current.menge || 1; // Standardmenge ist 1, falls keine Menge angegeben ist
        return accumulator + (preis * menge);
      }, 0);
      return gesamtPreis.toFixed(2);
    },
    bereinigtesRechnungsArray() {
      return this.rechnungArray.map(item => {
        const newObj = Object.assign({
          ...item,
          löschen: 'fluent:delete-16-regular',
          pdf: 'fluent:document-pdf-32-filled'
        }, item);
        delete newObj.bild;
        delete newObj.text;
        return newObj;
      });
    },
    bereinigtestLeistungsArray() {
      return this.leistungen.map(item => {
        const newObj = Object.assign({...item, löschen: 'fluent:delete-16-regular'}, item);
        return newObj;
      });
    }
  },
  methods: {
    generatePDF(item, leistungen) {
      if (process.client) {
        import('html2pdf.js').then((html2pdf) => {
          this.pdf = item;
          this.pdf.leistungen = leistungen;
          const element = document.getElementById('pdf-content');
          html2pdf.default(element, {
            margin: 0,
            filename: item.name + '_' + item.datum + '_Rechnung.pdf',
            image: { type: 'png', quality: 2 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          });
        });
      }
    },

    calculateTotal(quantity, priceWithEuro) {
      const price = parseFloat(priceWithEuro.replace(',', '.').replace('€', '').trim());
      const total = quantity * price;
      return total.toFixed(2);
    },
    deleteLeistung(item) {
      for (let i = 0; i < this.leistungen.length; i++) {
        if (this.leistungen[i].leistung === item.leistung &&
            this.leistungen[i].preis === item.preis &&
            this.leistungen[i].menge === item.menge) {
          this.leistungen.splice(i, 1);
        }
      }
    },
    updatePreis() {
      this.preis = this.preis.replace(/€/g, '');
      if (!this.preis.endsWith('€')) {
        this.preis += '€';
      }
    },
    leistungSpeichern() {
      this.leistungen.push({
        text: this.text,
        menge: this.menge,
        preis: this.preis,
      })

      this.preis = ''
      this.text = ''
      this.menge = ''
    },
    async create() {
      try {
        await $fetch('https://tier-gesundheitszentrum.com:8080/auth/rechnung', {
        method: 'POST',
        body: {
          rechnung: {
            name: this.name,
            vorname: this.vorname,
            straße: this.straße,
            hausnummer: this.hausnummer,
            plz: this.plz,
            ort: this.ort,
            preis: this.calculatedPreis + '€',
            datum: this.formattedDate,
            firma: this.isTierGesundheitszentrum ? 't' : 'e'
          },
          leistungen: this.leistungen
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })


        await this.get()

        this.name = '';
        this.vorname = '';
        this.straße = '';
        this.hausnummer = '';
        this.plz = '';
        this.ort = '';
        this.leistungen = [];

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
      await this.get()
    },
    async deleteMethod(produkt) {
      try {
        await $fetch('https://tier-gesundheitszentrum.com:8080/auth/rechnung/' + produkt.id, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        await this.get()
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie bitte den Administrator.")
      }


    },
    async  get() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert("Kein Token gefunden.");
          return;
        }

        const rechnungArray = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/rechnung', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        Object.freeze(rechnungArray);
        this.rechnungArray = rechnungArray;
        console.log(rechnungArray)
      } catch (error) {
        console.error(error);
        alert("Fehler beim Laden der Rechnungen. Bitte versuchen Sie es erneut.");
      }
    }

  },
  components: {
    Icon
  },
async  mounted() {
    this.currentDate = Date.now();
   await this.get()
  },
  created() {
  }
}
</script>

<style scoped>
.pdf-content {
  border: #2c2a2a 1px solid;
  width: 1240px;
  height: 1754px;
  margin: 20px 20px 20px 20px
}

.v-row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>
