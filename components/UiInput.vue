<script setup lang="ts">
defineEmits(["onInput"]);
defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
const text = ref<string>("");
</script>

<template>
  <input
    class="focus:outline-0 w-full h-8 px-2 py-4 focus:placeholder:text-sky-400 transition-all duration-200 rounded-md border-2 border-gray-500 focus:border-sky-400"
    @input="$emit('onInput', text)"
    :placeholder="placeholder"
    v-model="text"
    :type="type"
  />
</template>
