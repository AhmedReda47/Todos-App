import axios from "axios";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
export const useTaskStore = defineStore("tasks", {

    state: () => ({
        tasks: [],

    }),
    actions: {
        async fetchTasks(userId) {
            const useStore = useUserStore();

            const res = await axios.get(`http://localhost:5000/tasks?userId=${userId}`, {
                params: { userId }
            })
            this.tasks = res.data;
        },
        async addTask(newTaskTitle, userId) {
            try {
                const res = await axios.post('http://localhost:5000/tasks', {
                    title: newTaskTitle,
                    userId: userId,
                    finished: false
                })
                this.tasks.push(res.data);
            } catch (error) {
                console.log("Failed to add task", error);
            }
        },
        async toggleFinished(task) {
            const oldValue = task.finished;
            task.finished = !task.finished;
            try {
                await axios.patch(`http://localhost:5000/tasks/${task.id}`, {
                    finished: task.finished
                })
            } catch (error) {
                task.finished = oldValue;
                console.log("Failed to update task", error);
            }
        },
        async deleteTask(task) {
            try {
                await axios.delete(`http://localhost:5000/tasks/${task.id}`);
                this.tasks = this.tasks.filter((t) => t.id !== id);
            } catch (error) {
                console.log("Failed to delete task", error);
            }
        }
    }
})