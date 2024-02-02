import { s as defineStore } from '../server.mjs';
import { a as axios, n as nuxtStorage } from '../../nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useTaskList = defineStore("task-list", {
  state: () => ({
    searchList: {},
    task: {
      id: "",
      title: "",
      description: "",
      status: "",
      author_name: "",
      author_file: "",
      created_at: "",
      updates_at: "",
      deadline: "",
      author_file_file: "",
      performers: [],
      main_performer: {},
      respondent: {},
      worth: "",
      performer_file: [],
      task_type: ""
    },
    stats: {
      id: "",
      status: "",
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
    async loadTasksLists(params) {
      await axios.get(`api/v1/task/${params.task_type}?query=${params.query}&page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.task = response.data;
        this.searchList = response.data;
      });
    },
    async loadCurrentTask(params) {
      await axios.get(`api/v1/task/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.task = res.data;
      });
    },
    async create_task(params) {
      let formD = new FormData();
      formD.set("title", params.title);
      formD.set("description", params.description);
      formD.append("deadline", params.deadline.toISOString());
      formD.set("main_performer_id", params.main_performer_id);
      formD.set("performers", params.performers_ids);
      formD.set("worth", params.worth);
      if (typeof params.author_file_file !== "string") {
        for (let i of params.author_file_file) {
          formD.append("author_files", i);
        }
      }
      console.log(params.performers);
      console.log(typeof params.performers);
      axios.post(`api/v1/task/create`, formD, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.task = response.data;
        this.loadTasksLists({ task_type: "task-list", query: "", limit: 5, page: 1 });
        toast.success("\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u0435", { autoClose: 1500, theme: "auto" });
      });
    },
    async update_task(params) {
      let fd = new FormData();
      fd.set("title", params.task.title);
      fd.set("description", params.task.description);
      fd.set("status", params.task.status);
      fd.set("performers", params.task.performers);
      fd.set("respondent", params.task.respondent);
      if (params.task.author_file) {
        fd.set("author_file", params.task.author_file);
      }
      await axios.patch(`api/v1/task/update/${params.task.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.task = response.data;
        this.loadCurrentTask({ id: this.task.id });
        toast.success("\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async addUser_task(params) {
      let fd = new FormData();
      fd.set("performers", params.performers);
      await axios.patch(`api/v1/task/add-by-users/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.task = res.data;
        this.loadTasksLists();
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" });
      });
    },
    async deleteUser_task(params) {
      await axios.patch(`api/v1/task/remove-user/${params.id}`, {
        user_id: params.user_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.task = res.data;
        this.loadTasksLists();
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" });
      });
    },
    async delete_task(params, router) {
      await axios.delete(`api/v1/task/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.task = res.data;
        router.push("/base/tasks").then((res2) => {
          toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { theme: "auto", autoClose: 1500 });
        });
      });
    },
    async loadTasksStats(params) {
      await axios.get(`api/v1/task/stats?${params.task_filter}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.stats = response.data;
      });
    },
    async taskWatching(params) {
      let fd = new FormData();
      if (typeof params.performer_files !== "string") {
        for (let i of params.performer_files) {
          fd.append("performer_files", i);
        }
      }
      await axios.post(`api/v1/task/${params.task_status}/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.task = response.data;
        this.loadCurrentTask({ id: params.id });
        toast.success("\u0421\u0442\u0430\u0442\u0443\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0451\u043D", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async change_taskStatus(params) {
      let form = new FormData();
      form.set("comment", params.comment);
      await axios.post(`api/v1/task/${params.task_status}/${params.id}`, form, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.task = response.data;
        this.loadCurrentTask({ id: params.id });
        toast.success("\u0421\u0442\u0430\u0442\u0443\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0451\u043D", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    }
  }
});

export { useTaskList as u };
//# sourceMappingURL=tasks-AOpCvdFT.mjs.map
