<script setup lang="ts">
import useTodos from "./composables/useTodos";
const { queryTodos, deleteTodo, updateTodo, createTodo } = useTodos();
</script>

<template>
  <div>{{}}</div>
</template>
