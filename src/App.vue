<script setup>
import FooterContent from "./components/FooterContent.vue";
import GlobalLayout from './layouts/GlobalLayout.vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <GlobalLayout>

    <template #nav>
      <NavBar />
    </template>

    <RouterView />

    <template #footer>
      <FooterContent />
    </template>

  </GlobalLayout>
</template>
