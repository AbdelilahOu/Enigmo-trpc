<script setup lang="ts">
import useTodos from "./composables/useTodos";
const { queryTodos, deleteTodo, updateTodo, createTodo } = useTodos();
</script>

<template>
  <main
    class="w-full h-full grid grid-cols-1 grid-rows-1 items-center justify-center"
  >
    <div></div>
  </main>
</template>
