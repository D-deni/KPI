import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";

export const useNotification = defineStore('notification', {
  state:()=>({
    notification: []
  }),
  getters: {
    get_notification(notification){
      return this.notification
    }
  },
  actions: {
    loadNotification(){
      axios.get(`api/v1/notification/notification-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res=>{
        this.notification = res.data
      })
    },
    readNotice(params: {id: any}){
      axios.post(`api/v1/notification/make-read/${params.id}`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.notification = res.data
        this.loadNotification()
        toast.success('Прочитано', {autoClose: 1500, theme: "auto"})
      })
    }
  }
})