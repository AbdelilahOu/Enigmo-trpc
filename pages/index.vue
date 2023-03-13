<script setup lang="ts">
import { createTodoInput } from "~~/server/db";
import useTodos from "../composables/useTodos";
const { queryTodos, deleteTodo, updateTodo, createTodo } = useTodos();
const { data, refresh, pending } = await queryTodos();

const newTodo = reactive<createTodoInput>({
  todo: "",
  deadline: "",
  status: "",
});

const createT = async () => {
  await createTodo(newTodo);
  refresh();
};

const deleteT = async (id: number) => {
  await deleteTodo(id);
  refresh();
};
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="w-full h-full relative m-2 md:w-3/5 md:h-5/6 lg:w-1/3">
      <div
        class="grid grid-cols-2 absolute left-0 top-4 w-full gap-x-1 grid-rows-[40px_40px_40px]"
      >
        <div class="col-span-2">
          <UiInput
            placeholder="the todo"
            type="text"
            @on-input="(text) => (newTodo.todo = text)"
          />
        </div>
        <UiInput
          placeholder="date"
          type="date"
          @on-input="(text) => (newTodo.deadline = text)"
        />
        <UiInput
          placeholder="status"
          type="text"
          @on-input="(text) => (newTodo.status = text)"
        />
        <div class="col-span-2">
          <UiButton @clicked="createT"> Add </UiButton>
        </div>
      </div>
      <div
        v-auto-animate
        v-if="data?.length"
        class="w-full h-full gap-2 absolute top-36 flex flex-col mt-2"
      >
        <Todo
          @delete:todo="deleteT"
          v-for="todo in data"
          :todo="todo"
          :key="todo.id"
        />
      </div>
      <div v-else class="mt-2 flex items-center justify-center">Loading...</div>
    </div>
  </div>
</template>
