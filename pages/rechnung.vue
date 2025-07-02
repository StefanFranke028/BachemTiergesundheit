<template>
  <div v-if="user && !handy" class="d-flex justify-center pt-15">
    <div>
      <v-tabs
          v-model="tab"
          align-tabs="center"
          color="white"
      >
        <v-tab :value="0" color="deep-purple-accent-4"  style="background-color: white!important;">Erstellen</v-tab>
        <v-tab :value="1" color="deep-purple-accent-4" style="background-color: white!important;">Löschen</v-tab>
      </v-tabs>
      <v-window v-model="tab" class="mt-5 ma-3" transition="none">
        <v-window-item class="pa-0" value="0">
          <v-row class="justify-center mt-n4  ma-3">
            <v-col cols="6">
              <v-card
                  theme="dark">
                <v-card-item>
                  <v-row class="justify-center mt-3" style="overflow-y: scroll; ">
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
                      <v-text-field v-model="hausnummer" label="Hausnummer" type="text" variant="outlined"/>
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
                    <v-col class="d-flex justify-start" cols="12">
                      <v-switch v-model="mwstActive" auto-grow :label="mwstActive? 'Mit Mehrwertsteuer':'Ohne Mehrwertsteuer'" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field v-model="text" label="Leistung" variant="outlined"/>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="3">
                      <v-text-field
                          v-model.number="preis"
                          label="Preis"
                          type="number"
                          variant="outlined"
                      >
                        <template #append-inner>
                          €
                        </template>
                      </v-text-field>

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
                <v-label class="mr-2">von</v-label>
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
                  label="Suche"
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

  <div class="pa-8" style="display: none; width: 1240px; height: 1754px; border: 1px solid black">
    <div id="kostenvoranschlag-pdf" class="pa-8">

      <v-row justify="start">
        <v-col cols="9">
          <p style="font-size: 14px">Rechnungsempfänger:</p>
          <p style="font-size: 13px" class="mt-n1">{{ vorname }} {{ name }}</p>
          <p style="font-size: 14px">Straße, Hausnummer:</p>
          <p style="font-size: 13px" class="mt-n1">{{ strasse }} {{ hausnummer }}</p>
          <p style="font-size: 14px">PLZ, Ort:</p>
          <p style="font-size: 13px" class="mt-n1">{{ plz }} {{ ort }}</p>
        </v-col>
        <v-col class="d-flex justify-end" cols="2">
          <img alt="Bildbeschreibung"
               src="@/assets/FugenLogo-removebg-preview.png"
               style="width: 130px"
          >
      </v-col>

      </v-row>



      <v-row class="">
        <v-col cols="7"></v-col>
        <v-col class=" " cols="4">
          <p class="text-end mt-n1">VS Fugenservice Veronika Sancar</p>
          <p class="text-end mt-n1">Pfarrer Keutner Str. 6</p>
          <p class="text-end mt-n1">D- 61350 Bad Homburg v.d.H</p> <br>
          <p class="text-end mt-n1">Datum: {{ formattedDate }}</p>
          <p class="text-end mt-n1">Rechnungsnummer: {{rechnungsnummer}} </p>
          <p style="font-size: 11px" class="text-end mt-n1">Rechnungsdatum entspricht Liefer-/Leistungsdatum </p>
        </v-col>

      </v-row>
      <v-row class="mt-n12">
        <v-col >
          <h1 style="color: #509fa6">Kostenvoranschlag</h1>
        </v-col>
      </v-row>

      <v-row class="mt-n5">
        <v-col>
          <p>Sehr geehrte Damen und Herren, </p>
          <p>vielen Dank für Ihren Auftrag. Vereinbarungsgemäß berechnen wir Ihnen hiermit folgende Leistungen:</p>
        </v-col>
      </v-row>
      <div style="height: 500px">
        <v-row class="mx-0 mt-5" style="width: 100%; background-color: #509fa6">
          <v-col cols="1">
            <p style="color: #f2f2f2; margin-bottom: 6px">Position</p>
          </v-col>
          <v-col class="d-flex justify-start" cols="1">
            <p style="color: #f2f2f2; margin-bottom: 6px">Anzahl</p>
          </v-col>
          <v-col class="d-flex justify-start" cols="6">
            <p style="color: #f2f2f2; margin-bottom: 6px">Bezeichnung</p>
          </v-col>
          <v-col class="d-flex justify-center" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">Einzelpreis</p>
          </v-col>
          <v-col class="d-flex justify-center" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">Gesamtpreis</p>
          </v-col>

        </v-row>

        <v-row v-for="(x, index) in leistungen" :key="x" class="mx-0"
               style="width: 100%; background-color: rgba(210,204,204,0.75)">
          <v-col class="pt-1 pb-0 " cols="1">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ index + 1 }}
            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-start" cols="1">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.anzahl }}

            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-start" cols="6">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.titel }}
            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.preis }} €

            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculateTotal(x.anzahl, x.preis) }}
            </p>
          </v-col>
          <v-divider></v-divider>
        </v-row>


        <!---Leere zeilen für bessere Übersichtlichkeit--->
        <v-row  class="mx-0"
                style="width: 100%; background-color: rgba(232,230,230,0.75)">
          <v-col cols="12">

          </v-col>


          <v-divider></v-divider>
        </v-row>

        <!-------------- Netto--->
        <v-row  class="mx-0"
               style="width: 100%; background-color: rgba(232,230,230,0.75)">
          <v-col class="py-0" cols="10">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              Nettopreis
            </p>
          </v-col>
          <v-col class="py-0 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculatedPreis }}
            </p>
          </v-col>

          <v-divider></v-divider>
        </v-row>

        <v-row v-if="mwstActive" class="mx-0"
                style="width: 100%; background-color: rgba(186,184,184,0.75)">
          <v-col cols="10" class="py-1 ">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              <b>
                zzgl. 19% USt

              </b>
            </p>
          </v-col>
          <v-col class="py-1 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ mwst }}
            </p>
          </v-col>

          <v-divider></v-divider>
        </v-row>

        <!------------------ Brutto--->
        <v-row  class="mx-0"
                style="width: 100%; background-color: rgba(186,184,184,0.75)">
          <v-col cols="10" class="py-1 ">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              <b>
              Rechnungsbetrag:

              </b>
            </p>
          </v-col>
          <v-col class="py-1 d-flex justify-center" cols="2">
            <p v-if="!mwstActive" class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculatedPreis }}
            </p>
            <p v-if="mwstActive" class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ formattedBruttopreis }}
            </p>
          </v-col>

          <v-divider></v-divider>
        </v-row>


      </div>
      <v-row class="ma-0" style="width: 100%;">

        <v-col cols="4">
          <p style="font-size: 12px; color: #434343">
            VS Fugenservice Veronika Sancar
          </p>
          <p style="font-size: 12px; color: #434343">
            Pfarrer Keutner Str. 6
          </p>
          <p style="font-size: 12px; color: #434343">
            D-61350 Bad Homburg
          </p>
          <p style="font-size: 12px; color: #434343">
            Tel: +49 (0)171 810 6663
          </p>
          <p style="font-size: 12px; color: #434343">
            E-Mail: info@vs1985.de
          </p>
        </v-col>
        <v-col cols="4">
          <p style="font-size: 12px; color: #434343">
            Kreditinstitut: Commerzbank
          </p>
          <p style="font-size: 12px; color: #434343">
            IBAN: DE3423 4562 3435 676
          </p>
          <p style="font-size: 12px; color: #434343">
            BIC: COBADEFFXXX
          </p>
          <p style="font-size: 12px; color: #434343">
            Kto. Inh.: Veronica Sancar
          </p>
        </v-col>
        <v-col cols="4">
          <p style="font-size: 12px; color: #434343">
            USt-ID: DE24324567
          </p>
          <p style="font-size: 12px; color: #434343">
            HRB: 1234567B
          </p>
          <p style="font-size: 12px; color: #434343">
            Amtsgericht: Charlottenburg
          </p>
          <p style="font-size: 12px; color: #434343">
            Geschäftsführer: Veronica Sancar
          </p>
          <p style="font-size: 12px; color: #434343">
            Webseite: https://vs1985.de/
          </p>
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
            Veronika Sancar
          </p>
        </v-col>
      </v-row>

    </div>
  </div>

  <div class="pa-8" style="display: none; width: 1240px; height: 1754px; border: 1px solid black">
    <div id="rechnung-pdf" class="pa-8">
      <v-row justify="start">
        <v-col cols="9">
          <p style="font-size: 14px">Rechnungsempfänger:</p>
          <p style="font-size: 13px" class="mt-n1">{{ vorname }} {{ name }}</p>
          <p style="font-size: 14px">Straße, Hausnummer:</p>
          <p style="font-size: 13px" class="mt-n1">{{ strasse }} {{ hausnummer }}</p>
          <p style="font-size: 14px">PLZ, Ort:</p>
          <p style="font-size: 13px" class="mt-n1">{{ plz }} {{ ort }}</p>
        </v-col>
        <v-col class="d-flex justify-end" cols="2">
          <img alt="Bildbeschreibung"
               src="@/assets/FugenLogo-removebg-preview.png"
               style="width: 130px">
        </v-col>
      </v-row>



      <v-row class="">
        <v-col cols="7"></v-col>
        <v-col class=" " cols="4">
          <p class="text-end mt-n1">VS Fugenservice Veronika Sancar</p>
          <p class="text-end mt-n1">Pfarrer Keutner Str. 6</p>
          <p class="text-end mt-n1">D- 61350 Bad Homburg v.d.H</p> <br>
          <p class="text-end mt-n1">Datum: {{ formattedDate }}</p>
          <p class="text-end mt-n1">Rechnungsnummer: {{rechnungsnummer}} </p>
          <p style="font-size: 11px" class="text-end mt-n1">Rechnungsdatum entspricht Liefer-/Leistungsdatum </p>
        </v-col>

      </v-row>
      <v-row class="mt-n12">
        <v-col >
          <h1 style="color: #509fa6">Rechnung</h1>
        </v-col>
      </v-row>





      <v-row class="mt-n5">
        <v-col>
          <p>Sehr geehrte Damen und Herren, </p>
          <p>vielen Dank für Ihren Auftrag. Vereinbarungsgemäß berechnen wir Ihnen hiermit folgende Leistungen:</p>
        </v-col>
      </v-row>
      <div style="height: 500px">
        <v-row class="mx-0 mt-5" style="width: 100%; background-color: #509fa6">
          <v-col cols="1">
            <p style="color: #f2f2f2; margin-bottom: 6px">Position</p>
          </v-col>
          <v-col class="d-flex justify-start" cols="1">
            <p style="color: #f2f2f2; margin-bottom: 6px">Anzahl</p>
          </v-col>
          <v-col class="d-flex justify-start" cols="6">
            <p style="color: #f2f2f2; margin-bottom: 6px">Bezeichnung</p>
          </v-col>
          <v-col class="d-flex justify-center" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">Einzelpreis</p>
          </v-col>
          <v-col class="d-flex justify-center" cols="2">
            <p style="color: #f2f2f2; margin-bottom: 6px">Gesamtpreis</p>
          </v-col>

        </v-row>

        <v-row v-for="(x, index) in leistungen" :key="x" class="mx-0"
               style="width: 100%; background-color: rgba(210,204,204,0.75)">
          <v-col class="pt-1 pb-0 " cols="1">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ index + 1 }}
            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-start" cols="1">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.anzahl }}

            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-start" cols="6">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.titel }}
            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ x.preis }} €

            </p>
          </v-col>
          <v-col class="pt-1 pb-0 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculateTotal(x.anzahl, x.preis) }}
            </p>
          </v-col>
          <v-divider></v-divider>
        </v-row>


        <!---Leere zeilen für bessere Übersichtlichkeit--->
        <v-row  class="mx-0"
                style="width: 100%; background-color: rgba(232,230,230,0.75)">
          <v-col cols="12">

          </v-col>


          <v-divider></v-divider>
        </v-row>

        <!-------------- Netto--->
        <v-row  class="mx-0"
                style="width: 100%; background-color: rgba(232,230,230,0.75)">
          <v-col class="py-0" cols="10">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              Nettopreis
            </p>
          </v-col>
          <v-col class="py-0 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculatedPreis }}
            </p>
          </v-col>

          <v-divider></v-divider>
        </v-row>

        <v-row v-if="mwstActive" class="mx-0"
               style="width: 100%; background-color: rgba(186,184,184,0.75)">
          <v-col cols="10" class="py-1 ">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              <b>
                zzgl. 19% USt

              </b>
            </p>
          </v-col>
          <v-col class="py-1 d-flex justify-center" cols="2">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ mwst }}
            </p>
          </v-col>

          <v-divider></v-divider>
        </v-row>

        <!------------------ Brutto--->
        <v-row  class="mx-0"
                style="width: 100%; background-color: rgba(186,184,184,0.75)">
          <v-col cols="10" class="py-1 ">
            <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              <b>
                Rechnungsbetrag:

              </b>
            </p>
          </v-col>
          <v-col class="py-1 d-flex justify-center" cols="2">
            <p v-if="!mwstActive" class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ calculatedPreis }}
            </p>
            <p v-if="mwstActive" class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
              {{ formattedBruttopreis }}
            </p>
          </v-col>

          <v-divider></v-divider>
        </v-row>


      </div>
      <v-row class="ma-0" style="width: 100%;">

        <v-col cols="4">
          <p style="font-size: 12px; color: #434343">
            VS Fugenservice Veronika Sancar
          </p>
          <p style="font-size: 12px; color: #434343">
            Pfarrer Keutner Str. 6
          </p>
          <p style="font-size: 12px; color: #434343">
            D-61350 Bad Homburg
          </p>
          <p style="font-size: 12px; color: #434343">
            Tel: +49 (0)171 810 6663
          </p>
          <p style="font-size: 12px; color: #434343">
            E-Mail: info@vs1985.de
          </p>
        </v-col>
        <v-col cols="4">
          <p style="font-size: 12px; color: #434343">
            Kreditinstitut: Commerzbank
          </p>
          <p style="font-size: 12px; color: #434343">
            IBAN: DE3423 4562 3435 676
          </p>
          <p style="font-size: 12px; color: #434343">
            BIC: COBADEFFXXX
          </p>
          <p style="font-size: 12px; color: #434343">
            Kto. Inh.: Veronica Sancar
          </p>
        </v-col>
        <v-col cols="4">
          <p style="font-size: 12px; color: #434343">
            USt-ID: DE24324567
          </p>
          <p style="font-size: 12px; color: #434343">
            HRB: 1234567B
          </p>
          <p style="font-size: 12px; color: #434343">
            Amtsgericht: Charlottenburg
          </p>
          <p style="font-size: 12px; color: #434343">
            Geschäftsführer: Veronica Sancar
          </p>
          <p style="font-size: 12px; color: #434343">
            Webseite: https://vs1985.de/
          </p>
        </v-col>
      </v-row>

      <v-row class="align-content-end">
        <v-col cols="12">
          <p class="ml-5 mt-16">
            Zahlungsbedingungen: Zahlung innerhalb von 7 Tagen ab Rechnungseingang ohne Abzüge. <br> Nach § 13b Abs. 1 und 2 UStG sind Sie als Leistungsempfänger Schuldner der Umsatzsteuer
            <br> (Hinweis nach 14a Abs. 5 Satz 2 UStG)..
          </p>

          <br v-if="infoText != null">
          <p v-if="infoText != null" class="ml-5" v-html="formattedInfoText"/>

          <br>
          <p class="ml-5">
            Sollten Sie weitere Fragen haben oder zusätzliche Informationen  benötigen, <br> stehen wir Ihnen jederzeit gerne
            zur Verfügung.
          </p>
          <br>
          <p class="ml-5">
            Mit freundlichen Grüßen <br>
            Veronica Sancar
          </p>
        </v-col>
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
      mwstActive:true,
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
    preisWert() {
      const sum = this.leistungen.reduce((acc, cur) => {
        const p = parseFloat(cur.preis) || 0;
        const m = parseInt(cur.anzahl) || 1;
        return acc + p * m;
      }, 0);
      return sum;
    },

    calculatedPreis() {
      return this.preisWert.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });
    },

    bruttopereis(){
      return this.preisWert + this.mwstNumber;
    },

    formattedBruttopreis() {
      return this.bruttopereis.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });
    },
    mwstNumber() {
      return this.preisWert * 0.19;
    },
    mwst() {
      const mwstBetrag = this.preisWert * 0.19;
      return mwstBetrag.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });
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