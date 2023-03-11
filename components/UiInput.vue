<script setup lang="ts">
const props = defineProps();
const emit = defineEmits(["onInput"]);
const text = ref<string>("");
const onInputChange = () => emit("onInput", text.value);
</script>

<template>
  <input
    v-model="text"
    @input="onInputChange"
    class="focus:outline-0 w-full h-8 px-2 py-1 rounded-md border focus:border-sky-400"
    type="text"
  />
</template>
