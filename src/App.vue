<template>
  <div class="font-nunito px-[30px] md:px-[100px] lg:px-[200px] xl:px-[300px]">
    <RouterView class="z-50"/>
    <span
      class="fixed bg-[#e1dde8] size-96 rounded-full -top-24 -right-36 -z-50"
    ></span>
    <span
      class="fixed bg-[#ffe2e2] size-96 rounded-full -bottom-24 -left-36 -z-50"
    >
    </span>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container{
  padding: 0 100px;
}
</style>
