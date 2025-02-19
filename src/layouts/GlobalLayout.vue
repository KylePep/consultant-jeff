<script setup>

</script>


<template>
  <div class="flex flex-col bg-green-950">
    <nav class="">
      <slot name="nav"></slot>
    </nav>

    <main class="min-h-screen">
      <slot />
    </main>

    <footer id="footer" class="mt-4">
      <slot name="footer"></slot>
    </footer>
  </div>

</template>


<style scoped></style>