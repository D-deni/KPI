import {defineStore} from "pinia";
import axios from "~/composables/axios";
import nuxtStorage from "nuxt-storage/nuxt-storage";
import {toast} from "vue3-toastify";
import type {ICurrentCategory, TGoods} from "~/types/storage";

export const useStorageStore = defineStore('storage', {
  state: () => ({
    isActive: false,
    createCategory: false,
    storageCategoryList: [],
    storageHomeAllList: [],
    storageItem: {} as TGoods,
    currentCategory: {} as ICurrentCategory,
    scan: ref(null),
    searchGoods: '',
    streaming: false,
  }),
  getters: {
    getStorageCategoryList: (state) => state.storageCategoryList,
    getStorageSubCategory: (state) => state.currentCategory,
    getStorageHomeAllList: (state) => state.storageHomeAllList,
    getStorageItem: (state) => state.storageItem
  },
  actions: {
    async loadStorageCategoryList(): Promise<void> {
      await axios.get(`api/v1/store/category/category-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.storageCategoryList = res.data
      })
    },
    async loadStorageSubCategory(params: {slug: string | string[]}): Promise<void> {
      await axios.get(`api/v1/store/subcategory/${params.slug}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=> {
        this.currentCategory = res.data

      }).catch(e=> {
      })
    },
    async loadAllList(): Promise<void> {
      await axios.get(`api/v1/store/item/item-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=> {
        this.storageHomeAllList = res.data
      })
    },

    async createStorageCategoryOrSubcategory(params: {createType?: string, name: string, category_id?: number}): Promise<void> {
      await axios.post(`api/v1/store/${params.createType}/create`,{
        name: params.name,
        category_id: params.createType === 'subcategory' ? params.category_id : null
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=> {
        this.loadStorageCategoryList()
        this.createCategory = false
        toast.success('Успешно создано', {autoClose: 1500, theme: 'auto'})
      }).catch(e=> {
        toast.error('Возникла ошибка при создании', {autoClose: 1500, theme: 'auto'})
      })
    },
    async deleteStorageElem(params: {deleteType: string, id: number}): Promise<void> {
      await axios.delete(`api/v1/store/${params.deleteType}/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=> {
        if(['subcategory', 'category'].includes(params.deleteType)) {
          this.loadStorageCategoryList()
        }
        toast.success('Успешно удалён', {autoClose: 1500, theme: 'auto'})
      })
    }
  }
})