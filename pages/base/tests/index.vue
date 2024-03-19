<script setup lang="ts">
import {useTestList} from "~/stores/test";
import {useAuthStore} from "~/stores/auth";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TestContent from "~/components/Tests/TestContent.vue";
import TestCreate from "~/components/Tests/TestCreate.vue";
import ThePreloader from "~/components/UI/ThePreloader.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TestLists from "~/components/Tests/TestLists.vue";

const user = useAuthStore()
const testContent = useTestList()
defineProps({
  testElem: {
    type: Object,
    default: () => {
    }
  }
})
watchSyncEffect(() => {
  if (user.get_user.permissions?.find(e => e.name_en === 'test.create')) {
    testContent.loadAllTest({limit: 20, page: 1, usual: 0})
    testContent.loadAllTest({limit: 20, page: 1, usual: 1})
  }
  useSeoMeta({
    title: 'Тесты',
    description: 'Страница с тестированием для пользователей'
  })
})
</script>

<template>
  <div>
    <TheTextContent :text-type="'pageTitle'">
      {{ $t('Страница с тестами') }}
    </TheTextContent>
    <div class="flex items-center gap-x-6">
      <TestContent></TestContent>
    </div>
    <div class="flex my-10 gap-x-2 justify-center"
         v-if="user.get_user?.permissions?.find(e=> e.name_en === 'task.create')">
      <TheContentBlock class="w-11/12 mx-auto">
        <TestCreate class="mx-auto mb-4"></TestCreate>
        <div class="flex max-md:flex-wrap max-md:gap-y-4 gap-x-4">
          <TheContentBlock class="w-6/12 max-md:w-full">
            <TheTextContent>{{ $t('IQ тесты') }}</TheTextContent>
            <div class="flex flex-col gap-y-2">
              <TestLists :test="item" v-for="item in testContent.get_test_iq?.results"></TestLists>
            </div>
          </TheContentBlock>
          <TheContentBlock class="w-6/12 max-md:w-full">
            <TheTextContent>{{ $t('Тесты по Специальности') }}</TheTextContent>
            <div class="flex flex-col gap-y-2">
              <TestLists :test="item" v-for="item in testContent.get_test_special?.results"></TestLists>
            </div>
          </TheContentBlock>
        </div>
      </TheContentBlock>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>