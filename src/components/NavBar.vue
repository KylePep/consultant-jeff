<template>
  <div class="border-b-1 border-green-200 mb-10">
    <div class="max-w-7xl mx-auto text-xl text-green-100 font-semibold py-2 px-4 flex justify-between items-center">
      <RouterLink :to="{ name: 'home' }" class="flex items-center">
        <i class="mdi mdi-pine-tree text-3xl pe-1 text-amber-300"></i>
        4 Bar M Construction
      </RouterLink>

      <RouterLink :to="{ name: 'contact' }" class="">
        Contact
      </RouterLink>
    </div>
  </div>
</template>
