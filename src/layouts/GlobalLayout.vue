<script setup>

</script>


<template>
  <div class="flex flex-col">
    <nav class="sticky top-0">
      <slot name="nav"></slot>
    </nav>

    <main class="min-h-screen">
      <slot />
    </main>

    <footer id="footer" class="">
      <slot name="footer"></slot>
    </footer>
  </div>

</template>


<style scoped></style>