<script setup lang="ts">
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import {useTestList} from "~/stores/test";
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
import {useAuthStore} from "~/stores/auth";
import nuxtStorage from "nuxt-storage/nuxt-storage";
import {toast} from "vue3-toastify";

const user = useAuthStore()
const route = useRoute()
const router = useRouter()
const testStore = useTestList()
onMounted(() => {
  testStore.loadCurrentTest()
})
watchSyncEffect(()=>{
  useSeoMeta({
    title: 'Тест'
  })
})
</script>

<template>
  <div>
    <div class="flex items-center gap-x-4 ">
      <TheBreadcrumbs :breadcrumb-link="'/base/tests'">
        {{ $t('Страница с тестами') }}
      </TheBreadcrumbs>
      <div>
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="dark:stroke-white stroke-black"
                d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <TheBreadcrumbs>
        {{ testStore.get_current_test.test?.question.length > 10 ? testStore.get_current_test.test?.question.slice(0, 10) + '...' : testStore.get_current_test.test?.question }}
      </TheBreadcrumbs>
    </div>
    <div class="mx-auto w-10/12 my-10">Progressbar</div>
    <TheContentBlock class="w-10/12 mx-auto">
      <div class="flex max-md:flex-wrap">
        <h1 class="w-8/12 max-md:w-full max-md:text-center max-md:text-lg max-md:p-0 max-md:mb-4 p-10 text-2xl">
          {{ testStore.get_current_test.test?.question }}</h1>
        <div class="w-4/12 max-md:w-full flex flex-col gap-y-2">
          <div
            class="border text-xl rounded-lg p-2 w-full dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer transition-all"
            @click="testStore.testAnswer({test_id: testStore.get_current_test.test?.test_id, answer: item.text}, $router)"
            :key="item.id" v-for="item in testStore.get_current_test.test?.options">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </TheContentBlock>
  </div>
</template>

<style scoped lang="scss">

</style>