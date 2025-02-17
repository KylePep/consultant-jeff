<script setup>
import FooterContent from "./components/FooterContent.vue";
import GlobalLayout from './layouts/GlobalLayout.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <GlobalLayout>

    <template #nav>
      <div class="bg-white h-16 flex flex-col justify-center font-bold text-4xl shadow-lg">
        Nav
      </div>
    </template>

    <template #header>
      Header
    </template>

    <RouterView />

    <template #footer>
      <FooterContent />
    </template>

  </GlobalLayout>
</template>
