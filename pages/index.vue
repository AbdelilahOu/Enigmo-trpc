<script setup lang="ts">
import useTodos from "../composables/useTodos";
const { queryTodos, deleteTodo, updateTodo, createTodo } = useTodos();
const { data, refresh, pending } = await queryTodos();

const newTodo = reactive({
  todo: "",
  deadline: "",
  status: "",
});
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="w-full h-full px-1 py-1 md:w-3/5 md:h-5/6 lg:w-1/3">
      <div class="grid grid-cols-2 gap-x-1 grid-rows-[40px_40px_40px]">
        <div class="col-span-2">
          <UiInput @on-input="(text) => (newTodo.todo = text)" />
        </div>
        <UiInput @on-input="(text) => (newTodo.deadline = text)" />
        <UiInput @on-input="(text) => (newTodo.status = text)" />
        <div class="col-span-2">
          <UiButton @clicked="createTodo(newTodo)"> Add </UiButton>
        </div>
      </div>
      {{ newTodo }}
      <div v-if="pending" class="w-full h-full flex flex-col mt-2">
        <Todo
          @delete:todo="
            (id) => {
              deleteTodo(id), refresh();
            }
          "
          v-for="todo in data"
          :todo="todo"
          :key="todo.id"
        />
      </div>
      <div v-else class="mt-2 flex items-center justify-center">Loading...</div>
    </div>
  </div>
</template>
