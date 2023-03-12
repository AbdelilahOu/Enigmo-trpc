<script setup lang="ts">
const emit = defineEmits(["onInput"]);
const text = ref<string>("");
const onInputChange = () => emit("onInput", text.value);
</script>

<template>
  <input
    class="focus:outline-0 w-full h-8 px-2 py-4 focus:placeholder:text-sky-400 transition-all duration-200 rounded-md border-2 border-gray-500 focus:border-sky-400"
    @input="onInputChange"
    placeholder="text"
    v-model="text"
    type="text"
  />
</template>
