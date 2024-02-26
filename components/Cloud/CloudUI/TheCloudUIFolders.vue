<script setup lang="ts">
import {useCloudStore} from "~/stores/cloud";
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";
import {toast} from "vue3-toastify";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheCloudUIFoldersItem from "~/components/Cloud/CloudUI/TheCloudUIFoldersItem.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheInput from "~/components/UI/TheInput.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheCloudUIFilesItem from "~/components/Cloud/CloudUI/TheCloudUIFilesItem.vue";
import TheCloudUIContextMenuItem from "~/components/Cloud/CloudUI/TheCloudUIContextMenuItem.vue";
import {viewSelect} from "~/hooks/ElemUI";
import {uploadFile} from "~/hooks/ElemUI";

const currentUser = useAuthStore()
const route = useRouter()
const cloudStore = useCloudStore()
cloudStore.loadAllFolders()

interface toasty {
  text: String,
  autoClose: Number,
  theme: String
}

const accessControl: toasty = {
  text: 'У вас нет доступа',
  autoClose: 1000,
  theme: 'auto'
}

const activeElem = ref({id: 0, type: ''})
const cart = ref(true)
const createFolder = ref({
  name: '',
})
const props = defineProps({
  createShow: {
    type: Boolean,
    default: false,
  },
  showRead: {
    type: Boolean,
    default: false,
  },
  folderObject: {
    type: Object,
    default: () => {
    },
  },
  elemObject: {
    type: Object,
    default: {}
  }
})

const selected = ref(viewSelect[0])
const {x, y} = useMouse()
const {y: windowY} = useWindowScroll()

const folderSettingShow = ref(false)
const fileSettingShow = ref(false)
const cloudSettingShow = ref(false)
const folderVirtualElem = ref({getBoundingClientRect: () => ({})})
const fileVirtualElem = ref({getBoundingClientRect: () => ({})})
const cloudVirtualElem = ref({getBoundingClientRect: () => ({})})
const cartVirtualElem = ref({getBoundingClientRect: () => ({})})


watchEffect(() => {
  props.createShow ? cloudSettingShow.value = false : cloudSettingShow.value
  props.createShow ? fileSettingShow.value = false : fileSettingShow.value
  props.showRead ? folderSettingShow.value = false : folderSettingShow.value
  props.showRead ? fileSettingShow.value = false : fileSettingShow.value
})
onUpdated(() => {
  cloudStore.loadhasFileInBin()
})

const startDrag = (event: any, elem: any) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('elemID', elem.id)
  event.dataTransfer.setData('elemName', elem.name)
  activeElem.value.id = elem.id
}
const onDrop = (event: any, elem: any) => {
  const elemID = event.dataTransfer.getData('elemID')
  const elemName = event.dataTransfer.getData('elemName')
  if (activeElem.value.type === 'folder' && activeElem.value.id !== elem.id) {
    cloudStore?.update_folder({folder_id: elemID, parent_id: elem.id, name: elemName})
  } else if (activeElem.value.type === 'file') {
    cloudStore?.update_file({folder_id: elem.id, name: elemName, file_id: elemID})
  } else {
    toast.info('Не получится, не пытайся!', {theme: 'auto', autoClose: 1000})
  }
  event.target.classList.remove('dragged-over')
}
const onDropCart = (event: any, elem: any) => {
  console.log(elem)
  const elemID = event.dataTransfer.getData('elemID')
  const elemName = event.dataTransfer.getData('elemName')

  if (activeElem.value.type === 'folder') {
    cloudStore?.moveToBin({elem_type: 'folder_id', elem_id: elemID})
  } else if (activeElem.value.type === 'file') {
    cloudStore?.moveToBin({elem_type: 'file_id', elem_id: elemID})
  }
  event.target.classList.remove('dragged-over')
}

function dragOver(event: any) {
  event.target.classList.add('dragged-over')
  event.preventDefault()
}

function dragEnter(event: any) {
  event.target.classList.add('dragged-enter')
  event.preventDefault()
}

function dragLeave(event: any) {
  event.target.classList.remove('dragged-over');
  event.target.classList.remove('dragged-enter');

}

</script>

<template>
  <div class="w-full ">
    <div class="absolute w-full h-full z-0 left-0 top-0"
         @contextmenu.prevent="function cloudContextMenu() {
                                const top = unref(y) - unref(windowY)
                                const left = unref(x)
                                cloudVirtualElem.getBoundingClientRect = () => ({
                                  width: 0,
                                  height: 0,
                                  top,
                                  left
                                })
                                cloudSettingShow ? folderSettingShow = false : folderSettingShow = false;
                                cloudSettingShow ? fileSettingShow = false : fileSettingShow = false;
                                activeElem.id = cloudStore.get_all_folders.id
                                if(currentUser.user.permissions?.find(e=>e.name_en === 'folder.create')) {
                                  cloudSettingShow = true
                                } else {
                                  toast.info(`${accessControl.text}`, {...accessControl})
                                  cloudSettingShow = false
                                }
                              }"
         @click="activeElem.id = 0; folderObject = {}; showRead = false; createFolder.name = ''">
    </div>
    <UContextMenu class="" v-model="cloudSettingShow" :virtual-element="cloudVirtualElem">
      <TheCloudUIContextMenuItem @click="createShow = true"
                                 class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
        <template v-slot:ContextMenuSvg>
          <svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px"
               viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
            <path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
            <path data-v-965c8b16=""
                  d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z"
                  stroke-width="2"></path>
          </svg>
        </template>
        <template v-slot:ContextMenuText>{{ $t('Создать папку') }}</template>
      </TheCloudUIContextMenuItem>
      <TheCloudUIContextMenuItem @click="" :menu-type="'uploadCloudFiles'">
        <template v-slot:ContextMenuSvg>
          <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <template v-slot:ContextMenuText>
          <span>{{ $t('Загрузить файлы') }}</span>
        </template>
        <template v-slot:ContextMenuContent>
          <input @click="cloudSettingShow = false" @change="uploadFile($event.target.files[0], cloudStore)"
                 @input="$emit('update:modelValue', $event.target.value)" id="uploadCloudFiles"
                 class="hidden" type="file" multiple/>
        </template>
      </TheCloudUIContextMenuItem>
    </UContextMenu>
    <div class="my-10 w-full h-full">
      <div class="flex max-[500px]:flex-col justify-between items-center">
        <h2 class="text-lg dark:text-white tracking-widest mb-6">{{ $t('Файлы и папки') }}</h2>
        <div>
          <USelectMenu v-model="selected" :options="viewSelect">
            <template #label>
              <UIcon :name="selected.icon" class="w-4 h-4">
              </UIcon>
              {{ selected.label }}
            </template>
          </USelectMenu>
        </div>
      </div>
      <Transition name="slide-down">
        <div v-if="cloudStore.showObjectElem && elemObject?.id !== cloudStore.get_all_folders?.id"
             class="relative z-[20] w-7/12 flex justify-center mx-auto px-4 py-3 h-[50px] border rounded-lg text-center">
          <p class="tracking-widest w-full">{{ $t('Наименование') + ': ' + elemObject?.name }}</p>
          <div class="flex gap-x-10">
            <button type="button" class="px-4 tracking-wider bg-blueSemiLight rounded-full"
                    @click="cloudStore.showObjectElem = false, elemObject = {}">{{ $t('Отмена') }}
            </button>
            <button type="button" class="px-4 tracking-wider bg-blueSemiLight rounded-full"
                    @click="elemObject?.type === 'file'? cloudStore.update_file({file_id: elemObject?.id, folder_id: cloudStore.get_all_folders?.id, name: elemObject?.name}) : cloudStore.update_folder({folder_id: elemObject?.id, parent_id: cloudStore.get_all_folders?.id, name: elemObject?.name}); cloudStore.showObjectElem = false; elemObject = {}">
              {{ $t('Переместить') }}
            </button>
          </div>
        </div>
      </Transition>
      <div class="relative flex items-center max-md:justify-center max-md:mt-6 gap-x-2 overflow-hidden"
           @click="cart = true;">
        <button
          @click="cloudStore.get_folder.parent_id !== null || cloudStore.get_bin ? cloudStore.loadAllFolders() : ''; folderSettingShow = false, cloudSettingShow = false, fileSettingShow = false">
          <span class="text-sm tracking-widest">{{ $t('Главная') }}</span>
        </button>
        <div v-if="cloudStore.get_folder.parent_id !== null">
          <svg class="dark:fill-gray-400 fill-black" width="20px" height="20px" viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg" data-v-inspector="pages/base/chat/[id].vue:25:11">
            <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"
                  data-v-inspector="pages/base/chat/[id].vue:25:140"></path>
          </svg>
        </div>

        <button v-if="cloudStore.get_folder.parent_id !== null" class="flex items-center"
                @click="cloudStore.loadFolder({id: cloudStore.get_folder.parent_id})">
          <span class="text-sm tracking-widest">{{ cloudStore.folder.name }}</span>
        </button>
      </div>
      <div class="flex mt-4 gap-x-2 gap-y-3 max-md:justify-center select-none pr-2 mb-20"
           :class="{'flex-col flex w-full ' : selected.type === 'list', 'flex-wrap max-[400px]:flex-col max-[400px]:items-center ' : selected.type ==='tile'}"
           @contextmenu.prevent>
        <div v-for="(folders, i) in cloudStore?.get_folder.folders"
             :class="{'w-2/12 max-[1300px]:w-3/12 max-lg:w-4/12 max-md:w-6/12 max-sm:w-8/12' : selected.type === 'tile'}">
          <div class="relative " :class="{'w-full' : selected.type === 'list'}">
            <TheCloudUIFoldersItem @drop="onDrop($event, folders)"
                                   @dragover="dragOver"
                                   @dragleave="dragLeave"
                                   @drag="dragEnter"
                                   @dragend="dragLeave"
                                   :draggable="!currentUser.user.permissions?.find(e=>e.name_en === 'folder.create') || !cloudStore.get_folder?.active ? false : true"
                                   @dragstart="startDrag($event, folders); activeElem.type = 'folder'"
                                   class="w-full transition-all rounded-full duration-200"
                                   @dblclick="!showRead ? cloudStore.loadFolder({id: folders?.id}) : showRead"
                                   :change-view="selected.type"
                                   @contextmenu.prevent="async ()=> {
                                                      const top = unref(y) - unref(windowY)
                                                      const left = unref(x)
                                                      folderVirtualElem.getBoundingClientRect = () => ({
                                                        width: 0,
                                                        height: 0,
                                                        top,
                                                        left
                                                      })
                                                      activeElem.id = folders?.id
                                                      activeElem.type = 'folder'
                                                      folderObject = {...folders}
                                                      folderSettingShow ? cloudSettingShow = false : cloudSettingShow = false;
                                                      folderSettingShow ? fileSettingShow = false : fileSettingShow = false
                                                      showRead = false
                                                      if(currentUser.user.permissions?.find(e=>e.name_en === 'folder.create')) {
                                                        folderSettingShow = true
                                                      } else {
                                                        toast.info(`${accessControl.text}`, {...accessControl})
                                                        folderSettingShow = false
                                                      }
                                                    }"
                                   @click="activeElem.id = folders?.id; activeElem.type = 'folder'; activeElem.id === folderObject?.id ? showRead = true : showRead = false; showRead && folderObject ? folderObject = {} : folderObject"
                                   :class="{'dark:bg-gray-700 bg-gray-200' : activeElem?.id === folders?.id, 'hover:dark:bg-gray-700 hover:bg-gray-100' : activeElem?.id === folders?.id, 'relative' : selected.type === 'tile' }"
            >
              <template v-slot:folderSvg>
                <div>
                  <svg :class="{'w-[100px] h-[100px]' : selected.type === 'tile'}" width="50px" height="50px"
                       viewBox="0 0 1024 1024" class="icon" version="1.1"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333   38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                      fill="#FFA000"/>
                    <path
                      d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                      fill="#FFCA28"/>
                  </svg>
                </div>
              </template>
              <template v-slot:folderName>
                <form v-if="folderObject?.id === folders?.id && showRead" @click.stop
                      @submit.prevent="cloudStore.update_folder({folder_id: folderObject?.id, name: createFolder.name, parent_id: folders.id}); showRead = false; createFolder.name = ''"
                      class="flex items-center">
                  <input ref="target" :class="{'w-2/12 mx-auto text-center' : selected.type === 'tile'}"
                         class="tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all" type="text"
                         v-model="createFolder.name" :placeholder="folderObject.name">
                  <button type="submit" :class="{'absolute top-2 left-2' : selected.type === 'tile'}">
                    <svg class="stroke-green-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                        stroke-width="1.5"/>
                      <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                  </button>
                </form>
                <div v-else>
                  {{ folders.name?.length > 20 ? folders.name.slice(0, 30) + '...' : folders.name }}
                </div>
              </template>
            </TheCloudUIFoldersItem>
            <Transition name="fade">
              <div v-if="selected.type === 'tile' && activeElem.id === folders?.id" class="absolute top-2 right-2">
                <svg
                  class="dark:stroke-white stroke-black dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full cursor-pointer transition-all duration-200"
                  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </Transition>
          </div>
          <UContextMenu v-model="folderSettingShow" :virtual-element="folderVirtualElem">
            <div class="relative z-[100]" v-if="folders.active === true">
              <TheCloudUIContextMenuItem @click="showRead = true; ">
                <template v-slot:ContextMenuSvg>
                  <svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                      d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>
                  {{ $t('Переименовать') }}
                </template>
                <template v-slot:ContextMenuContent></template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem>
                <template v-slot:ContextMenuSvg>
                  <svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px"
                       viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                    <path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                    <path data-v-965c8b16=""
                          d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z"
                          stroke-width="2"></path>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>
                  {{ $t('Создать папку') }}
                </template>
                <template v-slot:ContextMenuContent></template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem
                @click="elemObject = {...folderObject, type: 'folder'}; cloudStore.showObjectElem = true; fileSettingShow = false">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10"
                      stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Переместить') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem
                @click="cloudStore.moveToBin({elem_type: 'folder_id', elem_id: folderObject.id})">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>
                  {{ $t('Убрать в корзину') }}
                </template>
                <template v-slot:ContextMenuContent></template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem @click="cloudStore.showAccessSetting = true">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>
                  {{ $t('Настроить доступ') }}
                </template>
                <template v-slot:ContextMenuContent></template>
              </TheCloudUIContextMenuItem>
            </div>
            <div class="relative z-[100]" v-if="folders.active === false">
              <TheCloudUIContextMenuItem
                class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
                <template v-slot:ContextMenuSvg>
                  <svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                      d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Переименовать') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem
                @click="cloudStore.moveFromBin({elem_type: 'folder_id', elem_id: folderObject.id});"
                class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
                <template v-slot:ContextMenuSvg>
                  <svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px"
                       viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                    <path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                    <path data-v-965c8b16=""
                          d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z"
                          stroke-width="2"></path>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Восстановить') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem
                @click="cloudStore.deleteInBin({delete_type: 'folder_id' ,id: activeElem.id}); "
                class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Удалить навсегда') }}</template>
              </TheCloudUIContextMenuItem>
            </div>
          </UContextMenu>
        </div>
        <div v-for="file in cloudStore?.get_all_files"
             :class="{'w-2/12 max-[1300px]:w-3/12 max-lg:w-4/12 max-md:w-6/12 max-sm:w-8/12' : selected.type === 'tile'}">
          <div class="relative" :class="{'w-full' : selected.type === 'list'}">
            <TheCloudUIFilesItem @dragstart="startDrag($event, file); activeElem.type = 'file'"
                                 :draggable="!currentUser.user.permissions?.find(e=>e.name_en === 'folder.create') || !cloudStore.get_folder?.active ? false : true"
                                 :change-view="selected.type"
                                 @dragleave="dragLeave"
                                 @drag="dragEnter"
                                 @dragend="dragLeave"
                                 @contextmenu.prevent="()=> {
                                const top = unref(y) - unref(windowY)
                                const left = unref(x)
                                fileVirtualElem.getBoundingClientRect = () => ({
                                  width: 0,
                                  height: 0,
                                  top,
                                  left
                                })
                                folderObject = {...file}
                                activeElem.id = file.id
                                activeElem.type = 'file'
                                fileSettingShow = true
                                fileSettingShow ? cloudSettingShow = false : cloudSettingShow = false;
                                fileSettingShow ? folderSettingShow = false : folderSettingShow = false
                                showRead = false
                                 if(currentUser.user.permissions?.find(e=>e.name_en === 'folder.create')) {
                                  fileSettingShow = true
                                } else {
                                  toast.info(`${accessControl.text}`, {...accessControl})
                                  fileSettingShow = false
                                }
                              }"
                                 @click="activeElem.id = file?.id; activeElem.type = 'file';"
                                 :class="{'dark:bg-gray-700 bg-gray-200' : activeElem.id === file?.id, 'hover:dark:bg-gray-700 hover:bg-gray-100' : activeElem.id === file?.id, 'relative' : selected.type === 'tile' }"
            >
              <template v-slot:fileSvg>
                <svg xmlns="http://www.w3.org/2000/svg"
                     :class="{'w-[100px] h-[100px]' : selected.type === 'tile'}" width="50px" height="50px"
                     viewBox="0 0 56 64" enable-background="new 0 0 56 64"
                     xml:space="preserve">
                    <g>
                      <path fill="#8C181A"
                            d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                      <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                      <path opacity="0.5" fill="#FFFFFF" enable-background="new"
                            d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                    </g>
                  <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                      C42.2,42.8,41.9,43.1,41.5,43.1z"/>
                </svg>
              </template>

              <template v-slot:fileName>
                <form v-if="folderObject?.id === file?.id && showRead" @click.stop
                      @submit.prevent="cloudStore.update_file({file_id: folderObject?.id, name: createFolder.name, folder_id: folder?.id}); showRead = false; createFolder.name = ''"
                      class="flex items-center">
                  <input ref="target" :class="{'w-2/12 mx-auto text-center' : selected.type === 'tile'}"
                         class="tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all" type="text"
                         v-model="createFolder.name" :placeholder="folderObject.name">
                  <button type="submit" :class="{'absolute top-2 left-2' : selected.type === 'tile'}">
                    <svg class="stroke-green-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                        stroke-width="1.5"/>
                      <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                  </button>
                </form>
                <div v-else>
                  {{ file.name }}
                </div>
              </template>
            </TheCloudUIFilesItem>
            <Transition name="fade">
              <div v-if="selected.type === 'tile' && activeElem.id === file?.id" class="absolute top-2 right-2">
                <svg
                  class="dark:stroke-white stroke-black dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full cursor-pointer transition-all duration-200"
                  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </Transition>
          </div>
          <UContextMenu v-model="fileSettingShow" :virtual-element="fileVirtualElem">
            <div class="relative z-[100]" v-if="file.active === true">
              <TheCloudUIContextMenuItem @click="showRead = true; email.focus()">
                <template v-slot:ContextMenuSvg>
                  <svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                      d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Переименовать') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem @click="cloudStore.moveToBin({elem_type: 'file_id', elem_id: file.id});">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Убрать в корзину') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem
                @click="elemObject = {...file, type: 'file'}; cloudStore.showObjectElem = true; fileSettingShow = false">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10"
                      stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Переместить') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem @click="cloudStore.showAccessSetting = true">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>
                  {{ $t('Настроить доступ') }}
                </template>
                <template v-slot:ContextMenuContent></template>
              </TheCloudUIContextMenuItem>
            </div>
            <div class="relative z-[100]" v-if="file.active === false">
              <TheCloudUIContextMenuItem>
                <template v-slot:ContextMenuSvg>
                  <svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                      d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Переименовать') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem @click="cloudStore.moveFromBin({elem_type: 'file_id', elem_id: file.id})">
                <template v-slot:ContextMenuSvg>
                  <svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px"
                       viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                    <path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                    <path data-v-965c8b16=""
                          d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z"
                          stroke-width="2"></path>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Восстановить') }}</template>
              </TheCloudUIContextMenuItem>
              <TheCloudUIContextMenuItem @click="cloudStore.deleteInBin({delete_type: 'file_id', id: activeElem.id});">
                <template v-slot:ContextMenuSvg>
                  <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-slot:ContextMenuText>{{ $t('Удалить навсегда') }}</template>
              </TheCloudUIContextMenuItem>
            </div>
          </UContextMenu>
        </div>
        <TheCloudUIFoldersItem
          @drop="onDropCart($event, folders)"
          @dragover="dragOver"
          @dragleave="dragLeave"
          @drag="dragEnter"
          @dragend="dragLeave"
          :type-elem="'cart'" :change-view="selected.type"
          class=""
          :class="{'w-full' : selected.type ==='list', 'w-2/12 max-[1300px]:w-4/12 max-md:w-5/12' : selected.type === 'tile'}"
          @dblclick="cloudStore.loadBin({bin: cloudStore?.get_bin}); cart = false"
          v-if="cart"
        >
          <template v-slot:folderSvg>
            <svg
              v-if="cloudStore.get_hasFileInBin || cloudStore.get_bin.files.length > 0 || cloudStore.get_bin.folders.length > 0 "
              class="" :class="{'w-[100px] h-[100px]' : selected.type === 'tile'}"
              width="50px" height="50px"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M512 454.4L270.933333 213.333333 554.666667 36.266667 817.066667 213.333333z" fill="#FFA000"/>
              <path d="M512 454.4L270.933333 213.333333 362.666667 100.266667 817.066667 213.333333z" fill="#FFCA28"/>
              <path
                d="M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z"
                fill="#3fb1c9"/>
              <path
                d="M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z"
                fill="#0077B6"/>
            </svg>
            <svg v-else
                 :class="{'w-[100px] h-[100px]' : selected.type == 'tile', 'w-[50px] h-[50px]' : selected.type == 'list'}"
                 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z"
                fill="#3fb1c9"/>
              <path
                d="M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z"
                fill="#0077B6"/>
            </svg>
          </template>
          <template v-slot:folderName>
            {{ $t('Корзина') }}
          </template>
        </TheCloudUIFoldersItem>
      </div>
    </div>
    <TheModal v-if="cloudStore.showAccessSetting" @showModal="cloudStore.showAccessSetting"></TheModal>
    <TheModal v-if="createShow" @showModal="createShow = false">
      <TheTextContent>{{ $t('Создание папки') }}</TheTextContent>
      <div>
        <form
          @submit.prevent="cloudStore.create_folder({parent_id: activeElem.id, name: createFolder.name}); createShow = false">
          <h3>Наименование</h3>
          <TheInput type="text" v-model="createFolder.name"></TheInput>
          <div class="flex justify-center gap-x-10 mt-10">
            <TheButton class="px-10 py-2 rounded-full" t="submit" type="danger" @click="createShow = false">
              {{ $t('Отмена') }}
            </TheButton>
            <TheButton class="px-10 py-2 rounded-full" t="submit" type="success">{{ $t('Создать') }}</TheButton>
          </div>
        </form>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">
.dragged-enter {
  opacity: 0.3;
}

.dragged-over {
  background: #73c4ff;
}

.target {
  background-color: #7c7c7c;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>