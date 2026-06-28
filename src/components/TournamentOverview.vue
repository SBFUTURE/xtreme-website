<template>
  <section class="max-w-6xl mx-auto p-6">
    <header class="mb-6">
      <h2 class="text-3xl font-heading font-bold text-xtreme-yellow">Kampioenschappen</h2>
      <p class="text-sm text-frost-white/80">Selecteer een Kampioenschap en filter op discipline of categorie voor een eenvoudig overzicht.</p>
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
                <option v-for="d in availableDisciplines" :key="d" :value="d">{{ d }}</option>
              </select>
            </div>
          <div>
            <label class="block text-frost-white/80 text-sm mb-1">Categorie</label>
            <select v-model="categoryFilter" class="bg-xtreme-dark text-frost-white rounded-md p-2">
              <option v-for="c in availableCategories" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="mb-4 flex items-center justify-between">
          <div>
            <h3 class="text-xl font-semibold text-frost-white">
              {{ selectedTournament ? selectedTournament.name : 'Klassement van alle kampioenschappen' }}
            </h3>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm table-auto">
            <thead>
              <tr class="text-left text-frost-white/80 border-b border-xtreme-yellow/10">
                <th class="py-2 text-xtreme-yellow font-semibold">Plaats</th>
                <th class="py-2">Discipline</th>
                <th class="py-2">Categorie</th>
                <th class="py-2">Deelnemer</th>
                <th class="py-2 text-xtreme-yellow font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in tournamentRows" :key="row.disciplineName + '-' + row.categoryName + '-' + row.participantName" :class="['border-b border-xtreme-yellow/6', row.place === 1 ? 'bg-xtreme-yellow/15' : row.place === 2 ? 'bg-slate-600/40' : row.place === 3 ? 'bg-slate-600/25' : '']">
                <td class="py-2 align-top text-frost-white font-semibold">{{ row.place }}</td>
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
import { ref, computed, watch } from 'vue'

const tournamentsList = computed(() => tournaments || [])

const selectedTournamentId = ref('all')
const disciplineFilter = ref('')
const categoryFilter = ref('')

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

// removed availableDisciplines: discipline filtering not applicable

const availableCategories = computed(() => {
  const set = new Set()
  selectedTournaments.value.forEach(t => t.disciplines.forEach(d => Object.keys(d.categories).forEach(c => set.add(c))))
  return Array.from(set)
})

// auto-select first available category name if empty/invalid
watch(availableCategories, (newVal) => {
  if (!newVal || newVal.length === 0) {
    categoryFilter.value = ''
    return
  }
  if (!categoryFilter.value || !newVal.includes(categoryFilter.value)) {
    categoryFilter.value = newVal[0]
  }
}, { immediate: true })

const availableDisciplines = computed(() => {
  const set = new Set()
  selectedTournaments.value.forEach(t => t.disciplines.forEach(d => set.add(d.name)))
  return Array.from(set)
})

// when the available disciplines change, ensure disciplineFilter is set to a valid value
watch(availableDisciplines, (newVal) => {
  if (!newVal || newVal.length === 0) {
    disciplineFilter.value = ''
    return
  }
  // Always ensure a valid discipline is selected (no empty option)
  if (!disciplineFilter.value || !newVal.includes(disciplineFilter.value)) {
    disciplineFilter.value = newVal[0]
  }
}, { immediate: true })

// When switching between 'all' and a specific tournament, adjust disciplineFilter
watch(selectedTournamentId, (val) => {
  const avail = availableDisciplines.value
  if (avail && avail.length > 0 && !avail.includes(disciplineFilter.value)) {
    disciplineFilter.value = avail[0]
  }
})

const tournamentRows = computed(() => {
  const includeDiscipline = (name) => {
    // only include the selected discipline
    if (!disciplineFilter.value) return true
    return name === disciplineFilter.value
  }
  const includeCategory = (name) => categoryFilter.value ? name === categoryFilter.value : true

  // When viewing ALL championships: aggregate participant scores across tournaments per discipline+category
  if (selectedTournamentId.value === 'all') {
    const groups = {} // key -> { disciplineName, categoryName, participants: { name: score } }

    selectedTournaments.value.forEach(tournament => {
      tournament.disciplines
        .filter(d => includeDiscipline(d.name))
        .forEach(discipline => {
          Object.entries(discipline.categories)
            .filter(([categoryName]) => includeCategory(categoryName))
            .forEach(([categoryName, categoryData]) => {
              const results = Array.isArray(categoryData.results) ? categoryData.results : []
              const groupKey = `${discipline.name}||${categoryName}`
              if (!groups[groupKey]) groups[groupKey] = { disciplineName: discipline.name, categoryName, participants: {} }
              results.forEach(r => {
                const score = Number(r.score) || 0
                groups[groupKey].participants[r.name] = (groups[groupKey].participants[r.name] || 0) + score
              })
            })
        })
    })

    const final = []
    Object.values(groups).forEach(group => {
      const participants = Object.entries(group.participants).map(([name, score]) => ({ participantName: name, score }))
      participants.sort((a, b) => b.score - a.score)
      participants.forEach((p, idx) => {
        final.push({
          disciplineName: group.disciplineName,
          categoryName: group.categoryName,
          participantName: p.participantName,
          score: p.score,
          place: idx + 1,
        })
      })
    })
    return final
  }

  // When a specific tournament is selected: rank participants within that tournament per discipline+category
  const tournament = selectedTournaments.value[0]
  if (!tournament) return []

  const final = []
  tournament.disciplines
    .filter(d => includeDiscipline(d.name))
    .forEach(discipline => {
      Object.entries(discipline.categories)
        .filter(([categoryName]) => includeCategory(categoryName))
        .forEach(([categoryName, categoryData]) => {
          const results = Array.isArray(categoryData.results) ? categoryData.results : []
          const sorted = results.map(r => ({ participantName: r.name, score: Number(r.score) || 0 })).sort((a, b) => b.score - a.score)
          sorted.forEach((p, idx) => {
            final.push({
              disciplineName: discipline.name,
              categoryName,
              participantName: p.participantName,
              score: p.score,
              place: idx + 1,
            })
          })
        })
    })

  return final
})

const displayScore = (score) => {
  return score === undefined || score === null ? '-' : score
}
</script>

<style scoped>
/* minimal: visual styling uses Tailwind tokens */
</style>
