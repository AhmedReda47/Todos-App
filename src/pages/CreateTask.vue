<template>
  <div>
    <NavLayout class="mb-3"/>
    <div v-if="tasks.length > 0">
      <div v-for="(task, index) in tasks" :key="index" class="bg-primary/60 group p-5 w-full rounded-lg mt-2 flex justify-between items-center gap-10">
        <div class="flex items-center gap-5 w-full">
          <span @click="toggleFinished(task)" class="h-7 w-7 flex top-4 justify-between gap-20  items-center left-5 rounded-full  border-2 cursor-pointer  border-primary">
          <svg v-show="task.finished" xmlns="http://www.w3.org/2000/svg" class="h-6 text-primary" fill="currentColor" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z"/></svg>
        </span>
          <input v-model="task.title" :class="task.finished ? 'line-through' : ''" type="text" disabled class="outline-none bg-transparent  pr-32 w-1/2">
        </div>
        <div class="flex items-center gap-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-primary" fill="currentColor" viewBox="0 0 640 640"><path d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z"/></svg>
          <svg @click="deleteTask(task.id)" xmlns="http://www.w3.org/2000/svg" class="h-6 text-primary" fill="currentColor" viewBox="0 0 640 640"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
        </div>
      </div>
    </div>
    <BeforeCreateTask v-else/>

    <TaskButton>
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
    </TaskButton>
    <TaskButton>
      <div class="flex justify-center items-center">
        <span
          class="w-12 h-12 flex justify-center items-center rounded-full fixed right-5  bg-primary shadow-xl shadow-primary/50 hover:bg-secondary cursor-pointer"
          :class="['fixed right-5', isOpen ? 'bottom-28' : 'bottom-5']"
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
          v-model="newTaskTitle"
          v-show="isOpen"
          @keyup.enter="addTask"
          placeholder="Task title"
          class="w-3/4 fixed bottom-28 right-28 focus:shadow-xl focus:shadow-primary/50 border-2 border-primary outline-none px-4 py-2.5 rounded-full shadow-md text-sm sm:text-base"
        />
      </div>
    </TaskButton>
  </div>
</template>

<script setup>
import NavLayout from "../layouts/NavLayout.vue";
import BeforeCreateTask from "../components/BeforeCreateTask.vue";
import TaskButton from "../components/TaskButton.vue";
import { ref, onMounted } from "vue";
import { useTaskStore } from "../stores/tasks";
import { storeToRefs } from "pinia";

const isOpen = ref(false);
const finished = ref(false);
const taskTitle = ref("");
const newTaskTitle = ref("");
const taskShow = ref(0);
const taskStore = useTaskStore();
const {tasks} = storeToRefs(taskStore);

async function addTask() {
  if(!newTaskTitle.value.trim()) return;
  await taskStore.addTask(newTaskTitle.value, 1);
  newTaskTitle.value = "";
  isOpen.value = false;
}
async function toggleFinished(task) {
  await taskStore.toggleFinished(task);
}
async function deleteTask(id){
  await taskStore.deleteTask(id);
}
onMounted(() => {
  const taskStore = useTaskStore();
  tasks.value = taskStore.tasks;  
})
</script>

<style scoped></style>
