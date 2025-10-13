<template>
  <nav class="flex justify-between z-50 mt-3">
    <div class="flex flex-col gap-3">
      <LogoText class="text-3xl from-40% to-secondary" />
      <span class="text-3xl text-text font-semibold"
        v-if="useStore.isLoggedIn === true"  
      >what's up, {{ useStore.name }} !</span
      >
    </div>
    <div class="flex gap-1">
      <router-link to="/info">
        <InfoIcon/>
      </router-link>
      <button class="flex " @click="useStore.logout(); $router.push('/')">
          <ExitIcon/>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";
import LogoText from "../components/LogoText.vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
import ExitIcon from "../components/ExitIcon.vue";
import InfoIcon from "../components/InfoIcon.vue";

const useStore = useUserStore();

onMounted(() => {
  useStore.autoLogin();
});
  // const  back  = () => { 
  //     router.back()
  // }
</script>

<style></style>
