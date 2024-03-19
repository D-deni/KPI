import {defineStore} from "pinia";
import axios from "~/composables/axios";
import nuxtStorage from "nuxt-storage/nuxt-storage";
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
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=> {
        this.tree = res.data
      })
    }
  }
})

