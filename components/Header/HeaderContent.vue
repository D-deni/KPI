<template>
  <div :class="{'blur' : useTreeStore().treeFullScreen === true}"
       class="w-full bg-white py-4 px-10 flex dark:bg-gray-600 shadow-lg transition-all duration-300 dark:shadow-lg justify-end relative z-30"
       @click.stop="()=>{
        if(windowWidth >= 800) {
        loadCurrentUser.openNotification = false; loadCurrentUser.openSettings = false;
        }
    }"
  >
    <div class="flex items-center gap-x-8 " ref="target">
      <HeaderContentElems class="max-[800px]:hidden "/>
      <div class="relative hidden max-[800px]:block">
        <div
          @click.stop="loadCurrentUser.openSettings = !loadCurrentUser.openSettings; loadCurrentUser.openNotification = false"
          class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1">
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle class="dark:stroke-white" cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
            <path
              d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273"
              stroke="#1C274C" class="dark:stroke-white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <Transition
          name="slide-fade"
          class="absolute max-[800px]:fixed max-[800px]:left-0 right-0 p-4 z-[100] top-12 max-[800px]:-top-0 max-[800px]:h-screen max-[800px]:w-screen max-[800px]:-right-10 dark:shadow-white dark:shadow-md transition-all duration-200 rounded-md shadow-lg bg-gray-100 dark:bg-gray-600 w-[300px]"
          :class="{'min-h-full' : loadCurrentUser.openSettings === true, 'min-h-0 opacity-0 ' : loadCurrentUser.openSettings === false}">
          <div v-if="loadCurrentUser.openSettings" class="flex flex-col gap-y-6 select-none">
            <div class="ml-auto justify-end hidden w-2/12 max-[800px]:flex"
                 @click="loadCurrentUser.openSettings = false">
              <svg width="25px" height="25px" class="fill-gray-400 dark:fill-white" viewBox="-2 0 32 32" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                  <g id="Icon-Set" transform="translate(-466.000000, -931.000000)">
                    <path
                      d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z"
                      id="arrow-top">
                    </path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="mx-auto flex flex-col gap-y-6">
              <div
                class="max-[800px]:flex max-[800px]:justify-center hidden w-full select-none text-gray-600 items-center transition-all duration-200 gap-x-2 cursor-pointer">
                <div class="">
                  <img class="rounded-full w-[100px] h-[100px]"
                       :src="loadCurrentUser.get_server_domain + loadCurrentUser.user.photo_url" alt="">
                </div>
                <h3 class="select-none dark:text-white">{{ loadCurrentUser.user.first_name }}
                  {{ loadCurrentUser.user.last_name }}</h3>
              </div>
            </div>
            <HeaderContentLinkList/>
            <TheButton class="rounded-full py-2" :type="'danger'"
                       @click="()=>{localStorage.removeItem('token'); router.push('/')}">
              {{ $t('Выйти') }}
            </TheButton>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheButton from "~/components/UI/TheButton";
import HeaderContentLink from "~/components/Header/HeaderUI/HeaderContentLink";
import HeaderContentElems from "./HeaderUI/HeaderContentElems";
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import {useChat} from "~/stores/chat";
import {useTreeStore} from "~/stores/tree";

const windowWidth = ref(null)
const chatStore = useChat()
const activeHeader = ref(true)
const loadCurrentUser = useAuthStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  windowWidth.value = window.innerWidth
})
watchSyncEffect(() => {
  windowWidth.value < 800 && route.path === '/base/chat' || windowWidth.value < 800 && route.path === `/base/chat/${route.params.id}` ? activeHeader.value = false : activeHeader.value = true
})

</script>

<style lang="postcss">


body {
  @apply dark:bg-gray-700 dark:border-gray-600
}
</style>