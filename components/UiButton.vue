<script setup lang="ts">
defineEmits(["clicked"]);
</script>

<template>
  <button
    @click="$emit('clicked')"
    class="w-full h-full rounded-md transition-all duration-200 hover:bg-sky-400/60 border-2 border-sky-400 bg-sky-400 text-white font-semibold"
  >
    <slot></slot>
  </button>
</template>
