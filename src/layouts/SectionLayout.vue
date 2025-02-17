<script setup>
import { computed } from "vue";

const props = defineProps(['width']);

const gridClass = computed(() => {
  return {
    'base': 'grid grid-cols-8 mx-4',
    'xl': ''
  }[props.width]
});
</script>


<template>
  <div :class="gridClass">
    <div class="col-span-8 lg:col-span-6 lg:col-start-2">
      <slot />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>