<template>
  <div class="min-h-screen bg-ice-gradient">
    <section class="py-8 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="mb-6 flex justify-start">
          <button type="button" class="back-button" @click="goBack">
            ← Terug
          </button>
        </div>

        <div class="text-center">
          <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-4 text-xtreme-yellow">Spelreglement</h1>
          <p class="text-lg text-gray-300 max-w-4xl mx-auto">Officieel reglement — Xtreme Kampioenschap 2026–2027</p>
        </div>
      </div>
    </section>

    <section class="py-8 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="ice-card p-6 lg:p-10">
          <div class="space-y-6 text-gray-200">
            <div>
              <h2 class="text-2xl font-semibold">Doel van het Xtreme Kampioenschap</h2>
              <p class="mt-2 text-gray-300">Het Xtreme Kampioenschap is een competitie waarin leden van Xtreme On Ice gedurende het seizoen op een sportieve, eerlijke en leuke manier strijden om de titel van Xtreme Kampioen binnen hun discipline en categorie.</p>
              <p class="mt-2 text-gray-300">Fairplay, respect en sportiviteit staan tijdens het volledige kampioenschap centraal. De resultaten van de verschillende wedstrijddagen worden verzameld in een klassement. Na afloop van het seizoen wordt per discipline en per categorie een Xtreme Kampioen aangeduid op basis van het behaalde puntenaantal.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">2. Wedstrijddagen</h3>
              <ul class="list-disc list-inside mt-2 text-gray-300">
                <li>Wedstrijd 1: 11 november 2026 — van 07:00 tot 09:45</li>
                <li>Wedstrijd 2: Xtreme Night 7 — van 14:00 tot 22:30</li>
                <li>Wedstrijd 3: 16 mei 2027 — van 15:45 tot 18:45</li>
              </ul>
              <p class="mt-2 text-gray-400">De organisatie behoudt het recht om een wedstrijddatum of het programma aan te passen indien omstandigheden dit noodzakelijk maken. Eventuele wijzigingen worden tijdig aan de deelnemers meegedeeld.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">3. Disciplines</h3>
              <p class="mt-2 text-gray-300">Tijdens elke wedstrijddag kunnen deelnemers punten verdienen in vier disciplines:</p>
              <ul class="list-disc list-inside mt-2 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>Parcours</li>
                <li>Verspringen</li>
                <li>Schansspringen</li>
                <li>Hoogspringen</li>
              </ul>
              <p class="mt-2 text-gray-400">Elke discipline heeft een afzonderlijk klassement. Er is binnen dit kampioenschap geen algemeen klassement over de vier disciplines. Het is verplicht om een helm en handschoenen te dragen tijdens alle disciplines. Kniebescherming, elleboogbescherming en bescherming voor het staartbeentje zijn sterk aangeraden.</p>
            </div>

            <div>
              <h4 class="text-lg font-semibold">3.1 Parcours</h4>
              <ul class="list-disc list-inside mt-2 text-gray-300">
                <li>De beslissing van de scheidsrechter met betrekking tot gemiste obstakels of start-/stoptijden is definitief.</li>
                <li>Deelnemers moeten te allen tijde controle behouden om botsingen met anderen of de boarding te vermijden.</li>
                <li>Iedereen mag het parcours 1 keer uitvoeren om te oefenen.</li>
                <li>Iedereen heeft 1 kans om een tijd neer te zetten (kwalificatie). De kwalificatie bepaalt de startplaats tijdens de race.</li>
                <li>De race is met 3 deelnemers tegelijkertijd; de eerste 2 gaan door naar de volgende ronde.</li>
                <li>Fair Play: bochten afsnijden of obstakels overslaan kan leiden tot diskwalificatie.</li>
                <li>De tegenstander hinderen door te duwen, trekken, … kan leiden tot diskwalificatie.</li>
                <li>Alle obstakels moeten worden uitgevoerd (-16 hoeven de schans niet te nemen).</li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">3.2 Verspringen</h4>
              <ul class="list-disc list-inside mt-2 text-gray-300">
                <li>Elke deelnemer heeft 2 pogingen.</li>
                <li>Je mag een afstand overslaan door een kruis te geven; faal je daarna, dan telt de laatst succesvol afgelegde afstand.</li>
                <li>De schaatsen moeten voorbij de dozen landen; diagonale sprongen zijn ongeldig.</li>
                <li>De sprong is ongeldig als er dozen worden geraakt.</li>
                <li>Bij de landing moeten de schaatsen als eerste het ijs raken.</li>
                <li>Bij gelijkspel wordt de laatst gehaalde afstand gesprongen tot er iemand faalt.</li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">3.3 Schansspringen</h4>
              <ul class="list-disc list-inside mt-2 text-gray-300">
                <li>Elke deelnemer heeft 2 pogingen per hoogte.</li>
                <li>Je mag een hoogte overslaan door een kruis te geven; faal je daarna, dan wordt de laatst geslaagde hoogte geregistreerd.</li>
                <li>Bij de landing moeten de schaatsen als eerste het ijs raken.</li>
                <li>Bij gelijkspel wordt de laatst gehaalde hoogte gesprongen tot er iemand faalt.</li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">3.4 Hoogspringen</h4>
              <ul class="list-disc list-inside mt-2 text-gray-300">
                <li>Elke deelnemer heeft 2 pogingen per hoogte.</li>
                <li>Je mag een hoogte overslaan door een kruis te geven; faal je daarna, dan wordt de laatst geslaagde hoogte geregistreerd.</li>
                <li>Bij de landing moeten de schaatsen als eerste het ijs raken.</li>
                <li>Bij gelijkspel wordt de laatst gehaalde hoogte gesprongen tot er iemand faalt.</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-semibold">4. Deelnemers en categorieën</h3>
              <p class="mt-2 text-gray-300">De competitie wordt georganiseerd in de volgende categorieën:</p>
              <ul class="list-disc list-inside mt-2 text-gray-300">
                <li>Jongens 16+</li>
                <li>Meisjes 16+</li>
                <li>Jongens 16-</li>
                <li>Meisjes 16-</li>
              </ul>
              <p class="mt-2 text-gray-400">Deelnemers moeten lid zijn van Xtreme On Ice. Trainers nemen niet deel aan het kampioenschap en worden niet opgenomen in het klassement. Tijdens Xtreme Night 7 kunnen ook externe deelnemers deelnemen aan de wedstrijden; deze deelnemers worden niet opgenomen in het Xtreme Kampioenschap en ontvangen geen punten voor het klassement.</p>
              <p class="mt-2 text-gray-400">Voor de leeftijdsindeling wordt gekeken naar de leeftijd die de deelnemer tijdens het seizoen bereikt. Wie tijdens het seizoen 16 jaar wordt, behoort vanaf de start van het seizoen tot de categorie 16+. De categorie blijft gedurende het volledige seizoen ongewijzigd. Het seizoen loopt van 1 september tot 30 juni.</p>
              <p class="mt-2 text-gray-400">De categorie meisjes 16+ en meisjes 16- wordt enkel als afzonderlijke categorie georganiseerd wanneer er meer dan drie deelnemers zijn. Indien er drie of minder deelnemers zijn, worden jongens- en meisjescategorie binnen dezelfde leeftijdscategorie samengevoegd tot één klassement.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">5. Puntensysteem</h3>
              <p class="mt-2 text-gray-300">Per discipline kunnen deelnemers tijdens elke wedstrijddag punten verdienen op basis van hun eindpositie. De behaalde punten worden toegevoegd aan het persoonlijke klassement van die discipline en categorie.</p>

              <div class="mt-4 overflow-x-auto">
                <table class="w-full text-sm table-auto border-collapse">
                  <thead>
                    <tr class="bg-xtreme-yellow/10 text-gray-200">
                      <th class="px-3 py-2 text-left">Plaats</th>
                      <th class="px-3 py-2 text-left">Punten</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-200">
                    <tr><td class="px-3 py-2">1e</td><td class="px-3 py-2">250</td></tr>
                    <tr><td class="px-3 py-2">2e</td><td class="px-3 py-2">225</td></tr>
                    <tr><td class="px-3 py-2">3e</td><td class="px-3 py-2">200</td></tr>
                    <tr><td class="px-3 py-2">4e</td><td class="px-3 py-2">175</td></tr>
                    <tr><td class="px-3 py-2">5e</td><td class="px-3 py-2">162,5</td></tr>
                    <tr><td class="px-3 py-2">6e</td><td class="px-3 py-2">150</td></tr>
                    <tr><td class="px-3 py-2">7e</td><td class="px-3 py-2">137,5</td></tr>
                    <tr><td class="px-3 py-2">8e</td><td class="px-3 py-2">125</td></tr>
                    <tr><td class="px-3 py-2">9e</td><td class="px-3 py-2">112,5</td></tr>
                    <tr><td class="px-3 py-2">10e</td><td class="px-3 py-2">100</td></tr>
                    <tr><td class="px-3 py-2">11e</td><td class="px-3 py-2">87,5</td></tr>
                    <tr><td class="px-3 py-2">12e</td><td class="px-3 py-2">75</td></tr>
                    <tr><td class="px-3 py-2">13e</td><td class="px-3 py-2">62,5</td></tr>
                    <tr><td class="px-3 py-2">14e</td><td class="px-3 py-2">50</td></tr>
                    <tr><td class="px-3 py-2">15e</td><td class="px-3 py-2">37,5</td></tr>
                    <tr><td class="px-3 py-2">16e</td><td class="px-3 py-2">25</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold">6. Niet-deelname en diskwalificatie</h3>
              <p class="mt-2 text-gray-300">Een deelnemer die niet deelneemt aan een wedstrijddag ontvangt voor die wedstrijd geen punten (0 punten). Een deelnemer die wordt gediskwalificeerd ontvangt eveneens 0 punten voor die discipline.</p>
              <p class="mt-2 text-gray-300">Een deelnemer mag kampioen worden wanneer die slechts aan één of twee van de drie wedstrijddagen heeft deelgenomen. Er geldt geen minimumaantal deelnames. Om kampioen te worden, moet de deelnemer na afloop van de drie wedstrijddagen het hoogste totale puntenaantal binnen de betreffende discipline en categorie hebben.</p>
              <p class="mt-2 text-gray-400">Voorbeeld: een deelnemer behaalt 200 punten tijdens wedstrijd 1, neemt niet deel aan wedstrijd 2 en behaalt 175 punten tijdens wedstrijd 3. Het eindtotaal bedraagt dan 375 punten.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">7. Gelijke stand in het eindklassement</h3>
              <p class="mt-2 text-gray-300">Wanneer twee of meer deelnemers na de drie wedstrijddagen hetzelfde totaal aantal punten hebben, wordt de eindrangschikking bepaald aan de hand van het aantal behaalde hoogste plaatsen tijdens de drie wedstrijddagen. De deelnemer die het vaakst de hoogste plaats heeft behaald, eindigt boven de andere deelnemer. Indien de gelijke stand niet kan worden opgelost op basis van deze criteria, beslist de organisatie over een passende aanvullende tiebreak.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">8. Xtreme Kampioen</h3>
              <p class="mt-2 text-gray-300">Na de derde en laatste wedstrijddag worden de punten van alle drie de wedstrijddagen opgeteld. De deelnemer met het hoogste totaal aantal punten wordt uitgeroepen tot Xtreme Kampioen van de betreffende discipline en categorie.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">9. Prijsuitreiking</h3>
              <p class="mt-2 text-gray-300">Na elke wedstrijddag vindt een korte prijsuitreiking plaats. De deelnemers die een podiumplaats behalen, ontvangen hierbij een kleine beloning. Tijdens de laatste wedstrijddag in mei wordt naast de prijsuitreiking van die wedstrijd ook het eindklassement bekendgemaakt. De Xtreme Kampioenen ontvangen een beloning als erkenning voor hun prestaties over het volledige seizoen.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">10. Inschrijving</h3>
              <p class="mt-2 text-gray-300">Om deel te nemen aan het Xtreme Kampioenschap is een voorafgaande inschrijving verplicht. Enkel deelnemers die officieel zijn ingeschreven voor het kampioenschap kunnen deelnemen aan de wedstrijden en punten verzamelen voor het klassement. Door deel te nemen verklaart de deelnemer zich akkoord met dit reglement.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">11. Fairplay en sportiviteit</h3>
              <p class="mt-2 text-gray-300">Fairplay vormt een belangrijk uitgangspunt van het Xtreme Kampioenschap. Van alle deelnemers wordt verwacht dat zij zich sportief en respectvol gedragen tegenover mededeelnemers, trainers, organisatoren en andere aanwezigen.</p>
              <ul class="list-disc list-inside mt-2 text-gray-300">
                <li>Respecteer andere deelnemers en de organisatie.</li>
                <li>Aanvaard beslissingen van de jury en organisatie.</li>
                <li>Vermijd onsportief, kwetsend of gevaarlijk gedrag.</li>
                <li>Geef iedereen de kans om op een eerlijke manier deel te nemen.</li>
                <li>Draag bij aan een positieve en aangename sfeer tijdens het kampioenschap.</li>
              </ul>
              <p class="mt-2 text-gray-400">Bij ernstig of herhaald onsportief gedrag kan de organisatie passende maatregelen nemen, waaronder een waarschuwing, uitsluiting van een discipline of diskwalificatie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
    return
  }

  router.push('/toernooien')
}

onMounted(() => {
  document.title = 'Spelreglement | Xtreme On Ice'
  const canonicalUrl = 'https://xtremeonice.be/spelreglement'
  let link = document.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    link.href = canonicalUrl
    document.head.appendChild(link)
  } else {
    link.href = canonicalUrl
  }
})
</script>

<style scoped>
.ice-card {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 237, 78, 0.3);
  border-radius: 0.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid rgba(255, 237, 78, 0.5);
  color: #ffed4e;
  border-radius: 9999px;
  padding: 0.6rem 1rem;
  font-family: 'Oswald', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-button:hover {
  background: rgba(255, 237, 78, 0.12);
  transform: translateY(-1px);
}

h2,
h3,
h4 {
  color: #ffffff;
}

h3,
h4 {
  color: #ffed4e;
}

@media (max-width: 640px) {
  .ice-card {
    padding: 1rem;
  }

  .back-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
