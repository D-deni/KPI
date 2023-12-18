<script setup lang="ts">
import {useTestList} from "~/stores/test";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";

const testList = useTestList()
defineProps({
  test: {
    type: Object,
    default: () => {
    }
  },
  openTest: {
    type: Boolean,
    default: false
  },
  showTestError: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <div
      class=" p-2 border flex items-center justify-between cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
      <div class="w-full" @click="openTest = true">
        <p>{{ test?.question.length > 20 ? test.question?.slice(0, 20) + '...' : test?.question }}</p>
      </div>
      <div @click="showTestError = true">
        <div class="cursor-pointer bg-red-400 p-2 rounded-lg">
          <svg class="fill-white" width="20px" height="20px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
          </svg>
        </div>
      </div>
    </div>
    <TheModal v-if="openTest" @showModal="openTest = !openTest">
      <TheTextContent class="break-words">{{ $t('Тест:') + ' ' + test.question }}</TheTextContent>
      <p class="my-2">{{ $t('Варианты ответа:') }}</p>
      <div class="flex gap-x-2 w-full justify-center max-lg:flex-wrap gap-y-2">
        <div v-for="item in test.options" class="max-lg:w-full w-6/12">
          <p class="border p-2 rounded-lg break-words">{{ item.text }}</p>
        </div>
      </div>
    </TheModal>
    <TheModal v-if="showTestError" @showModal="showTestError = !showTestError">
      <TheTextContent>{{ $t('Вы уверены что хотите удалить тест?') }}</TheTextContent>
      <p class="text-center text-xl tracking-widest">{{ $t('Удалённые тесты возврату') + ' ' }}<span
        class="font-bold underline">{{ $t('не подлежат') }}</span></p>
      <div class="flex justify-center gap-x-10 mt-10">
        <TheButton class="px-10 py-2 rounded-full" type="danger" @click="showTestError = false">{{ $t('Отмена') }}
        </TheButton>
        <TheButton class="px-10 py-2 rounded-full" type="success" @click="testList.deleteTest({test_id: test?.id})">
          {{ $t('Удалить') }}
        </TheButton>
      </div>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>