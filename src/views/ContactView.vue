<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";

</script>

<template>
  <div class="space-y-8 lg:space-y-16">
    <SectionLayout width="base">
      <h1 class="text-4xl text-green-100 font-bold">
        Contact Me
      </h1>
    </SectionLayout>

    <SectionLayout width="base">
      <div
        class="flex flex-col lg:flex-row space-y-8 py-8 bg-linear-to-bl from-teal-600 via-emerald-600 to-emerald-900 rounded-xl p-4">

        <img
          src="https://images.unsplash.com/photo-1554311884-415bfda22b47?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" class="h-64 w-fit mx-auto">

        <div class="space-y-8">
          <h2 class="text-green-200 text-lg font-bold">
            Jeff McBride
          </h2>

          <p class="text-green-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam voluptate reiciendis, modi, molestiae
            blanditiis.
          </p>


          <ul class="space-y-4 text-green-100">
            <li class="font-semibold text-sm ">Phone: <span
                class="font-normal text-sm text-emerald-300">xxx-xxx-xxxx</span></li>
            <li class="font-semibold text-sm">Email: <span
                class="font-normal text-sm text-emerald-300">email@email.com</span></li>
          </ul>
        </div>


      </div>
    </SectionLayout>

  </div>
</template>
