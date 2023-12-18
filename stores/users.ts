import axios from "~/composables/axios"
import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import {Router} from 'vue-router'

export const useUserStore = defineStore('user-list', {
  state: () => ({
    user: {
      id: '',
      first_name: '',
      last_name: '',
      password: '',
      email: '',
      photo_file: '',
      photo: '',
      position_id: '',
      position_name: '',
      position: [{
        id: '',
        name: ''
      }],
      role_id: '',
      role_name: '',
      role_en: '',
      role: {
        id: '',
        name: ''
      },
      phone: '',
      department_id: '',
      department: '',
      company: '',
      salary: '',
      date_of_birth: '',
      permissions: [],
    },
    roleList: [],
    userSearch: {},
    permissions: [],
    page: 1
  }),
  getters: {
    get_user_list: (state) => state.user,
    get_user_search: (state) => state.userSearch,
    get_position_list: (state) => state.user.position,
    get_role_list: (state) => state.roleList,
    get_permission_list: (state) => state.permissions,
  },
  actions: {
    async loadUserList(params: {
      page: number,
      limit: number,
      query: any,
      user_type: any
    }) {
      await axios.get(`api/v1/user/${params.user_type}?query=${params.query}&page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.user = response.data
      })
    },
    async loadUser(params: { id: any }) {
      axios.get(`api/v1/user/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.user = response.data
      }).catch(e => {
      })
    },
    async searchUser(params: { search: any }) {
      axios.get(`api/v1/user/user-list/my-company?search=${params.search}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.userSearch = res.data
      })
    },

    async createUser(params: { user: any }) {
      let formD = new FormData();
      formD.set('first_name', params.first_name)
      formD.set('last_name', params.last_name)
      formD.set('email', params.email)
      formD.set('password', params.password)
      formD.set('date_of_birth', params.date_of_birth.toISOString())
      formD.set('photo_file', params.photo_file)
      formD.set('phone', params.phone)
      formD.set('position_id', params.position_id)
      formD.set('role_id', params.role_id)
      this.user.role_en === 'admin' ? formD.set('company_id', params.company_id) : formD.set('department_id', params.department_id)
      if (typeof params.photo_file !== 'string') {
        formD.set('photo_file', params.photo_file)
      }
      axios.post(`api/v1/user/create`, formD, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.user = response.data
        this.loadUserList({user_type: 'user-list/my-company', limit: 5, page: 1, query: ''})
      }).catch(e => {
      })
    },
    async deleteUser(params: { user_id: number }, router: Router) {
      axios.delete(`api/v1/user/delete/${params.user_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.user = response.data
        router.push('/base/users')
        toast.success('Пользователь успешно удалён', {autoClose: 1500, theme: 'auto'})
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    },

    async loadPositionList() {
      axios.get(`api/v1/position/position-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.user.position = response.data
      })
    },
    async loadRoleList() {
      axios.get(`api/v1/role/role-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.user.role = response.data
      })
    },
    async loadPermissions() {
      axios.get(`api/v1/permission/permission-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.permissions = response.data
      })
    }
  }
})