<script setup></script>


<template>
  <div class="flex flex-col items-center space-y-4 py-4">

    <RouterLink :to="{ name: 'contact' }"
      class="bg-fbGreen text-white rounded-full h-24 lg:h-32 w-24 lg:w-32 flex justify-center items-center">
      <slot name="icon"></slot>
    </RouterLink>

    <h2 class="font-bold text-xl text-fbGreen text-center">
      <slot name="title"></slot>
    </h2>

    <p class="text-base lg:text-sm lg:text-base lg:w-2/3 lg:w-full px-4 text-center">
      <slot name="text"></slot>
    </p>

  </div>
</template>


<style lang="scss" scoped></style>