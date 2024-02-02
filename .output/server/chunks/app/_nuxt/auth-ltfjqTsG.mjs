import { s as defineStore } from '../server.mjs';
import { a as axios, n as nuxtStorage } from '../../nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useUserStore = defineStore("user-list", {
  state: () => ({
    user: {
      id: "",
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      photo_file: "",
      photo: "",
      position_id: "",
      position_name: "",
      position: [{
        id: "",
        name: ""
      }],
      role_id: "",
      role_name: "",
      role_en: "",
      role: {
        id: "",
        name: ""
      },
      phone: "",
      department_id: "",
      department: "",
      company: "",
      company_id: "",
      salary: "",
      date_of_birth: "",
      permissions: []
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
    get_permission_list: (state) => state.permissions
  },
  actions: {
    async loadUserList(params) {
      await axios.get(`api/v1/user/${params.user_type}?query=${params.query}&page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
      });
    },
    async loadUser(params) {
      axios.get(`api/v1/user/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
      }).catch((e) => {
      });
    },
    async searchUser(params) {
      axios.get(`api/v1/user/user-list/my-company?search=${params.search}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.userSearch = res.data;
      });
    },
    async createUser(params) {
      let formD = new FormData();
      formD.set("first_name", params.first_name);
      formD.set("last_name", params.last_name);
      formD.set("email", params.email);
      formD.set("password", params.password);
      formD.set("date_of_birth", params.date_of_birth.toISOString());
      formD.set("photo_file", params.photo_file);
      formD.set("phone", params.phone);
      formD.set("position_id", params.position_id);
      formD.set("role_id", params.role_id);
      this.user.role_en === "admin" ? formD.set("company_id", params.company_id) : formD.set("department_id", params.department_id);
      if (typeof params.photo_file !== "string") {
        formD.set("photo_file", params.photo_file);
      }
      axios.post(`api/v1/user/create`, formD, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
        this.loadUserList({ user_type: "user-list/my-company", limit: 5, page: 1, query: "" });
      }).catch((e) => {
      });
    },
    async deleteUser(params, router) {
      axios.delete(`api/v1/user/delete/${params.user_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
        router.push("/base/users");
        toast.success("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async loadPositionList() {
      axios.get(`api/v1/position/position-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user.position = response.data;
      });
    },
    async loadRoleList() {
      axios.get(`api/v1/role/role-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.roleList = response.data;
      });
    },
    async loadPermissions() {
      axios.get(`api/v1/permission/permission-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.permissions = response.data;
      });
    }
  }
});
const useAuthStore = defineStore("authUser", {
  state: () => ({
    current_user: {
      id: null,
      email: "",
      password: "",
      date_of_birth: "",
      first_name: "",
      last_name: "",
      company_id: "",
      phone: "",
      photo: "",
      position: "",
      role: "",
      role_en: "",
      status: "",
      passport: "",
      salary: {},
      permissions: []
    },
    user: {},
    permissions: [],
    exam_active: false,
    openNotification: false,
    openSettings: false,
    my_scroll: 0
  }),
  getters: {
    get_current_user(current_user) {
      return this.current_user;
    },
    get_user(user) {
      return this.user;
    },
    get_server_domain() {
      return "https://api-buildwithus.ai-softdev.com";
    }
  },
  actions: {
    async authorize(params, router) {
      await axios.post("api/v1/auth/login", {
        email: params.email,
        password: params.password
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        nuxtStorage.localStorage.setData("token", response.data.access);
        this.loadCurrentUser();
        router.push("/base/companies").then((e) => {
          toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F", { autoClose: 1500, theme: "auto" });
        });
      }).catch((e) => {
        router.push("/");
        toast.error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C", { autoClose: 1500, theme: "auto" });
      });
    },
    async loadCurrentUser() {
      await axios.get("api/v1/user/current-user", {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.user = response.data;
      });
    },
    async update_user(params) {
      let fd = new FormData();
      fd.set("first_name", params.user.first_name);
      fd.set("last_name", params.user.last_name);
      fd.set("phone", params.user.phone);
      fd.set("password", params.user.password);
      fd.set("salary", params.user.salary);
      fd.set("position", params.user.position);
      fd.set("email", params.user.email);
      fd.set("date_of_birth", params.user.date_of_birth);
      fd.set("passport", params.user.passport);
      if (params.update_type !== "update-my") {
        fd.set("permissions_ids", params.permissions_ids);
        fd.set("role_id", params.user.role_id);
      }
      if (typeof params.user.photo === "string") {
        fd.set("photo", params.user.photo);
      }
      await axios.patch(`api/v1/user/${params.update_type}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        if (params.update_type !== `update-my`) {
          this.current_user = response.data;
          const user = useUserStore();
          user.loadUser({ id: params.user.id });
        } else {
          this.loadCurrentUser();
          this.user = response.data;
        }
        toast.success("\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    }
  }
});

export { useUserStore as a, useAuthStore as u };
//# sourceMappingURL=auth-ltfjqTsG.mjs.map
