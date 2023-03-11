<script setup lang="ts">
import useTodos from "../composables/useTodos";
const { queryTodos, deleteTodo, updateTodo, createTodo } = useTodos();

const { data, refresh, pending } = await queryTodos();
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="w-full h-full px-1 py-1 md:w-3/4 md:h-5/6 lg:w-1/2">
      <UiInput @on-input="" />

      <div class="w-full h-full flex flex-col">
        <Todo v-for="todo in data" />
      </div>
    </div>
  </div>
</template>
