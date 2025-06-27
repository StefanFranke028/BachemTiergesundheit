<template>
  <div v-if="user && !handy" class="d-flex justify-center pt-15">
    <div>
      <v-tabs
          v-model="tab"
          align-tabs="center"
          color="white"
      >
        <v-tab :value="0" style="color: white !important;">Erstellen</v-tab>
        <v-tab :value="1" style="color: white !important;">Löschen</v-tab>
      </v-tabs>
      <v-window v-model="tab" class="mt-5 ma-3" transition="none">
        <v-window-item class="pa-0" value="0">
          <v-row class="justify-center mt-n4  ma-3">
            <v-col cols="6">
              <v-card
                  theme="dark">
                <v-card-item>
                  <v-row class="justify-center mt-3" style="overflow-y: scroll; height: 580px">
                    <v-col cols="12">
                      <h2 class="text-center">
                        Rechnung/Kostenvoranschlag erstellen
                      </h2>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="4">
                      <v-text-field v-model="vorname" label="Vorname" type="name" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="4">
                      <v-text-field v-model="name" label="Name" type="name" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="strasse" label="Straße" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="hausnummer" label="Hausnummer" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="plz" label="PLZ" type="number" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="ort" label="Ort" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="12">
                      <v-textarea v-model="infoText" auto-grow label="Info Text" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="text" label="Leistung" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="preis" label="Preis" variant="outlined" @input="updatePreis"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="menge" label="Anzahl" type="number" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="calculatedPreis" disabled label="Gesamtpreis"
                                    variant="outlined"/>
                    </v-col>
                  </v-row>
                </v-card-item>
                <v-card-actions class="d-flex justify-center">
                  <v-row class="justify-center pb-5" style="width: 100%">
                    <v-col class=" d-flex justify-center" cols="4">
                      <v-btn variant="outlined" @click="leistungSpeichern">
                        Leistung Speichern
                      </v-btn>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="2">
                      <v-btn :disabled="leistungen.length === 0" variant="outlined"
                             @click="generatePDF('rechnung-pdf')">
                        Rechnung
                      </v-btn>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="4">
                      <v-btn :disabled="leistungen.length === 0" variant="outlined"
                             @click="generatePDF('kostenvoranschlag-pdf')">
                        Kostenvoranschlag
                      </v-btn>
                    </v-col>
                    <v-col cols="2">
                      <v-btn variant="outlined" @click="Startseite">STARTSEITE</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                  theme="dark"
              >
                <v-card-item>
                  <v-table>
                    <thead>
                    <tr>
                      <th class="text-center">ID</th>
                      <th class="text-center">Leistung</th>
                      <th class="text-center">Menge</th>
                      <th class="text-center">Gesamtpreis</th>
                      <th class="text-center">Aktionen</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in bereinigtestLeistungsArray" :key="item.text">
                      <td class="text-center">{{ item.id }}</td>
                      <td class="text-center">{{ item.titel }}</td>
                      <td class="text-center">{{ item.anzahl }}</td>
                      <td class="text-center">{{ calculateTotal(item.anzahl, item.preis) }}</td>
                      <td class="text-center">
                        <icon :icon="item.löschen" color="red" style="font-size: 30px" @click="deleteLeistung(index)"/>
                      </td>
                    </tr>
                    </tbody>
                  </v-table>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="1">
          <v-card border="10" flat min-width="1000" theme="dark" title="Rechnungen">
            <v-row class="justify-center align-center" dense>
              <v-col class="d-flex justify-center" cols="12" md="3">
                <v-btn color="primary" variant="outlined" @click="resetFilter">
                  <v-icon start>mdi-filter-remove</v-icon>
                  Filter zurücksetzen
                </v-btn>
              </v-col>

              <v-col class="d-flex align-center justify-end" cols="12" md="4">
                <v-label class="mr-2">Vom</v-label>
                <v-text-field
                    v-model="startDate"
                    density="compact"
                    hide-details
                    type="date"
                    variant="outlined"
                    @change="calculateFilteredTotal"
                ></v-text-field>
              </v-col>

              <v-col class="d-flex align-center justify-start" cols="12" md="4">
                <v-label class="mr-2">bis</v-label>
                <v-text-field
                    v-model="endDate"
                    density="compact"
                    hide-details
                    type="date"
                    variant="outlined"
                    @change="calculateFilteredTotal"
                ></v-text-field>
              </v-col>
            </v-row>

            <template v-slot:text>
              <v-text-field
                  v-model="search"
                  hide-details
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  single-line
                  variant="outlined"
              ></v-text-field>

            </template>
            <v-data-table-virtual
                :headers="headers"

                :items="filteredRechnungen"
                :items-per-page="-1"
                class="elevation-1"
                fixed-header
                height="600"
                no-data-text="Keine Rechnungen gefunden – bitte Filter überprüfen"
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.rechnungsnummer }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.vorname }}</td>
                  <td><input v-model="item.datum" disabled style="color: white" type="date"></td>
                  <td>{{ item.preis }}</td>
                  <td>
                    <p v-for="leistung in item.leistungen" :key="leistung">
                      {{ leistung.titel }}: {{ leistung.anzahl }}x{{ leistung.preis }} <br>
                    </p>
                  </td>
                  <td>
                    <v-icon color="green" style="font-size: 24px" @click="setVorlage(item)">
                      mdi-content-copy
                    </v-icon>
                    <v-icon color="primary" style="font-size: 24px" @click="downloadPDF('rechnung-pdf', item)">
                      mdi-file-pdf
                    </v-icon>
                    <v-icon color="red" style="font-size: 24px" @click="deleteRechnung(item)">mdi-delete</v-icon>
                  </td>
                </tr>
              </template>
            </v-data-table-virtual>
          </v-card>


        </v-window-item>
      </v-window>
    </div>
  </div>

  <div class="pa-8" style="display: none">
    <div id="kostenvoranschlag-pdf" class="pa-8">

      <v-row justify="start">
        <v-col cols="10">
          FastGlobeIT Gbr Franke/Graf - Roggenkamp 8, 58093 Hagen
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-16" cols="8">
          <p class="mt-n7">{{ vorname }} {{ name }}</p> <br>
          <p class="mt-n7">{{ strasse }} {{ hausnummer }}</p> <br>
          <p class="mt-n7">{{ plz }} {{ ort }}</p> <br>
        </v-col>
        <v-col cols="4">
          <div class="d-flex justify-center">
            <img alt="Bildbeschreibung"
                 class="mr-3"
                 src="data:image/png;base64,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"
                 style="height: 50px"
            >
          </div>
          <img alt="Bildbeschreibung"
               src="data:image/png;base64,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"
               style="width: 200px"
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8"/>
        <v-col class="d-flex justify-end" cols="3">
          <p>
            Datum: {{ formattedDate }}
          </p>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <v-row>
        <v-col class="mt-n8">
          <h1 style="color: #bb7448">Kostenvoranschlag</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>Sehr geehrte Damen und Herren, </p>
          <p>wir danken Ihnen für Ihren Auftrag und unterbreiten Ihnen folgendes Angebot
            gemäß Ihrer Anfrage:</p>
        </v-col>
      </v-row>
      <div style="height: 580px">
        <v-row class="mx-0 mt-5" style="width: 100%; background-color: #bb7448">
          <v-col cols="1">
            <p style="color: #f2f2f2; margin-bottom: 6px">POS</p>
          </v-col>
          <v-col class="d-flex justify-start" cols="5">
            <p style="color: #f2f2f2; margin-bottom: 6px">LEISTUNG</p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">MENGE/STUNDEN</p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">EINZELPREIS</p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">GESAMTPREIS</p>
          </v-col>

        </v-row>

        <v-row v-for="(x, index) in leistungen" :key="x" class="mx-0"
               style="width: 100%; background-color: rgba(210,204,204,0.75)">
          <v-col cols="1">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ index + 1 }}
            </p>
          </v-col>
          <v-col class="d-flex justify-start" cols="5">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.titel }}
            </p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.anzahl }}

            </p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.preis }}

            </p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculateTotal(x.anzahl, x.preis) }}
            </p>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col cols="6"/>
        <v-col cols="6">
          <v-row class="justify-lg-space-between">
            <v-col cols="8">
              <p>
                <b>Summe Positionen</b>
              </p>
            </v-col>
            <v-col cols="4">
              <p style="font-size: 20px">
                {{ calculatedPreis }}
              </p>
            </v-col>
            <v-col class="mt-n5" cols="12">
              <v-divider></v-divider>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class=" align-content-end">
        <v-col cols="12">
          <p class="ml-5 mt-16">
            Wir freuen uns, wenn dieser Kostenvoranschlag Ihre Zustimmung findet.
          </p>

          <br v-if="infoText != null">
          <p v-if="infoText != null" class="ml-5" v-html="formattedInfoText"/>
          <br>

          <p class="ml-5">
            Bei Rückfragen stehen wir Ihnen selbstverständlich jederzeit gerne zur Verfügung.
          </p>
          <br>
          <p class="ml-5">
            Mit freundlichen Grüßen <br>
            Stefan Franke & Leandro Graf
          </p>
        </v-col>
      </v-row>
      <v-row class=" align-content-end">
        <v-col cols="12">
          <p class="ml-5">
            (Nach §191 gelten wir als Kleinunternehmer. Umsatzsteuer wird aufgrund der
            Umsatzsteuerbefreiung nicht erhoben.)
          </p>
        </v-col>

      </v-row>


    </div>
  </div>

  <div class="pa-8" style="display: none">
    <div id="rechnung-pdf" class="pa-8">
      <v-row justify="start">
        <v-col cols="10">
          FastGlobeIT Gbr Franke/Graf - Roggenkamp 8, 58093 Hagen
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-13" cols="8">
          <p class="mt-n7">{{ vorname }} {{ name }}</p> <br>
          <p class="mt-n7">{{ strasse }} {{ hausnummer }}</p> <br>
          <p class="mt-n7">{{ plz }} {{ ort }}</p> <br>
        </v-col>
        <v-col cols="4">
          <div class="d-flex justify-center">
            <img alt="Bildbeschreibung"
                 class="mr-3"
                 src="data:image/png;base64,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"
                 style="height: 50px"
            >
          </div>
          <img alt="Bildbeschreibung"
               src="data:image/png;base64,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"
               style="width: 200px"
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6"/>
        <v-col class="d-flex justify-end" cols="6">
          <p>
            Rechnungsdatum: {{ formattedDate }} <br>
            Rechnungsnummer: {{ rechnungsnummer }} <br>
            Steuer-ID: DE368719498
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-n8">
          <h1 style="color: #bb7448">Rechnung</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-n2">
          <p>Sehr geehrte Damen und Herren,</p>
          <p>wir danken Ihnen für Ihren Auftrag und freuen uns, Ihnen die folgende Rechnung gemäß unserer Vereinbarung
            zu präsentieren:</p>
        </v-col>
      </v-row>
      <div style="height: 580px">
        <v-row class="mx-0 mt-5" style="width: 100%; background-color: #bb7448">
          <v-col cols="1">
            <p style="color: #f2f2f2; margin-bottom: 6px">POS</p>
          </v-col>
          <v-col class="d-flex justify-start" cols="5">
            <p style="color: #f2f2f2; margin-bottom: 6px">LEISTUNG</p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">MENGE/STUNDEN</p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">EINZELPREIS</p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">GESAMTPREIS</p>
          </v-col>

        </v-row>

        <v-row v-for="(x, index) in leistungen" :key="x" class="mx-0"
               style="width: 100%; background-color: rgba(210,204,204,0.75)">
          <v-col cols="1">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ index + 1 }}
            </p>
          </v-col>
          <v-col class="d-flex justify-start" cols="5">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.titel }}
            </p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.anzahl }}

            </p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.preis }}

            </p>
          </v-col>
          <v-col class="d-flex justify-end" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculateTotal(x.anzahl, x.preis) }}
            </p>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col cols="6"/>
        <v-col cols="6">
          <v-row class="justify-lg-space-between">
            <v-col cols="8">
              <p>
                <b>Summe Positionen</b>
              </p>
            </v-col>
            <v-col cols="4">
              <p style="font-size: 20px">
                {{ calculatedPreis }}
              </p>
            </v-col>
            <v-col class="mt-n5" cols="12">
              <v-divider></v-divider>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="align-content-end">
        <v-col cols="12">
          <p class="ml-5 mt-16">
            Wir hoffen, dass unsere Rechnung Ihren Erwartungen entspricht und bedanken uns für Ihr Vertrauen in unsere
            Dienstleistungen.
          </p>

          <br v-if="infoText != null">
          <p v-if="infoText != null" class="ml-5" v-html="formattedInfoText"/>

          <br>
          <p class="ml-5">
            Sollten Sie weitere Fragen haben oder zusätzliche Informationen benötigen, stehen wir Ihnen jederzeit gerne
            zur Verfügung.
          </p>
          <br>
          <p class="ml-5">
            Mit freundlichen Grüßen <br>
            Stefan Franke & Leandro Graf
          </p>
        </v-col>
      </v-row>

      <v-row class=" align-content-end">
        <v-col cols="12">
          <p class="ml-5">
            (Nach §191 gelten wir als Kleinunternehmer. Umsatzsteuer wird aufgrund der
            Umsatzsteuerbefreiung nicht erhoben.)
          </p>
        </v-col>
        <v-col cols="6">
          <b class="ml-5">Zahlungsbedingungen: </b> <br>
          <p class="ml-5">Überweisung oder Paypal</p> <br>
          <p class="ml-5">Der Betrag ist bei Lieferung sofort fällig.</p>
        </v-col>
        <v-col class="mt-2" cols="12">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row class="ml-2">
        <v-col cols="6" style="color: #bb7448">
          <p>Fast Globe IT</p>
          <p>Sparkasse an Volme und Ruhr</p> <br>
          <p class="mt-n7"> IBAN: DE61 4505 0001 1000 5618 25</p> <br>
          <p class="mt-n7"> BIC: WELADE3HXXX</p> <br>
        </v-col>
        <v-col cols="6" style="color: #bb7448">
          <p>Paypal: fastglobeit@gmail.com</p></v-col>
      </v-row>
    </div>
  </div>

</template>

<script>
import {Icon} from '@iconify/vue'
import {useUserStore} from "~/stores/user.js";

export default {
  components: {Icon},

  data() {
    return {
      rechnungsArray: '',
      user: true,
      handy: false,
      currentDate: Date.now(),
      name: '',
      vorname: '',
      strasse: '',
      hausnummer: '',
      plz: '',
      ort: '',
      infoText: '',
      preis: '',
      leistungen: [],
      menge: '',
      rechnungsnummer: '',
      date: null,

      tab: 0,
      search: null,
      text: null,

      rechnungen: [],
      filteredRechnungen: [],

      startDate: null,
      endDate: null,
      totalSum: 0,


      headers: [
        {title: 'Rechnungsnummer', key: 'rechnungsnummer'},
        {title: 'Name', key: 'name'},
        {title: 'Vorname', key: 'vorname'},
        {title: 'Datum', key: 'datum'},
        {title: 'Preis', key: 'preis'},
        {title: 'Leistungen', key: 'leistungen'},
        {title: 'Aktionen', key: 'actions', sortable: false}
      ],
    }
  },

  computed: {
    formattedInfoText() {
      return this.infoText
          ? this.infoText.replace(/\n/g, '<br>')
          : ''
    },

    formattedDate() {
      const d = this.date ? new Date(this.date) : new Date()
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const year = d.getFullYear()
      return `${day}.${month}.${year}`
    },

    calculatedPreis() {
      const sum = this.leistungen.reduce((acc, cur) => {
        const p = parseFloat(
            cur.preis.replace('€', '').replace(',', '.')
        ) || 0
        const m = parseInt(cur.anzahl) || 1
        return acc + p * m
      }, 0)
      return sum.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      })
    },

    bereinigtestLeistungsArray() {
      return this.leistungen.map((item, i) => ({
        id: i + 1,
        löschen: 'fluent:delete-16-regular',
        ...item
      }))
    }
  },

  methods: {
    deleteLeistung(index) {
      // Entferne das Element an der spezifischen Position (Index)
      this.leistungen.splice(index, 1);
    },
    calculateTotal(quantity, priceWithEuro) {
      // Menge als Zahl
      const qty = parseInt(quantity, 10) || 0;
      // Preis (z.B. "23,50€" → 23.50)
      const num = parseFloat(
          String(priceWithEuro)
              .replace('€', '')
              .replace(/\./g, '')   // falls Tausenderpunkte drinstehen
              .replace(',', '.')
              .trim()
      ) || 0;
      const total = qty * num;
      return total.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });
    },
    leistungSpeichern() {
      if (this.leistungen.length < 10) {
        this.leistungen.push({
          titel: this.text,
          anzahl: this.menge,
          preis: this.preis,
        })

        this.preis = ''
        this.text = ''
        this.menge = ''
      } else {
        alert("Es sind nur 10 Leistungen zulässig.")
      }
    },
    async Startseite() {
      this.$router.push('/')
    },

    async checkUserAndRedirect() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.$router.push('/admin');
        return;
      }

      try {
        const response = await $fetch("https://mila-escort.de:8443/auth/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response) {
          const userStore = useUserStore();
          userStore.setUser(response);
          // Wenn ein valider User gespeichert wurde – nichts tun
          if (!userStore.user) {
            this.$router.push('/admin');
          }
        } else {
          this.$router.push('/admin');
        }

      } catch (error) {
        console.error("Fehler beim Abrufen des Users:", error);
        this.$router.push('/admin');
      } finally {
        this.isLoading = false;
      }
    },

    async loadRechnungen() {
      try {
        const resp = await fetch('https://mila-escort.de:8443/auth/rechnungen')
        if (!resp.ok) throw new Error('Fehler beim Laden')
        const data = await resp.json()
        this.rechnungen = data
        this.filteredRechnungen = data
      } catch (e) {
        console.error('Fehler beim Laden:', e)
      }
    },

    customFilter() {
      const start = this.startDate ? new Date(this.startDate) : null
      const end = this.endDate ? new Date(this.endDate) : null
      const qry = this.search
          ? this.search.toLowerCase().replace('.', ',')
          : ''

      this.filteredRechnungen = this.rechnungen.filter(item => {
        const d = new Date(item.datum)
        let inRange = true

        if (start && end) inRange = d >= start && d <= end
        else if (start) inRange = d >= start
        else if (end) {
          inRange = d.toISOString().slice(0, 10) === end.toISOString().slice(0, 10)
        }

        const mainMatch = Object.entries(item).some(([k, v]) => {
          if (v == null || Array.isArray(v)) return false
          let s = String(v).toLowerCase()
          if (k === 'preis') {
            s = s.replace(/[€,]/g, '').replace('.', ',').trim()
          }
          return s.includes(qry)
        })

        const leistMatch =
            Array.isArray(item.leistungen) &&
            item.leistungen.some(l =>
                Object.values(l).some(v => {
                  if (v == null) return false
                  let s = String(v).toLowerCase()
                  if (l.preis) {
                    s = s.replace(/[€,]/g, '').replace('.', ',').trim()
                  }
                  return s.includes(qry)
                })
            )

        const nameMatch = `${item.vorname} ${item.name}`
            .toLowerCase()
            .includes(qry)

        return inRange && (mainMatch || leistMatch || nameMatch)
      })
    },

    calculateFilteredTotal() {
      const sum = this.filteredRechnungen.reduce((tot, r) => {
        ;(r.leistungen || []).forEach(l => {
          const p = parseFloat(
              l.preis.replace('€', '').replace(',', '.')
          ) || 0
          const m = parseInt(l.anzahl) || 0
          tot += p * m
        })
        return tot
      }, 0)

      this.totalSum = sum.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },

    resetFilter() {

      this.search = null
      this.startDate = null
      this.endDate = null
      this.customFilter()
    },

    async generatePDF(contentId) {
      if (!process.client) return;
      // dynamisch html2pdf laden
      const {default: html2pdf} = await import('html2pdf.js');

      const isoDate = new Date().toISOString().split('T')[0];
      let rechnungsnummer = this.rechnungsnummer;

      // Nur Rechnungen speichern
      if (contentId === 'rechnung-pdf') {
        const payload = {
          name: this.name,
          vorname: this.vorname,
          straße: this.straße,
          hausnummer: this.hausnummer,
          plz: this.plz,
          ort: this.ort,
          leistungen: this.leistungen,
          datum: isoDate,
          preis: this.calculatedPreis,
          rechnungsnummer: this.rechnungsnummer,
          text: this.infoText,
          rechnungen: []
        };

        try {
          const res = await fetch('https://mila-escort.de:8443/auth/rechnungen', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
          });
          if (!res.ok) throw new Error(`Status ${res.status}`);
          const data = await res.json();
          rechnungsnummer = data.rechnungsnummer;
          this.rechnungsnummer = rechnungsnummer;
        } catch (err) {
          console.error('Fehler beim Speichern der Rechnung:', err);
          alert('Fehler beim Speichern der Rechnung.');
          return;
        }
      }

      // PDF generieren (Rechnung oder Kostenvoranschlag)
      const element = document.getElementById(contentId);
      html2pdf(element, {
        margin: 0,
        filename: contentId === 'rechnung-pdf'
            ? `${this.name}_${this.formattedDate}_Rechnung.pdf`
            : `${this.name}_${this.formattedDate}_Kostenvoranschlag.pdf`,
        image: {type: 'pdf', quality: 2},
        html2canvas: {scale: 3},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
      });

      if (contentId === 'rechnung-pdf') {
        this.endDate = isoDate;
        await this.loadRechnungen();
        await this.customFilter();
        this.tab = 1;
      }
    },
    updatePreis() {
      // Entfernt alle vorhandenen Euro-Zeichen
      this.preis = this.preis.replace(/€/g, '').trim();
      // Hängt ein € an, falls noch keins dransteht
      if (!this.preis.endsWith('€')) {
        this.preis += '€';
      }
    },

    async downloadPDF(contentId, item) {
      if (!process.client) return;
      // dynamisch html2pdf laden
      const {default: html2pdf} = await import('html2pdf.js');

      try {
        // Felder setzen
        this.rechnungsnummer = item.rechnungsnummer;
        this.name = item.name;
        this.vorname = item.vorname;
        this.straße = item.straße;
        this.hausnummer = item.hausnummer;
        this.plz = item.plz;
        this.date = item.datum;
        this.ort = item.ort;
        this.leistungen = item.leistungen;
        this.infoText = item.text;

        const element = document.getElementById(contentId);
        if (!element) {
          return alert('Fehler: Element für die PDF-Erstellung nicht gefunden.');
        }

        await html2pdf(element, {
          margin: 0,
          filename: `${item.name}_${this.formattedDate}_Rechnung_${item.rechnungsnummer}.pdf`,
          image: {type: 'pdf', quality: 2},
          html2canvas: {scale: 3},
          jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
        });
      } catch (err) {
        console.error('Fehler beim Generieren der PDF:', err);
        alert('Fehler beim Generieren der PDF.');
      }
    },

    async deleteRechnung(item) {
      if (!confirm(`Rechnung ${item.rechnungsnummer} löschen?`)) return
      const resp = await fetch(`https://mila-escort.de:8443/auth/rechnungen/${item.id}`, {
        method: 'DELETE'
      })
      if (!resp.ok) console.error('Löschen fehlgeschlagen')
      await this.loadRechnungen()
      this.customFilter()
    },


    setVorlage(item) {
      Object.assign(this, {
        name: item.name,
        vorname: item.vorname,
        strasse: item.strasse,
        hausnummer: item.hausnummer,
        plz: item.plz,
        ort: item.ort,
        rechnungsnummer: item.rechnungsnummer,
        infoText: item.text,
        leistungen: item.leistungen
      })
      this.tab = 0
    }
  },

  watch: {
    search() {
      this.customFilter()
    },
    startDate() {
      this.customFilter()
      this.calculateFilteredTotal()
    },
    endDate() {
      this.customFilter()
      this.calculateFilteredTotal()
    },
    filteredRechnungen: {
      handler() {
        this.calculateFilteredTotal()
      },
      immediate: true
    }
  },

  mounted() {
    this.checkUserAndRedirect()
    this.loadRechnungen()
    this.calculateFilteredTotal()
  }
}
</script>

<style scoped>
p {
  font-size: 15px;
}

.v-row {
  width: 100%;
}

.custom-date-input {
  width: 90px !important; /* Breite des Inputs anpassen */
}

.custom-date-input::-webkit-calendar-picker-indicator {
  display: none; /* Kalender-Icon entfernen */
}


</style>