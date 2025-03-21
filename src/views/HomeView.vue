<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";
import ServiceCard from './ServiceCard.vue';
import IconCommunity from "@/components/icons/IconService.vue";

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
  <div class="space-y-8 lg:space-y-16 ">
    <SectionLayout width="xl">
      <div id="heroContent" class="bg-linear-to-b from-fbLight to-fbGray">
        <div class="max-w-7xl mx-auto py-8 px-8 space-y-8">
          <h1 class="text-2xl lg:text-4xl text-green-100 font-bold">
            The go-to provider to solve complex problems in <mark class="text-fbGreen bg-transparent">remote</mark> and
            <mark class="text-fbGreen bg-transparent">challenging</mark> environments
          </h1>
          <p class="text-sm lg:text-lg lg:w-2/3 text-white">
            A high-quality general contractor providing construction services focused on federal and state governments,
            with expertise in remote, challenging projects. We continually strive to exceed our customers’ expectations
            and bring exceptional value.
          </p>
          <button @click="scrollTo('contactContent', 64)"
            class="hover:cursor-pointer hover:text-lime-200 duration-300 bg-fbGreen px-6 py-1 text-white rounded">
            Contact
          </button>

        </div>
      </div>
    </SectionLayout>

    <SectionLayout width="base">
      <h2 class="max-w-7xl mx-auto text-4xl font-bold text-fbGreen border-b-4 border-fbGreen pb-4 pt-8 mb-12">Our
        Mission
      </h2>
      <section class="grid grid-cols-1 lg:grid-cols-4 gap-x-16 gap-y-8">
        <ServiceCard>
          <template #icon>
            <i class="relative mdi mdi-hard-hat text-6xl lg:text-7xl text-white"></i>
          </template>
          <template #title>
            Safety First
          </template>
          <template #text>
            We ensure the safety of every team member, so everyone can return home safely after each project.
          </template>
        </ServiceCard>

        <ServiceCard>
          <template #icon>
            <IconCommunity />
          </template>
          <template #title>
            Exceptional Service
          </template>
          <template #text>
            We strive to exceed client expectations with exceptional service and unwavering commitment to
            quality.
          </template>
        </ServiceCard>

        <ServiceCard>
          <template #icon>
            <i class="relative mdi mdi-scale-balance text-6xl lg:text-7xl text-white"></i>
          </template>
          <template #title>
            Integrity and Accountability
          </template>
          <template #text>
            Our team operates with the highest level of integrity and holds ourselves accountable for every task we
            complete.
          </template>
        </ServiceCard>

        <ServiceCard>
          <template #icon>
            <i class="relative mdi mdi-arm-flex text-6xl lg:text-7xl text-white"></i>
          </template>
          <template #title>
            Empowering Teams
          </template>
          <template #text>
            We empower our teammates to succeed by fostering collaboration and taking responsibility for our work.
          </template>
        </ServiceCard>

      </section>
    </SectionLayout>
  </div>
</template>