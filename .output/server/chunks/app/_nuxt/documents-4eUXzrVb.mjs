import { ref } from 'vue';
import { r as defineStore } from '../server.mjs';
import { a as axios, n as nuxtStorage } from '../../nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useDocumentStore = defineStore("document-store", {
  state: () => ({
    documentList: {},
    documentItem: {},
    userList: ref({}),
    createChainForm: [],
    showDepartment: [],
    showUsersNode: [],
    chainSchedule: {},
    createForm: {
      title: "",
      description: "",
      file: "",
      src: "",
      receiver_id: ""
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
    async docSign(params) {
      await axios.patch(`api/v1/document/sign/${params.id}`, {
        second_password: params.second_password
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0414\u043E\u0441\u0442\u0443\u043F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D", { autoClose: 1e3, theme: "auto" });
      });
    },
    async loadAllDocument(params) {
      await axios.get(`api/v1/document/document-list${params.type ? "/" + params.type : ""}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.documentList = res.data;
      });
    },
    async loadDocument(params) {
      await axios.get(`api/v1/document/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.documentItem = res.data;
      });
    },
    async docCreate(params) {
      let fd = new FormData();
      fd.set("title", params.title);
      fd.set("description", params.description);
      fd.set("receiver_id", params.receiver_id);
      if (typeof params.file !== "string") {
        fd.set("file", params.file);
      }
      await axios.post(`api/v1/document/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0441\u043E\u0437\u0434\u0430\u043D", { autoClose: 1e3, theme: "auto" });
        this.loadAllDocument({ page: 1, limit: 10 });
        this.showCreateDoc = false;
      });
    },
    async docUpdate(params) {
      new FormData();
      await axios.patch(`api/v1/document/update/${params.id}`, {
        title: params.title,
        description: params.description,
        users: params.users
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A", { autoClose: 1e3, theme: "auto" });
      });
    },
    async docDelete(params) {
      await axios.delete(`api/v1/document/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { theme: "auto", autoClose: 1e3 });
      });
    }
  }
});

export { useDocumentStore as u };
//# sourceMappingURL=documents-4eUXzrVb.mjs.map
