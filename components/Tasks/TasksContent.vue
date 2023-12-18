<template>
  <div class="my-6">
    <form @submit.prevent>
      <h3 class="dark:text-white mb-6 tracking-wider">{{ $t('Поиск по заданиям') }}</h3>
      <div class="flex max-lg:flex-wrap max-md:justify-center max-md:gap-y-10">
        <TheSearch class="w-8/12 max-lg:w-6/12 max-md:w-full" v-model:model-value="params.query"
                   @search="tasksList.loadTasksLists({...params,task_type: taskChecked, query: params.query})"/>
        <TasksContentSearch></TasksContentSearch>
      </div>
    </form>
    <div v-if="tasksList.get_tasks.results" id="content" class="mx-auto">
      <div
        v-if="loadCurrentUser.user.permissions?.find(value => value.name_en === 'task.create')"
        class="flex gap-x-10 my-10 ml-10 flex-wrap max-md:mx-auto max-md:justify-center gap-y-5 ">
        <button class="p-2 rounded-xl text-black dark:text-white tracking-widest font-bold"
                :class="{'bg-blueDarkSemiLight text-white' : taskChecked === 'task-list'}"
                @click="taskChecked = 'task-list'; tasksList.loadTasksLists({page: 1, limit: params.limit, task_type: taskChecked}); console.log(taskChecked); tasksList.loadTasksStats({task_filter: `tasks_filter=${taskChecked}`})"
        >
          {{ $t('Общее') }}
        </button>
        <button class="p-2 rounded-xl text-black dark:text-white tracking-widest font-bold"
                :class="{'bg-blueDarkSemiLight text-white' : taskChecked === 'to-me'}"
                @click="taskChecked = 'to-me'; tasksList.loadTasksLists({page: 1, limit: params.limit, task_type: taskChecked}); console.log(taskChecked); tasksList.loadTasksStats({task_filter: `tasks_filter=${taskChecked}`})"
        >
          {{ $t('Для Меня') }}
        </button>
        <button class="p-2 rounded-xl text-black dark:text-white tracking-widest font-bold"
                :class="{'bg-blueDarkSemiLight text-white' : taskChecked === 'from-me'}"
                @click="taskChecked = 'from-me'; tasksList.loadTasksLists({page: 1, limit: params.limit, task_type: taskChecked}); console.log(taskChecked); tasksList.loadTasksStats({task_filter: `tasks_filter=${taskChecked}`})"
        >
          {{ $t('От Меня') }}
        </button>
        <button
          class="bg-blue-400 px-4 rounded-full text-white font-bold tracking-widest max-md:py-2 active:scale-95 transition-all duration-200"
          @click="showCreate = true; loads(); ">
          {{ $t('Создать задание') }}
        </button>
      </div>
      <TasksContentBlock v-if="params.query === ''" v-for="task of tasksList?.get_tasks.results" :task="task"/>
      <TasksContentBlock v-if="params.query !== ''" v-for="taskSearch in tasksList?.get_search_task.results" :task="taskSearch"/>
    </div>
    <div v-else class="">
      <div v-if="loadCurrentUser.user.permissions?.find(value => value.name_en === 'task.create')" class="flex mt-10 items-center gap-x-10">
        <div class="flex gap-x-4">
          <TheSceleton v-for="i in 3" border-radius="5px" width="100px" height="20px"></TheSceleton>
        </div>
        <TheSceleton border-radius="10px" width="150px" height="30px"></TheSceleton>

      </div>
      <div class="flex mt-10 flex-col gap-y-6">
        <TheSceleton v-for="i in 5" class="opacity-50" border-radius="5px" width="92%" height="120px"></TheSceleton>
      </div>
    </div>
    <div class="text-center mt-10 flex flex-col items-center gap-y-6 gap-x-10" v-if="tasksList?.get_tasks.count === 0">
      <p class="text-2xl dark:text-white font-bold tracking-widest">{{ $t('Ничего не найдено') }}</p>
      <div>
        <svg width="100px" height="100px" viewBox="0 -3.66 65.015 65.015" xmlns="http://www.w3.org/2000/svg">
          <g id="Group_99" data-name="Group 99" transform="translate(-107.858 -217.309)">
            <g id="Group_97" data-name="Group 97">
              <path id="Path_247" data-name="Path 247"
                    d="M158.251,220.766H133.473l-5.725-3.457H114.226a2.911,2.911,0,0,0-2.912,2.912v30.934a2.911,2.911,0,0,0,2.912,2.912h44.025a2.911,2.911,0,0,0,2.911-2.912V223.676A2.911,2.911,0,0,0,158.251,220.766Z"
                    fill="#48CAE4"/>
              <path id="Path_248" data-name="Path 248"
                    d="M161.162,242.6V227.133a2.914,2.914,0,0,0-2.911-2.914H114.226a2.914,2.914,0,0,0-2.912,2.914V242.6Z"
                    fill="#dce2e9"/>
              <path id="Path_249" data-name="Path 249"
                    d="M158.251,220.766H133.473l-5.725-3.457H114.226a2.911,2.911,0,0,0-2.912,2.912V221.6a2.911,2.911,0,0,1,2.912-2.912h13.522l5.725,3.455h24.778a2.913,2.913,0,0,1,2.911,2.912v-1.383A2.911,2.911,0,0,0,158.251,220.766Z"
                    fill="#ffc52f" opacity="0.5" style="mix-blend-mode: screen;isolation: isolate"/>
              <path id="Path_250" data-name="Path 250"
                    d="M161.707,226.293H110.771a2.913,2.913,0,0,0-2.913,2.913l3.456,30.933a2.911,2.911,0,0,0,2.912,2.912h44.025a2.911,2.911,0,0,0,2.911-2.912l3.455-30.933A2.912,2.912,0,0,0,161.707,226.293Z"
                    fill="#48CAE4"/>
              <path id="Path_251" data-name="Path 251"
                    d="M110.771,227.676h50.936a2.911,2.911,0,0,1,2.83,2.254l.08-.724a2.912,2.912,0,0,0-2.91-2.913H110.771a2.913,2.913,0,0,0-2.913,2.913l.081.724A2.911,2.911,0,0,1,110.771,227.676Z"
                    fill="#ffc52f" opacity="0.5" style="mix-blend-mode: screen;isolation: isolate"/>
            </g>
            <path id="Path_252" data-name="Path 252"
                  d="M161.162,260.139l.592-5.3a14.7,14.7,0,1,0-27.687,8.211h24.184A2.911,2.911,0,0,0,161.162,260.139Z"
                  fill="#8c93a1" opacity="0.6" style="mix-blend-mode: multiply;isolation: isolate"/>
            <g class="transition-all duration-200 eye-block" id="Group_98" data-name="Group 98">
              <rect id="Rectangle_36" data-name="Rectangle 36" width="4.156" height="12.401"
                    transform="translate(157.7 262.706) rotate(-45)" fill="#dce2e9"/>
              <path id="Path_253" data-name="Path 253"
                    d="M165.421,252.721a14.7,14.7,0,1,1-14.7-14.7A14.7,14.7,0,0,1,165.421,252.721Z" fill="#dce2e9"/>
              <path id="Path_254" data-name="Path 254"
                    d="M161.682,252.721a10.964,10.964,0,1,1-10.964-10.965A10.965,10.965,0,0,1,161.682,252.721Z"
                    fill="#8c93a1"/>
              <path id="Path_255" data-name="Path 255"
                    d="M150.718,262.616a9.895,9.895,0,1,1,9.894-9.9A9.9,9.9,0,0,1,150.718,262.616Z" fill="#5a6271"
                    opacity="0.6"/>
              <path class="eye" id="Path_256" data-name="Path 256"
                    d="M141.833,253.735a9.895,9.895,0,0,1,16.368-7.484A9.892,9.892,0,1,0,144.247,260.2,9.843,9.843,0,0,1,141.833,253.735Z"
                    fill="#5a6271" opacity="0.6"/>
              <path class="eye" id="Path_257" data-name="Path 257"
                    d="M150.718,257.606a4.885,4.885,0,1,1,4.885-4.885A4.888,4.888,0,0,1,150.718,257.606Z"
                    fill="#5a6271"/>
              <path class="eye" id="Path_259" data-name="Path 259"
                    d="M157.45,251.192c-.937.937-2.879.517-4.336-.94s-1.879-3.4-.942-4.335,2.879-.516,4.337.941S158.385,250.256,157.45,251.192Z"
                    fill="#f3f3f3" opacity="0.5"/>
              <path id="Path_260" data-name="Path 260"
                    d="M160.6,267.028l7.219,7.22a3.055,3.055,0,0,0,4.3-4.3l-7.219-7.219Z" fill="#5a6271"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <div class="flex justify-center gap-x-4">
    <div v-if="tasksList.get_tasks.count > 5" v-for="(page, id) in tasksList.get_tasks.links" :key="id"
         class="px-4 py-2  rounded-full cursor-pointer"
         :class="{'bg-blue-400 text-white' : page.active, 'bg-gray-200 text-black hover:bg-blue-400 hover:text-white transition-all' : !page.active}"
         @click="loadPage(page.label); tasksList.loadTasksLists({page: params.page, limit: params.limit, task_type: taskChecked, query: params.query})">
      {{ page.label }}
    </div>
  </div>
  <TheModal v-if="showCreate"
            @showModal="showCreate = !showCreate; !showCreate ? createForm.description = '' : createForm ">
    <div>
      <TheTextContent>{{ $t('Создание задания') }}</TheTextContent>
      <form
        @submit.prevent="tasksList.create_task({...createForm, performers_ids: createForm.department.participants?.filter(e=>e.value).map(i=>i.id).join(',')}); showCreate = false">
        <TaskContentCreateElems>
          <div
            v-if="loadCurrentUser.user.role_en === 'department_director' || loadCurrentUser.user.role_en === 'vice_department_director'"
            class="w-full max-lg:w-full">
            <TheInput type="text" :label="$t('Заголовок')" v-model="createForm.title"/>
          </div>
          <div v-else class="w-6/12 max-lg:w-full">
            <TheInput type="text" :label="$t('Заголовок')" v-model="createForm.title"/>
          </div>
          <div class="w-6/12 max-lg:w-full flex flex-col gap-y-2"
               v-if="loadCurrentUser.user.role_en !== 'department_director' || loadCurrentUser.user.role_en !== 'department_director'">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Отдел') }}</p>
            <select type="text" v-model="createForm.department"
                    class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1">
              <option v-for="department in companies.get_all_department.results" :value="department">
                {{ department.name }}
              </option>
            </select>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <div
            v-if="loadCurrentUser.user.role_en === 'department_director' || loadCurrentUser.user.role_en === 'vice_department_director'"
            class="w-6/12 max-lg:w-full flex flex-col gap-y-2">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Ответственный') }}</p>
            <select type="text" v-model="createForm.main_performer_id"
                    class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1">
              <option class="" v-for="performer in companies.get_department.participants" :value="performer.id">
                {{ performer.first_name + ' ' + performer.last_name }}
              </option>
            </select>
          </div>
          <div v-else class="w-6/12 max-lg:w-full flex flex-col gap-y-2">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Ответственный') }}</p>
            <select type="text" v-model="createForm.main_performer_id"
                    class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1">
              <option  v-for="main_performer in createForm.department?.participants" :value="main_performer.id">
                {{ main_performer.first_name + ' ' + main_performer.last_name }}
              </option>
            </select>
          </div>
          <div v-if="loadCurrentUser.user.role_en === 'department_director' || loadCurrentUser.user.role_en === 'vice_department_director'"
            class="w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg">
            <p class="text-md dark:text-white tracking-wider text-center">{{ $t('Исполнители') }}</p>
            <div v-for="performer in companies.current_department?.participants">
              <TheCheckbox :item="performer">
              </TheCheckbox>
              <span class="ml-10">{{ performer.first_name + ' ' + performer.last_name }}</span>
            </div>
          </div>
          <div v-else class="w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg max-h-[300px] overflow-y-auto">
            <p class="text-md dark:text-white tracking-wider text-center">{{ $t('Исполнители') }}</p>
            <div v-if="createForm.department.participants?.length > 0">
              <div v-for="performer in createForm.department.participants">
                <TheCheckboxCreateUser v-if="loadCurrentUser.user?.priority < performer.priority" :item="performer">
                </TheCheckboxCreateUser>
              </div>
            </div>
            <p v-else class="text-center tracking-widest text-gray-300 text-sm">{{ $t('В департаменте пусто') }}</p>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <div class="w-6/12 max-lg:w-full text-black">
            <TheInput type="textarea" :label="$t('Описание задания')" v-model="createForm.description"/>
          </div>
          <div class="w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border">
            <div class="text-center tracking-widest pt-4 pb-10">
              <h2 class="dark:text-white">{{ $t('Прикрепите файлы к заданию') }}</h2>
              <h2 class="text-gray-300">({{ $t('не обязательно') }})</h2>
            </div>
            <TheInput class="" type="file" id="upload-file"
                      @input="createForm.author_file_file = $event.target.files"></TheInput>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <div class="text-center">
            <p class="text-md dark:text-white tracking-wider mb-2">{{ $t('Срок до') }}</p>
            <vue-date-picker v-model="createForm.deadline" :select-text="$t('Выбрать')"
                             :min-date="new Date()"
                             :timezone="timezone"
                             :cancel-text="$t('Отменить')" placeholder="Start Typing ..." text-input
                             class="w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1" auto-apply inline
                             multi-calendars-solo/>
          </div>
        </TaskContentCreateElems>
        <TaskContentCreateElems>
          <TheButton class="py-2 px-6 rounded-full" t="button" type="danger" @click="showCreate = false">
            {{ $t('Отменить') }}
          </TheButton>
          <TheButton class="py-2 px-6 rounded-full" t="submit" type="success" @click="validationForm()">
            {{ $t('Создать') }}
          </TheButton>
        </TaskContentCreateElems>
      </form>
    </div>
  </TheModal>
</template>
<script setup lang="ts">
import TasksContentSearch from "~/components/Tasks/TaskUI/TasksContentSearch.vue";
import TasksContentBlock from "~/components/Tasks/TaskUI/TasksContentBlock.vue";
import TaskContentCreateElems from "~/components/Tasks/TaskUI/TaskContentCreateElems.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import TheCheckboxCreateUser from "~/components/User/UserUI/TheCheckboxCreateUser.vue";
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css"
import TheButton from "~/components/UI/TheButton.vue";
import {toast} from "vue3-toastify"
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheInput from "~/components/UI/TheInput.vue";
import {useCompanies} from "~/stores/companies";
import {useTaskList} from "~/stores/tasks";
import TheSceleton from "~/components/UI/TheSceleton.vue";

const router = useRouter()
const loadCurrentUser = useAuthStore()
const tasksList = useTaskList()
const companies = useCompanies()
const timezone = ref('UTC');
const createForm = ref({
  title: '',
  description: '',
  deadline: '',
  author_file_file: '',
  performers: [],
  department: {},
  worth: 0,
  main_performer_id: {},
  performer_file: '',
})

const params = {
  page: 1,
  limit: 5,
  query: '',
  task_type: 'task-list',
}
function loads() {
  if (loadCurrentUser.user.role_en === 'department_director' || loadCurrentUser.user.role_en === 'vice_department_director') {
    companies.loadDepartment({id: loadCurrentUser.user?.department_id})
    this.createForm.department = companies.get_department
    this.createForm.department.participants = companies.get_department.participants.map(e => {e.value = createForm.department.participants?.filter(i => i.id == e.id).length != 0})

  } else {
    companies.loadDepartmentList()
    this.createForm.department.participants = companies.get_all_department.participants.map(e => {e.value = createForm.department.participants?.filter(i => i.id == e.id).length != 0})
  }
}
function validationForm() {
  if (createForm?.value.deadline === '') {
    toast.error('Укажите срок', {theme: "auto", autoClose: 1500})
  }
}

function loadPage(page) {
  if (page === '<') {
    if (Number(params.page) > 1) {
      params.page -= 1;
    }
  } else if (page === '>') {
    if (Number(params.page) < tasksList.task.number_of_pages) {
      params.page = Number(params.page) + 1
    }
  } else {
    if (Number(page) <= tasksList.task.number_of_pages) {
      params.page = Number(page)
    }
  }
  // console.log(page)
  if (window.innerWidth > 1000) {
    window.scrollTo({top: 600})
  } else if (window.innerWidth < 1000) {
    window.scrollTo({top: 895})
  } else {
    window.scrollTo()
  }
}


defineProps({
  showTask: {
    type: Boolean,
    default: false
  },
  changeInfo: {
    type: Boolean,
    default: false
  },
  showConfirm: {
    type: Boolean,
    default: false,
  },
  showCreate: {
    type: Boolean,
    default: false
  },
  task_info: {
    type: Object,
    required: true,
    default: () => {
    }
  },
  taskChecked: {
    type: String,
    default: 'task-list'
  },
})


onMounted(() => {
  navigateTo({
    params: {
      page: params.page
    }
  })
})
watchEffect(() => {
    tasksList.loadTasksLists({page: params.page, limit: params.limit, task_type: params.task_type, query: params.query})
    tasksList.loadTasksStats({task_filter: params.task_type})
})
</script>

<style>
* {
  scroll-behavior: smooth;
}


.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

</style>