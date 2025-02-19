<script setup>
import FooterContent from "./components/FooterContent.vue";
import GlobalLayout from './layouts/GlobalLayout.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <GlobalLayout>

    <template #nav>
      <div class="text-xl text-green-100 font-bold flex justify-between p-4 border-b-1 border-green-200 mb-10">

        <RouterLink :to="{ name: 'home' }" class="">
          Home
        </RouterLink>

        <RouterLink :to="{ name: 'contact' }" class="">
          Contact
        </RouterLink>
      </div>
    </template>

    <RouterView />

    <template #footer>
      <FooterContent />
    </template>

  </GlobalLayout>
</template>
