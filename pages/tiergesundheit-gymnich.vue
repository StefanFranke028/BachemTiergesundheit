<template>
  <div v-if="desktop || tabletHorizontal" class="background" style="overflow-y: scroll">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="12">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex ma-0 justify-center " style="width: 100%;">
      <v-col cols="11">
        <v-card class="pa-7 background-impressum" style="overflow: auto; max-height: 70vh; width: 100%;">
          <article itemscope itemtype="https://schema.org/Service">
            <meta itemprop="serviceType" content="Tierchiropraktik, Tierosteopathie, Tierphysiotherapie, Ernährungsberatung">
            <meta itemprop="areaServed" content="Gymnich">
            <div itemprop="provider" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="Tiergesundheitszentrum Andrea Bachem">
              <meta itemprop="addressLocality" content="Erftstadt">
            </div>
            <h1 itemprop="name" class="line mt-2">Tiergesundheit Gymnich – Chiropraktik, Osteopathie & ganzheitliche Betreuung</h1>
            <p itemprop="description">
              Diese Seite ist für Tierhalter aus Gymnich, die sich über ganzheitliche Tiergesundheit Gymnich informieren möchten.
              Im Tiergesundheitszentrum Andrea Bachem steht das Wohlbefinden deines Tieres im Fokus. Unsere Praxis in Erftstadt
              bietet maßgeschneiderte Therapieansätze für Hunde, Pferde und Katzen – von Tierchiropraktik und Tierosteopathie bis
              Tierphysiotherapie und Ernährungsberatung. Ziel ist es, Schmerzen zu reduzieren, Beweglichkeit zu fördern und die
              Lebensqualität nachhaltig zu verbessern. Für Tiergesundheit Gymnich und Tiertherapie Gymnich setzen wir auf eine
              gründliche Anamnese und einen Behandlungsplan, der exakt auf dein Tier abgestimmt ist.
            </p>

          <h2 class="line mt-4">Tierchiropraktik Gymnich – Bewegungsfreiheit und Nervensystem im Gleichgewicht</h2>
          <p>
            Die Tierchiropraktik betrachtet Bewegungsapparat und Nervensystem als Einheit und setzt auf gezielte Impulse an der
            Wirbelsäule. Blockaden können Muskulatur, Organe und sogar das Verhalten beeinflussen. Mit präzisen, sanften
            Justierungen werden Gelenke mobilisiert und die natürliche Beweglichkeit gefördert. Viele Tierhalter berichten nach
            wenigen Terminen von mehr Vitalität, weniger Schmerzen und einem geschmeidigeren Bewegungsablauf – besonders bei
            sportlich geführten Pferden oder aktiven Hunden aus Gymnich und Umgebung. Mehr erfahren zur <NuxtLink to="/chiropraktik" title="Mehr zur Chiropraktik für Tiere" class="hyperlink">Chiropraktik</NuxtLink>
          </p>
          <p>
            Häufige Gründe für eine chiropraktische Behandlung sind Rückenbeschwerden, Arthrose, Lahmheiten,
            Koordinationsprobleme, Spondylose, Muskelverspannungen, Bandscheibenprobleme, Leistungsabfall, Taktunreinheiten,
            Schmerzreaktionen beim Satteln oder Heben sowie auffälliges Verhalten wie Aggression oder Rückzug. Die
            Tierchiropraktik eignet sich für alle Altersstufen vom Welpen oder Fohlen bis zum Senior und wird stets an die
            Anatomie und Bedürfnisse des jeweiligen Tieres angepasst.
          </p>

          <h2 class="line mt-4">Tierosteopathie Gymnich – sanfte Impulse für die Selbstheilung</h2>
          <p>
            Osteopathie ist eine besonders sanfte, ganzheitliche Behandlungsmethode, die die körpereigenen
            Selbstheilungskräfte deines Tieres anregen soll. Mit gezielten manuellen Techniken werden Blockaden, Verspannungen
            und Bewegungseinschränkungen ertastet und gelöst – ohne Medikamente. Im Mittelpunkt steht nicht nur das Symptom,
            sondern das Zusammenspiel von Struktur, Funktion und Energie im gesamten Organismus.
          </p>
          <p>
            Die Methode kann bei Bewegungseinschränkungen, Rücken- und Gelenkproblemen, muskulären Verspannungen,
            Verdauungsproblemen und Verhaltensauffälligkeiten unterstützen. Die Behandlung ist in der Regel schmerzfrei und
            eignet sich für Hunde und Pferde aller Altersgruppen – vom Welpen über das Sportpferd bis zum Senior. Als Ergänzung
            zur Schulmedizin kann sie helfen, die Lebensqualität deines Tieres spürbar zu steigern. Mehr erfahren zur
            <NuxtLink to="/osteopathie" title="Mehr zur Tierosteopathie" class="hyperlink">Osteopathie</NuxtLink>.
          </p>

          <h2 class="line mt-4">Service Gymnich – ganzheitliche Betreuung im Tiergesundheitszentrum</h2>
          <p>
            Unser Service verbindet traditionelles Erfahrungswissen mit moderner Tiertherapie. Wir setzen auf natürliche,
            schonende Methoden, die Körper, Geist und Seele deines Tieres in Balance bringen. Neben Chiropraktik und Osteopathie
            gehören manuelle Therapie, Tierphysiotherapie und eine individuell abgestimmte Ernährungsberatung zu den zentralen
            Bausteinen. Ergänzend bieten wir mobile Tierbehandlungen an – ideal für Tiere, die den Transport schlecht vertragen
            oder zu Hause entspannter sind. Für die Anfahrt fällt eine Pauschale an, abhängig vom Standort. Mehr erfahren zu
            unseren <NuxtLink to="/service" title="Mehr zum Service" class="hyperlink">Leistungen</NuxtLink>.
          </p>
          <p>
            Eine interdisziplinäre Zusammenarbeit mit Tierärzten, Hufschmieden und weiteren Therapeuten sorgt für eine
            bestmögliche Versorgung. Fachliche Kompetenz, langjährige Erfahrung und ein achtsamer Umgang mit Tier und Mensch
            zeichnen unsere Praxis aus. Wir nehmen uns Zeit, hören zu und richten jede Behandlung individuell aus – auch für
            Tierhalter aus Gymnich, die eine ganzheitliche Betreuung in der Nähe suchen.
          </p>

          <h2 class="line mt-4">Preise Gymnich – transparent, fair und individuell</h2>
          <p>
            Die Preise richten sich nach dem zeitlichen Aufwand und der jeweiligen Tierart. Vor der ersten Behandlung führen wir
            ein ausführliches Anamnesegespräch, um die passende Therapie festzulegen. Gerne beraten wir dich auch telefonisch zu
            individuellen Anliegen. Du möchtest mehrere Leistungen kombinieren oder hast besondere Anforderungen? Sprich uns an –
            wir erstellen dir ein passendes Paket. Mehr erfahren zu unseren
            <NuxtLink to="/preise" title="Mehr zu Preisen und Leistungen">Preisen</NuxtLink>.
          </p>

          <h2 class="line mt-4">Andrea Bachem Gymnich – Erfahrung, Qualifikation und Tierwohl</h2>
          <p>
            Andrea Bachem ist staatlich geprüfte Tierarzthelferin und hat sich durch zahlreiche Aus- und Weiterbildungen auf die
            Gesundheit und das Wohlbefinden von Tieren spezialisiert. Zu ihren Qualifikationen zählen unter anderem
            Tierphysiotherapie, Tierosteopathie, manuelle Therapie sowie Dorntherapie und Chiropraktik. Regelmäßige Fortbildungen
            und ein klarer Fokus auf das Tierwohl bilden die Grundlage jeder Behandlung.
          </p>

          <section class="faq" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="line mt-4">FAQ Gymnich – häufige Fragen zur Tiergesundheit</h2>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Eignet sich Tierchiropraktik in Gymnich für jedes Alter?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Ja. Die chiropraktische Behandlung wird individuell angepasst und ist für Welpen, junge Tiere, Sportpferde
                  sowie Senioren geeignet. Ziel ist es, Beweglichkeit und Wohlbefinden nachhaltig zu fördern.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">In welchen Fällen ist Osteopathie für Tiere aus Gymnich sinnvoll?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Osteopathie kann unterstützen, wenn Bewegungseinschränkungen, Verspannungen oder Verdauungsprobleme bestehen.
                  Sie ist sanft, schmerzfrei und eignet sich sowohl für Hunde als auch für Pferde.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Was beinhaltet der Service für Tierhalter aus Gymnich?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Unser Service umfasst Chiropraktik, Osteopathie, Tierphysiotherapie, manuelle Therapie und Ernährungsberatung.
                  Zusätzlich bieten wir bei Bedarf eine mobile Tierbehandlung an.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wie setzen sich die Behandlungskosten zusammen?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Kosten richten sich nach Zeitaufwand und Tierart. Vor der ersten Behandlung findet ein ausführliches
                  Anamnesegespräch statt, um den passenden Therapieplan festzulegen.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wo findet die Behandlung für Gymnich statt?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Behandlungen erfolgen in der Praxis in Erftstadt. Für Tiere, die den Transport schlecht vertragen, ist
                  eine mobile Behandlung möglich – abhängig vom Standort.
                </p>
              </div>
            </details>
          </section>
          </article>
        </v-card>
      </v-col>
    </v-row>

    <!-- Termin-Dialog -->
    <v-dialog v-model="dialog" scrim="black" width="1200">
      <template v-slot:activator="{ props }">
        <div class="d-flex justify-center">
          <v-btn class="text-center" style="background-color: #0082c2; color: #dedddd" v-bind="props">
            Termin Vereinbaren
          </v-btn>
        </div>
      </template>
      <v-card
        class="mx-auto my-12 pa-5 dialogBackground"
        style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
        width="1200"
      >
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
                          <label for="text9467951">Newsletter abonnieren</label>
                          <input class="cr_form-input" type="email" id="text9467951" name="email" value="" placeholder="name@example.com" style="width:100%;">
                        </div>
                      </div>
                      <div id="9467953" rel="button" class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable  submit_container">
                        <button type="submit" class="cr_form-block cr_button">Abonnieren</button>
                      </div>
                    </div>
                    <noscript><a href="http://www.cleverreach.de" title="CleverReach">www.CleverReach.de</a></noscript>
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
                    <a href="tel:01786915915" title="Anrufen: 01786915915">
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
                    <a href="mailto:andreabachem83@gmail.com" title="E-Mail an Andrea Bachem" style="text-decoration: none" rel="noopener" target="_blank">
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
                       title="Anfahrt zu Peter-May-Straße 47, Erftstadt"
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
  </div>

  <div v-if="mobile || tablet" class="background" style="padding-top: 20px; overflow-y: scroll">
    <HeadermobileComponent v-if="mobile || tablet"></HeadermobileComponent>
    <v-row class="justify-center mx-0 mt-2">
      <v-col cols="11">
        <v-card class="pa-6" style="overflow: auto; max-height: 70vh; width: 100%; background-color: rgba(0,0,0,0.22)">
          <article itemscope itemtype="https://schema.org/Service">
            <meta itemprop="serviceType" content="Tierchiropraktik, Tierosteopathie, Tierphysiotherapie, Ernährungsberatung">
            <meta itemprop="areaServed" content="Gymnich">
            <div itemprop="provider" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="Tiergesundheitszentrum Andrea Bachem">
              <meta itemprop="addressLocality" content="Erftstadt">
            </div>
            <h1 itemprop="name" class="line mt-2">Tiergesundheit Gymnich – Chiropraktik, Osteopathie & ganzheitliche Betreuung</h1>
            <p itemprop="description">
              Diese Seite ist für Tierhalter aus Gymnich, die sich über ganzheitliche Tiergesundheit Gymnich informieren möchten.
              Im Tiergesundheitszentrum Andrea Bachem steht das Wohlbefinden deines Tieres im Fokus. Unsere Praxis in Erftstadt
              bietet maßgeschneiderte Therapieansätze für Hunde, Pferde und Katzen – von Tierchiropraktik und Tierosteopathie bis
              Tierphysiotherapie und Ernährungsberatung. Ziel ist es, Schmerzen zu reduzieren, Beweglichkeit zu fördern und die
              Lebensqualität nachhaltig zu verbessern. Für Tiergesundheit Gymnich und Tiertherapie Gymnich setzen wir auf eine
              gründliche Anamnese und einen Behandlungsplan, der exakt auf dein Tier abgestimmt ist.
            </p>

          <h2 class="line mt-4">Tierchiropraktik Gymnich – Bewegungsfreiheit und Nervensystem im Gleichgewicht</h2>
          <p>
            Die Tierchiropraktik betrachtet Bewegungsapparat und Nervensystem als Einheit und setzt auf gezielte Impulse an der
            Wirbelsäule. Blockaden können Muskulatur, Organe und sogar das Verhalten beeinflussen. Mit präzisen, sanften
            Justierungen werden Gelenke mobilisiert und die natürliche Beweglichkeit gefördert. Viele Tierhalter berichten nach
            wenigen Terminen von mehr Vitalität, weniger Schmerzen und einem geschmeidigeren Bewegungsablauf – besonders bei
            sportlich geführten Pferden oder aktiven Hunden aus Gymnich und Umgebung. Mehr erfahren zur <NuxtLink to="/chiropraktik" title="Mehr zur Chiropraktik für Tiere" class="hyperlink">Chiropraktik</NuxtLink>
          </p>
          <p>
            Häufige Gründe für eine chiropraktische Behandlung sind Rückenbeschwerden, Arthrose, Lahmheiten,
            Koordinationsprobleme, Spondylose, Muskelverspannungen, Bandscheibenprobleme, Leistungsabfall, Taktunreinheiten,
            Schmerzreaktionen beim Satteln oder Heben sowie auffälliges Verhalten wie Aggression oder Rückzug. Die
            Tierchiropraktik eignet sich für alle Altersstufen vom Welpen oder Fohlen bis zum Senior und wird stets an die
            Anatomie und Bedürfnisse des jeweiligen Tieres angepasst.
          </p>

          <h2 class="line mt-4">Tierosteopathie Gymnich – sanfte Impulse für die Selbstheilung</h2>
          <p>
            Osteopathie ist eine besonders sanfte, ganzheitliche Behandlungsmethode, die die körpereigenen
            Selbstheilungskräfte deines Tieres anregen soll. Mit gezielten manuellen Techniken werden Blockaden, Verspannungen
            und Bewegungseinschränkungen ertastet und gelöst – ohne Medikamente. Im Mittelpunkt steht nicht nur das Symptom,
            sondern das Zusammenspiel von Struktur, Funktion und Energie im gesamten Organismus.
          </p>
          <p>
            Die Methode kann bei Bewegungseinschränkungen, Rücken- und Gelenkproblemen, muskulären Verspannungen,
            Verdauungsproblemen und Verhaltensauffälligkeiten unterstützen. Die Behandlung ist in der Regel schmerzfrei und
            eignet sich für Hunde und Pferde aller Altersgruppen – vom Welpen über das Sportpferd bis zum Senior. Als Ergänzung
            zur Schulmedizin kann sie helfen, die Lebensqualität deines Tieres spürbar zu steigern. Mehr erfahren zur
            <NuxtLink to="/osteopathie" title="Mehr zur Tierosteopathie" class="hyperlink">Osteopathie</NuxtLink>.
          </p>

          <h2 class="line mt-4">Service Gymnich – ganzheitliche Betreuung im Tiergesundheitszentrum</h2>
          <p>
            Unser Service verbindet traditionelles Erfahrungswissen mit moderner Tiertherapie. Wir setzen auf natürliche,
            schonende Methoden, die Körper, Geist und Seele deines Tieres in Balance bringen. Neben Chiropraktik und Osteopathie
            gehören manuelle Therapie, Tierphysiotherapie und eine individuell abgestimmte Ernährungsberatung zu den zentralen
            Bausteinen. Ergänzend bieten wir mobile Tierbehandlungen an – ideal für Tiere, die den Transport schlecht vertragen
            oder zu Hause entspannter sind. Für die Anfahrt fällt eine Pauschale an, abhängig vom Standort. Mehr erfahren zu
            unseren <NuxtLink to="/service" title="Mehr zum Service" class="hyperlink">Leistungen</NuxtLink>.
          </p>
          <p>
            Eine interdisziplinäre Zusammenarbeit mit Tierärzten, Hufschmieden und weiteren Therapeuten sorgt für eine
            bestmögliche Versorgung. Fachliche Kompetenz, langjährige Erfahrung und ein achtsamer Umgang mit Tier und Mensch
            zeichnen unsere Praxis aus. Wir nehmen uns Zeit, hören zu und richten jede Behandlung individuell aus – auch für
            Tierhalter aus Gymnich, die eine ganzheitliche Betreuung in der Nähe suchen.
          </p>

          <h2 class="line mt-4">Preise Gymnich – transparent, fair und individuell</h2>
          <p>
            Die Preise richten sich nach dem zeitlichen Aufwand und der jeweiligen Tierart. Vor der ersten Behandlung führen wir
            ein ausführliches Anamnesegespräch, um die passende Therapie festzulegen. Gerne beraten wir dich auch telefonisch zu
            individuellen Anliegen. Du möchtest mehrere Leistungen kombinieren oder hast besondere Anforderungen? Sprich uns an –
            wir erstellen dir ein passendes Paket. Mehr erfahren zu unseren
            <NuxtLink to="/preise" title="Mehr zu Preisen und Leistungen">Preisen</NuxtLink>.
          </p>

          <h2 class="line mt-4">Andrea Bachem Gymnich – Erfahrung, Qualifikation und Tierwohl</h2>
          <p>
            Andrea Bachem ist staatlich geprüfte Tierarzthelferin und hat sich durch zahlreiche Aus- und Weiterbildungen auf die
            Gesundheit und das Wohlbefinden von Tieren spezialisiert. Zu ihren Qualifikationen zählen unter anderem
            Tierphysiotherapie, Tierosteopathie, manuelle Therapie sowie Dorntherapie und Chiropraktik. Regelmäßige Fortbildungen
            und ein klarer Fokus auf das Tierwohl bilden die Grundlage jeder Behandlung.
          </p>

          <section class="faq" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="line mt-4">FAQ Gymnich – häufige Fragen zur Tiergesundheit</h2>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Eignet sich Tierchiropraktik in Gymnich für jedes Alter?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Ja. Die chiropraktische Behandlung wird individuell angepasst und ist für Welpen, junge Tiere, Sportpferde
                  sowie Senioren geeignet. Ziel ist es, Beweglichkeit und Wohlbefinden nachhaltig zu fördern.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">In welchen Fällen ist Osteopathie für Tiere aus Gymnich sinnvoll?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Osteopathie kann unterstützen, wenn Bewegungseinschränkungen, Verspannungen oder Verdauungsprobleme bestehen.
                  Sie ist sanft, schmerzfrei und eignet sich sowohl für Hunde als auch für Pferde.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Was beinhaltet der Service für Tierhalter aus Gymnich?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Unser Service umfasst Chiropraktik, Osteopathie, Tierphysiotherapie, manuelle Therapie und Ernährungsberatung.
                  Zusätzlich bieten wir bei Bedarf eine mobile Tierbehandlung an.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wie setzen sich die Behandlungskosten zusammen?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Kosten richten sich nach Zeitaufwand und Tierart. Vor der ersten Behandlung findet ein ausführliches
                  Anamnesegespräch statt, um den passenden Therapieplan festzulegen.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wo findet die Behandlung für Gymnich statt?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Behandlungen erfolgen in der Praxis in Erftstadt. Für Tiere, die den Transport schlecht vertragen, ist
                  eine mobile Behandlung möglich – abhängig vom Standort.
                </p>
              </div>
            </details>
          </section>
          </article>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="justify-center mx-0">
      <v-col cols="11">
        <v-card class="pa-6 kontakt-card">
          <div itemscope itemtype="https://schema.org/Organization">
            <meta itemprop="name" content="Tiergesundheitszentrum Andrea Bachem">
            <meta itemprop="url" content="https://tier-gesundheitszentrum.com">
            <div itemprop="contactPoint" itemscope itemtype="https://schema.org/ContactPoint">
              <meta itemprop="contactType" content="customer service">
              <meta itemprop="telephone" content="+49 178 6915915">
              <meta itemprop="email" content="andreabachem83@gmail.com">
            </div>
            <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
              <meta itemprop="streetAddress" content="Peter-May-Straße 47">
              <meta itemprop="postalCode" content="50374">
              <meta itemprop="addressLocality" content="Erftstadt">
            </div>
            <h2 class="line text-center">Kontakt Gymnich & Terminvereinbarung</h2>
            <p class="text-center">
              Du bist in Gymnich und möchtest mehr über Chiropraktik, Osteopathie, Service oder Preise wissen? Melde dich gern –
              wir beraten dich persönlich und finden den passenden Therapieansatz für dein Tier.
            </p>
            <v-row class="justify-center text-center">
              <v-col cols="12">
                <div class="kontakt-icon">
                  <Icon icon="solar:phone-broken" style="font-size: 26px"/>
                </div>
                <a itemprop="telephone" href="tel:01786915915" title="Anrufen: 01786915915">01786915915</a>
              </v-col>
              <v-col cols="12">
                <div class="kontakt-icon">
                  <Icon icon="ic:outline-mail" style="font-size: 26px"/>
                </div>
                <a itemprop="email" href="mailto:andreabachem83@gmail.com" title="E-Mail an Andrea Bachem" rel="noopener" target="_blank">
                  andreabachem83@gmail.com
                </a>
              </v-col>
              <v-col cols="12">
                <div class="kontakt-icon">
                  <Icon icon="ic:outline-place" style="font-size: 26px"/>
                </div>
                <a
                  rel="noopener"
                  href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280411,6.7633927,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47bf3d9b8e9b9ba3:0xf038ba0f5709dcf2!2m2!1d6.8046778!2d50.8280484!3e0?entry=ttu"
                  title="Anfahrt zu Peter-May-Straße 47, Erftstadt"
                  target="_blank"
                >
                  Peter-May-Straße 47, 50374 Köttingen
                </a>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  title: 'Tiergesundheit Gymnich – ganzheitliche Tiertherapie | Andrea Bachem',
  meta: [
    {
      name: 'description',
      content:
        'Tiergesundheit für Gymnich: Informationen zu Chiropraktik, Osteopathie, Service und Preisen im Tiergesundheitszentrum Andrea Bachem in Erftstadt.'
    },
    {
      name: 'keywords',
      content:
        'Tiergesundheit Gymnich, Tierchiropraktik Gymnich, Tierosteopathie Gymnich, Chiropraktik Hund Pferd, Osteopathie Tiere, Tierphysiotherapie, Ernährungsberatung, Service Tiergesundheitszentrum, Preise Tiertherapie, Andrea Bachem, Erftstadt'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'author',
      content: 'Andrea Bachem'
    },
    {
      property: 'og:title',
      content: 'Tiergesundheit Gymnich – ganzheitliche Tiertherapie | Andrea Bachem'
    },
    {
      property: 'og:description',
      content:
        'Ganzheitliche Tiergesundheit für Gymnich: Chiropraktik, Osteopathie, Service und transparente Preise bei Andrea Bachem.'
    },
    {
      property: 'og:image',
      content: 'https://tier-gesundheitszentrum.com/favicon.png'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/tiergesundheit-gymnich'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/tiergesundheit-gymnich'
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
    }
  ]
});
</script>

<script>
import { useScreenStore } from "~/stores/screen.js";
import { Icon } from '@iconify/vue';

export default {
  name: 'tiergesundheit-gymnich',
  components: {
    Icon,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      name: '',
      email: '',
      telefonnummer: '',
      text: '',
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

        console.log('[create] Anfrage erfolgreich gesendet. Starte E-Mail-Versand…', response);
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
                  <a href="https://tier-gesundheitszentrum.com/admin/" title="Zur Verwaltung">Zur Verwaltung</a>
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
                  <a href="mailto:andreabachem83@gmail.com" title="E-Mail an Andrea Bachem">andreabachem83@gmail.com</a>
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
.line {
  font-family: "Montserrat", sans-serif;
  color: rgba(0, 0, 0, 0.86);
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

p,
div,
summary,
details {
  color: rgba(0, 0, 0, 0.86);
}

a {
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  color: inherit;
  cursor: pointer;
  transition: text-decoration-thickness 0.2s ease;
}

a:hover {
  text-decoration-thickness: 2px;
}

.kontakt-card a {
  display: inline-block;
  margin-top: 6px;
}

.kontakt-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
}

.kontakt-card {
  background-color: #0082c2;
}
.info {
  background-color: rgba(0, 130, 194, 0.82);
  min-height: 120px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border: 2px solid #0082c2;
  position: relative;
  overflow: visible;
}
.faq {
  margin-top: 16px;
}

.faq-item {
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  padding: 10px 14px;
  margin-top: 12px;
  background-color: rgba(0, 0, 0, 0.03);
}

.faq-question {
  cursor: pointer;
  font-weight: 600;
}

.faq-answer {
  margin-top: 8px;
}

.background {
  background-image: url("@/assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}

a:focus {
  outline: 2px solid blue;
}
</style>
