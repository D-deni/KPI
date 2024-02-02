import { r as defineStore } from '../server.mjs';
import { a as axios, n as nuxtStorage } from '../../nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useObjects = defineStore("object", {
  state: () => ({
    objects: {
      id: "",
      name: "",
      address: "",
      email: "",
      description: "",
      files: "",
      participants: {
        id: ""
      }
    }
  }),
  getters: {
    get_objects(object) {
      return this.objects;
    }
  },
  actions: {
    async loadObjectList() {
      axios.get(`api/v1/object/object-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.objects = response.data;
      });
    },
    async loadObject(params) {
      axios.get(`api/v1/object/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.objects = response.data;
      });
    },
    async createObject(params) {
      let fd = new FormData();
      fd.set("name", params.name);
      fd.set("address", params.address);
      fd.set("email", params.email);
      fd.set("description", params.description);
      if (typeof params.files !== "string") {
        fd.set("files", params.files);
      }
      axios.post(`api/v1/object/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.objects = response.data;
        toast.success("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430", { autoClose: 1500, theme: "auto" });
        this.loadObjectList();
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    }
  }
});

export { useObjects as u };
//# sourceMappingURL=objects-Bnj9l-O8.mjs.map
