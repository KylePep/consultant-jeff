<template>
  <div
    class="text-xl text-green-100 font-semibold flex justify-between items-center py-2 px-4 border-b-1 border-green-200 mb-10">

    <RouterLink :to="{ name: 'home' }" class="flex items-center">
      <i class="mdi mdi-pine-tree text-3xl pe-1 text-amber-400"></i>
      Jeff McBride
    </RouterLink>

    <RouterLink :to="{ name: 'contact' }" class="">
      Contact
    </RouterLink>
  </div>
</template>
