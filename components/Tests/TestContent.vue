<script setup lang="ts">
import {useTestList} from "~/stores/test";
import {useAuthStore} from "~/stores/auth";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheButton from "~/components/UI/TheButton.vue";
import nuxtStorage from "nuxt-storage/nuxt-storage";

const loadCurrentUser = useAuthStore()
const testList = useTestList()
testList.loadExam()
const testType = ref({
  type: '',
})
const params = {
  page: 1,
  limit: 5
}
onUpdated(() => {
  if(loadCurrentUser.user.exam_active === true) {
    testList.loadCurrentTest()
  }
})


</script>
<template>
  <div class="flex flex-col gap-y-10 w-full">
    <div class="w-full flex max-sm:flex-col max-sm:gap-y-4 gap-x-10 justify-center">
      <div class="w-5/12 max-sm:w-11/12 mx-auto">
        <TheContentBlock>
          <TheTextContent>{{ $t('По специальности') }}</TheTextContent>
          <div class="justify-center flex">
            <img class="rounded-lg" src="/img/2.png" alt="">
          </div>
          <div class="my-2">
            <p class="text-sm tracking-wider">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque
              commodi consectetur cupiditate distinctio dolores earum eius esse eum ipsam iste minus molestiae, natus
              necessitatibus neque nulla optio pariatur placeat porro quasi quia quibusdam, ratione reiciendis rem rerum
              sunt suscipit tempore unde velit! Accusantium amet asperiores assumenda atque dolorem dolores enim
              explicabo impedit iste magnam modi necessitatibus omnis placeat quae quidem quo repellendus reprehenderit,
              saepe soluta voluptates. Deleniti dolores eligendi, error laboriosam minima quasi quod repellendus
              temporibus unde. Debitis earum incidunt maiores vitae. Accusantium alias deleniti doloremque illo illum,
              itaque, nemo pariatur quidem ratione sapiente sunt tempora veritatis voluptate.</p>
          </div>
          <div class="mt-4 flex justify-center"
               @click="testType.type = 'testSpecial'; nuxtStorage.localStorage.setData('testType', testType.type)">
            <TheButton v-if="!loadCurrentUser.user.exam_active" type="success" class="px-10 py-2 rounded-lg"
                       @click="testList.testStart({usual: 0}, $router)">{{ $t('Начать') }}
            </TheButton>
          </div>
        </TheContentBlock>
      </div>
      <div class="w-5/12 max-sm:w-11/12 mx-auto">
        <TheContentBlock>
          <TheTextContent>{{ $t('На интеллект') }}</TheTextContent>
          <div class="justify-center h-full flex">
            <img class="rounded-lg h-full" src="/img/3.webp" alt="">
          </div>
          <div class="my-2">
            <p class="text-sm tracking-wider">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque
              commodi consectetur cupiditate distinctio dolores earum eius esse eum ipsam iste minus molestiae, natus
              necessitatibus neque nulla optio pariatur placeat porro quasi quia quibusdam, ratione reiciendis rem rerum
              sunt suscipit tempore unde velit! Accusantium amet asperiores assumenda atque dolorem dolores enim
              explicabo impedit iste magnam modi necessitatibus omnis placeat quae quidem quo repellendus reprehenderit,
              saepe soluta voluptates. Deleniti dolores eligendi, error laboriosam minima quasi quod repellendus
              temporibus unde. Debitis earum incidunt maiores vitae. Accusantium alias deleniti doloremque illo illum,
              itaque, nemo pariatur quidem ratione sapiente sunt tempora veritatis voluptate.</p>
          </div>
          <div class="mt-4 flex justify-center"
               @click="testType.type = 'testIq'; nuxtStorage.localStorage.setData('testType', testType.type)">
            <TheButton v-if="!loadCurrentUser.user.exam_active" type="success" class="px-10 py-2 rounded-lg"
                       @click="testList.testStart({usual: 1}, $router)">{{ $t('Начать') }}
            </TheButton>
          </div>
        </TheContentBlock>
      </div>
    </div>
    <div v-if="loadCurrentUser.user.exam_active">
      <TheContentBlock class="w-10/12 mx-auto">
        <TheTextContent>{{ $t('Текущий тест') }}</TheTextContent>
        <p class="text-center">
          <span v-if="nuxtStorage.localStorage.getData('testType')">{{ $t('по') + ' ' }}</span>
          <span v-if="nuxtStorage.localStorage.getData('testType') === 'testIq'">{{ 'IQ' }}</span>
          <span v-else-if="nuxtStorage.localStorage.getData('testType') === 'testSpecial'">{{ $t('специальности') }}</span>
        </p>
        <div class="p-4 w-full h-full flex max-md:flex-wrap border-t gap-x-4 dark:border-gray-500 mt-2"
             @click="console.log(nuxtStorage.localStorage.getData('testType'))">
          <div class="w-5/12 max-md:w-full">
            <div class="w-[250px] max-md:w-9/12 max-sm:w-full mx-auto">
              <img class="w-full h-full" v-if="nuxtStorage.localStorage.getData('testType') === 'testSpecial'"
                   src="/img/2.png" alt="">
              <img class="w-full h-full" v-else-if="nuxtStorage.localStorage.getData('testType') === 'testIq'"
                   src="/img/3.webp" alt="">
              <img class="w-full h-full" v-else src="/img/3.webp" alt="">
            </div>
          </div>
          <div
            class="flex max-lg:flex-col items-center justify-around max-md:justify-center w-8/12 max-md:w-full gap-x-10 max-md:gap-y-4">
            <div class="w-7/12 max-md:w-full">
              <p class="text-gray-400 max-sm:text-sm tracking-widest">{{ $t('Вопрос:') }}</p>
              <p class="text-2xl max-sm:text-lg break-words">
                {{ testList.get_current_test.test?.question.length > 80 ? testList.get_current_test.test?.question.slice(0, 80) + '...' : testList.get_current_test.test?.question
                }}</p>
            </div>
            <NuxtLink to="/base/tests/exam"
                      class="text-2xl text-white max-sm:text-lg py-2 bg-blueDarkSemiLight rounded-full text-center w-4/12 max-lg:w-7/12 max-md:w-full ">
              {{ $t('Продолжить') }}
            </NuxtLink>
          </div>
        </div>
      </TheContentBlock>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>