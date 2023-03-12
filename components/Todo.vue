<script setup lang="ts">
defineProps({
  todo: {
    type: Object as PropType<{
      id: number;
      todo: string;
      deadline: string;
      status: string;
    }>,
  },
});
defineEmits(["delete:todo"]);
</script>

<template>
  <div class="flex">
    {{ todo }}
    <button @click="$emit('delete:todo', todo?.id)" class="">delete</button>
  </div>
</template>
