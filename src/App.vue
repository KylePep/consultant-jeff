<script setup>
import FooterContent from "./components/FooterContent.vue";
import GlobalLayout from './layouts/GlobalLayout.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <GlobalLayout>

    <template #nav>
      <div class="bg-white flex justify-between font-bold text-4xl shadow-lg">

        <RouterLink :to="{ name: 'home' }" class="">
          Home
        </RouterLink>
        <RouterLink :to="{ name: 'about' }" class="">
          Contact
        </RouterLink>
      </div>
    </template>

    <!-- <template #header>
      Header
    </template> -->

    <RouterView />

    <template #footer>
      <FooterContent />
    </template>

  </GlobalLayout>
</template>
