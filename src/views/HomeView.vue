<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-indigo-800 mb-8">
        🧊 Xtreme on Ice Website
      </h1>
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <p class="text-lg text-gray-700 text-center">
          Testing Tailwind CSS integration with Vue.js
        </p>
        <div class="flex justify-center mt-4 space-x-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Primary Button
          </button>
          <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Success Button
          </button>
        </div>
      </div>
      <TheWelcome />
    </div>
  </main>
</template>
