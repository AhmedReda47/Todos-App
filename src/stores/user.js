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
      localStorage.setItem("currentUser", JSON.stringify({id, name:userName}));
      this.isLoggedIn = true;
    },
    async autoLogin() {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        const user = JSON.parse(storedUser)
        try {
          const { data } = await axios.get(
            `http://localhost:5000/users/${user.id}`
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
        this.name = '',
        this.id = '',
        this.isLoggedIn = false,
        localStorage.removeItem('currentUser')
    }
  }
});
