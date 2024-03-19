<script setup lang="ts">

import TheInput from "~/components/UI/TheInput.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import {useStorageStore} from "~/stores/storage";
import StorageButton from "~/components/Storage/UI/StorageButton.vue";
import TheButton from "~/components/UI/TheButton.vue";

const storageStore = useStorageStore()
const createType = ref('')
const selected = ref(storageStore.storageCategoryList)
const categoryTitle = ref('')
</script>

<template>
  <div>
    <div class="flex ">
      <div class="w-full">
        <TheTextContent>{{ $t('Создание') }}</TheTextContent>
      </div>
      <button @click="storageStore.createCategory = false">
        <svg class="dark:stroke-white stroke-black" width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21.32L21 3.32001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 3.32001L21 21.32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
    <div>
      <p class="my-2 text-sm tracking-wider text-center">{{ $t('Выберите тип который хотите создать') }}</p>
      <div class="flex gap-x-10 justify-center mt-4">
        <StorageButton :class="{'!bg-blueSemiLight text-white' : createType === 'category'}" @click="createType = 'category'">
          {{ $t('Коробка') }}
        </StorageButton>
        <StorageButton :class="{'!bg-blueSemiLight text-white' : createType === 'subcategory'}"
                       @click="createType = 'subcategory'">
          {{ $t('Категория') }}
        </StorageButton>
      </div>
    </div>
    <form class="mt-10" @submit.prevent>
      <TheInput label="Наименование" required v-model="categoryTitle" type="text"/>
      <Transition name="slide-up">
        <div v-if="createType === 'subcategory'" class="mt-4">
          <p>{{ $t('Выберите коробку') }}</p>
          <div>
            <USelectMenu searchable
                         required
                         :searchable-placeholder="$t('Поиск...')"
                         class="w-full"
                         select-class="dark:bg-gray-300 h-10 bg-white border dark:border-none"
                         placeholder="Выберите"
                         variant="none"
                         v-model="selected"
                         :options="storageStore.storageCategoryList"
                         option-attribute="name"
            >
              <template #label>
                <span class="dark:text-black">{{selected.name}}</span>
              </template>
              <template #option-empty="{ query }">
                <q>{{ query }}</q> {{ $t('Не найдено') }}
              </template>
              <template #empty>
                {{ $t('Ничего нет') }}
              </template>
            </USelectMenu>
          </div>
        </div>
      </Transition>
      <div class="flex justify-center gap-x-10 mt-6">
        <TheButton t="button" type="chat" @click="storageStore.createCategory = false">{{ $t('Отмена') }}</TheButton>
        <TheButton t="button" type="chat" @click="storageStore.createStorageCategoryOrSubcategory({createType: createType === 'category' ? 'category' : 'subcategory', category_id: createType === 'subcategory' ? selected.id : null, name: categoryTitle})">{{ $t('Создать') }}</TheButton>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">

</style>