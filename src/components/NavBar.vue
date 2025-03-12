<template>
  <div class="flex items-center bg-fbGray text-white py-2 h-[32px]">
    <p class="max-w-7xl px-2 text-sm">
      Construction Consultation
    </p>
  </div>
  <div class="border-b-1 border-green-200 bg-fbGreen h-[64px]">
    <div class="max-w-7xl mx-auto text-xl text-green-100  font-semibold py-4 px-4 flex justify-between items-center">
      <RouterLink :to="{ name: 'home' }" class="flex items-center">
        4 Bar M Construction
      </RouterLink>

      <RouterLink :to="{ name: 'contact' }" class="">
        Contact
      </RouterLink>
    </div>
  </div>
</template>
