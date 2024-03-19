<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TestContentCreateElems from "~/components/Tests/TestUI/TestContentCreateElems.vue";
import TheInput from "~/components/UI/TheInput.vue";
import {useTestList} from "~/stores/test";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
import {toast} from "vue3-toastify";


const department = useCompanies()
const test = useTestList()

const selectedTestType = ref('')
const props = defineProps({
  showCreate: {
    type: Boolean,
    default: false,
  },
  trimi: {
    type: Boolean,
    default: null,
  },
  checkAnswer: {
    type: Object,
    default: () => {
    },
  }
})

const createForm = ref({
  answer: '',
  options_list: [
    {},
    {}
  ],
  department_id: null,
  question: '',
})
</script>

<template>
  <div class="">
    <button class="font-bold tracking-widest text-white bg-blue-400 mx-auto py-4 rounded-xl px-4 text-sm"
            @click="showCreate = true; department.loadDepartmentList()">{{ $t('Создать тест') }}
    </button>
    <TheModal v-if="showCreate" @showModal="showCreate = !showCreate">
      <TheTextContent>{{ $t('Создание тест') }}</TheTextContent>
      <form class="!overflow-x-hidden p-2"
            @submit.prevent="()=>{
              if(createForm.options_list.find(e=> e.text.trim() == '')) {
                 toast.error('Заполните пустые поля', {autoClose: 1500, theme: 'auto'})
              } else if(selectedTestType === '') {
                selectedTestType = 'error'
                toast.error('Укажите тип теста', {autoClose: 1500, theme: 'auto'})
              } else if(selectedTestType === 'testSpecial' && !createForm.department_id){
                toast.error('Выберите департамент', {autoClose: 1500, theme: 'auto'})
              } else {
                  test.createTest({test: createForm, answer: props.checkAnswer.item?.text, options: createForm.options_list.filter(e=>e.text).map(e=>e.text)}).then(res=>{
                    test.loadAllTest({page: 1, limit: 20})
                  })
                }
            }">
        <TestContentCreateElems>
          <div class="flex flex-wrap gap-y-2 justify-center gap-x-10">
            <button type="button" class="border px-6 py-4 rounded-lg transition-all"
                    :class="{'bg-gray-700 text-white': selectedTestType === 'testIQ', 'bg-red-400 text-white' : selectedTestType === 'error'}"
                    @click="selectedTestType = 'testIQ'; createForm.department_id = null">
              {{ $t('На IQ') }}
            </button>
            <button type="button" class="border px-6 py-4 rounded-lg transition-all"
                    :class="{'bg-gray-700 text-white': selectedTestType === 'testSpecial', 'bg-red-400 text-white' : selectedTestType === 'error'}"
                    @click="selectedTestType = 'testSpecial'">
              {{ $t('По специальности') }}
            </button>
          </div>
        </TestContentCreateElems>
        <TestContentCreateElems v-if="selectedTestType === 'testSpecial'">
          <div class="flex flex-col w-full items-center">
            <p>{{ $t('Выберите департамент') }}<span class="text-red-500 ml-2">*</span></p>
            <select
              class="w-7/12 max-lg:w-full dark:bg-gray-300 dark:border-none border dark:text-black text-sm rounded-lg py-4 px-2"
              v-model="createForm.department_id">
              <option v-for="item in department.get_all_department?.results" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
        </TestContentCreateElems>
        <TestContentCreateElems>
          <div class="w-full ">
            <TheInput type="textarea" :required="true" :label="$t('Вопрос')"
                      :trimi="createForm.question.trim() == '' && createForm.question.length !== 0 ? true : false"
                      v-model="createForm.question"></TheInput>
          </div>
        </TestContentCreateElems>
        <TestContentCreateElems>
          <div class="w-full ">
            <div>
              <TheButton class="px-10 py-2 mx-auto flex justify-center rounded-full" type="change" t="button"
                         @click="createForm.options_list.push({text: ''})">
                {{ $t('Добавить ответ') }}
              </TheButton>
              <p class="text-center text-sm text-gray-300 my-2">({{ $t('Выберите правильный ответ') }})</p>
            </div>
            <TransitionGroup clas="=" name="list" class="w-full flex flex-col gap-y-4" tag="ul">
              <li class="flex max-[400px]:flex-col max-[400px]: gap-x-2 items-center w-full"
                  v-for="(item, id) in createForm.options_list" :key="id">
                <div class="flex flex-col w-full">
                  <span>Ответ <span class="text-red-500" v-if="id === 0 || id === 1">*</span></span>
                  <input class="w-full p-2 rounded-lg dark:bg-gray-500 bg-gray-200" :key="id"
                         :class="{'!bg-green-500 text-white' : checkAnswer?.id === id}" type="text"
                         v-model="item.text"/>
                </div>
                <div class="flex gap-x-2 mt-8">
                  <div class="cursor-pointer bg-blueSemiLight p-2 rounded-lg"
                       @click="checkAnswer = {id, item}">
                    <svg class="fill-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"/>
                    </svg>
                  </div>
                  <div @click="createForm.options_list.splice(id, 1)" v-if="id !== 0 && id !== 1"
                       class=" cursor-pointer bg-red-400 p-2 rounded-lg">
                    <svg class="fill-white" width="20px" height="20px" viewBox="-3.5 0 19 19"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/>
                    </svg>
                  </div>
                </div>
              </li>
            </TransitionGroup>
          </div>
        </TestContentCreateElems>
        <TestContentCreateElems>
          <TheButton class="py-2 max-sm:w-full px-6 rounded-full" t="button" type="danger" @click="showCreate = false">
            {{ $t('Отменить')
            }}
          </TheButton>
          <TheButton class="py-2 max-sm:w-full px-6 rounded-full" t="submit" type="change">{{ $t('Создать') }}
          </TheButton>
        </TestContentCreateElems>
      </form>

    </TheModal>
  </div>
</template>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>