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
            <meta itemprop="areaServed" content="Köln">
            <div itemprop="provider" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="Tiergesundheitszentrum Andrea Bachem">
              <meta itemprop="addressLocality" content="Erftstadt">
            </div>
            <h1 itemprop="name" class="line mt-2">Tiergesundheit Köln – Chiropraktik, Osteopathie & Service</h1>
            <p itemprop="description">
              Diese Seite richtet sich an Tierhalter aus Köln, die sich über ganzheitliche Tiergesundheit Köln informieren möchten.
              Im Tiergesundheitszentrum Andrea Bachem steht die Gesundheit deines Tieres im Mittelpunkt. Unsere Praxis in Erftstadt
              bietet individuelle Therapieansätze für Hunde, Pferde und Katzen, die auf Tierchiropraktik, Tierosteopathie,
              Tierphysiotherapie und Ernährungsberatung basieren. Ziel ist es, Schmerzen zu lindern, Beweglichkeit zu verbessern
              und das Wohlbefinden langfristig zu stärken. Für Tiergesundheit Köln und Tiertherapie Köln setzen wir auf eine
              fundierte Anamnese und einen individuell abgestimmten Behandlungsplan – denn es gibt kein Schema F.
            </p>

          <h2 class="line mt-4">Chiropraktik Köln für Tiere – Beweglichkeit und Nervensystem im Fokus</h2>
          <p>
            Die Chiropraktik für Tiere ist eine ganzheitliche Therapieform, die den Bewegungsapparat und das Nervensystem in den
            Fokus rückt. Fehlstellungen oder Blockaden der Wirbelsäule können sich auf Muskulatur, Organe und Verhalten auswirken.
            Durch gezielte, präzise und schmerzfreie Justierungen werden Gelenke mobilisiert und die natürliche Beweglichkeit
            wiederhergestellt. Viele Tierbesitzer berichten bereits nach wenigen Behandlungen über mehr Energie, weniger Schmerzen
            und eine deutlich bessere Beweglichkeit – besonders bei sportlich geführten Pferden oder aktiven Hunden in Köln und
            Umgebung. Mehr erfahren zur <NuxtLink to="/chiropraktik" title="Mehr zur Chiropraktik für Tiere">Chiropraktik</NuxtLink>.
          </p>
          <p>
            Typische Indikationen für eine chiropraktische Behandlung sind Rückenprobleme, Arthrosen, Lahmheiten,
            Koordinationsstörungen, Spondylose, Muskelverspannungen, Bandscheibenvorfälle, Leistungsabfall, Taktunreinheiten,
            Schmerzreaktionen beim Satteln oder Heben sowie Verhaltensauffälligkeiten wie Aggression oder Rückzug. Die
            Tierchiropraktik richtet sich an alle Altersklassen vom Welpen oder Fohlen bis zum Senior und wird stets individuell
            an die Anatomie des jeweiligen Tieres angepasst.
          </p>

          <h2 class="line mt-4">Osteopathie Köln für Tiere – sanfte Impulse für Selbstheilung</h2>
          <p>
            Die Osteopathie ist eine besonders sanfte, ganzheitliche Behandlungsmethode, die darauf abzielt, die natürlichen
            Selbstheilungskräfte deines Tieres zu aktivieren. Durch gezielte manuelle Techniken werden Blockaden, Verspannungen
            und Bewegungseinschränkungen aufgespürt und gelöst – ganz ohne Medikamente. Dabei steht nicht das einzelne Symptom,
            sondern das Zusammenspiel von Struktur, Funktion und Energie im gesamten Körper im Mittelpunkt.
          </p>
          <p>
            Osteopathie kann bei Bewegungseinschränkungen, Rücken- und Gelenkproblemen, muskulären Verspannungen,
            Verdauungsstörungen und Verhaltensauffälligkeiten unterstützen. Die Behandlung ist in der Regel schmerzfrei und
            eignet sich für Hunde und Pferde aller Altersgruppen – ob Welpe, Sportpferd oder Senior. Sie ist eine wertvolle
            Ergänzung zur Schulmedizin und kann helfen, die Lebensqualität deines Tieres spürbar zu verbessern. Mehr erfahren zur
            <NuxtLink to="/osteopathie" title="Mehr zur Tierosteopathie">Osteopathie</NuxtLink>.
          </p>

          <h2 class="line mt-4">Tiergesundheitszentrum Köln Service ganzheitliche Betreuung im Tiergesundheitszentrum</h2>
          <p>
            Unser Service vereint traditionelles Wissen mit moderner Tierheilkunde. Wir setzen auf natürliche, sanfte Methoden,
            die Körper, Geist und Seele deines Tieres in Einklang bringen. Neben Chiropraktik und Osteopathie gehören manuelle
            Therapie, Tierphysiotherapie und eine individuell abgestimmte Ernährungsberatung zu den zentralen Bausteinen.
            Ergänzend bieten wir eine mobile Tierbehandlung an – ideal für Tiere, die den Transport schlecht vertragen oder sich
            in ihrer gewohnten Umgebung wohler fühlen. Für die Anfahrt fällt eine Pauschale an, abhängig vom Standort. Mehr
            erfahren zu unseren <NuxtLink to="/service" title="Mehr zum Service">Leistungen</NuxtLink>.
          </p>
          <p>
            Eine interdisziplinäre Zusammenarbeit mit Tierärzten, Hufschmieden und weiteren Therapeuten sorgt dafür, dass dein
            Tier bestmöglich versorgt wird. Fachliche Kompetenz, jahrelange Erfahrung und ein liebevoller Umgang mit Tier und
            Mensch zeichnen unsere Praxis aus. Wir nehmen uns Zeit, hören zu und gehen individuell auf die Bedürfnisse deines
            Tieres ein – auch für Tierhalter aus Köln, die eine ganzheitliche Betreuung in der Nähe suchen.
          </p>

          <h2 class="line mt-4">Preise Tiergesundheitszentrum Köln – transparent, fair und individuell</h2>
          <p>
            Unsere Preise richten sich nach dem zeitlichen Aufwand und der jeweiligen Tierart. Vor der ersten Behandlung führen
            wir ein ausführliches Anamnesegespräch durch, um die passende Therapie auszuwählen. Gerne beraten wir dich auch
            telefonisch zu individuellen Anliegen. Du möchtest mehrere Leistungen kombinieren oder hast besondere Anforderungen?
            Sprich uns an – wir erstellen dir ein passendes Paketangebot. Mehr erfahren zu unseren
            <NuxtLink to="/preise" title="Mehr zu Preisen und Leistungen">Preisen</NuxtLink>.
          </p>

          <h2 class="line mt-4">Andrea Bachem Köln – Erfahrung, Qualifikation, Tierwohl</h2>
          <p>
            Andrea Bachem ist staatlich geprüfte Tierarzthelferin und hat sich durch zahlreiche Aus- und Weiterbildungen auf die
            Gesundheit und das Wohlbefinden von Tieren spezialisiert. Zu den Qualifikationen zählen unter anderem
            Tierphysiotherapie, Tierosteopathie, manuelle Therapie sowie Dorntherapie und Chiropraktik. Stetige Fortbildung und
            ein klarer Fokus auf das Tierwohl sind die Grundlage jeder Behandlung.
          </p>

          <section class="faq" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="line mt-4">FAQ Köln – häufige Fragen zur Tiergesundheit</h2>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Ist die Tierchiropraktik in Köln für jedes Alter geeignet?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Ja. Die chiropraktische Behandlung wird individuell angepasst und ist für Welpen, junge Tiere, Sportpferde
                  sowie Senioren geeignet. Ziel ist es, Beweglichkeit und Wohlbefinden zu fördern.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wann ist Osteopathie für Tiere aus Köln sinnvoll?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Osteopathie kann helfen, wenn Bewegungseinschränkungen, Verspannungen oder Verdauungsprobleme bestehen. Sie
                  ist sanft, schmerzfrei und eignet sich sowohl für Hunde als auch für Pferde.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Welche Leistungen umfasst der Service für Tierhalter aus Köln?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Unser Service umfasst Chiropraktik, Osteopathie, Tierphysiotherapie, manuelle Therapie und Ernährungsberatung.
                  Ergänzend bieten wir bei Bedarf eine mobile Tierbehandlung an.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wie entstehen die Preise für Behandlungen?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Preise richten sich nach dem zeitlichen Aufwand und der Tierart. Vor der ersten Behandlung findet ein
                  ausführliches Anamnesegespräch statt, um den passenden Therapieplan festzulegen.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wo findet die Behandlung für Köln statt?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Behandlungen erfolgen in der Praxis in Erftstadt. Für Tiere, die den Transport schlecht vertragen, ist
                  eine mobile Behandlung möglich, abhängig vom Standort.
                </p>
              </div>
            </details>
          </section>
          </article>
        </v-card>
      </v-col>
    </v-row>

 <!-- Termin-Button -->
      <v-row class="mt-n3">
        <v-col cols="12" class=" d-flex justify-center">
      <v-btn style="background-color: #0082c2; color: #dedddd" @click="dialog = true">
        Termin Vereinbaren
      </v-btn>
        </v-col>
      </v-row>

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
            <meta itemprop="areaServed" content="Köln">
            <div itemprop="provider" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="Tiergesundheitszentrum Andrea Bachem">
              <meta itemprop="addressLocality" content="Erftstadt">
            </div>
            <h1 itemprop="name" class="line mt-2">Tiergesundheit Köln – Chiropraktik, Osteopathie & Service</h1>
            <p itemprop="description">
              Diese Seite richtet sich an Tierhalter aus Köln, die sich über ganzheitliche Tiergesundheit Köln informieren möchten.
              Im Tiergesundheitszentrum Andrea Bachem steht die Gesundheit deines Tieres im Mittelpunkt. Unsere Praxis in Erftstadt
              bietet individuelle Therapieansätze für Hunde, Pferde und Katzen, die auf Tierchiropraktik, Tierosteopathie,
              Tierphysiotherapie und Ernährungsberatung basieren. Ziel ist es, Schmerzen zu lindern, Beweglichkeit zu verbessern
              und das Wohlbefinden langfristig zu stärken. Für Tiergesundheit Köln und Tiertherapie Köln setzen wir auf eine
              fundierte Anamnese und einen individuell abgestimmten Behandlungsplan – denn es gibt kein Schema F.
            </p>

          <h2 class="line mt-4">Chiropraktik Köln für Tiere – Beweglichkeit und Nervensystem im Fokus</h2>
          <p>
            Die Chiropraktik für Tiere ist eine ganzheitliche Therapieform, die den Bewegungsapparat und das Nervensystem in den
            Fokus rückt. Fehlstellungen oder Blockaden der Wirbelsäule können sich auf Muskulatur, Organe und Verhalten auswirken.
            Durch gezielte, präzise und schmerzfreie Justierungen werden Gelenke mobilisiert und die natürliche Beweglichkeit
            wiederhergestellt. Viele Tierbesitzer berichten bereits nach wenigen Behandlungen über mehr Energie, weniger Schmerzen
            und eine deutlich bessere Beweglichkeit – besonders bei sportlich geführten Pferden oder aktiven Hunden in Köln und
            Umgebung. Mehr erfahren zur <NuxtLink to="/chiropraktik" title="Mehr zur Chiropraktik für Tiere">Chiropraktik</NuxtLink>.
          </p>
          <p>
            Typische Indikationen für eine chiropraktische Behandlung sind Rückenprobleme, Arthrosen, Lahmheiten,
            Koordinationsstörungen, Spondylose, Muskelverspannungen, Bandscheibenvorfälle, Leistungsabfall, Taktunreinheiten,
            Schmerzreaktionen beim Satteln oder Heben sowie Verhaltensauffälligkeiten wie Aggression oder Rückzug. Die
            Tierchiropraktik richtet sich an alle Altersklassen vom Welpen oder Fohlen bis zum Senior und wird stets individuell
            an die Anatomie des jeweiligen Tieres angepasst.
          </p>

          <h2 class="line mt-4">Osteopathie Köln für Tiere – sanfte Impulse für Selbstheilung</h2>
          <p>
            Die Osteopathie ist eine besonders sanfte, ganzheitliche Behandlungsmethode, die darauf abzielt, die natürlichen
            Selbstheilungskräfte deines Tieres zu aktivieren. Durch gezielte manuelle Techniken werden Blockaden, Verspannungen
            und Bewegungseinschränkungen aufgespürt und gelöst – ganz ohne Medikamente. Dabei steht nicht das einzelne Symptom,
            sondern das Zusammenspiel von Struktur, Funktion und Energie im gesamten Körper im Mittelpunkt.
          </p>
          <p>
            Osteopathie kann bei Bewegungseinschränkungen, Rücken- und Gelenkproblemen, muskulären Verspannungen,
            Verdauungsstörungen und Verhaltensauffälligkeiten unterstützen. Die Behandlung ist in der Regel schmerzfrei und
            eignet sich für Hunde und Pferde aller Altersgruppen – ob Welpe, Sportpferd oder Senior. Sie ist eine wertvolle
            Ergänzung zur Schulmedizin und kann helfen, die Lebensqualität deines Tieres spürbar zu verbessern. Mehr erfahren zur
            <NuxtLink to="/osteopathie" title="Mehr zur Tierosteopathie">Osteopathie</NuxtLink>.
          </p>

          <h2 class="line mt-4">Service Köln – ganzheitliche Betreuung im Tiergesundheitszentrum</h2>
          <p>
            Unser Service vereint traditionelles Wissen mit moderner Tierheilkunde. Wir setzen auf natürliche, sanfte Methoden,
            die Körper, Geist und Seele deines Tieres in Einklang bringen. Neben Chiropraktik und Osteopathie gehören manuelle
            Therapie, Tierphysiotherapie und eine individuell abgestimmte Ernährungsberatung zu den zentralen Bausteinen.
            Ergänzend bieten wir eine mobile Tierbehandlung an – ideal für Tiere, die den Transport schlecht vertragen oder sich
            in ihrer gewohnten Umgebung wohler fühlen. Für die Anfahrt fällt eine Pauschale an, abhängig vom Standort. Mehr
            erfahren zu unseren <NuxtLink to="/service" title="Mehr zum Service">Leistungen</NuxtLink>.
          </p>
          <p>
            Eine interdisziplinäre Zusammenarbeit mit Tierärzten, Hufschmieden und weiteren Therapeuten sorgt dafür, dass dein
            Tier bestmöglich versorgt wird. Fachliche Kompetenz, jahrelange Erfahrung und ein liebevoller Umgang mit Tier und
            Mensch zeichnen unsere Praxis aus. Wir nehmen uns Zeit, hören zu und gehen individuell auf die Bedürfnisse deines
            Tieres ein – auch für Tierhalter aus Köln, die eine ganzheitliche Betreuung in der Nähe suchen.
          </p>

          <h2 class="line mt-4">Preise Köln – transparent, fair und individuell</h2>
          <p>
            Unsere Preise richten sich nach dem zeitlichen Aufwand und der jeweiligen Tierart. Vor der ersten Behandlung führen
            wir ein ausführliches Anamnesegespräch durch, um die passende Therapie auszuwählen. Gerne beraten wir dich auch
            telefonisch zu individuellen Anliegen. Du möchtest mehrere Leistungen kombinieren oder hast besondere Anforderungen?
            Sprich uns an – wir erstellen dir ein passendes Paketangebot. Mehr erfahren zu unseren
            <NuxtLink to="/preise" title="Mehr zu Preisen und Leistungen">Preisen</NuxtLink>.
          </p>

          <h2 class="line mt-4">Andrea Bachem Köln – Erfahrung, Qualifikation, Tierwohl</h2>
          <p>
            Andrea Bachem ist staatlich geprüfte Tierarzthelferin und hat sich durch zahlreiche Aus- und Weiterbildungen auf die
            Gesundheit und das Wohlbefinden von Tieren spezialisiert. Zu den Qualifikationen zählen unter anderem
            Tierphysiotherapie, Tierosteopathie, manuelle Therapie sowie Dorntherapie und Chiropraktik. Stetige Fortbildung und
            ein klarer Fokus auf das Tierwohl sind die Grundlage jeder Behandlung.
          </p>

          <section class="faq" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="line mt-4">FAQ Köln – häufige Fragen zur Tiergesundheit</h2>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Ist die Tierchiropraktik in Köln für jedes Alter geeignet?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Ja. Die chiropraktische Behandlung wird individuell angepasst und ist für Welpen, junge Tiere, Sportpferde
                  sowie Senioren geeignet. Ziel ist es, Beweglichkeit und Wohlbefinden zu fördern.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wann ist Osteopathie für Tiere aus Köln sinnvoll?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Osteopathie kann helfen, wenn Bewegungseinschränkungen, Verspannungen oder Verdauungsprobleme bestehen. Sie
                  ist sanft, schmerzfrei und eignet sich sowohl für Hunde als auch für Pferde.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Welche Leistungen umfasst der Service für Tierhalter aus Köln?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Unser Service umfasst Chiropraktik, Osteopathie, Tierphysiotherapie, manuelle Therapie und Ernährungsberatung.
                  Ergänzend bieten wir bei Bedarf eine mobile Tierbehandlung an.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wie entstehen die Preise für Behandlungen?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Preise richten sich nach dem zeitlichen Aufwand und der Tierart. Vor der ersten Behandlung findet ein
                  ausführliches Anamnesegespräch statt, um den passenden Therapieplan festzulegen.
                </p>
              </div>
            </details>
            <details class="faq-item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
              <summary class="faq-question" itemprop="name">Wo findet die Behandlung für Köln statt?</summary>
              <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                <p itemprop="text">
                  Die Behandlungen erfolgen in der Praxis in Erftstadt. Für Tiere, die den Transport schlecht vertragen, ist
                  eine mobile Behandlung möglich, abhängig vom Standort.
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
            <h2 class="line text-center">Kontakt Köln & Terminvereinbarung</h2>
            <p class="text-center">
              Du kommst aus Köln und möchtest mehr über Chiropraktik, Osteopathie, Service oder Preise erfahren? Melde dich gern –
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
  title: 'Tiergesundheit Köln – Chiropraktik & Osteopathie | Andrea Bachem',
  meta: [
    {
      name: 'description',
      content:
        'Tiergesundheit für Köln: Informieren Sie sich über Chiropraktik, Osteopathie, Service und Preise im Tiergesundheitszentrum Andrea Bachem in Erftstadt.'
    },
    {
      name: 'keywords',
      content:
        'Tiergesundheit Köln, Tierchiropraktik Köln, Tierosteopathie Köln, Chiropraktik Hund Pferd, Osteopathie Tiere, Service Tiergesundheitszentrum, Preise Tiertherapie, Andrea Bachem, Erftstadt'
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
      content: 'Tiergesundheit Köln – Chiropraktik & Osteopathie | Andrea Bachem'
    },
    {
      property: 'og:description',
      content:
        'Ganzheitliche Tiergesundheit für Köln: Chiropraktik, Osteopathie, Service und transparente Preise bei Andrea Bachem.'
    },
    {
      property: 'og:image',
      content: 'https://tier-gesundheitszentrum.com/favicon.png'
    },
    {
      property: 'og:url',
      content: 'https://tier-gesundheitszentrum.com/tiergesundheit-koeln'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://tier-gesundheitszentrum.com/tiergesundheit-koeln'
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
  name: 'tiergesundheit-koeln',
  components: {
    Icon,
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
};
</script>

<style scoped>
.line {
  font-family: "Montserrat", sans-serif;
  color: rgba(0, 0, 0, 0.86);
}

p,
div,
summary,
details {
  color: rgba(0, 0, 0, 0.86);
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
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
