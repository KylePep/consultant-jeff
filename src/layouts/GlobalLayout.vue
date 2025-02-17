<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import InfoOffCanvas from "../components/InfoOffCanvas.vue";
import BookNowHeader from "../components/BookNowHeader.vue";

const route = useRoute();
const isAtTop = ref(true);
const isPastHeader = ref(false);
const isAtBottom = ref(false);
const headerBottom = ref(0);
const footerTop = ref();

const updateHeaderBottom = () => {
  const header = document.querySelector("header");
  if (header) {
    headerBottom.value = header.offsetTop + header.offsetHeight;
  }
};

const updateFooterTop = () => {
  const footer = document.querySelector("footer");
  if (footer) {
    footerTop.value = footer.offsetHeight;
  }
};

const handleScroll = () => {
  const scrollY = Math.round(window.scrollY);
  isAtTop.value = scrollY <= 0;
  isPastHeader.value = scrollY > (headerBottom.value) / 3;
  isAtBottom.value = scrollY >= (document.body.scrollHeight - window.innerHeight - footerTop.value);
};

onMounted(() => {
  updateFooterTop();
  updateHeaderBottom();
  window.addEventListener("resize", updateFooterTop); // Recalculate on window resize
  window.addEventListener("resize", updateHeaderBottom); // Recalculate on window resize
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateFooterTop);
  window.removeEventListener("resize", updateHeaderBottom);
  window.removeEventListener("scroll", handleScroll);
});

</script>


<template>
  <div class="relative flex flex-col bg-page min-h-screen overflow-x-hidden">

    <section class="bg-fm-blue  py-1 w-full">
      <BookNowHeader />
    </section>

    <nav>
      <slot name="nav"></slot>
    </nav>

    <nav class="fixed duration-1000 w-full z-20" :class="isAtTop ? '-top-80' : 'top-0'">
      <slot name="nav"></slot>
    </nav>

    <header id="header">
      <slot name="header"></slot>
    </header>

    <main class="flex-1 min-h-screen">
      <slot />
    </main>

    <section v-if="route.name == 'ServiceDetails'" :class="isPastHeader && !isAtBottom ? 'right-0' : '-right-full'"
      class="hidden lg:block lg:fixed w-1/3 h-screen pt-24 duration-1000">
      <InfoOffCanvas />
    </section>

    <footer id="footer" class="">
      <slot name="footer"></slot>
    </footer>

  </div>
</template>


<style scoped>
.background-image {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 0.9)),
    url('https://images.unsplash.com/photo-1542848284-8afa78a08ccb?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.vc-image-1 img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
}
</style>