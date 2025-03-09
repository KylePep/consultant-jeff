<script setup>
</script>

<template>
  <div class="relative flex flex-col border border-black min-h-screen ">
    <div class="background-container" :style="{
      backgroundImage: 'url(https://images.unsplash.com/photo-1517044843854-77c098f2edd9?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      filter: 'grayscale(60%)', /* Desaturates the image */
      backgroundColor: 'rgba(0, 128, 0, 0.2)', /* Green tint */
      backgroundBlendMode: 'overlay', /* Blends the tint with the image */
      backgroundAttachment: 'fixed', /* Prevents the image from scrolling */
      backgroundSize: 'cover', /* Ensures the image covers the entire background */
      backgroundPosition: 'center', /* Centers the background image */
    }"></div>

    <div class="text-6xl font-black text-white h-screen flex justify-center items-center">4bar construction</div>

    <nav>
      <slot name="nav"></slot>
    </nav>

    <main class="bg-fbWhite">
      <slot />
    </main>

    <footer id="footer" class="pb-96">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.background-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  min-height: 100vh;
}
</style>
