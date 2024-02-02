import {defineStore, type PiniaCustomProperties} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage";

export const useDocumentStore = defineStore('document-store', {

  state: () => ({
    documentList: {},
    documentItem: {},
    userList: ref({}),
    createChainForm: [],
    showDepartment: [],
    showUsersNode: [],
    chainSchedule: {},
    createForm: {
      title: '',
      description: '',
      file: '',
      src: '',
      receiver_id: ''
    },
    draggableUser: null,
    showContext: null,
    showContextDepartment: null,
    showWarn: false,
    showCreateDoc: false,
    showRejectedWarn: false
  }),
  getters: {
    get_all_document: (state) => state.documentList
  },
  actions: {
    async docSign(params: { id: number, second_password: string | number }): Promise<void> {
      await axios.patch(`api/v1/document/sign/${params.id}`, {
        second_password: params.second_password
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Доступ разрешен', {autoClose: 1000, theme: 'auto'})
      })
    },
    async loadAllDocument(params: { page: number, limit: number, type?: any }): Promise<void> {
      await axios.get(`api/v1/document/document-list${params.type ? '/' + params.type : ''}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.documentList = res.data
      })
    },

    async loadDocument(params: { id: readonly string[] | number[] }): Promise<void> {
      await axios.get(`api/v1/document/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.documentItem = res.data

      })
    },

    async docCreate(params: { title: any, description: any, receiver_id: any, file: any }): Promise<void> {
      let fd = new FormData()
      fd.set('title', params.title)
      fd.set('description', params.description)
      fd.set('receiver_id', params.receiver_id)
      if (typeof params.file !== 'string') {
        fd.set('file', params.file)
      }
      await axios.post(`api/v1/document/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Документ создан', {autoClose: 1000, theme: 'auto'})
        this.loadAllDocument({ page: 1, limit: 10})
        this.showCreateDoc = false
      })
    },

    async docUpdate(params: { title?: any, description?: any, users: any, id: any }): Promise<void> {
      let fd = new FormData()
      // fd.set('users', params.users)
      // fd.set('title', params.title)
      // fd.set('description', params.description)
      await axios.patch(`api/v1/document/update/${params.id}`, {
        title: params.title,
        description: params.description,
        users: params.users,
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешный запуск', {autoClose: 1000, theme: 'auto'})
      })
    },

    async docDelete(params: { id: any }) {
      await axios.delete(`api/v1/document/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Успешно удалён', {theme: 'auto', autoClose: 1000})

      })
    }
  }
})