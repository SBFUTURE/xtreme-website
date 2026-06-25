<template>
  <section class="max-w-6xl mx-auto p-6">
    <header class="mb-6">
      <h2 class="text-3xl font-heading font-bold text-xtreme-yellow">Kampioenschappen</h2>
      <p class="text-sm text-frost-white/80">Selecteer een toernooi en filter op discipline of categorie voor een eenvoudig overzicht.</p>
    </header>

    <div class="bg-xtreme-black/60 rounded-lg p-4 md:p-6 shadow-lg border border-xtreme-yellow/10">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div class="flex-1">
          <label class="block text-frost-white/80 text-sm mb-1">Kampioenschap</label>
          <select v-model="selectedTournamentId" class="w-full md:w-72 bg-xtreme-dark text-frost-white rounded-md p-2">
            <option value="all">Alle kampioenschappen</option>
            <option v-for="t in tournamentsList" :key="t.id" :value="t.id">{{ t.name }} — {{ formatDate(t.date) }}</option>
          </select>
        </div>

        <div class="flex gap-3">
          <div>
            <label class="block text-frost-white/80 text-sm mb-1">Discipline</label>
            <select v-model="disciplineFilter" class="bg-xtreme-dark text-frost-white rounded-md p-2">
              <option value="all">Alle disciplines</option>
              <option v-for="d in availableDisciplines" :key="d" :value="d">{{ d }}</option>
            </select>
          </div>

          <div>
            <label class="block text-frost-white/80 text-sm mb-1">Categorie</label>
            <select v-model="categoryFilter" class="bg-xtreme-dark text-frost-white rounded-md p-2">
              <option value="all">Alle categorieën</option>
              <option v-for="c in availableCategories" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>

          <div class="flex items-end">
            <button @click="resetFilters" class="ml-2 bg-xtreme-yellow text-xtreme-black px-3 py-2 rounded-md text-sm">Reset</button>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="mb-4 flex items-center justify-between">
          <div>
            <h3 class="text-xl font-semibold text-frost-white">
              {{ selectedTournament ? selectedTournament.name : 'Overzicht van alle kampioenschappen' }}
            </h3>
            <p class="text-sm text-frost-white/70">
              {{ selectedTournament ? formatDate(selectedTournament.date) + ' — ' + selectedTournament.location : 'Chronologisch overzicht van alle toernooien' }}
            </p>
          </div>
          <div class="text-sm text-frost-white/80">
            <div v-if="selectedTournament"><strong class="text-xtreme-yellow">Disciplines:</strong> {{ selectedTournament.disciplines.length }}</div>
            <div v-else><strong class="text-xtreme-yellow">Toernooien:</strong> {{ selectedTournaments.length }}</div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm table-auto">
            <thead>
              <tr class="text-left text-frost-white/80 border-b border-xtreme-yellow/10">
                <th class="py-2 text-xtreme-yellow font-semibold">Plaats</th>
                <th class="py-2">Kampioenschap</th>
                <th class="py-2">Discipline</th>
                <th class="py-2">Categorie</th>
                <th class="py-2">Deelnemer</th>
                <th class="py-2 text-xtreme-yellow font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in tournamentRows" :key="row.tournamentId + '-' + row.disciplineName + '-' + row.categoryName + '-' + row.participantName" :class="['border-b border-xtreme-yellow/6', row.place === 1 ? 'bg-xtreme-yellow/15' : row.place === 2 ? 'bg-slate-600/40' : row.place === 3 ? 'bg-slate-600/25' : '']">
                <td class="py-2 align-top text-frost-white font-semibold">{{ row.place }}</td>
                <td class="py-2 align-top text-frost-white">{{ row.tournamentName }}</td>
                <td class="py-2 align-top text-frost-white">{{ row.disciplineName }}</td>
                <td class="py-2 align-top text-frost-white/80">{{ row.categoryName }}</td>
                <td class="py-2 align-top text-frost-white">{{ row.participantName }}</td>
                <td class="py-2 align-top font-semibold" :class="row.place <= 3 ? 'text-xtreme-yellow' : 'text-frost-white'">{{ displayScore(row.score) }}</td>
              </tr>
              <tr v-if="tournamentRows.length === 0">
                <td colspan="5" class="py-4 text-center text-frost-white/80">Geen resultaten gevonden voor de geselecteerde filters.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import tournaments from '@/assets/tournaments.json'
import { ref, computed } from 'vue'

const tournamentsList = computed(() => tournaments || [])

const selectedTournamentId = ref('all')
const disciplineFilter = ref('all')
const categoryFilter = ref('all')

const sortedTournaments = computed(() => {
  return [...tournamentsList.value].sort((a, b) => new Date(a.date) - new Date(b.date))
})

const selectedTournament = computed(() => {
  if (selectedTournamentId.value === 'all') return null
  return tournamentsList.value.find(t => t.id === selectedTournamentId.value) || null
})

const selectedTournaments = computed(() => {
  return selectedTournament.value ? [selectedTournament.value] : sortedTournaments.value
})

const formatDate = (d) => {
  try {
    const dt = new Date(d)
    return dt.toLocaleDateString('nl-BE', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch (e) {
    return d
  }
}

const availableDisciplines = computed(() => {
  const set = new Set()
  selectedTournaments.value.forEach(t => t.disciplines.forEach(d => set.add(d.name)))
  return Array.from(set)
})

const availableCategories = computed(() => {
  const set = new Set()
  selectedTournaments.value.forEach(t => t.disciplines.forEach(d => Object.keys(d.categories).forEach(c => set.add(c))))
  return Array.from(set)
})

const tournamentRows = computed(() => {
  const rows = selectedTournaments.value.flatMap(tournament => {
    return tournament.disciplines
      .filter(d => disciplineFilter.value === 'all' || d.name === disciplineFilter.value)
      .flatMap(discipline => {
        return Object.entries(discipline.categories)
          .filter(([categoryName]) => categoryFilter.value === 'all' || categoryFilter.value === categoryName)
          .flatMap(([categoryName, categoryData]) => {
            const results = Array.isArray(categoryData.results) ? categoryData.results : []
            return results.map(result => ({
              tournamentId: tournament.id,
              tournamentName: tournament.name,
              tournamentDate: tournament.date,
              tournamentLocation: tournament.location,
              disciplineName: discipline.name,
              categoryName,
              participantName: result.name,
              score: result.score,
            }))
          })
      })
  })
  return rows
    .sort((a, b) => b.score - a.score)
    .map((row, index) => ({ ...row, place: index + 1 }))
})

const displayScore = (score) => {
  return score === undefined || score === null ? '-' : score
}

const resetFilters = () => {
  selectedTournamentId.value = 'all'
  disciplineFilter.value = 'all'
  categoryFilter.value = 'all'
}
</script>

<style scoped>
/* minimal: visual styling uses Tailwind tokens */
</style>
