<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";
import ServiceCard from './ServiceCard.vue'

</script>

<template>
  <div class="space-y-8 lg:space-y-16">
    <SectionLayout width="xl">
      <div class="bg-linear-to-b from-fbLight to-fbGray min-h-96">
        <div class="max-w-7xl mx-auto py-4 px-2 space-y-4">
          <h1 class="text-4xl text-green-100 font-bold">
            Boosting Growth
            in <mark class="text-fbGreen bg-transparent">construction</mark> Innovation
          </h1>
          <p class="text-sm w-1/2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque, animi quaerat dolorum
          </p>
          <button class="bg-fbGreen px-6 py-1 text-white rounded">contact</button>
        </div>
      </div>
    </SectionLayout>

    <SectionLayout width="base">
      <section class="grid grid-cols-2 lg:grid-cols-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </section>
    </SectionLayout>
  </div>
</template>
