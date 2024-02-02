import{w as i}from"./entry.mbXDUFAE.js";import{a as s,n as o,l as r}from"./index.aX4wazua.js";const d=i("task-list",{state:()=>({searchList:{},task:{id:"",title:"",description:"",status:"",author_name:"",author_file:"",created_at:"",updates_at:"",deadline:"",author_file_file:"",performers:[],main_performer:{},respondent:{},worth:"",performer_file:[],task_type:""},stats:{id:"",status:"",count:{}}}),getters:{get_tasks:t=>t.task,get_task:t=>t.task,get_stats:t=>t.stats,get_search_task:t=>t.searchList},actions:{async loadTasksLists(t){await s.get(`api/v1/task/${t.task_type}?query=${t.query}&page=${t.page}&limit=${t.limit}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.task=e.data,this.searchList=e.data})},async loadCurrentTask(t){await s.get(`api/v1/task/${t.id}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.task=e.data})},async create_task(t){let e=new FormData;if(e.set("title",t.title),e.set("description",t.description),e.append("deadline",t.deadline.toISOString()),e.set("main_performer_id",t.main_performer_id),e.set("performers",t.performers_ids),e.set("worth",t.worth),typeof t.author_file_file!="string")for(let a of t.author_file_file)e.append("author_files",a);console.log(t.performers),console.log(typeof t.performers),s.post("api/v1/task/create",e,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(a=>{this.task=a.data,this.loadTasksLists({task_type:"task-list",query:"",limit:5,page:1}),r.success("Вы успешно создали задание",{autoClose:1500,theme:"auto"})})},async update_task(t){let e=new FormData;e.set("title",t.task.title),e.set("description",t.task.description),e.set("status",t.task.status),e.set("performers",t.task.performers),e.set("respondent",t.task.respondent),t.task.author_file&&e.set("author_file",t.task.author_file),await s.patch(`api/v1/task/update/${t.task.id}`,e,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(a=>{this.task=a.data,this.loadCurrentTask({id:this.task.id}),r.success("Данные успешно обновлены",{autoClose:1500,theme:"auto"})}).catch(a=>{r.error(a,{autoClose:1500,theme:"auto"})})},async addUser_task(t){let e=new FormData;e.set("performers",t.performers),await s.patch(`api/v1/task/add-by-users/${t.id}`,e,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(a=>{this.task=a.data,this.loadTasksLists(),r.success("Успешно добавлены",{autoClose:1500,theme:"auto"})})},async deleteUser_task(t){await s.patch(`api/v1/task/remove-user/${t.id}`,{user_id:t.user_id},{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.task=e.data,this.loadTasksLists(),r.success("Успешно удалены",{autoClose:1500,theme:"auto"})})},async delete_task(t,e){await s.delete(`api/v1/task/delete/${t.id}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(a=>{this.task=a.data,e.push("/base/tasks").then(n=>{r.success("Успешно удалён",{theme:"auto",autoClose:1500})})})},async loadTasksStats(t){await s.get(`api/v1/task/stats?${t.task_filter}`,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(e=>{this.stats=e.data})},async taskWatching(t){let e=new FormData;if(typeof t.performer_files!="string")for(let a of t.performer_files)e.append("performer_files",a);await s.post(`api/v1/task/${t.task_status}/${t.id}`,e,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(a=>{this.task=a.data,this.loadCurrentTask({id:t.id}),r.success("Статус успешно изменён",{autoClose:1500,theme:"auto"})}).catch(a=>{r.error(a,{autoClose:1500,theme:"auto"})})},async change_taskStatus(t){let e=new FormData;e.set("comment",t.comment),await s.post(`api/v1/task/${t.task_status}/${t.id}`,e,{headers:{Authorization:`Bearer ${o.localStorage.getData("token")}`}}).then(a=>{this.task=a.data,this.loadCurrentTask({id:t.id}),r.success("Статус успешно изменён",{autoClose:1500,theme:"auto"})}).catch(a=>{r.error(a,{autoClose:1500,theme:"auto"})})}}});export{d as u};
