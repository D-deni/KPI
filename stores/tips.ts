import {defineStore} from "pinia";
import nuxtStorage from "nuxt-storage/nuxt-storage";

type ReplaceValues<T, TReplace, TWith> = { [K in keyof T]: T[K] extends TReplace ? TWith : T[K] };

type ConditionalTip<T> = T extends { allTips: false }
  ? ReplaceValues<T, boolean, boolean>
  : T;

type UpdatedTips = ConditionalTip<AllTips>

interface AllTips {
  allTips?: boolean,
  documentTip?: boolean,
  cloudTip?: boolean
}

export const tipsStorage = nuxtStorage.localStorage.getData('allTipsStorage')
const setData = (name: any, data: any): void =>{
  nuxtStorage.localStorage.setData(name, data)
}

export const useTips = defineStore('tips', {
  state: () => ({
    showTips: false,
    allTips: true,
    documentTip: true,
    cloudTip: true
  }),
  getters: {
    getAllTips: (state) => state.allTips,
    getDocumentTip: (state) => state.documentTip,
    getCloudTop: (state) => state.cloudTip
  },
  actions: {
    setAllTips(value: boolean) {
      this.allTips = value
      console.log(value)
    },
    setDocumentTip(value: boolean) {
      this.documentTip = value
      setData('allTipsStorage', this.documentTip)
    },
    setCloudTip(value: boolean) {
      this.cloudTip = value
    },
    mergeTips(allTipsEnabled: UpdatedTips, allTipsDisable: UpdatedTips, otherTips: UpdatedTips,) {
      if (allTipsEnabled.allTips) {
        Object.assign(this, allTipsEnabled, otherTips)
      } else {
        Object.assign(this, allTipsDisable)
      }
    }
  }
})