<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import {useDocumentStore} from "~/stores/documents";
import {DraggableElement} from "vue-advanced-cropper";

const documentStore = useDocumentStore()
const authStore = useAuthStore()
defineProps({
  item: {
    type: Object,
    default: () => {
    }
  },
})

const startDrag = (event: any, elem: any) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('elemID', elem.id)
}

function dragEnter(event: any) {
  event.target.classList.add('dragged-enter')
  event.preventDefault()
}

function dragLeave(event: any) {
  event.target.classList.remove('dragged-enter')
  event.preventDefault()
}


</script>

<template>
  <div class="">
    <div class="border-b p-2 pt-0"
         @click="()=>{
           if(documentStore.showDepartment.some(e=> e.id === item.id)){
             documentStore.showDepartment = documentStore.showDepartment.filter(i => i.id !== item.id)
           } else {
             documentStore.showDepartment = [...documentStore.showDepartment, { id: item.id }]
           }
           console.log(documentStore.showDepartment.some(e=> e.value))
         }">
      <div class="flex items-center justify-between">
        <p class="tracking-wider text-sm">{{ item.name }}</p>
        <div class="transition-all" :class="{'rotate-180 transition-all' : documentStore.showDepartment.every(e=>e.id !== item?.id)}">
          <svg class="dark:fill-white fill-black" :class="{'!fill-semiCyan' : documentStore.showDepartment.every(e=>e.id !== item?.id)}" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z"/>
          </svg>
        </div>
      </div>
      <Transition name="slide-down">
          <div class="flex flex-col gap-y-2 select-none" v-if="documentStore.showDepartment.every(e=>e.id !== item?.id)">
            <div @click.stop='()=>{}'
                 :key="user.id"
                 v-for="user in item.participants.filter(e=>e.id !== authStore.user.id)">
              <div v-if="documentStore.showUsersNode.every(el=>el.id != user.id)" class=" p-2 flex gap-x-4 rounded-lg relative" draggable="true"
                   @dragstart="startDrag($event, user)"
                   @dragend="dragLeave"
                   @drag="dragEnter"
              >
                <div class="w-[50px] h-[50px]">
                  <img draggable="false" class="w-full rounded-full" :src="authStore.get_server_domain + user.photo_url"
                       alt="">
                </div>
                <div class="text-base">
                  <p>{{ user.first_name + ' ' + user.last_name }}</p>
                  <p class="text-[13px] tracking-widest text-gray-400">({{ user.role }})</p>
                </div>
              </div>
            </div>
          </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dragged-enter {
  filter: blur(1px);
  background: rgba(14, 165, 233, 0.4);
  transition: .3s all ease;
}

.dragged-over {
  background: #73c4ff;
}

</style>