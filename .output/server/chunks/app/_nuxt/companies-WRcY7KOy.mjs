import { r as defineStore } from '../server.mjs';
import { a as axios, n as nuxtStorage } from '../../nuxt-storage.mjs';
import { toast } from 'vue3-toastify';

const useCompanies = defineStore("current-company", {
  state: () => ({
    company: {
      id: "",
      name: "",
      address: "",
      created_at: "",
      description: "",
      email: "",
      logo_file: "",
      users_count: "",
      departments_count: "",
      objects_count: ""
    },
    news: {
      title: "",
      description: "",
      photo: "",
      photo_url: ""
    },
    department: {
      id: "",
      name: "",
      participants: []
    },
    current_department: {
      id: "",
      name: "",
      participants: []
    }
  }),
  getters: {
    current_company(company) {
      return this.company;
    },
    get_all_company(company) {
      return this.company;
    },
    get_all_news(news) {
      return this.news;
    },
    get_all_department(department) {
      return this.department;
    },
    get_department(current_department) {
      return this.current_department;
    }
  },
  actions: {
    async loadCurrentCompany() {
      await axios.get("api/v1/company/my-company", {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
      });
    },
    async loadCompanyList(params) {
      await axios.get(`api/v1/company/company-list?page=${params.page}&limit=${params.limit}&query=${params.query}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
      });
    },
    async loadCompany(params) {
      await axios.get(`api/v1/company/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
      });
    },
    async loadDepartmentList() {
      await axios.get("api/v1/department/department-list", {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.department = response.data;
      });
    },
    async loadDepartment(params) {
      await axios.get(`api/v1/department/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.current_department = response.data;
      });
    },
    async loadNewsList() {
      await axios.get(`api/v1/news/news-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.news = response.data;
      });
    },
    async loadNews(params) {
      await axios.get(`api/v1/news/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.news = response.data;
      });
    },
    async createCompany(params) {
      let fd = new FormData();
      fd.set("name", params.company.name);
      fd.set("address", params.company.address);
      fd.set("description", params.company.description);
      fd.set("email", params.company.email);
      if (typeof params.company.logo_file !== "string") {
        fd.set("logo_file", params.company.logo_file);
      }
      await axios.post(`api/v1/company/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.company = response.data;
        toast.success("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430", { autoClose: 1500, theme: "auto" });
        this.loadCompanyList({ page: 1, limit: 5, query: "" });
      }).catch((e) => {
        toast.error(e, { autoClose: 1500, theme: "auto" });
      });
    },
    async createDepartment(params) {
      await axios.post(`api/v1/department/create`, {
        name: params.department.name
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.department = res.data;
        this.loadDepartmentList();
      }).catch((e) => {
        toast.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438", { theme: "auto", autoClose: 1500 });
      });
    },
    async deleteDepartment(params, router) {
      await axios.delete(`api/v1/department/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { autoClose: 1500, theme: "auto" });
        this.department = res.data;
        router.go(-1);
      });
    }
  }
});

export { useCompanies as u };
//# sourceMappingURL=companies-WRcY7KOy.mjs.map
