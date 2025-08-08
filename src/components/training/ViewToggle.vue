<template>
  <div class="flex justify-center mb-8">
    <div class="bg-xtreme-dark bg-opacity-70 rounded-lg p-1 border border-xtreme-yellow border-opacity-30">
      <button 
        @click="updateViewMode('list')"
        :class="[
          'px-6 py-2 rounded-md font-heading font-medium transition-all duration-300',
          modelValue === 'list' 
            ? 'bg-xtreme-yellow text-black' 
            : 'text-xtreme-yellow hover:bg-xtreme-yellow hover:bg-opacity-20'
        ]"
      >
        Lijst
      </button>
      <button 
        @click="updateViewMode('calendar')"
        :class="[
          'px-6 py-2 rounded-md font-heading font-medium transition-all duration-300',
          modelValue === 'calendar' 
            ? 'bg-xtreme-yellow text-black' 
            : 'text-xtreme-yellow hover:bg-xtreme-yellow hover:bg-opacity-20'
        ]"
      >
        Kalender
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewToggle',
  
  props: {
    modelValue: {
      type: String,
      default: 'list'
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
