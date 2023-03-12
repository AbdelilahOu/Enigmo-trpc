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
  <div class="flex justify-between items-center gap-3">
    <div class="w-full h-9 bg-gray-100 rounded-md px-2 flex items-center">
      {{ todo?.todo }} - {{ todo?.deadline }} - {{ todo?.status }}
    </div>
    <div class="h-9 w-16">
      <UiButton @clicked="$emit('delete:todo', todo?.id)"> Delete </UiButton>
    </div>
  </div>
</template>
