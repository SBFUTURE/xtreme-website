<template>
  <!-- Only show on desktop/laptop (hidden on mobile/tablet) -->
  <div class="hidden lg:flex justify-center mb-4">
    <div class="bg-xtreme-dark bg-opacity-50 rounded-lg p-0.5 border border-xtreme-yellow border-opacity-20">
      <button 
        @click="updateViewMode('week')"
        :class="[
          'px-3 py-1.5 rounded-md font-heading font-medium transition-all duration-200 text-sm',
          modelValue === 'week' 
            ? 'bg-xtreme-yellow text-black shadow-sm' 
            : 'text-xtreme-yellow hover:bg-xtreme-yellow hover:bg-opacity-20'
        ]"
      >
        Week
      </button>
      <button 
        @click="updateViewMode('month')"
        :class="[
          'px-3 py-1.5 rounded-md font-heading font-medium transition-all duration-200 text-sm',
          modelValue === 'month' 
            ? 'bg-xtreme-yellow text-black shadow-sm' 
            : 'text-xtreme-yellow hover:bg-xtreme-yellow hover:bg-opacity-20'
        ]"
      >
        Maand
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarViewToggle',
  
  props: {
    modelValue: {
      type: String,
      default: 'month'
    }
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const updateViewMode = (mode) => {
      emit('update:modelValue', mode)
    }

    return {
      updateViewMode
    }
  }
}
</script>
