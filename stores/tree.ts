import {defineStore} from "pinia";
import axios from "~/composables/axios";

export const useTreeStore = defineStore('useTree', {
  state: ()=>({
    tree: {},
    treeFullScreen: false
  }),
  getters: {
    get_list(tree: any) {
      return this.tree
    }
  },
  actions: {
    async loadTreeList(){
      axios.get(`api/v1/user/tree`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res=> {
        this.tree = res.data
      })
    }
  }
})

