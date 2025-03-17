<script setup>
import KylePepButton from "@/components/KylePepButton.vue";
import { computed, onMounted, ref } from "vue";

const backgroundUrl = ref("https://images.unsplash.com/photo-1517044843854-77c098f2edd9?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
const imageFailed = ref(false);

const computedBackgroundStyle = computed(() => {
  return imageFailed.value
    ? {}
    : {
      backgroundImage: `url(${backgroundUrl.value})`,
      filter: "grayscale(60%)",
      backgroundBlendMode: "overlay",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }
});

onMounted(() => {
  const img = new Image();
  img.src = backgroundUrl.value;
  img.onerror = () => {
    imageFailed.value = true;
  }
})

function scrollTo(id, offset) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementPosition - offset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
}
</script>

<template>
  <div class="relative flex flex-col ">
    <div class="background-container bg-linear-to-t from-fbGray to-fbGreen" :style="computedBackgroundStyle">
    </div>

    <div class="hero-image flex justify-center items-center h-full">
      <title @click="scrollTo('heroContent', 96)"
        class="hover:cursor-pointer hover:text-lime-200 duration-300 text-5xl lg:text-6xl font-black text-white flex text-center">
        4 Bar
        M
        Construction
      </title>
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
