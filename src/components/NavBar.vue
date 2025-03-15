<script setup>
import { useRoute } from "vue-router";

const route = useRoute()

function scrollTo() {
  const element = document.getElementById('heroContent');
  if (element) {
    const offset = 96;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementPosition - offset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
}
</script>

<template>

  <div class="flex items-center bg-fbGray text-white py-2 h-[32px]">
    <p class="max-w-7xl px-2 text-sm">
      Construction Consultation
    </p>
  </div>

  <div id="navBar" class="border-b-1 border-green-200 bg-fbGreen h-[64px]">

    <div class="max-w-7xl mx-auto text-xl text-green-100  font-semibold py-4 px-4 flex justify-between items-center">
      <RouterLink @click="scrollTo()" :to="{ name: 'home' }" :class="route.name != 'contact' ? 'text-lime-200' : ''"
        class="flex items-center">
        4 Bar M Construction
      </RouterLink>

      <RouterLink :to="{ name: 'contact' }" :class="route.name == 'contact' ? 'text-lime-200' : ''">
        Contact
      </RouterLink>
    </div>
  </div>

</template>
