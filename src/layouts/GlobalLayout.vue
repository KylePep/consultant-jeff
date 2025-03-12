<script setup>
import KylePepButton from "@/components/KylePepButton.vue";

</script>

<template>
  <div class="relative flex flex-col">
    <div class="background-container" :style="{
      backgroundImage: 'url(https://images.unsplash.com/photo-1517044843854-77c098f2edd9?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      filter: 'grayscale(60%)', /* Desaturates the image */
      backgroundColor: 'rgba(0, 128, 0, 0.1)', /* Green tint */
      backgroundBlendMode: 'overlay', /* Blends the tint with the image */
      backgroundAttachment: 'fixed', /* Prevents the image from scrolling */
      backgroundSize: 'cover', /* Ensures the image covers the entire background */
      backgroundPosition: 'center', /* Centers the background image */
    }">
    </div>

    <div class="hero-image text-5xl lg:text-6xl font-black text-white flex justify-center items-center text-center">
      4 Bar
      M
      Construction
    </div>

    <nav class="sticky top-0 z-10">
      <slot name="nav"></slot>
    </nav>

    <main class="bg-fbWhite">
      <slot />
    </main>

    <footer class="pb-96">
      <slot name="footer"></slot>
    </footer>

    <div class="py-6 lg:py-12 text-center text-green-200 px-16 space-y-8">
      <section class="flex flex-col justify-center items-center pb-12">
        <KylePepButton />
      </section>
    </div>

  </div>
</template>

<style scoped>
.hero-image {
  min-height: calc(100dvh - 96px);
  text-shadow: 2px 2px 8px black;
}

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  /* Keeps it behind the content */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: all 0.3s ease-in-out;
  /* Smooth transition for height changes */
}
</style>
