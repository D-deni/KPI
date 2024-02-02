<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import {LinkedList} from "~/hooks/Node";
import {useDocumentStore} from "~/stores/documents";
import {useCompanies} from "~/stores/companies";
import isEqual from "lodash/isEqual";
import {toast} from "vue3-toastify";

const props = defineProps({
  item: {
    type: Object,
    default: () => {
    }
  },
  currentUser: {
    type: Object,
    default: () => {
    }
  },
})


const company = useCompanies()
const authStore = useAuthStore()

const draggedNode = ref(false)
const list = ref(new LinkedList())
const documentStore = useDocumentStore()
const appendData = (data: any) => {
  list.value.append(data)
}
const deleteData = (data: any) => {
  list.value.delete(data)
}

const deleteNodeValue = (targetValue: any, removeObject: any) => {
  list.value.deleteNodeValue(targetValue, removeObject)
}

const addContentNode = (targetValue: any, content: any) => {
  list.value.addContentToNode(targetValue, content)
  console.log(documentStore.userList)
}

const swipeData = () => {
  list.value.swipeIfCondition()
}

function dragEnterNode(event: any) {
  draggedNode.value = true
  event.target.classList.add('draggedToNode')
  event.preventDefault()
}

function dragLeaveNode(event: any) {
  draggedNode.value = false
  event.target.classList.remove('draggedToNode')
  event.preventDefault()
}

function dragEnterNodeValue(event: any) {
  event.target.classList.add('draggedUser')
  event.preventDefault()
}

function dragLeaveNodeValue(event: any) {
  event.target.classList.remove('draggedUser')
  event.preventDefault()
}

onMounted(() => {
  appendData([{
    first_name: authStore.user?.first_name,
    last_name: authStore.user?.last_name,
    photo_url: authStore.user?.photo_url,
    id: authStore.user?.id
  }])
  appendData([])
  watchSyncEffect(() => {
    // console.log(documentStore.documentItem.chain)
    documentStore.userList = list.value.toArray().map(node => node.self)
  })
})


onUnmounted(() => {
  documentStore.showUsersNode = []
  documentStore.showDepartment = []
})
</script>

<template>
  <TransitionGroup name="list" tag="div" class="flex items-center ">
    <div v-for="(userGroup, groupIndex) in documentStore.userList" :key="groupIndex"
         class="px-2 h-full  z-20 relative flex items-center transition-all">
      <div class=" transition-all" @drop.prevent="console.log(123)"
           @dragenter.stop="groupIndex === 0 || userGroup.length == 0? '' :  dragEnterNode($event)"
           @dragleave.stop="dragLeaveNode" ></div>
      <div @dragleave.stop @dragenter.stop @drop.prevent="console.log(123)" class="w-[220px] gap-y-6 flex items-center flex-col justify-center relative"
           :class="{'border border-dashed border-blueSemiLight h-20 rounded-lg' : userGroup.length === 0 || userGroup === null}">
        <p @click="console.log(userGroup)" v-if="userGroup.length === 0"
           class="absolute text-blueSemiLight tracking-widest text-sm w-full h-full flex items-center justify-center rounded-lg transition-all duration-200"
           @dragenter.prevent="dragEnterNodeValue" @dragleave.prevent="dragLeaveNodeValue" >
          {{ $t('Область для добавления') }}</p>
        <div class="absolute top-0" v-if="groupIndex !== 0">
          <button @click.stop="documentStore.showContext = groupIndex"
                  class="rounded-lg border border-gray-500 dark:border-white absolute px-2.5 pt-1 -top-10 right-10 text-green-400 font-bold">
            +
          </button>
          <button @click.stop="deleteData(userGroup); documentStore.showContext = null; documentStore.showUsersNode = documentStore.showUsersNode.filter(user=> !userGroup.some(groupUser => groupUser.id === user.id))"
                  class="rounded-lg border border-gray-500 dark:border-white absolute px-2.5 pt-1 -top-10 left-10 text-red-400 font-bold">
            X
          </button>
        </div>
        <Transition name="slide-down" class="" @click.stop>
          <div v-if="documentStore.showContext === groupIndex"
               class="absolute rounded-lg dark:bg-gray-700 bg-gray-200 w-[220px] top-10 z-[5] p-2 ">
            <input @click.stop type="text" class="pl-2 dark:bg-gray-600 rounded-lg outline-none w-full mb-4"
                   :placeholder="$t('Поиск...')">
            <div class="overflow-auto max-h-[150px]">
              <div v-for="department in company.get_all_department.results">
                <button class="flex items-center justify-between gap-x-2 w-full break-words break-all"
                        @click="documentStore.showContextDepartment === department.id ? documentStore.showContextDepartment = null : documentStore.showContextDepartment = department.id">
                    <span>
                      {{ department.name }}
                    </span>
                  <div :class="{'rotate-180' : documentStore.showContextDepartment === department.id}">
                    <svg class="dark:fill-white fill-black" width="20px" height="20px" viewBox="0 0 24 24"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z"></path>
                    </svg>
                  </div>
                </button>
                <Transition name="slide-down">
                  <div v-if="documentStore.showContextDepartment === department.id">
                    <div v-for="user in department.participants">
                      <button
                        v-if="department.participants && documentStore.showUsersNode.every(e=>e.id !== user.id) && user.id !== authStore.user.id && userGroup.every(e=>e.priority === user.priority) "
                        class="px-2 py-1 w-full flex items-center text-start hover:bg-semiCyan rounded-lg transition-all"
                        @click="addContentNode(userGroup, {...user}); documentStore.showUsersNode.push({id: user.id}); swipeData();documentStore.showContextDepartment = null; documentStore.showContext = null; console.log(userGroup.map(e=>e.priority))"
                      >
                        <span class="">{{ user.first_name + ' ' + user.last_name }}</span>
                      </button>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </Transition>
        <TransitionGroup name="list" tag="list" class="flex flex-col gap-y-6 transition-all">
          <div @click="console.log(documentStore.showUsersNode.filter(el=>el.id !== userGroup.filter(e=>e.id)))"
               class="h-24 w-[220px] border border-gray-500 dark:border-white px-2 rounded-lg text-center flex items-center justify-center mx-auto relative "
               v-for="(user, userIndex) in userGroup" :key="userIndex">
            <div class="flex items-center gap-x-2">
              <div v-if="user.photo_url" class="max-w-[50px]">
                <img class="w-full rounded-full" :src="authStore.get_server_domain + user.photo_url" alt="">
              </div>
              <div class="break-words">
                <p class="text-sm w-full">
                 {{user.first_name + ' ' + user.last_name}}
<!--                  12312 312 3213123 123123 1232 1312 3123 123 123123 123213123123123 123-->
                </p>
              </div>
            </div>
            <button
              class="absolute px-2.5 pt-1 top-0 right-0 border-l border-b border-gray-500 dark:border-white rounded rounded-tl-none rounded-br-none text-red-400 font-bold"
              v-if="user.id !== authStore.user.id && groupIndex !== 0"
              @click="deleteNodeValue(userGroup, {...user}); documentStore.showUsersNode.splice(documentStore.showUsersNode.findIndex(e=>e.id === user?.id), 1)">
              X
            </button>
          </div>
        </TransitionGroup>
      </div>
    </div>
    <button
      class=" text-2xl px-4 py-2 ml-4 rounded-lg border border-blueSemiLight text-blueDarkSemiLight cursor-pointer hover:scale-95 transition-all"
      @click="appendData([])">
      +
    </button>
  </TransitionGroup>
</template>

<style scoped lang="postcss">
.draggedUser {
  background: rgba(14, 165, 233, 0.3);
  @apply dark:text-white
}

.draggedToNode {
  background: rgba(14, 165, 233, 0.1);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>