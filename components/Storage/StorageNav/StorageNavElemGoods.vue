<script setup lang="ts">
import {useStorageStore} from "~/stores/storage";
import {useRoute, useRouter} from "vue-router";
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import type {ICurrentCategory, TGoods} from "~/types/storage";

const isActive = ref(false)
const route = useRoute()
const router = useRouter()
const storageStore = useStorageStore()
defineProps({
  item: {
    type: Object as ()=> ICurrentCategory,
    default: {} as ICurrentCategory
  },
  moveEffectSubCategory: {
    type: Boolean
  },
  moveEffectSubCategoryWarn: {
    type: Boolean,
  }
})
</script>

<template>
  <div @mouseenter="moveEffectSubCategory = true" @mouseleave="moveEffectSubCategory = false"
       class="relative rounded-l-md dark:hover:bg-semiCyan hover:!bg-opacity-30 hover:bg-cyan transition-all">
    <NuxtLink :to="`/base/storage/${item.slug}`"
              :class="{'dark:bg-semiCyan': route.path === `/base/storage/${item.slug}/${route.params.id}`}"
              class="flex items-center w-full rounded-l-md p-1"
              @click="storageStore.currentCategory = {...item} as any">
      <div class="flex items-center gap-x-3 ">
        <div class="text-semiCyan">
          •
        </div>
        <span class="tracking-wider">{{ item.name }}</span>
      </div>
      <div>

      </div>
    </NuxtLink>
    <Transition name="slide-right">
      <button v-if="moveEffectSubCategory" class="absolute right-2 rounded-lg top-1"
              @click.stop="moveEffectSubCategoryWarn = true; moveEffectSubCategory = false">
        <svg width="25px" height="25px" viewBox="0 -5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-516.000000, -1144.000000)" class="dark:fill-white fill-black">
              <path d="M538.708,1151.28 C538.314,1150.89 537.676,1150.89 537.281,1151.28 L534.981,1153.58 L532.742,1151.34 C532.352,1150.95 531.718,1150.95 531.327,1151.34 C530.936,1151.73 530.936,1152.37 531.327,1152.76 L533.566,1154.99 L531.298,1157.26 C530.904,1157.65 530.904,1158.29 531.298,1158.69 C531.692,1159.08 532.331,1159.08 532.725,1158.69 L534.993,1156.42 L537.232,1158.66 C537.623,1159.05 538.257,1159.05 538.647,1158.66 C539.039,1158.27 539.039,1157.63 538.647,1157.24 L536.408,1155.01 L538.708,1152.71 C539.103,1152.31 539.103,1151.68 538.708,1151.28 L538.708,1151.28 Z M545.998,1162 C545.998,1163.1 545.102,1164 543.996,1164 L526.467,1164 L518.316,1154.98 L526.438,1146 L543.996,1146 C545.102,1146 545.998,1146.9 545.998,1148 L545.998,1162 L545.998,1162 Z M543.996,1144 L526.051,1144 C525.771,1143.98 525.485,1144.07 525.271,1144.28 L516.285,1154.22 C516.074,1154.43 515.983,1154.71 515.998,1154.98 C515.983,1155.26 516.074,1155.54 516.285,1155.75 L525.271,1165.69 C525.467,1165.88 525.723,1165.98 525.979,1165.98 L525.979,1166 L543.996,1166 C546.207,1166 548,1164.21 548,1162 L548,1148 C548,1145.79 546.207,1144 543.996,1144 L543.996,1144 Z"
                    id="delete" sketch:type="MSShapeGroup">
              </path>
            </g>
          </g>
        </svg>
      </button>
    </Transition>
    <Transition name="slide-down" class="text-center">
      <TheModal type="resize" v-if="moveEffectSubCategoryWarn" @showModal="moveEffectSubCategoryWarn = false">
        <TheTextContent>{{ $t('Удалить категорию?') }}</TheTextContent>
        <div class="break-words tracking-wider my-4 text-sm">
          <p>{{ $t('Если вы удалите категорию то всё содержимое данной категории удалиться без возврата') }}</p>
          <p class="mt-4">{{ $t('Убедитесь что категория пустая, переместите нужные товары в другие категории') }}</p>
        </div>
        <div class="flex flex-wrap gap-x-10 justify-center">
          <TheButton type="chat" @click="moveEffectSubCategoryWarn = false">{{ $t('Отмена') }}</TheButton>
          <TheButton type="chat" @click="storageStore.deleteStorageElem({deleteType: 'subcategory', id: item.id}).then(res => {
           if( storageStore.currentCategory.slug === item.slug) {
             router.push('/base/storage')
             storageStore.currentCategory = {} as any
           } else storageStore.currentCategory
          })">
            {{ $t('Удалить') }}
          </TheButton>
        </div>
      </TheModal>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

</style>