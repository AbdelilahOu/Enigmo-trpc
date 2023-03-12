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
</script>

<template>
  <div>
    {{ todo }}
  </div>
</template>
