import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import {useUserStore} from "~/stores/users";
import {Router} from "vue-router";

export const useAuthStore = defineStore('authUser', {
  state: () => ({
    current_user: {
      id: null,
      email: '',
      password: '',
      date_of_birth: '',
      first_name: '',
      last_name: '',
      company_id: '',
      phone: '',
      photo: '',
      position: '',
      role: '',
      role_en: '',
      status: '',
      passport: '',
      salary: {},
      permissions: []
    },
    user: {},
    permissions: [],
    exam_active: false,
    openNotification: false,
    openSettings: false,
    my_scroll: 0,
  }),
  getters: {
    get_current_user(current_user) {
      return this.current_user
    },
    get_user(user){
      return this.user
    },
    get_server_domain(){
      return 'https://api-buildwithus.ai-softdev.com'
    }
  },
  actions: {
    async authorize(params: { email: any, password: any }, router: Router) {
      await axios.post('api/v1/auth/login', {
        email: params.email,
        password: params.password,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        localStorage.setItem('token', response.data.access)
        this.loadCurrentUser()
        router.push('/base/companies').then(e=>{
          toast.success('Успешная авторизация', {autoClose: 1500, theme: 'auto'})
        })
      }).catch(e => {
        router.push('/')
        toast.error('Неверный логин или пароль', {autoClose: 1500, theme: "auto"})
      })
    },
    async loadCurrentUser() {
     await axios.get('api/v1/user/current-user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.user = response.data
      })
    },
    async update_user(params: { user: any, update_type: any, permissions_ids: any }) {
      let fd = new FormData();
      fd.set('first_name', params.user.first_name)
      fd.set('last_name', params.user.last_name)
      fd.set('phone', params.user.phone)
      fd.set('password', params.user.password)
      fd.set('salary', params.user.salary)
      fd.set('position', params.user.position)
      fd.set('email', params.user.email)
      fd.set('date_of_birth', params.user.date_of_birth)
      fd.set('passport', params.user.passport)
      if (params.update_type !== 'update-my') {
        fd.set('permissions_ids', params.permissions_ids)
        fd.set('role_id', params.user.role_id)
      }
      if (typeof params.user.photo === 'string') {
        fd.set('photo', params.user.photo)
      }
      await axios.patch(`api/v1/user/${params.update_type}`, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        if(params.update_type !== `update-my`) {
          this.current_user = response.data
          const user = useUserStore()
          user.loadUser({id: params.user.id})
        } else {
          this.loadCurrentUser()
          this.user = response.data
        }
        toast.success('Данные успешно обновлены', {autoClose: 1500, theme: 'auto'})
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    }
  },
})