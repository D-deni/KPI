<script setup lang="js">
import VueTree from "@ssthouse/vue3-tree-chart"
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css"
import {useTreeStore} from "~/stores/tree"
import {useAuthStore} from "~/stores/auth"
import {useRoute, useRouter} from "vue-router";
import TheTreeButton from "~/components/UI/TheTreeButton.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheButton from "~/components/UI/TheButton.vue";

const authStore = useAuthStore()
const treeStore = useTreeStore()
const route = useRoute()
const router = useRouter()
const richMediaData = ref()
const treeUserInfo = ref()
const props = defineProps({
  treeConfig: {},
  treeFullScreen: {
    type: Boolean,
    default: false,
  },
  treeShowUserInfo: {
    type: Boolean,
    default: false
  },
})

onMounted(() => {
  treeStore.loadTreeList()
})

</script>

<template>
  <div>
    <div class="hidden max-md:flex max-md:justify-center select-none gap-x-2 top-10 right-10 z-10"
         :class="{'z-[101] fixed' : treeStore.treeFullScreen === true}">
      <TheTreeButton @click="treeStore.treeFullScreen = !treeStore.treeFullScreen">
        <svg class="stroke-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </TheTreeButton>
      <TheTreeButton @click="this.$refs.scaleTree.zoomIn()">
        <svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z"/>
        </svg>
      </TheTreeButton>
      <TheTreeButton @click="this.$refs.scaleTree.zoomOut()">
        <svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z"/>
        </svg>
      </TheTreeButton>
      <TheTreeButton @click="this.$refs.scaleTree.restoreScale()">
        <svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z"/>
        </svg>
      </TheTreeButton>
    </div>
    <div @scroll.prevent @contextmenu.prevent @touchmove.prevent @wheel.prevent="(e)=>{
        if(e.deltaY < 0) {
          this.$refs.scaleTree.zoomIn()
        } else {
          this.$refs.scaleTree.zoomOut()
        }
      }">
      <div
        class="relative border w-11/12 h-[80vh] mx-auto rounded-2xl overflow-hidden dark:border-gray-400 shadow dark:shadow-gray-400 transition-all duration-300"
        :class="{'!fixed left-0 top-0 !h-screen !w-screen flex !bg-opacity-60 !rounded-none !border-0 !bg-black z-[100] justify-center items-center' : treeStore.treeFullScreen === true}">
        <VueTree ref="scaleTree" class="mx-auto select-none relative rounded-2xl w-full h-full"
                 :dataset="richMediaData = {...treeStore.get_list}"
                 :config="treeConfig = {nodeWidth: 170, nodeHeight: 80, levelHeight: 170}">
          <template v-slot:node="{ node, collapsed }">
            <div
              @dblclick="treeUserInfo = {id: node.id, first_name: node.first_name, last_name: node.last_name, photo_url: node.photo_url, position: node.position, department_id: node.department_id, department: node.department, role: node.role}"
              class="p-2 bg-blueDarkSemiLight transition-all rounded-lg"
              :class="{'shadow-md dark:shadow-gray-400 ' : node.id === treeUserInfo?.id}">
              <img alt="photo" :src="authStore.get_server_domain + node.photo_url"
                   class="w-[50px] h-[50px] rounded-full mx-auto"/>
              <p class="text-white text-center break-words" style="font-weight: bold;">{{ node.first_name?.length > 10 && node.last_name?.length > 10 ? (node.first_name + ' ' + node.last_name.slice(0, 9)) + '...' : node.first_name + ' ' + node.last_name}}</p>
              <p class="text-sm text-white">{{node.position}}</p>
            </div>
          </template>
        </VueTree>
        <div class="absolute max-md:hidden flex select-none gap-x-2 top-10 right-10 z-10">
          <TheTreeButton @click="treeStore.treeFullScreen = !treeStore.treeFullScreen">
            <svg class="stroke-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="this.$refs.scaleTree.zoomIn()">
            <svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="this.$refs.scaleTree.zoomOut()">
            <svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z"/>
            </svg>
          </TheTreeButton>
          <TheTreeButton @click="this.$refs.scaleTree.restoreScale()">
            <svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z"/>
            </svg>
          </TheTreeButton>
        </div>
        <div
          class="absolute left-0 top-0 rounded-tl-2xl rounded-bl-2xl dark:bg-gray-700 bg-white z-50 h-full transition-all duration-200"
          :class="{'!rounded-none dark:!bg-gray-700' : treeStore.treeFullScreen, '!w-0 ' : !treeUserInfo, '!w-[25%] dark:border-r-gray-400 border-r ' : treeUserInfo}">
          <div class="relative" v-if="treeUserInfo">
            <button @click="treeUserInfo = undefined" class="absolute top-2 right-0 p-1 border-t border-l border-b"
                    :class="{'fixed !top-1 !p-[3px]' : treeStore.treeFullScreen}">
              <svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="mx-auto mt-4 gap-y-2 px-2 flex flex-col justify-center items-center">
              <img class="w-[70px] h-[70px] rounded-full mt-10 dark:border-none border"
                   :src="authStore.get_server_domain + treeUserInfo?.photo_url" alt="">
              <div class="dark:text-white text-black text-center">
                <p class="text-xl break-words">{{ treeUserInfo?.first_name + ' ' + treeUserInfo?.last_name }}</p>
                <p class="text-sm">{{ treeUserInfo?.position }}</p>
              </div>
              <div>
                <p class="break-words text-center">{{ $t('Департамент:') }} <span>{{ treeUserInfo?.department }}</span>
                </p>
              </div>
            </div>
            <div class="px-2 my-6 flex flex-wrap justify-center gap-2">
              <TheButton type="treeBtn" @click="router.push(`/base/users/${treeUserInfo?.id}`)">{{ $t('Перейти') }}
              </TheButton>
              <TheButton type="treeBtn">{{ $t('Департамент') }}</TheButton>
              <TheButton type="treeBtn">{{ $t('Выдать задание') }}</TheButton>
              <TheButton type="treeBtn">{{ $t('Выдать задание') }}</TheButton>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>