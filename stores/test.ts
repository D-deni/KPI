import {defineStore} from "pinia";
import {useAuthStore} from "~/stores/auth";
import {toast} from "vue3-toastify";
import axios from "~/composables/axios";
import {Router} from "vue-router";
import nuxtStorage from "nuxt-storage/nuxt-storage";
export const useTestList = defineStore('test-list', {
  state: () => ({
    test: {},
    testIQ: {},
    testSpecial: {},
    currentTest: {},
    exam: {},
  }),
  getters: {
    get_all_exam(exam) {
      return this.exam
    },
    get_test(test) {
      return this.test
    },
    get_current_test(currentTest) {
      return this.currentTest
    },
    get_all_test(test) {
      return this.test
    },
    get_test_iq(testIQ) {
      return this.testIQ
    },
    get_test_special(testSpecial) {
      return this.testSpecial
    }
  },
  actions: {
    async loadAllTest(params: { page: number, limit: number, usual?: number }) {
      axios.get(`api/v1/test/test-list?page=${params.page}&limit=${params.limit}&usual=${params.usual}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(response => {
        if(params.usual !== 0) {
          this.testIQ = response.data
        } else {
          this.testSpecial = response.data
        }
      })
    },
    async loadExam() {
      axios.get(`api/v1/exam/exam-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.test = res.data
      })
    },
    async loadCurrentTest() {
      axios.get(`api/v1/exam/current-test`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.currentTest = res.data
      }).catch(e=>{
        useAuthStore().exam_active = false
      })
    },

    async testStart(params: { usual: any }, router: Router) {
      axios.post(`api/v1/exam/start`, {usual: params.usual}, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.test = res.data
        this.loadCurrentTest()
        useAuthStore().exam_active = true
        useAuthStore().loadCurrentUser()
        router.push('/base/tests/exam')
      })
    },
    async testAnswer(params: { answer: any, test_id: any }, router: Router) {
      axios.post(`api/v1/exam/answer`, {
        test_id: params.test_id,
        answer: params.answer
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.loadCurrentTest()
        useAuthStore().loadCurrentUser()
      }).catch(e => {
        router.push('/base/tests')
      })
    },
    async createTest(params: { test: any, options: any, answer: any }) {
      axios.post(`api/v1/test/create`, {
        answer_text: params.answer,
        options_list: params.options,
        question: params.test.question,
        department_id: params.test.department_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.test = res.data
        toast.success('Тест успешно создан', {autoClose: 1500, theme: 'auto'})
      })
    },
    async deleteTest(params: { test_id: number }) {
      axios.delete(`api/v1/test/delete/${params.test_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        toast.success('Тест успешно удалён', {autoClose: 1500, theme: 'auto'})
        this.test = res.data
        this.loadAllTest({page: 1, limit: 20})
      }).catch(e => {
        toast('Ошибка', {theme: "auto", autoClose: 1500})
      })
    }
  }
})
