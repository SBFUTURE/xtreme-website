<template>
  <div class="min-h-screen bg-ice-gradient py-16 px-4">
    <div class="max-w-3xl mx-auto ice-card">
      <div class="mb-8">
        <button 
          @click="$router.back()"
          class="inline-flex items-center text-xtreme-yellow hover:text-xtreme-light-yellow transition-colors font-semibold focus:outline-none"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar vorige pagina
        </button>
      </div>
      <h1 class="text-4xl font-heading font-bold mb-8 text-xtreme-yellow text-center">Algemene Voorwaarden</h1>
      <div class="text-gray-300 space-y-6">
        <p class="text-base text-red-400 font-bold">Door inschrijving van uw zoon of dochter verklaart u zich akkoord met onze algemene voorwaarden.</p>
        <ul class="list-decimal ml-6 space-y-2">
          <li>Het dragen van een helm is voor uw zoon of dochter verplicht tijdens alle trainingen en bij het betreden van het ijs.</li>
          <li>Tijdens de trainingsuren is het dragen van handschoenen voor uw zoon of dochter verplicht.</li>
          <li>Voor extra veiligheid adviseren wij het gebruik van knie-, elleboog-, rug- en stuitbescherming. Het dragen hiervan is niet verplicht.</li>
          <li>Tijdens de trainingsuren is uw zoon of dochter verplicht de aanwijzingen van de ‘Crew’ te respecteren en op te volgen.</li>
          <li>Het is verboden om zich met een mobiele telefoon op het ijs te begeven. Alle waardevolle eigendommen dienen te worden opgeborgen in de kleedkamer, welke wordt afgesloten tijdens de training.</li>
          <li>Tijdens de trainingen wordt van uw zoon of dochter verwacht dat hij of zij te allen tijde handelt volgens de regels van fair play.</li>
          <li>Wanneer uw zoon of dochter na drie waarschuwingen blijft weigeren de instructies op te volgen, wordt deelname aan de eerstvolgende training geweigerd.</li>
          <li>Leden dienen zich te allen tijde respectvol en sportief te gedragen tegenover medesporters, trainers, vrijwilligers, officials en derden.</li>
          <li>Beledigend, discriminerend, agressief of ander ongewenst gedrag wordt niet getolereerd.</li>
          <li>Bij niet-tijdige betaling kan het lidmaatschap kan uw zoon of dochter niet deelnemen aan een training.</li>
          <li>Leden wordt verzocht tijdig aanwezig te zijn. Bij vertraging wordt gevraagd dit tijdig te communiceren.</li>
          <li>Leden die geen ervaring hebben met het gebruik van de schans mogen deze alleen betreden onder toezicht en begeleiding van een daartoe aangewezen ‘Crew’-member.</li>
        </ul>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-8 mb-2">Contactpersonen</h2>
        <ul class="ml-6 space-y-1">
          <li>Hoofdcontact persoon: Maarten Michiels</li>
          <li>Arne De Donder – Voorzitter – Tel: 0476.08.74.89</li>
          <li>Maarten Michiels – Secretaris – Tel: 0471.82.31.42</li>
          <li>Tristan Van Valckenborgh – Penningmeester – Tel: 0478.09.09.11</li>
          <li>Ilana Du Bois – Mede financiën – Tel: 0468.22.25.33</li>
          <li>Cedric Philipin – Opvolgingshoofd – Tel: 0474.76.16.57</li>
          <li>Stephen Bombeke – Website creator – Tel: 0476.70.14.10</li>
        </ul>
        <!-- Formulier voor akkoord is verwijderd op verzoek -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlgemeneVoorwaardenView'
}
</script>

<style scoped>
.ice-card {
  background: rgba(26, 26, 26, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 237, 78, 0.2);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.bg-ice-gradient {
  background: linear-gradient(135deg, #1a1a1a 0%, #232323 100%);
}
.text-xtreme-yellow {
  color: #FFED4E;
}
.border-xtreme-yellow {
  border-color: #FFED4E;
}
</style>
