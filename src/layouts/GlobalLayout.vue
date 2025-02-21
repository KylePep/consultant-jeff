<script setup>

</script>


<template>
  <div class="flex flex-col bg-linear-to-br from-teal-950 via-emerald-950 to-emerald-950 border border-black">
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