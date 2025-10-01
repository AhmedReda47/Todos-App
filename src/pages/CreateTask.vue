<template>
  <div>
    <NavLayout class="mb-3"/>
    <div class="bg-primary/60 h-14 w-full rounded-lg mt-2">
      <span class="h-5 w-5 rounded-full border-1 border-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-primary" fill="currentColor" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z"/></svg>
      </span>
    </div>
    <BeforeCreateTask />

    <task-button>
      <span
        class="w-12 h-12 flex justify-center items-center rounded-full fixed right-5 bottom-5 bg-primary shadow-xl shadow-primary/50 hover:bg-secondary cursor-pointer"
        @click="isOpen = false"
      >
        <svg
          class="w-7"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
          />
        </svg>
      </span>
    </task-button>
    <task-button>
      <div class="flex justify-center items-center gap-10">
        <span
          class="w-12 h-12 flex justify-center items-center rounded-full fixed right-5 bottom-5 bg-primary shadow-xl shadow-primary/50 hover:bg-secondary cursor-pointer"
          :class="{ 'bottom-28': isOpen === true }"
          @click="isOpen = true"
        >
          <svg
            class="w-7"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
            />
          </svg>
        </span>
        <input
          v-show="isOpen"
          placeholder="Task title"
          class="fixed bottom-28 left-1/2 transform -translate-x-1/2 w-[60%] sm:w-[80%] md:w-[70%] lg:w-[90%] focus:shadow-xl focus:shadow-primary/50 border-2 border-primary outline-none px-4 py-2.5 rounded-full shadow-md text-sm sm:text-base"
        />
      </div>
    </task-button>
  </div>
</template>

<script setup>
import NavLayout from "../layouts/NavLayout.vue";
import BeforeCreateTask from "../components/BeforeCreateTask.vue";
import TaskButton from "../components/TaskButton.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped></style>
