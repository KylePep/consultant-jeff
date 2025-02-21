<template>
  <div
    class="text-xl text-green-100 font-bold flex justify-between items-center py-2 px-4 border-b-1 border-green-200 mb-10">

    <RouterLink :to="{ name: 'home' }" class="flex items-center">
      <div class="text-3xl pe-2">
        👷
      </div>
      Home
    </RouterLink>

    <RouterLink :to="{ name: 'contact' }" class="">
      Contact
    </RouterLink>
  </div>
</template>
