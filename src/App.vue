<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <GlobalLayout>

    <header>
      Header
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      Footer
    </footer>
  </GlobalLayout>
</template>
