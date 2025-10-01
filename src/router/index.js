import { createRouter, createWebHistory } from "vue-router";

import Welcome from "../pages/Welcome.vue";
import CreateTask from "../pages/CreateTask.vue";
import Info from "../pages/Info.vue";

const routes = [
  { path: "/", name: "Welcome", component: Welcome },
  { path: "/create-task", name: "create-task", component: CreateTask },
  { path: "/info", name: "info", component: Info }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
