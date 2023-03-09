<script setup lang="ts">
const { $client: trpc } = useNuxtApp();
const { data, refresh } = await trpc.Todos.hello.useQuery({ text: "Hi" });
</script>

<template>
  <div>{{ data }}</div>
</template>
