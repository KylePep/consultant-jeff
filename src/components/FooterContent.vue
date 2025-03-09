<script setup>

const services = {
  "construction": {
    "title": "Construction",
  },
  "Consultation": {
    "title": "Consultation",
  }
}
</script>


<template>
  <div class="bg-linear-to-b via-emerald-black/50 to-black/50 text-xs lg:text-lg text-green-200">
    <div class="px-6 lg:px-40 grid grid-cols-4 gap-1 gap-y-16 lg:gap-20 py-12">

      <section class="col-span-4 lg:col-span-1 space-y-4 lg:flex flex-col justify-start border-b-1 pb-2">
        <div class="font-bold text-lg">
          Services
        </div>
        <ul class="flex flex-row lg:flex-col justify-between space-y-4 lg:space-y-1 lg:text-sm px-2">
          <li v-for="service, index in services" :key="index">
            <router-link :to="{ name: 'contact' }" class="text-emerald-300">
              {{ service.title }}
            </router-link>
          </li>
        </ul>
      </section>

      <section class="col-span-4 lg:col-span-1 space-y-4 h-full lg:flex flex-col justify-around ">
        <div class="font-bold text-lg">
          Get In Touch
        </div>
        <ul class="flex flex-row lg:flex-col justify-between px-2 space-y-4 border-b-1 pb-2">
          <li class="font-semibold text-sm ">Phone: <span
              class="font-normal text-sm text-emerald-300">xxx-xxx-xxxx</span></li>
          <li class="font-semibold text-sm">Email: <span
              class="font-normal text-sm text-emerald-300">email@email.com</span></li>
        </ul>


      </section>

      <section class="flex gap-4">
        <a target="_blank" href="https://www.google.com"
          class="bg-emerald-500 rounded-full h-8 w-8 flex justify-center items-center">
          <i class="relative mdi mdi-facebook text-xl text-emerald-100"></i>
        </a>
        <a target="_blank" href="https://www.google.com"
          class="bg-emerald-500 rounded-full h-8 w-8 flex justify-center items-center">
          <i class="relative mdi mdi-instagram text-xl text-emerald-100"></i>
        </a>
        <!-- <a target="_blank" href="https://www.google.com"
          class="bg-emerald-500 rounded-full h-8 w-8 flex justify-center items-center">
          <i class="relative mdi mdi-alpha-g text-4xl text-emerald-950"></i>
        </a> -->
      </section>

    </div>

    <!-- <div class="py-6 lg:py-12 text-center text-green-200 px-16 space-y-8">
      <p>
        Copyright 2024 by abcdefg. All rights reserved
      </p>

      <section class="flex flex-col justify-center items-center pb-12">
        <KylePepButton />
      </section>
    </div> -->

  </div>
</template>


<style scoped></style>