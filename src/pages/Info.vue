<template>
  <div>
    <div class="flex justify-end">
    <router-link to="./create-task" replace>
      <BackIcon class="my-5" />
    </router-link>
  </div>
  <div class="text-center flex flex-col gap-10">
    <LogoText class="text-7xl from-45% to-secondary" />
    <logo-text class="text-4xl from-10% to-secondary">
      <span class="text-text"
        >is a simple tool to keep your daily tasks organized.</span
      >
    </logo-text>
    <p class="text-text text-3xl font-light">
      Easily add, edit, check off, and delete tasks to stay on top of what you
      need to do. taskvue's clear design helps you focus, and it automatically
      saves your progress so you can pick up right where you left off.
    </p>
    <span class="text-text text-2xl font-semibold italic"
      >Give taskvue a try and see how it improves your productivity!
    </span>
  </div>
  </div>
</template>

<script setup>
import LogoText from "../components/LogoText.vue";
import BackIcon from "../components/BackIcon.vue";
</script>

<style scoped></style>
