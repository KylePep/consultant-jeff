<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";

</script>

<template>
  <div class="space-y-24 lg:space-y-32">
    <SectionLayout width="wide">
      <div class="h-64 bg-blue-200">
        Home - Hero
      </div>
    </SectionLayout>

    <SectionLayout width="base">
      <div class="h-64 bg-green-200">
        page
      </div>
    </SectionLayout>

    <SectionLayout width="base">
      <div class="h-64 bg-red-200">
        page
      </div>
    </SectionLayout>
  </div>
</template>
