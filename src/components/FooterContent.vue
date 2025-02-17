<script setup>
// import { ref } from "vue";
// import { useRoute } from "vue-router";
// import { SERVICE_ITEMS } from "../data/index.js";
import KylePepButton from "./KylePepButton.vue";

// const route = useRoute()
// const services = ref(SERVICE_ITEMS)
</script>


<template>
  <div class="text-xs lg:text-lg z-50">
    <div class="bg-fm-teal px-6 lg:px-40 grid grid-cols-4 gap-1 gap-y-8 lg:gap-20 text-fm-pink py-12">

      <section class="col-span-4 lg:col-span-1 lg:col-start-3 space-y-4 lg:flex flex-col justify-start">
        <div class="font-bold text-lg">
          Services
        </div>
        <ul class="space-y-4 lg:space-y-1 lg:text-sm">
          <!-- <li v-for="service, index in services">
            <router-link :to="{ name: 'ServiceDetails', params: { serviceId: index } }"
              class="font-semibold border-b pb-0.5 hover:text-fm-orange"
              :class="route.params.serviceId == index ? 'border-fm-pink' : 'border-transparent'">
              {{ service.title }}
            </router-link>
          </li> -->
        </ul>
      </section>

      <section class="col-span-4 lg:col-span-1 space-y-4 h-full lg:flex flex-col justify-around">
        <div class="font-bold text-lg">
          Get In Touch
        </div>
        <ul class="space-y-4">
          <li class="font-semibold text-base">Address: <span class="font-normal text-sm">1217 3rd St S Suite 105, Nampa,
              ID
              83651</span></li>
          <li class="font-semibold text-base">Phone: <span class="font-normal text-sm">xxx-xxx-xxxx</span></li>
          <li class="font-semibold text-base">Email: <span class="font-normal text-sm">email@emai.com</span></li>
        </ul>
        <div class="flex gap-4">
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100090973550375&mibextid=ZbWKwL"
            class="bg-fm-blue rounded-full h-8 w-8 flex justify-center items-center">
            <i class="relative mdi mdi-facebook text-xl"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/focusmassagebydana"
            class="bg-fm-blue rounded-full h-8 w-8 flex justify-center items-center">
            <i class="relative mdi mdi-instagram text-xl"></i>
          </a>
          <a target="_blank" href="https://danawhalen.glossgenius.com/"
            class="bg-fm-blue rounded-full h-8 w-8 flex justify-center items-center">
            <i class="relative mdi mdi-alpha-g text-4xl"></i>
          </a>

        </div>
      </section>

      <!-- <section class="col-span-4 lg:col-span-1 space-y-4 lg:flex flex-col justify-around">
        <div class="font-bold text-base lg:text-lg">
          Recent Posts
        </div>
        <ul class="flex-1 flex flex-col gap-4">
          <li class="grid grid-cols-4">
            <i class="bg-blue-500 me-4"></i>
            <div class="col-span-3 text-xs lg:text-sm">
              <p>Minor Surgeries on the foot</p>
              <p class="text-gray-400">March 01, 2019</p>
            </div>
          </li>

          <li class="grid grid-cols-4">
            <i class="bg-blue-500 me-4"></i>
            <div class="col-span-3 text-xs lg:text-sm">
              <p>Assistive Device Program</p>
              <p class="text-gray-400">March 01, 2019</p>
            </div>
          </li>

          <li class="grid grid-cols-4">
            <i class="bg-blue-500 me-4"></i>
            <div class="col-span-3 text-xs lg:text-sm">
              <p>Initial plus treatment</p>
              <p class="text-gray-400">March 01, 2019</p>
            </div>
          </li>
        </ul>
      </section> -->



      <!-- <section class="col-span-4 lg:col-span-1 space-y-4 lg:flex flex-col justify-between">
        <div class="font-bold text-base lg:text-lg">
          Subscribe To Us
        </div>
        <p class="text-xs">Get Business news, tip and solutions to your problems from our experts.</p>
        <div class="flex min-h-8">
          <input type="text" class="w-full" name="" id="">
          <button class="bg-blue-500 px-8">></button>
        </div>

      </section> -->



    </div>

    <div class="bg-fm-blue py-6 lg:py-12 text-center text-white px-16 space-y-8">
      <p>
        Copyright 2024 by FocusMassage. All rights reserved
      </p>

      <section class="flex flex-col justify-center items-center pb-12">
        <KylePepButton />
      </section>
    </div>
  </div>
</template>


<style scoped></style>