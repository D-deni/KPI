import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import {Router} from "vue-router";
import nuxtStorage from "nuxt-storage/nuxt-storage";

export const useCompanies = defineStore('current-company', {
  state: () => ({
    company: {
      id: '',
      name: '',
      address: '',
      created_at: '',
      description: '',
      email: '',
      logo_file: '',
      users_count: '',
      departments_count: '',
      objects_count: ''
    },
    news: {
      title: '',
      description: '',
      photo: '',
      photo_url: ''
    },
    department: {
      id: '',
      name: '',
      participants: []
    },
    current_department: {
      id: '',
      name: '',
      participants: []
    }
  }),
  getters: {
    current_company(company) {
      return this.company
    },
    get_all_company(company) {
      return this.company
    },
    get_all_news(news) {
      return this.news
    },
    get_all_department(department) {
      return this.department
    },
    get_department(current_department){
      return this.current_department
    }
  },
  actions: {
    async loadCurrentCompany() {
      await axios.get('api/v1/company/my-company', {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.company = response.data
      })
    },
    async loadCompanyList(params: { page: number, limit: number, query: string }) {
      await axios.get(`api/v1/company/company-list?page=${params.page}&limit=${params.limit}&query=${params.query}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.company = response.data
      })
    },
    async loadCompany(params: { id: number }) {
      await axios.get(`api/v1/company/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.company = response.data
      })
    },
    async loadDepartmentList() {
      await axios.get('api/v1/department/department-list', {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.department = response.data
      })
    },
    async loadDepartment(params: { id: number }) {
      await axios.get(`api/v1/department/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.current_department = response.data
      })
    },

    async loadNewsList() {
      await axios.get(`api/v1/news/news-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.news = response.data
      })
    },
    async loadNews(params: { id: number }) {
      await axios.get(`api/v1/news/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.news = response.data
      })
    },

    async createCompany(params: { company: any }): Promise<void> {
      let fd = new FormData();
      fd.set('name', params.company.name)
      fd.set('address', params.company.address)
      fd.set('description', params.company.description)
      fd.set('email', params.company.email)
      if (typeof params.company.logo_file !== 'string') {
        fd.set('logo_file', params.company.logo_file)
      }
      await axios.post(`api/v1/company/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        this.company = response.data
        toast.success('Компания успешно создана', {autoClose: 1500, theme: 'auto'})
        this.loadCompanyList({page: 1, limit: 5, query: ''})
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    },

    async createDepartment(params: { department: any }) {
      await axios.post(`api/v1/department/create`, {
        name: params.department.name,
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.department = res.data
        this.loadDepartmentList()
      }).catch(e => {
        toast.error('Ошибка при создании', {theme: 'auto', autoClose: 1500})
      })
    },
    async deleteDepartment(params: {id: any}, router: Router) {
      await axios.delete(`api/v1/department/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешно удалён', {autoClose: 1500, theme: 'auto'})
        this.department = res.data
        router.go(-1)
      })
    }
  }
})