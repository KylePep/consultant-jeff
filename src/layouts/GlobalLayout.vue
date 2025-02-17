<script setup>

</script>


<template>

  <nav class="sticky top-0">
    <slot name="nav"></slot>
  </nav>

  <header id="header">
    <slot name="header"></slot>
  </header>

  <main class="flex-1 min-h-screen">
    <slot />
  </main>

  <footer id="footer" class="">
    <slot name="footer"></slot>
  </footer>

</template>


<style scoped></style>