import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    id: "",
    isLoggedIn: false
  }),
  actions: {
    login(userName, id) {
      (this.name = userName), (this.id = id);
      localStorage.setItem("userId", id , "name" , userName);
      this.isLoggedIn = true;
    },
    async autoLogin() {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const { data } = await axios.get(
            `http://localhost:5000/users/${userId}`
          );
          this.name = data.name;
          this.id = data.id;
          this.isLoggedIn = true;
        } catch (error) {
          console.log("User not found", error);
          this.logout();
        }
      }
    },

    logout(){
        // this.name = '',
        // this.id = '',
        // this.isLoggedIn = false,
        // localStorage.removeItem('userId')
    }
  }
});
