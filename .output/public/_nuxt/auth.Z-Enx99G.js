import{w as i}from"./entry.8VLqy_2K.js";import{a,n as o,l as r}from"./index.aX4wazua.js";const u=i("user-list",{state:()=>({user:{id:"",first_name:"",last_name:"",password:"",email:"",photo_file:"",photo:"",position_id:"",position_name:"",position:[{id:"",name:""}],role_id:"",role_name:"",role_en:"",role:{id:"",name:""},phone:"",department_id:"",department:"",company:"",company_id:"",salary:"",date_of_birth:"",permissions:[]},roleList:[],userSearch:{},permissions:[],page:1}),getters:{get_user_list:e=>e.user,get_user_search:e=>e.userSearch,get_position_list:e=>e.user.position,get_role_list:e=>e.roleList,get_permission_list:e=>e.permissions},actions:{async loadUserList(e){await a.get(`api/v1/user/${e.user_type}?query=${e.query}&page=${e.page}&limit=${e.limit}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(t=>{this.user=t.data})},async loadUser(e){a.get(`api/v1/user/${e.id}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(t=>{this.user=t.data}).catch(t=>{})},async searchUser(e){a.get(`api/v1/user/user-list/my-company?search=${e.search}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(t=>{this.userSearch=t.data})},async createUser(e){let t=new FormData;t.set("first_name",e.first_name),t.set("last_name",e.last_name),t.set("email",e.email),t.set("password",e.password),t.set("date_of_birth",e.date_of_birth.toISOString()),t.set("photo_file",e.photo_file),t.set("phone",e.phone),t.set("position_id",e.position_id),t.set("role_id",e.role_id),this.user.role_en==="admin"?t.set("company_id",e.company_id):t.set("department_id",e.department_id),typeof e.photo_file!="string"&&t.set("photo_file",e.photo_file),a.post("api/v1/user/create",t,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(s=>{this.user=s.data,this.loadUserList({user_type:"user-list/my-company",limit:5,page:1,query:""})}).catch(s=>{})},async deleteUser(e,t){a.delete(`api/v1/user/delete/${e.user_id}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(s=>{this.user=s.data,t.push("/base/users"),r.success("Пользователь успешно удалён",{autoClose:1500,theme:"auto"})}).catch(s=>{r.error(s,{autoClose:1500,theme:"auto"})})},async loadPositionList(){a.get("api/v1/position/position-list",{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.user.position=e.data})},async loadRoleList(){a.get("api/v1/role/role-list",{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.roleList=e.data})},async loadPermissions(){a.get("api/v1/permission/permission-list",{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.permissions=e.data})}}}),d=i("authUser",{state:()=>({current_user:{id:null,email:"",password:"",date_of_birth:"",first_name:"",last_name:"",company_id:"",phone:"",photo:"",position:"",role:"",role_en:"",status:"",passport:"",salary:{},permissions:[]},user:{},permissions:[],exam_active:!1,openNotification:!1,openSettings:!1,my_scroll:0}),getters:{get_current_user(e){return this.current_user},get_user(e){return this.user},get_server_domain(){return"https://api-buildwithus.ai-softdev.com"}},actions:{async authorize(e,t){await a.post("api/v1/auth/login",{email:e.email,password:e.password},{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(s=>{o.localStorage.setData("token",s.data.access),this.loadCurrentUser(),t.push("/base/companies").then(n=>{r.success("Успешная авторизация",{autoClose:1500,theme:"auto"})})}).catch(s=>{t.push("/"),r.error("Неверный логин или пароль",{autoClose:1500,theme:"auto"})})},async loadCurrentUser(){await a.get("api/v1/user/current-user",{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.user=e.data})},async update_user(e){let t=new FormData;t.set("first_name",e.user.first_name),t.set("last_name",e.user.last_name),t.set("phone",e.user.phone),t.set("password",e.user.password),t.set("salary",e.user.salary),t.set("position",e.user.position),t.set("email",e.user.email),t.set("date_of_birth",e.user.date_of_birth),t.set("passport",e.user.passport),e.update_type!=="update-my"&&(t.set("permissions_ids",e.permissions_ids),t.set("role_id",e.user.role_id)),typeof e.user.photo=="string"&&t.set("photo",e.user.photo),await a.patch(`api/v1/user/${e.update_type}`,t,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(s=>{e.update_type!=="update-my"?(this.current_user=s.data,u().loadUser({id:e.user.id})):(this.loadCurrentUser(),this.user=s.data),r.success("Данные успешно обновлены",{autoClose:1500,theme:"auto"})}).catch(s=>{r.error(s,{autoClose:1500,theme:"auto"})})}}});export{u as a,d as u};
