<script lang="ts" setup>
import TheButton from '~/components/UI/TheButton.vue'
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";
import nuxtStorage from "nuxt-storage/nuxt-storage";

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

onMounted(() => {
  if (nuxtStorage.localStorage.getData('token')) {
    router.push('/base/companies')
  }
})

defineProps({
  loginShow: Boolean,
  activeEyes: Boolean,
})

useHead({
  titleTemplate: 'Авторизация • ERP'
  }
)
</script>

<template>
  <ClientOnly>
    <div class="w-screen h-screen flex items-center justify-center">
      <Transition name="bounceLogin">
        <form v-if="!loginShow"
              @submit.prevent="authStore.authorize({email: form.email, password: form.password}, $router)"
              class="bg-white select-none z-50 bg-opacity-95 w-5/12 max-lg:w-7/12 max-md:w-9/12 max-sm:w-full text-black p-6 rounded-xl ">
          <div class="" @click="loginShow = !loginShow">
            <svg class="hover:scale-125 cursor-pointer transition-all" width="30px" height="30px"
                 viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
                fill="#000000"/>
              <path
                d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
                fill="#000000"/>
            </svg>
          </div>
          <div class="mx-auto text-center my-6">
            <img class="w-2/12 mx-auto" src="/img/Logo.webp" alt="">
          </div>
          <h1 class="text-center text-xl leading-6 tracking-wide text-[#464A53]">{{ $t('Авторизация') }}</h1>
          <div class="p-4 flex flex-col gap-y-4">
            <div class="flex flex-col">
              <label for="input" class="text-[#464A53]">{{ $t('Email') }}</label>
              <input name="email" class="text-sm py-4 px-2 outline-gray-300 rounded-md border dark:bg-gray-300"
                     v-model="form.email" type="text">
            </div>
            <div class="flex flex-col relative ">
              <label for="input" class="text-[#464A53]">{{ $t('Пароль') }}</label>
              <input name="password" ref="password"
                     class=" text-sm py-4 px-2 outline-gray-300 dark:bg-gray-300 rounded-md border"
                     v-model="form.password" type="password">
              <div class="absolute cursor-pointer right-2 top-8 z-10 "
                   @click="$refs.password.type = $refs.password.type === 'password'?'text': 'password'">
                <svg class="relative z-10" width="40px" height="40px" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 18.75C6.17 18.75 3.43 12.56 3.31 12.3C3.27039 12.2049 3.25 12.103 3.25 12C3.25 11.897 3.27039 11.7951 3.31 11.7C3.43 11.44 6.17 5.25 12 5.25C17.83 5.25 20.57 11.44 20.69 11.7C20.7296 11.7951 20.75 11.897 20.75 12C20.75 12.103 20.7296 12.2049 20.69 12.3C20.57 12.56 17.83 18.75 12 18.75ZM4.83 12C5.42 13.15 7.83 17.25 12 17.25C16.17 17.25 18.58 13.15 19.17 12C18.58 10.85 16.17 6.75 12 6.75C7.83 6.75 5.42 10.85 4.83 12Z"
                    fill="#000000"/>
                </svg>
                <div class="w-[11px] h-[11px] top-3.5 right-3.5 absolute rounded-full border-2 border-black "
                />
              </div>
            </div>
            <div
              class="flex justify-between max-sm:flex-wrap max-sm:justify-center max-sm:gap-y-4 max-sm:gap-x-4 mx-4 text-sm">
              <div class="items-center flex gap-x-2 hover:text-blue-500 transition-all">
                <input class="cursor-pointer" type="checkbox" id="checked">
                <label class="cursor-pointer select-none " for="checked">{{ $t('Запомнить меня') }}</label>
              </div>
              <div>
                <p class="cursor-pointer text-blue-500 hover:text-blue-400 transition-all">
                  {{ $t('Забыли пароль?') }}</p>
              </div>
            </div>
            <TheButton t="submit" class="max-sm:w-full" type="signIn">{{ $t('Войти') }}</TheButton>
          </div>
        </form>
      </Transition>
      <div
        class="absolute active:scale-90 hover:bg-white stroke-white hover:stroke-black p-2 rounded-xl transition-all duration-200 cursor-pointer z-50 text-white right-10 top-10"
        @click="loginShow = !loginShow">
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 16C8 18.8284 8 20.2426 8.87868 21.1213C9.51998 21.7626 10.4466 21.9359 12 21.9827M8 8C8 5.17157 8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V10V14V16C21 18.8284 21 20.2426 20.1213 21.1213C19.3529 21.8897 18.175 21.9862 16 21.9983"
            stroke-width="1.5" stroke-linecap="round"/>
          <path
            d="M3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5M3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5"
            stroke-width="1.5" stroke-linecap="round"/>
          <path d="M6 12L15 12M15 12L12.5 14.5M15 12L12.5 9.5" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="absolute">
        <!--        <The3dModel class="cursor-grab"/>-->
      </div>
    </div>
  </ClientOnly>

</template>

<style>

.bounceLogin-enter-active {
  animation: bounce-in 0.5s;
}

.bounceLogin-leave-active {
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