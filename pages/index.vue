<template>
  <div class="background" v-if="desktop || tabletHorizontal">
    <HeaderComponent class="" v-if=" (desktop || tabletHorizontal)"></HeaderComponent>

    <v-row   class="ma-0 mt-n10 pa-0" style="width: 100%;overflow-y: scroll">
      <v-col cols="9">
        <v-row class="justify-center mx-0  pt-10" style="width: 100%">

          <v-col cols="10">
            <h1 class="text-white" style="font-size: 45px">
              Tier Gesundheitszentrum Andrea Bachem
            </h1>
          </v-col>
          <v-col cols="10">

            <div style="height: 50vh; overflow-y: scroll">
              <h2 style="color: #0082c2">
                Ganzheitliche Therapie für die Gesundheit deines Tieres

              </h2>
              <h3 class="text-white">
                Raus aus dem Schmerz!
              </h3>
              <h2  class="mt-5" style="color: #0082c2">Ganzheitliche Tiertherapie mit Herz und Kompetenz</h2>
              <p style="font-size: 17px; color: #dedddd">
                Im Tiergesundheitszentrum Andrea Bachem steht die ganzheitliche Gesundheit deines Tieres im Mittelpunkt.
                Unsere Praxis in Erftstadt bietet individuelle Therapieansätze für Hunde und Pferde, die auf den
                neuesten Erkenntnissen der Tierchiropraktik, Tierosteopathie undTierphysiotherapie basieren.
                <br><br>
                Als zertifizierte Therapeutin für den Bewegungsapparat behandle ich gezielt Beschwerden wie Arthrose,
                Spondylose, Bandscheibenvorfälle, Lahmheiten, sowie Bewegungseinschränkungen
                und Haltungsprobleme. Dabei lege ich großen Wert auf eine fundierte Anamnese und eine individuell abgestimmte Behandlung.
              </p>

              <h3 class="text-white mt-3">Individuelle Behandlung statt Schema F</h3>
              <p style="font-size: 17px; color: #dedddd">
                Jeder Hund und jedes Pferd bringt seine eigene Geschichte mit. Deshalb wird jede Chiropraktik-Sitzung,
                jede osteopathische Behandlung und jede physiotherapeutische Maßnahme individuell geplant und durchgeführt.
                Unsere manuelle Therapie verfolgt das Ziel, Blockaden zu lösen, die Beweglichkeit zu verbessern und Schmerzen nachhaltig zu lindern.
              </p>
              <h3 class="text-white mt-3">Ernährungsberatung – der unterschätzte Heilungsweg</h3>
              <p style="font-size: 17px; color: #dedddd">
                Auch die Ernährung deines Tieres spielt eine zentrale Rolle für dessen Gesundheit.
                Im Rahmen unserer Ernährungsberatung analysieren wir bestehende Futterrationen und zeigen dir,
                wie du die Ernährung deines Vierbeiners gezielt optimieren kannst – egal ob bei chronischen Entzündungen, Hautproblemen oder Gewichtsmanagement.
              </p>
              <h3 class="text-white mt-3">Vertrauen, Empathie und Fachwissen</h3>
              <p style="font-size: 17px; color: #dedddd">
                Als erfahrene Therapeutin liegt mir nicht nur das körperliche, sondern auch das seelische Wohl deines Tieres am Herzen.
                Ich arbeite mit viel Einfühlungsvermögen und Geduld, um deinem Tier eine angenehme Behandlung zu ermöglichen – in einer
                ruhigen und vertrauensvollen Atmosphäre. Tiergesundheit beginnt mit Vertrauen.
              </p>
              <h3 class="text-white mt-3">Jetzt Termin im Tiergesundheitszentrum vereinbaren</h3>
              <p style="font-size: 17px; color: #dedddd">
                Du möchtest einen Termin in unserem Tiergesundheitszentrum in Erftstadt vereinbaren?
                Dann nutze jetzt unser Kontaktformular oder rufe direkt an. Gemeinsam finden wir den passenden Therapieansatz
                für deinen vierbeinigen Begleiter.
                <br><br>
                Andrea Bachem – <em>Ihre Ansprechpartnerin für Tiergesundheit mit Herz und Verstand</em>.
              </p>
            </div>
          </v-col>

        </v-row>
        <!-- Termin-Button -->


        <!-- Termin-Dialog -->
        <v-dialog v-model="dialog" scrim="black" width="1200">
          <template v-slot:activator="{ props }">

            <div class="d-flex justify-center">
            <v-btn  class="text-center" style="background-color: #0082c2; color: #dedddd" v-bind="props">
              Termin Vereinbaren
            </v-btn>

            </div>
          </template>
          <v-card
              class="mx-auto my-12 pa-5 dialogBackground"
              style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
              width="1200">
            <v-row>
              <v-col>
                <v-row class="justify-center">
                  <v-col class="d-flex justify-center" cols="10">
                    <h1 class="line"> Termin Vereinbaren</h1>
                  </v-col>
                  <v-col class="d-flex justify-center mt-n3" cols="10">
                    <v-text-field v-model="name" label="Name" variant="underlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center mt-n3" cols="10">
                    <v-text-field v-model="email" label="Email" variant="underlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center mt-n3" cols="10">
                    <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center mt-n3" cols="10">
                    <v-textarea v-model="text" clearable counter
                                label="Nachricht" no-resize style="color: black" variant="underlined"/>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="align-center d-flex pr-16">
                <v-row class="mt-10">
                  <v-col cols="8">
                    <div class="logo"/>
                  </v-col>

                  <v-col class=" pt-15" cols="12">
                    <h2 class="pt-10">Ihre Anliegen sind uns wichtig!</h2>
                    <br>
                    <p style="font-size: 16px">Zögern Sie nicht, unser
                      Kontaktformular
                      zu
                      nutzen,
                      um
                      mit
                      unserem Tiergesundheitszentrum in Verbindung zu treten und die bestmögliche Betreuung für
                      Ihr Haustier zu erhalten.
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <form class="layout_form cr_form cr_font" action="https://seu2.cleverreach.com/f/430331-415442/wcs/" method="post" target="_blank">
                      <div class="cr_body cr_page cr_font formbox" style="background-color: transparent !important;">
                        <div class="editable_content" style="text-align:left;background-color: transparent !important;">
                          <div id="9467951" rel="email" class="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave" style="margin-bottom:0;">
                            <div class="cr_form-inputgroup cr_form-inputgroup--typeemail">
                              <label for="text9467951">Newslatter abonieren</label>
                              <input class="cr_form-input" type="email" id="text9467951" name="email" value="" placeholder="name@example.com" style="width:100%;">
                            </div>
                          </div>
                          <div id="9467953" rel="button" class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable  submit_container">
                          <button type="submit" class="cr_form-block cr_button">Abonieren</button>
                        </div>
                        </div>
                        <noscript><a href="http://www.cleverreach.de">www.CleverReach.de</a></noscript>
                      </div>


                    </form>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">

                <v-row class="mt-10">
                  <v-col class="d-flex justify-center" cols="6">
                    <v-btn variant="text" @click="create" :loading="loading">
                      Senden
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="6">
                    <v-btn variant="text" @click="dialog = false">
                      Abbrechen
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>

        </v-dialog>
        <v-row class="justify-center mx-0 mt-n10" style="width: 100%">
          <v-col class="d-flex justify-center mx-4  " cols="10">
            <v-row class="info mt-16 mx-0" style="width: 100%">
              <v-col class="d-flex justify-center align-center" cols="4">
                <v-row class="d-flex justify-center">
                  <div class="d-flex justify-center align-center"
                       style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 15%; top:-20px; background-color: #0082c2; border-radius: 100%">
                    <Icon icon="solar:phone-broken" style="font-size: 38px"/>
                  </div>
                  <v-col class="d-flex justify-center" cols="12">
                    <h2 style=" color: #ffffff">
                      Ruf mich an
                    </h2>

                  </v-col>
                  <v-col class="d-flex justify-center" cols="12">
                    <a href="tel:+4917806915915">
                      <h3 class=" mt-n4" style="color: #fdfcfc">
                        01786915915
                      </h3>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
              <!--                <v-divider style="background-color: #fcf8f8; color: #fffdfd" vertical></v-divider>-->

              <v-col class="d-flex justify-center align-center" cols="4">
                <v-row class="d-flex justify-center">
                  <div class="d-flex justify-center align-center"
                       style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 48%; top:-20px; background-color: #0082c2; border-radius: 100%">
                    <Icon icon="ic:outline-mail" style="font-size: 38px"/>
                  </div>
                  <v-col class="d-flex justify-center" cols="12">
                    <h2 style="color: #fcf8f8">
                      Schreib mir eine Mail
                    </h2>

                  </v-col>
                  <v-col class="d-flex justify-center" cols="12">
                    <a href="mailto:andreabachem83@gmail.com" style="text-decoration: none" rel="noopener" target="_blank">
                      <h3 class="mt-n4" style="color: #fcfbfb">
                        andreabachem83@gmail.com
                      </h3>
                    </a>

                  </v-col>
                </v-row>
              </v-col>
              <!--                <v-divider style="color: #faf7f7; background-color: #f8f8f8" vertical></v-divider>-->

              <v-col class="d-flex justify-center align-center" cols="4">
                <v-row class="d-flex justify-center">
                  <div class="d-flex justify-center align-center"
                       style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 81%; top:-20px; background-color: #0082c2; border-radius: 100%">
                    <Icon icon="ic:outline-place" style="font-size: 38px"/>
                  </div>
                  <v-col class="d-flex justify-center" cols="12">
                    <h2 style="color: #fafafa">
                      So findest du mich
                    </h2>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="12">
                    <a rel="noopener" href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280411,6.7633927,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47bf3d9b8e9b9ba3:0xf038ba0f5709dcf2!2m2!1d6.8046778!2d50.8280484!3e0?entry=ttu"
                       target="_blank">
                      <p class="text-center mt-n4" style="font-size: 14px; color: #fcfafa">
                        <b>
                          Peter-May-Straße 47 50374 Köttingen
                        </b>
                      </p>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>



    </v-row>
        <v-img  alt="Therapiekollage mit Hund und Pferd" src="../assets/kolage.webp"
               style="background-size: cover;margin-top: -78px; height: 120vh;position: fixed; top:80px; right: 20px;width: 430px;"></v-img>
    <footer class="d-flex" style="position: fixed; bottom: 10px; width: 100%;  align-items: center">
      <nav class="d-flex">
        <NuxtLink  title="Impressum von Andrea Bachem" to="/impressum" class="mx-2 footer-link text-white link">
          Impressum
        </NuxtLink>
        <span class="text-white mt-n1">|</span>

        <NuxtLink  title="Verwaltungsseite" rel="nofollow" to="/admin" class="mx-2 text-white footer-link link" >
          Verwaltung
        </NuxtLink>
        <span class="text-white mt-n1">|</span>

        <NuxtLink title="Datenschautz von Tiergesundheitszentrum.de"  to="/datenschutz" class="mx-2 footer-link text-white link" >
          Datenschutz
        </NuxtLink>
        <span class="text-white mt-n1">|</span>

        <NuxtLink title="Meine Vita und intressantes über mich" to="/ueberuns" class="mx-2 footer-link text-white link" >
          Über Uns
        </NuxtLink>
      </nav>

      <!-- YouTube-Link als echter externer Link -->
      <a href="https://www.youtube.com/results?search_query=andrea+bachem" aria-label="YouTube" class="mx-3 mt-n4" style="color: red; font-size: 40px">
        <Icon icon="grommet-icons:youtube" />
      </a>

      <!-- Instagram-Link -->
      <a href="https://www.instagram.com/andreabachem?igsh=MTIxZTJxZHRvd2wxeg==" target="_blank" rel="noopener" aria-label="Instagram" class="mx-3 mt-n4" style="font-size: 40px">
        <Icon icon="skill-icons:instagram" />
      </a>
    </footer>

  </div>
  <div v-if="mobile || tablet" class="background" style="padding-top: 20px">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <!-- Titel & Beschreibung -->
    <v-row class="justify-center mx-0 ">
      <v-col cols="11">
        <h1 class="text-white text-center" style="font-size: 30px">Tier Gesundheitszentrum Andrea Bachem</h1>
      </v-col>
      <v-col cols="11">
        <div style="height: 40vh; overflow-y: scroll">
          <h2 style="color: #0082c2">
            Ganzheitliche Therapie für die Gesundheit deines Tieres

          </h2>
          <h3 class="text-white">
            Raus aus dem Schmerz!
          </h3>
          <h2  class="mt-5" style="color: #0082c2">Ganzheitliche Tiertherapie mit Herz und Kompetenz</h2>
          <p style="font-size: 17px; color: #dedddd">
            Im Tiergesundheitszentrum Andrea Bachem steht die ganzheitliche Gesundheit deines Tieres im Mittelpunkt.
            Unsere Praxis in Erftstadt bietet individuelle Therapieansätze für Hunde und Pferde, die auf den
            neuesten Erkenntnissen der Tierchiropraktik, Tierosteopathie und Tierphysiotherapie basieren.
            <br><br>
            Als zertifizierte Therapeutin für den Bewegungsapparat behandle ich gezielt Beschwerden wie Arthrose,
            Spondylose, Bandscheibenvorfälle, Lahmheiten, sowie Bewegungseinschränkungen
            und Haltungsprobleme. Dabei lege ich großen Wert auf eine fundierte Anamnese und eine individuell abgestimmte Behandlung.
          </p>

          <h3 class="text-white mt-3">Individuelle Behandlung statt Schema F</h3>
          <p style="font-size: 17px; color: #dedddd">
            Jeder Hund und jedes Pferd bringt seine eigene Geschichte mit. Deshalb wird jede Chiropraktik-Sitzung,
            jede osteopathische Behandlung und jede physiotherapeutische Maßnahme individuell geplant und durchgeführt.
            Unsere manuelle Therapie verfolgt das Ziel, Blockaden zu lösen, die Beweglichkeit zu verbessern und Schmerzen nachhaltig zu lindern.
          </p>
          <h3 class="text-white mt-3">Ernährungsberatung – der unterschätzte Heilungsweg</h3>
          <p style="font-size: 17px; color: #dedddd">
            Auch die Ernährung deines Tieres spielt eine zentrale Rolle für dessen Gesundheit.
            Im Rahmen unserer Ernährungsberatung analysieren wir bestehende Futterrationen und zeigen dir,
            wie du die Ernährung deines Vierbeiners gezielt optimieren kannst – egal ob bei chronischen Entzündungen, Hautproblemen oder Gewichtsmanagement.
          </p>
          <h3 class="text-white mt-3">Vertrauen, Empathie und Fachwissen</h3>
          <p style="font-size: 17px; color: #dedddd">
            Als erfahrene Therapeutin liegt mir nicht nur das körperliche, sondern auch das seelische Wohl deines Tieres am Herzen.
            Ich arbeite mit viel Einfühlungsvermögen und Geduld, um deinem Tier eine angenehme Behandlung zu ermöglichen – in einer
            ruhigen und vertrauensvollen Atmosphäre. Tiergesundheit beginnt mit Vertrauen.
          </p>
          <h3 class="text-white mt-3">Jetzt Termin im Tiergesundheitszentrum vereinbaren</h3>
          <p style="font-size: 17px; color: #dedddd">
            Du möchtest einen Termin in unserem Tiergesundheitszentrum in Erftstadt vereinbaren?
            Dann nutze jetzt unser Kontaktformular oder rufe direkt an. Gemeinsam finden wir den passenden Therapieansatz
            für deinen vierbeinigen Begleiter.
            <br><br>
            Andrea Bachem – <em>Ihre Ansprechpartnerin für Tiergesundheit mit Herz und Verstand</em>.
          </p>
        </div>
      </v-col>

    </v-row>

    <!-- Termin-Button -->
      <v-row class="mt-n3">
        <v-col cols="12" class=" d-flex justify-center">
      <v-btn style="background-color: #0082c2; color: #dedddd" @click="dialog = true">
        Termin Vereinbaren
      </v-btn>

        </v-col>
        <v-col cols="12" class="mt-n4 d-flex justify-center">
          <v-btn style="background-color: #0082c2; color: #dedddd" @click="dialog1 = true">
            newslatter abonieren
          </v-btn>

        </v-col>
      </v-row>


    <!-- Termin-Dialog -->
    <v-dialog v-model="dialog" scrim="black" width="95%">
      <v-card class="pa-5 dialogBackground" style="background-color: rgb(205,205,205)">
        <h2 class="text-center">Ihre Anliegen sind uns wichtig!</h2>
        <p class="text-center mt-2" style="font-size: 14px">
          Zögern Sie nicht, unser Kontaktformular zu nutzen, um mit unserem Tiergesundheitszentrum in Verbindung zu treten.
          <br><br>
          Bitte beachten: Termine müssen mindestens 36 Stunden im Voraus abgesagt werden. Andernfalls behalten wir uns vor, den Termin in Rechnung zu stellen.
        </p>


        <v-text-field v-model="name" label="Name" variant="underlined"/>
        <v-text-field v-model="email" label="Email" variant="underlined"/>
        <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
        <v-textarea v-model="text" label="Nachricht" variant="underlined"/>


        <v-row class="mt-4">
          <v-col cols="6">
            <v-btn block @click="create" :loading="loading">Senden</v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block @click="dialog = false">Abbrechen</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" scrim="black" width="95%">
      <v-card class="pa-5 dialogBackground" style="background-color: rgb(205,205,205)">
        <v-row class="mt-4">
          <v-col cols="12">
            <form class="layout_form cr_form cr_font" action="https://seu2.cleverreach.com/f/430331-415442/wcs/" method="post" target="_blank">
              <div class="cr_body cr_page cr_font formbox" style="background-color: transparent !important;">
                <div class="editable_content" style="text-align:left;background-color: transparent !important;">
                  <div id="9467951" rel="email" class="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave" style="margin-bottom:0;">
                    <div class="cr_form-inputgroup cr_form-inputgroup--typeemail">
                      <label for="text9467951">Newslatter abonieren</label>
                      <input class="cr_form-input" type="email" id="text9467951" name="email" value="" placeholder="name@example.com" style="width:100%;">
                    </div>
                  </div>
                  <div id="9467953" rel="button" class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable  submit_container">
                    <button type="submit" class="cr_form-block cr_button">Abonieren</button>
                  </div>
                </div>
                <noscript><a href="http://www.cleverreach.de">www.CleverReach.de</a></noscript>
              </div>


            </form>
          </v-col>
          <v-col cols="12">
            <v-btn style="background-color: #3e3d3d ; color: white" block @click="dialog1 = false">Abbrechen</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- Kontakt-Infos -->
    <div style="position:absolute; bottom: 0px; width: 100%">
      <div style="background-color: #0082c2; padding: 10px 0">
        <v-row class="ma-0 justify-center">
          <v-col cols="11" class="d-flex justify-center" >
            <v-row class="justify-center align-center text-center"  style="gap: 50px">
              <a href="tel:+4917806915915">
                <Icon icon="solar:phone-broken" style="font-size: 24px; color: white; cursor: pointer"/>
              </a>
              <a href="mailto:andreabachem83@gmail.com">
                <Icon icon="ic:outline-mail" style="font-size: 24px; color: white; cursor: pointer"/>
              </a>
              <a rel="noopener" href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280338,6.7222716,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47bf3d9b8e9b9ba3:0xf038ba0f5709dcf2!2m2!1d6.8046719!2d50.8280628!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                <Icon icon="ic:outline-place" style="font-size: 24px; color: white; cursor: pointer"/>
              </a>
            </v-row>
          </v-col>
        </v-row>
      </div>

      <!-- Footer -->
      <footer class="d-flex justify-center align-center mt-auto" style="width: 100%; flex-wrap: wrap; background-color: #0082c2; padding-bottom: 20px">
        <NuxtLink to="/impressum" class="mx-2 text-white link" style="font-size: 12px">Impressum</NuxtLink>
        <span class="text-white">|</span>
        <NuxtLink to="/admin" class="mx-2 text-white link" style="font-size: 12px">Verwaltung</NuxtLink>
        <span class="text-white">|</span>
        <NuxtLink to="/datenschutz" class="mx-2 text-white link" style="font-size: 12px">Datenschutz</NuxtLink>
        <span class="text-white mt-n1">|</span>

        <NuxtLink to="/ueberuns" class="mx-2 text-white link" >
          Über Uns
        </NuxtLink>
        <a href="/Video" aria-label="YouTube" class="mx-2" style="color: red; font-size: 30px">
          <Icon icon="grommet-icons:youtube" />
        </a>
        <a href="https://www.instagram.com/andreabachem?..." target="_blank" rel="noopener" class="mx-2" style="font-size: 30px">
          <Icon icon="skill-icons:instagram" />
        </a>
      </footer>
    </div>

  </div>

</template>



<script setup>
if (process.client) {
  function loadjQuery(src, callback) {
    const n = document.createElement("script")
    n.setAttribute("src", src)
    n.onload = callback
    n.onreadystatechange = function () {
      if (this.readyState === "complete" || this.readyState === "loaded") {
        callback()
      }
    }
    document.head.appendChild(n)
  }

  function main() {
    const $cr = jQuery.noConflict()
    let old_src

    $cr(document).ready(function () {
      // dein kompletter jQuery-Code hier …
    })

    function captcha_reload() {
      const timestamp = new Date().getTime()
      $cr("div[rel='captcha'] img:not(.captcha2_reload)")
          .attr("src", "")
          .attr("src", old_src + "?t=" + timestamp)
      return false
    }
  }

  if (typeof window.jQuery === "undefined") {
    loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js", main)
  } else {
    main()
  }
}


useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Tiergesundheit Andrea Bachem Chiropraktik & Osteopathie',
  link: [
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
  ],
  meta: [
    {
      name: 'description',
      content:
          'Tiergesundheitszentrum Andrea Bachem: Chiropraktik, Osteopathie & Ernährungsberatung ganzheitliche Therapie für dein Tier.',
    },
    {
      property: 'og:title',
      content: 'Leistungen | Tiergesundheitszentrum Andrea Bachem – Erftstadt'
    },
    {
      property: 'og:image', content: 'https://tier-gesundheitszentrum.com/favicon.png'
    },

    {
      property: 'og:description',
      content: 'Ganzheitliche Tiergesundheit durch fundierte Methoden: Jetzt mehr über unsere Leistungen für Hund, Katze & Pferd erfahren.'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'keywords',
      content:
          'Tiergesundheitszentrum, Tierchiropraktik, Tierosteopathie, Physiotherapie Tiere, Ernährungsberatung Hund Katze Pferd, Andrea Bachem, Tiertherapie Erftstadt',
    },
  ],
});

</script>
<script>
import {useScreenStore} from "~/stores/screen.js";
import {Icon} from '@iconify/vue';

export default {
  name: "Startseite",

  components: {
    Icon,
  },
  data() {
    return {dialog1: false,
      loading: false,
      name: '',
      email: '',
      telefonnummer: '',
      text: '',
      isHovered: false,
      dialog: false,
    };
  },
  computed: {
    wide() {
      const screenStore = useScreenStore();
      return screenStore.wide;
    },
    desktop() {
      const screenStore = useScreenStore();
      return screenStore.desktop;
    },
    mobile() {
      const screenStore = useScreenStore();
      return screenStore.mobile;
    },
    tablet() {
      const screenStore = useScreenStore();
      return screenStore.tablet;
    },
    tabletHorizontal() {
      const screenStore = useScreenStore();
      return screenStore.tabletHorizontal;
    },
  },

  mounted() {

  },
  methods: {
    async create() {
      try {
        console.log('[create] Sende Kontaktanfrage…');

       var response = await $fetch('https://tier-gesundheitszentrum.com:8080/auth/kontaktaufnahme', {
          method: 'POST',
          body: {
            email: this.email,
            telefonnummer: this.telefonnummer,
            name: this.name,
            text: this.text,
          }
        });

        console.log('[create] Anfrage erfolgreich gesendet. Starte E-Mail-Versand…',response);
        await this.sendEmail();

        console.log('[create] Felder werden zurückgesetzt.');
        this.email = null;
        this.telefonnummer = null;
        this.text = null;

        console.log('[create] Vorgang abgeschlossen.');
      } catch (e) {
        console.error('[create] Fehler beim Absenden der Anfrage:', e);
        alert("Bitte füllen Sie alle Felder aus.");
      }
    },

    async sendEmail() {
      this.loading = true;
      console.log('[sendEmail] Starte E-Mail-Versand…');

      if (this.email !== '' && this.name !== '') {
        try {
          // E-Mail an Andrea
          const responseAdmin = await $fetch('https://fastglobeit.de:8081/auth/sendMailAsHTML', {
            method: 'POST',
            body: {
              to: 'andreabachem83@gmail.com',
              subject: 'Neue Kontaktanfrage gestellt',
              htmlText: `
              <div>
                <h3>Hallo Andrea,</h3>
                <p>
                  Es wurde eine neue Kontaktanfrage gestellt. Weitere Details können Sie unter folgendem Link einsehen:
                  <a href="https://tier-gesundheitszentrum.com/admin/">Zur Verwaltung</a>
                </p>
                <br>
                <p>
                  Mit freundlichen Grüßen<br>
                  Ihr FastGlobeIT-Team
                </p>
                <i>Diese E-Mail wurde automatisch erzeugt.</i>
              </div>
            `
            }
          });

          console.log('[sendEmail] E-Mail an Andrea gesendet:', responseAdmin);

          // Bestätigung an Absender
          const responseUser = await $fetch('https://fastglobeit.de:8081/auth/sendMailAsHTML', {
            method: 'POST',
            body: {
              to: this.email,
              subject: 'Im Auftrag des Tier-Gesundheitszentrums: Ihre Kontaktanfrage',
              htmlText: `
              <div>
                <h3>Hallo ${this.name}</h3>
                <p>
                  Ihre Kontaktanfrage ist bei uns eingegangen. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
                <p>
                  Bei weiteren Problemen oder Fragen können Sie sich gerne unter folgender E-Mail-Adresse melden:
                  <a href="mailto:andreabachem83@gmail.com">andreabachem83@gmail.com</a>
                </p>
                <br>
                <p>
                  Mit freundlichen Grüßen<br>
                  Ihr FastGlobeIT-Team<br>
                  Im Auftrag von Andrea Bachem
                </p>
                <i>Diese E-Mail wurde automatisch erzeugt.</i>
              </div>
            `
            }
          });

          console.log('[sendEmail] Bestätigungs-E-Mail an Nutzer gesendet:', responseUser);

          // Rücksetzen nach erfolgreicher E-Mail
          this.name = 'Vielen Dank für Ihre Anfrage.';
          this.email = '';
          this.handynummer = '';

          console.log('[sendEmail] E-Mail-Versand abgeschlossen.');
        } catch (e) {
          console.error('[sendEmail] Fehler beim E-Mail-Versand:', e);
        }
      } else {
        console.warn('[sendEmail] Fehlende Pflichtfelder: email oder name.');
      }

      this.loading = false;
    }
  }

};


</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit
}

.tab-card {
  height: 85vh;

  background-color: transparent;

}

.text {
  text-align: justify;
  font-size: 15px;
}

.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}

.logo {
  background-image: url("@/assets/Logo2.png");
  background-size: cover;
  width: 372px;
  height: 165px;
}

.dialogBackground {
  background-image: url("@/assets/bg_black2_11zon.webp");
  background-size: cover;
}

.background-impressum {

  background-image: url("@/assets/paper.webp");
  background-size: cover;

}

.background {
  background-image: url('@/assets/black.webp');
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding-bottom: 150px;
}
.footer-link {
  font-size: 12px;
  color: white;
  text-decoration: none;
  margin: 0 8px;
}


.info {
  background-color: rgba(0, 130, 194, 0.82);
  min-height: 120px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border-left: rgba(255, 255, 255, 0.5) solid 1px;
  border-top: rgba(255, 255, 255, 0.5) solid 1px;

}

.kontaktformular {
  background-color: rgba(242, 243, 243, 0.39);
  backdrop-filter: blur(3px);
  border: solid 2px black;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.container1 {
  background-color: rgb(238, 238, 238);

  border: 2px solid black;
  padding: 20px;

  overflow: hidden;
  border-radius: 5px;
  transform-origin: -0px 0px;
}

.image {
  float: left; /* Float links für das Bild */
  margin-right: 20px; /* Abstand zum Text rechts vom Bild */
}

.buchBG {
  background-image: url("@/assets/blattBg.png");
  background-size: cover;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.34);
}

p {
  font-size: 10px;
}

.chirosiegel {
  background-image: url("@/assets/chiroSiegel.webp");
  background-size: cover;
  height: 70px;
  width: 70px;
}

.chirosiegel1 {
  background-image: url("@/assets/osteoSiegel.png");
  background-size: cover;
  height: 150px;
  width: 150px;
  margin-right: 60px;

}

.chirosiegel2 {
  background-image: url("@/assets/physioSiegel.png");
  background-size: cover;
  height: 30px;
  width: 170px;

}

a:focus {
  outline: 2px solid blue;
}
</style>



<style>
* {box-sizing: border-box;}
.cr-mail-responsive, .cr-mail-responsive * {box-sizing: unset;}
.cr_site{margin:0;padding:75px 0 0 0;text-align:center;background-color:#eeeeee;}
.cr_font{font-size: 14px;font-family: Arial;}
.cr_page{width: 100% !important;max-width:640px}
.cr_body{line-height:150%;font-family:Helvetica;font-size:12px;color: transparent;}
.cr_body h2, .cr_header h2{font-size:22px;line-height:28px;margin:0 0 10px 0;}
.cr_body h1, .cr_header h2{font-size:28px;margin-bottom:15px;padding:0;margin-top:0;}
.wrapper, .cr_page{margin:0 auto 10px auto;text-align:left;}
.cr_header{text-align:center;background: transparent !Important;}
.cr_header img {max-width: 100%;}
.cr_body label, .cr_body .label{float:none;clear:both;display:inline-block;width:auto;margin-top:8px;text-align:left;font-weight:bold;position:relative;}
.cr_body .no-label{font-weight: normal;}
.cr_body #editable_content{padding:20px; background-color: transparent !important;}
.editable-content {padding:20px; background-color: transparent !important;}
.cr_button{display:inline-block;font-family:'Helvetica', Arial, sans-serif;width:auto;white-space:nowrap;height:32px;margin:5px 0;padding:0 22px;text-decoration:none;text-align:center;font-weight:bold;font-style:normal;font-size:15px;line-height:32px;cursor:pointer;border:0;-moz-border-radius:4px;border-radius:4px;-webkit-border-radius:4px;vertical-align:top;}
.cr_button{background-color:#333;color:#ffffff;}
.cr_button:hover,.cr_button-small:hover{opacity:0.7;filter:alpha(opacity=70);}
.powered{padding:20px 0;width:560px;margin:0 auto;}
.cr_ipe_item label{line-height:150%;font-size:14px;}
.cr_ipe_item textarea{background: none repeat scroll 0 0 #ffffff;border-radius:3px;border: 1px solid #ccc;font-family: Helvetica;font-size: 16px;}
.cr_ipe_item input{background: none repeat scroll 0 0 #ffffff;border-radius:3px;border: 1px solid #ccc;padding: 12px;font-family: Helvetica;font-size: 16px;}
.cr_ipe_item select{background: none repeat scroll 0 0 #ffffff;border-radius:3px;border: 1px solid #ccc;padding: 12px !Important;display: block;margin: 0;padding: 5px;width: 100%;font-family: Helvetica;font-size: 16px;}
.cr_ipe_item input.cr_ipe_radio, input.cr_ipe_checkbox{-moz-binding: none;-moz-box-sizing: border-box;background-color: -moz-field !important;border: 2px inset ThreeDFace !important;color: -moz-fieldtext !important;cursor: default;height: 13px;padding: 0 !important;width: 13px;}
.cr_ipe_item input.cr_ipe_radio{-moz-appearance: radio;border-radius: 100% 100% 100% 100% !important;margin: 3px 3px 0 5px;}
.cr_ipe_item{margin: 0px 10px; padding: 0px 10px;}
.submit_container{text-align:center}
.cr_ipe_item.inactive{display:none;}
.imprint{font-size:0.8em;}
.cr_captcha{padding-left:130px;}
.cr_error{font-size:1.1em;padding:10px;}
.clever_form_error{background-color:#f99; color:#000; border:1px solid #f22 !important}
.clever_form_note {margin:26px 0 0 3px;position:absolute;display:inline; padding: 2px 4px; font-weight:bold;background-color:#f2ecb5; color:#000; font-size:12px !important;  }
.cr_form-flex{display: flex;}
.cr_form-flex>.cr_form-inputgroup{flex-grow:1;margin-right: 5px;}
.cr_form-flex>.cr_form-inputgroup:last-child{margin-right: 0px;}
.cr_form-flex input{width:100%;}

.cr_site {background-color:#eee;}
.cr_header {color:#000000;}
.cr_body {background-color:#ffffff;font-size:12px;color:#000000;}
.cr_hr {background-color:#ccc;}
.cr_site a {color:#0084ff;}
.imprint{color:#000;}

</style>


<style id="style">
.cr_site {background-color:#eee;}
.cr_header {color:#000000;}
.cr_body {background-color:#ffffff;font-size:12px;color:#000000;}
.cr_hr {background-color:#ccc;}
.cr_site a {color:#0084ff;}
.imprint {color:#000;}
.cr_page {width:auto;max-width:350px;}

</style>