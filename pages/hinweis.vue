
<template>
  <div>
    <v-row style="width: 100%;" class="d-flex justify-center ma-0 mt-10">
      <v-col class="d-flex justify-center" cols="8">
        <div style="width: 100%;">
          <p style="font-size: 12px" class="mt-3">
            Ich bin {{ dame }}, eine selbstständige Escort Dame, und diese Sedcard wurde mit
            meinem Einverständnis und im Auftrag der Escort und Begleitagentur Mila Escort
            erstellt. Es ist mir wichtig, dass du weißt, dass ich als eigenständige Unternehmerin
            agiere. <br> <br>
            Ich biete meine Dienstleistungen in meinem eigenen Namen und auf eigene
            Rechnung an. Alle Zahlungen für die von mir angebotenen Dienstleistungen erfolgen
            direkt an mich. Die Agentur übernimmt keine Verantwortung für die von mir
            angebotenen Leistungen, daher empfehle ich dir, alle Einzelheiten zu den
            angebotenen Dienstleistungen direkt mit mir zu klären. <br> <br>
            Ich möchte auch klarstellen, dass ich als Freiberuflerin im Sinne des Gesetzes tätig
            bin. Ich versteuere mein eigenes Einkommen sowie die Einnahmen aus der
            Vermittlung und Begleitung als Escort Dame.
            Ich freue mich darauf, dir unvergessliche Erlebnisse zu bieten, und lade dich ein, dich
            mit mir in Verbindung zu setzen, um mehr über die besonderen Momente zu
            erfahren, die ich für dich schaffen kann.
            Vielen Dank für dein Interesse an meiner Sedcard!
            <br>
            Herzlichst, <br>
            Deine {{ dame }}
          </p>
        <h3 class="mt-10" style="">
          Info:
        </h3>
        <p>
          Lassen Sie sich von den Profilen unserer Escort Damen inspirieren und entdecken
          Sie die ideale Begleiterin für Ihre nächsten Erlebnisse. Bei Mila Escort Agentur sind
          wir stolz darauf, Ihnen eine außergewöhnliche Auswahl an Escort Models
          anzubieten, die bereit sind, Ihre Wünsche zu erfüllen und Ihnen unvergessliche
          Momente zu schenken.
        </p>
          <p class="mt-2">
            <b>
              Stilvolle Präsenz statt klischeehafter Inszenierung:
            </b>
          </p>
          <p>
            Wir präsentieren
            <b>
            ausdrücklich und bewusst keine Nachtbilder
            </b>
              unserer Escort
            Models. Unser Fokus liegt auf
            <b>
            Eleganz und Professionalität,
            </b>
            um Ihnen einen
            Eindruck von Stil und Klasse zu vermitteln.
            <b>
            Diskretion und Respekt
            </b>
              stehen dabei für
            uns an erster Stelle.
            <br>
            <br>
            Ebenso verzichten wir bewusst darauf, das
            <b>
            erotische Vorleben
            </b>
            unserer
            Begleitpersonen zu thematisieren. Denn in erster Linie buchen Sie unsere Escort
            Models als
            <b>
            Begleitung
            </b>
            für besondere Anlässe. Was darüber hinaus geschieht, bleibt
            eine Entscheidung zwischen Ihnen und der Escort Dame, basierend auf
            <b>
            Sympathie

            </b>
            und gegenseitigem Einvernehmen.
            Statt auf Klischees zu setzen, legen wir großen Wert darauf, unsere Begleitpersonen
            in einem
            <b>
            stilvollen und eleganten Licht

            </b>
            darzustellen, das ihren Charakter und ihre
            Klasse widerspiegelt. Diese Entscheidung unterstreicht unsere Philosophie
            von
            <b>
              Professionalität und Diskretion.
            </b>
            Unser Ziel ist es, Ihnen einen Eindruck von
            der Persönlichkeit und Ausstrahlung unserer Models zu vermitteln – ohne
            klischeehafte Darstellungen. Wir möchten, dass Sie sich auf die Begegnung freuen,
            ohne vorgefertigte Erwartungen, sondern mit dem Fokus auf
            <b>
            authentische Erlebnisse.
            </b>
            <b>
            Diskretion und Respekt
            </b>
            stehen für uns an oberster Stelle sowohl gegenüber
            unseren Models als auch gegenüber unseren Kunden. Durch den Verzicht auf
            Nachtbilder und die Fokussierung auf Begleitung wahren wir das
            <b>
            hohe Niveau und die Exklusivität

            </b>, die Mila Escort auszeichnen. Ich lade Sie ein, in die Welt unserer
            charmanten Escort Damen einzutauchen und sich von der Eleganz und
            Anziehungskraft jeder einzelnen verzaubern zu lassen. Ihre Zeit mit uns wird nicht
            nur ein Erlebnis sein, sondern ein unvergessliches Kapitel in Ihrer Geschichte.
          </p><br>
          <p>
            Herzliche Grüße, <br>
            Mila Escort Agentur
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  computed: {
    dame() {
      return useUserStore().dame; // Zugriff auf den Pinia Store
    },
  },
};
</script>

<style scoped>

p {
  font-family: "Aptos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  line-height: 1.3;
  font-size: 0.8rem;
}
</style>