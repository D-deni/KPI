import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import {Router} from "vue-router";
export const useTaskList = defineStore('task-list', {
  state: () => ({
    searchList: {},
    task: {
      id: '',
      title: '',
      description: '',
      status: '',
      author_name: '',
      author_file: '',
      created_at: '',
      updates_at: '',
      deadline: '',
      author_file_file: '',
      performers: [],
      main_performer: {},
      respondent: {},
      worth: '',
      performer_file: [],
      task_type: ''
    },
    stats: {
      id: '',
      status: '',
      count: {}
    }
  }),
  getters: {
    get_tasks: (state) => state.task,
    get_task: (state) => state.task,
    get_stats: (state) => state.stats,
    get_search_task: (state) => state.searchList
  },
  actions: {
    async loadTasksLists(params: { page: number, limit: number, query: any, task_type: string }) {
     await axios.get(`api/v1/task/${params.task_type}?query=${params.query}&page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.task = response.data
        this.searchList = response.data
      })
    },
    async loadCurrentTask(params: {id: any}){
      await axios.get(`api/v1/task/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.task = res.data
      })
    },
    async create_task(params: { task: any, performers_ids: any }) {
      let formD = new FormData();
      formD.set('title', params.title)
      formD.set('description', params.description)
      formD.append('deadline', params.deadline.toISOString())
      formD.set('main_performer_id', params.main_performer_id)
      formD.set('performers', params.performers_ids)
      formD.set('worth', params.worth)
      if (typeof params.author_file_file !== 'string') {
        for(let i of params.author_file_file){
          formD.append('author_files', i)

        }
      }
      console.log(params.performers)
      console.log(typeof params.performers)
      axios.post(`api/v1/task/create`, formD, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.task = response.data
        this.loadTasksLists({task_type: 'task-list', query: '', limit: 5, page: 1})
        toast.success('Вы успешно создали задание', {autoClose: 1500, theme: 'auto'})
      })
    },
    async update_task(params: { task: any }) {
      let fd = new FormData();
      fd.set('title', params.task.title)
      fd.set('description', params.task.description)
      fd.set('status', params.task.status)
      fd.set('performers', params.task.performers)
      fd.set('respondent', params.task.respondent)
      if (params.task.author_file) {
        fd.set('author_file', params.task.author_file)
      }
      await axios.patch(`api/v1/task/update/${params.task.id}`, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.task = response.data
        this.loadCurrentTask({id: this.task.id})
        toast.success('Данные успешно обновлены', {autoClose: 1500, theme: 'auto'})
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    },
    async addUser_task(params: {id: any, performers: any}){
      let fd = new FormData()
      fd.set('performers', params.performers)
      await axios.patch(`api/v1/task/add-by-users/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.task = res.data
        this.loadTasksLists()
        toast.success('Успешно добавлены', {autoClose: 1500, theme: 'auto'})
      })
    },
    async deleteUser_task(params: {id: any, user_id: any}) {
      await axios.patch(`api/v1/task/remove-user/${params.id}`, {
        user_id: params.user_id
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.task = res.data
        this.loadTasksLists()
        toast.success('Успешно удалены', {autoClose: 1500, theme: 'auto'})
      })
    },
    async delete_task(params: {id: any}, router: Router) {
      await axios.delete(`api/v1/task/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.task = res.data
        router.push('/base/tasks').then(res=>{
          toast.success('Успешно удалён', {theme: 'auto', autoClose: 1500})
        })
      })
    },
    async loadTasksStats(params: { task_filter: string }) {
     await axios.get(`api/v1/task/stats?${params.task_filter}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.stats = response.data
      })
    },
    async taskWatching(params: { task_status: any, id: any, performer_files: any}) {
      let fd = new FormData()
      if (typeof params.performer_files !== 'string') {
        for(let i of params.performer_files){
          fd.append('performer_files', i)
        }
      }
      await axios.post(`api/v1/task/${params.task_status}/${params.id}`,fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.task = response.data
        this.loadCurrentTask({id: params.id})
        toast.success('Статус успешно изменён', {autoClose: 1500, theme: "auto"})
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    },
    async change_taskStatus(params: { task_status: any, id: any, comment: any}) {
      let form = new FormData()
      form.set('comment', params.comment)
      await axios.post(`api/v1/task/${params.task_status}/${params.id}`, form , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.task = response.data
        this.loadCurrentTask({id: params.id})
        toast.success('Статус успешно изменён', {autoClose: 1500, theme: "auto"})
      }).catch(e => {
        toast.error(e, {autoClose: 1500, theme: 'auto'})
      })
    }
  }
})
// api/v1/task/make-performing/id      performer
// api/v1/task/make-completed/id       performed {performer_file: FILE}
// api/v1/task/make-rejected/id        author {comment: 'asdas'}
