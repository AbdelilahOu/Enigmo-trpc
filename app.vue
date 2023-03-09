<script setup lang="ts">
const { $client: trpc } = useNuxtApp();
const { data, error } = await trpc.Todos.findAll.useQuery();
</script>

<template>
  <div>{{ data || error }}</div>
</template>
