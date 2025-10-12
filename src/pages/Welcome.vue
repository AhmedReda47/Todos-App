<template>
  <div class="flex justify-center items-center flex-col gap-24 mt-32 z-50">
    <LogoText class="text-7xl xl:text-9xl" />
    <h2 class="text-3xl md:text-5xl font-semibold text-text" v-if="useStore.isLoggedIn">
      Welcome back {{ useStore.name }}
    </h2>
    <h2 class="text-5xl font-semibold text-text" v-else>Welcome to taskvue</h2>
    <input
      v-if="useStore.isLoggedIn === false"
      v-model="inputName"
      @keyup.enter="login"
      type="text"
      placeholder="your name"
      class="border-primary border-2 rounded-lg p-1 px-3 font-nunito outline-none"
    />
    <LoginButton @click="login" />
  </div>
</template>

<script setup>
import LoginButton from "../components/LoginButton.vue";
import LogoText from "../components/LogoText.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { onMounted, ref } from "vue";
import api from "../api/axios";

const router = useRouter();
const useStore = useUserStore();
const inputName = ref();

async function login() {
  // const savedId = localStorage.getItem("currentUser")
  if (useStore.isLoggedIn) {
    await useStore.autoLogin();
    router.push('/create-task');
    return;
  }
   if (!inputName.value?.trim()) return;

  try {
    const {data} = await api.get(`/users?name=${inputName.value}`);

    let user;
    if(data.length > 0){
      user = data[0]
    } else {
      const res = await api.post("/users", {
        name: inputName.value
      });
      user = res.data
    }
    useStore.login(user.name, user.id);
    router.push("/create-task");
  } catch (error) {
    console.log("Login failed:", error);
  }
}

onMounted(async () => {
  await useStore.autoLogin();
  if (useStore.isLoggedIn) router.push('/create-task');
})
</script>

<style scoped></style>
