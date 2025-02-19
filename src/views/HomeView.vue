<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";

</script>

<template>
  <div class="space-y-8 lg:space-y-16">
    <SectionLayout width="base">
      <h1 class="text-4xl text-green-100 font-bold">
        Boosting Growth
        in construction Innovation
      </h1>
    </SectionLayout>

    <SectionLayout width="base">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">

        <div
          class="flex flex-col space-y-8 py-8 bg-linear-to-bl from-teal-600 via-emerald-600 to-emerald-900 rounded-xl p-4">
          <p class="text-6xl">
            📊
          </p>
          <h2 class="text-green-200 text-lg font-bold">
            This thing
          </h2>
          <p class="text-green-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam voluptate reiciendis, modi, molestiae
            blanditiis.
          </p>

          <div>
            <RouterLink :to="{ name: 'contact' }" class="text-green-200 border-b-1 border-green-200 pb-1">
              Contact Me
            </RouterLink>
          </div>
        </div>


        <div
          class="flex flex-col space-y-8 py-8 bg-linear-to-br from-teal-600 via-emerald-600 to-emerald-900 rounded-xl p-4">
          <p class="text-6xl">
            🧩
          </p>
          <h2 class="text-green-200 text-lg font-bold">
            That thing
          </h2>
          <p class="text-green-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam voluptate reiciendis, modi, molestiae
            blanditiis.
          </p>

          <div>
            <RouterLink :to="{ name: 'contact' }" class="text-green-200 border-b-1 border-green-200 pb-1">
              Contact Me
            </RouterLink>
          </div>
        </div>


        <img
          src="https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" class="min-h-64 lg:h-full rounded-xl">


        <div
          class="flex flex-col space-y-8 py-8 bg-linear-to-bl from-teal-600 via-emerald-600 to-emerald-900 rounded-xl p-4">
          <p class="text-6xl">
            🏡
          </p>
          <h2 class="text-green-200 text-lg font-bold">
            Other thing
          </h2>
          <p class="text-green-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam voluptate reiciendis, modi, molestiae
            blanditiis.
          </p>

          <div>
            <RouterLink :to="{ name: 'contact' }" class="text-green-200 border-b-1 border-green-200 pb-1">
              Contact Me
            </RouterLink>
          </div>

        </div>
      </div>

    </SectionLayout>
  </div>
</template>
