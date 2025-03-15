<script setup>
import { useRoute } from "vue-router";

const route = useRoute()

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

  <div class="flex items-center bg-fbGray text-white py-2 h-[32px]">
    <p class="max-w-7xl px-2 text-sm">
      Construction Consultation
    </p>
  </div>

  <div id="navBar" class="border-b-1 border-green-200 bg-fbGreen h-[64px] shadow-lg">

    <div class="max-w-7xl mx-auto text-xl text-green-100 font-semibold h-full px-4 flex justify-between items-center">

      <RouterLink @click="scrollTo('heroContent', 96)" :to="{ name: 'home' }"
        :class="route.name != 'contact' ? 'text-lime-200' : ''"
        class="text-sm lg:text-lg hover:text-lime-200 duration-300 flex items-center">
        4 Bar M Construction
      </RouterLink>

      <div class="space-x-4 lg:space-x-16 h-full flex items-center">
        <RouterLink @click="scrollTo('heroContent', 96)" :to="{ name: 'contact' }"
          :class="route.name == 'contact' ? 'text-lime-200' : ''"
          class="text-sm lg:text-lg hover:text-lime-200 duration-300">
          Learn More
        </RouterLink>

        <button @click="scrollTo('contactContent', 64)"
          class="hover:cursor-pointer text-sm lg:text-lg hover:text-lime-200 duration-300">
          Contact
        </button>
      </div>

    </div>
  </div>

</template>
