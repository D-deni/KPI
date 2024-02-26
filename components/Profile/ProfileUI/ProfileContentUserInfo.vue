<script setup lang="ts">
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
import {useMediaQuery, useParallax} from '@vueuse/core'
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";
import Sceleton from "~/components/UI/TheSceleton.vue";
import ThePreloader from "~/components/UI/ThePreloader.vue";

const company = useCompanies()
const target = ref(null)
const isMobile = useMediaQuery('(max-width: 700px)')

const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}

const cardStyle = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 1}deg) rotateY(${
    parallax.tilt * 1
  }deg)`,
}))

const container = ref(null)
const {tilt, roll, source} = useParallax(container)

const loadCurrentUser = useAuthStore()
const props = defineProps({
  showInfo: {
    type: Boolean,
    default: false
  },
  getCode: {
    type: Boolean,
    default: false
  },
  userEdit: {
    type: Object,
    default: () => {
    }
  }
})
const birth = new Date(loadCurrentUser.user.date_of_birth).toLocaleDateString()
onMounted(()=>{
  company.loadCurrentCompany()
})
</script>

<template>
  <div class="w-full p-6 relative col-span-2 max-sm:col-auto shadow-lg dark:shadow-md dark:border-t dark:border-t-gray-500 cursor-pointer dark:shadow-gray-500 rounded-md transition-all duration-200">
    <div
      @click="showInfo = true; userEdit={...loadCurrentUser.user}">
      <h2 class="mb-8 dark:text-white tracking-widest">{{ $t('Личные данные') }}</h2>
      <div :class="{'blur' : !loadCurrentUser.user.id}" class="flex gap-x-10 max-lg:flex-wrap gap-y-10 justify-around">
        <div class="flex flex-col gap-y-6">
          <div v-if="loadCurrentUser.user.id"
               class="flex max-sm:flex-wrap max-sm:justify-center select-none text-gray-600 gap-x-2 ">
            <div class="">
              <img class="w-[100px] h-[100px] rounded-full shadow-lg dark:shadow-none"
                   :src="loadCurrentUser.get_server_domain + loadCurrentUser.user.photo_url" alt="">
            </div>
            <div class="my-2 mx-2">
              <h3 class="text-xl dark:text-white select-none tracking-wide">{{ loadCurrentUser.user.first_name }}
                {{ loadCurrentUser.user.last_name }}</h3>
              <p class="dark:text-white">
                {{ Math.trunc((new Date() - new Date(loadCurrentUser.user.date_of_birth)) / 1000 / 3600 / 24 / 365) + ' лет'
                }}</p>
              <p v-if="loadCurrentUser.user.role === 'Администратор сайта'"
                 class="dark:text-white tracking-widest font-bold">{{ loadCurrentUser.user.role }}</p>
              <p v-else-if="loadCurrentUser.user.role === 'Сотрудник'"
                 class="dark:text-white tracking-widest font-bold">{{ loadCurrentUser.user.position }}</p>
            </div>
          </div>
          <div v-else class="flex items-center gap-x-4">
            <sceleton border-radius="100px" width="100px" height="100px"></sceleton>
            <div class="flex flex-col gap-y-2">
              <sceleton width="150px" height="20px" border-radius="5px"></sceleton>
              <sceleton width="60px" height="15px" border-radius="5px"></sceleton>
            </div>
          </div>
          <div class="flex flex-col gap-y-2 ml-2 w-full">
            <div class="text-sm">
              <p class="text-gray-500 dark:text-white font-mono">{{ $t('Email') }}:
                <span v-if="loadCurrentUser.user.id" class="font-bold tracking-widest">{{loadCurrentUser.user.email}}</span>
              </p>
            </div>
            <div class="text-sm">
              <p class="text-gray-500 dark:text-white font-mono">{{ $t('Номер') }}:
                <span class="font-bold tracking-widest">{{ loadCurrentUser.user.phone?.slice(4, 13) }}</span></p>
            </div>
            <div class="text-sm">
              <p class="text-gray-500 flex gap-x-2 dark:text-white font-mono">{{ $t('Зароботная плата') }}:
                <span v-if="loadCurrentUser.user.id" class="font-bold tracking-widest">{{ loadCurrentUser.user.salary + ' сум' }}</span>
                <span v-else> </span>
              </p>
            </div>
          </div>
        </div>
        <div class="w-6/12 max-lg:w-full flex flex-col gap-y-10">
          <div class="">
            <p class="text-gray-500 dark:text-white font-mono">{{ $t('Компания') }}:</p>
            <p class="dark:text-white font-bold tracking-wide mt-2">
              {{company.company.description}}
            </p>
          </div>
        </div>
      </div>
      <div v-if="!loadCurrentUser.user.id">
        <div class="bg-black w-full h-full absolute top-0 left-0 opacity-40 rounded-lg"></div>
        <ThePreloader></ThePreloader>
      </div>
    </div>
    <Transition name="slide-down">
      <TheModal v-if="showInfo" @showModal="showInfo = false; getCode = false">
        <form @submit.prevent="loadCurrentUser?.update_user({user: userEdit, update_type: 'update-my'})">
          <div>
            <h2 class="text-center text-xl tracking-widest font-bold dark:text-white">Личная информация</h2>
          </div>
          <div class="w-full">
            <div class="mt-10 flex items-center justify-around">
              <div class="flex flex-col text-center w-3/12 dark:text-white tracking-widest">
                <p class="dark:text-gray-200 text-gray-400 font-bold text-[14px]">{{ $t('Должность' + ':') }} </p>
                <p class="">{{ userEdit.position }}</p>
              </div>
              <div class="flex flex-col text-center w-3/12 dark:text-white tracking-widest">
                <p class="dark:text-gray-200 text-gray-400 font-bold text-[14px]">{{ $t('Заработная плата' + ':') }} </p>
                <p class="">{{ userEdit.salary + ' ' + $t('сум') }}</p>
              </div>
            </div>
            <div class="px-10 max-sm:px-0">
              <div class="my-10 flex max-lg:gap-x-2 max-md:gap-y-2 max-md:flex-wrap max-md:justify-center justify-between">
                <div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center">
                  <p class="dark:text-white ml-1 tracking-widest  font-bold">{{ $t('Имя') + ':' }}</p>
                  <TheInput type="text"
                            v-model="userEdit.first_name"/>
                </div>
                <div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center">
                  <p class="dark:text-white ml-1 tracking-widest  font-bold">{{ $t('Фамилия') + ':' }}</p>
                  <TheInput type="text"
                            v-model="userEdit.last_name"/>
                </div>
              </div>
              <div class="my-10 flex max-lg:gap-x-2 max-lg:gap-y-4 max-lg:flex-wrap max-md:justify-center justify-between items-center">
                <div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center">
                  <p class="dark:text-white ml-1 tracking-widest  font-bold">{{ $t('Телефон') + ':' }}</p>
                  <TheInput type="tel"
                            v-model="userEdit.phone"/>
                </div>
                <div
                  class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center border p-4 rounded-xl shadow-md dark:shadow-none text-center">
                  <div>
                    <p class="dark:text-white ml-1 tracking-widest font-bold text-sm" v-if="!getCode">
                      {{ $t('Изменить номер') + ':' }}</p>
                    <p class="dark:text-white ml-1 tracking-widest font-bold text-sm" v-else>{{ $t('Введите Код') + ':'
                      }}</p>
                  </div>
                  <div class="flex gap-x-1 justify-center" v-if="getCode">
                    <TheInput type="text" maxlength="1" class="w-[40px] h-[45px] rounded text-center font-bold text-xl"/>
                    <TheInput type="text" maxlength="1" class="w-[40px] h-[45px] rounded text-center font-bold text-xl"/>
                    <TheInput type="text" maxlength="1" class="w-[40px] h-[45px] rounded text-center font-bold text-xl"/>
                    <TheInput type="text" maxlength="1" class="w-[40px] h-[45px] rounded text-center font-bold text-xl"/>
                  </div>
                  <div>
                    <TheButton t="button" type="change"
                               class="p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest"
                               @click="getCode = true;" v-if="!getCode">{{ $t('Изменить') }}
                    </TheButton>
                    <TheButton t="button" type="change"
                               class="p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest"
                               @click="getCode = true;" v-if="getCode">{{ $t('Подтвердить') }}
                    </TheButton>
                  </div>
                </div>
              </div>
              <div class="my-10 flex max-lg:gap-x-2 max-md:flex-wrap max-md:justify-center justify-between">
                <div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center">
                  <p class="dark:text-white ml-1 tracking-widest  font-bold">{{ $t('Дата рождения') + ':' }}</p>
                  <input type="date" v-model="birth"/>
                </div>
              </div>
            </div>
            <div class="flex justify-around max-sm:flex-col max-sm:gap-y-2">
              <TheButton class="w-4/12 max-sm:w-full py-2 rounded-full" t="button" type="danger"
                         @click="showInfo = false; getCode = false">{{ $t('Отмена') }}
              </TheButton>
              <TheButton class="w-4/12 max-sm:w-full py-2 rounded-full" t="submit" type="success">{{ $t('Сохранить') }}</TheButton>
            </div>
          </div>
        </form>
      </TheModal>
    </Transition>
  </div>

</template>

<style scoped lang="scss">
</style>