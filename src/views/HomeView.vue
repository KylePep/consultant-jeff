<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";

</script>

<template>
  <div class="space-y-8 lg:space-y-16">
    <SectionLayout width="base">
      <h1 class="text-4xl text-green-100 font-bold">
        Boosting Growth
        in <mark class="text-amber-300 bg-transparent">construction</mark> Innovation
      </h1>
    </SectionLayout>

    <SectionLayout width="base">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div
          class="flex flex-col space-y-8 py-8 bg-linear-to-bl from-teal-600/25 via-emerald-600/25 to-emerald-900/25 border border-black/25 rounded-xl p-4">
          <i class="text-6xl mdi mdi-account-hard-hat text-amber-300">
          </i>

          <div class="bg-fb-green">
            <h2 class="text-green-200 text-xl font-semibold mb-2">
              Construction
            </h2>
            <p class="text-green-200 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam voluptate reiciendis, modi, molestiae
              blanditiis.
            </p>
          </div>

          <div>
            <RouterLink :to="{ name: 'contact' }" class="text-green-200 border-b-2 font-semibold border-green-200 pb-1">
              Contact me
            </RouterLink>
          </div>
        </div>


        <div
          class="flex flex-col space-y-8 py-8 bg-linear-to-br from-teal-600/25 via-emerald-600/25 to-emerald-900/25 border border-black/25 rounded-xl p-4">
          <i class="mdi mdi-hammer-screwdriver text-6xl text-amber-300"></i>
          <div>
            <h2 class="text-green-200 text-xl font-semibold mb-2">
              Consultation
            </h2>
            <p class="text-green-200 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam voluptate reiciendis, modi, molestiae
              blanditiis.
            </p>
          </div>

          <div>
            <RouterLink :to="{ name: 'contact' }" class="text-green-200 border-b-2 font-semibold border-green-200 pb-1">
              Contact me
            </RouterLink>
          </div>
        </div>


        <img
          src="https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" class="min-h-64 lg:h-full rounded-xl object-cover object-[25%_75%]">


        <!-- <div
          class="flex flex-col space-y-8 py-8 bg-linear-to-bl from-teal-600/25 via-emerald-600/25 to-emerald-900/25 border border-black/25 rounded-xl p-4">
          <i class="text-6xl mdi mdi-handshake text-amber-300"></i>
          <div>
            <h2 class="text-green-200 text-xl font-semibold mb-2">
              Service
            </h2>
            <p class="text-green-200 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam voluptate reiciendis, modi, molestiae
              blanditiis.
            </p>
          </div>

          <div>
            <RouterLink :to="{ name: 'contact' }" class="text-green-200 border-b-2 font-semibold border-green-200 pb-1">
              Contact me
            </RouterLink>
          </div>

        </div> -->
      </div>

    </SectionLayout>
  </div>
</template>
