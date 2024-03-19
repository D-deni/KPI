<script setup lang="ts">
import StorageNavElemGoods from "~/components/Storage/StorageNav/StorageNavElemGoods.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheButton from "~/components/UI/TheButton.vue";
import { useStorageStore } from "~/stores/storage";

const storageStore = useStorageStore();
const virtualElement = ref({ getBoundingClientRect: () => ({}) });
const isOpen = ref(false);
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  isActiveCategory: {
    type: Boolean,
  },
  moveEffectCategory: {
    type: Boolean,
  },
  moveEffectCategoryWarn: {
    type: Boolean,
  },
});
</script>

<template>
  <div>
    <button
      @contextmenu.prevent
      @mouseenter="moveEffectCategory = true"
      @mouseleave="moveEffectCategory = false"
      class="flex items-center justify-between w-full relative"
      @click="isActiveCategory = !isActiveCategory"
    >
      <div class="flex items-center gap-x-3">
        <div>
          <svg
            class="dark:stroke-white stroke-black"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.17004 7.43994L12 12.5499L20.77 7.46991"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21.6099V12.5399"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 13.24V9.58002L7.51001 4.09998"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="tracking-wider text-sm break-words">{{ item.name }}</span>
      </div>
      <Transition name="fade">
        <button
          v-if="moveEffectCategory"
          class="absolute right-5 rounded-lg"
          @click.stop="moveEffectCategoryWarn = true"
        >
          <svg
            class="dark:stroke-white stroke-black"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12V17"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14 12V17"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4 7H20"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </Transition>

      <div :class="{ 'rotate-180': isActiveCategory }" class="transition-all">
        <svg
          class="dark:fill-white fill-black"
          :class="{ '!fill-semiCyan': isActiveCategory }"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
          ></path>
        </svg>
      </div>
    </button>
    <Transition name="slide-down" class="text-center">
      <TheModal
        type="resize"
        v-if="moveEffectCategoryWarn"
        @showModal="moveEffectCategoryWarn = false"
      >
        <TheTextContent>{{ $t("Удалить коробку?") }}</TheTextContent>
        <div class="break-words tracking-wider my-4 text-sm">
          <p>
            {{
              $t(
                "Если вы удалите коробку то всё содержимое данной коробки удалиться без возврата"
              )
            }}
          </p>
          <p class="mt-4">
            {{
              $t(
                "Убедитесь что коробка пустая, переместите нужные товары в другие категории"
              )
            }}
          </p>
        </div>
        <div class="flex flex-wrap gap-x-10 justify-center">
          <TheButton type="chat" @click="moveEffectCategoryWarn = false">{{
            $t("Отмена")
          }}</TheButton>
          <TheButton
            type="chat"
            @click="
              storageStore.deleteStorageElem({ deleteType: 'category', id: item.id })
            "
          >
            {{ $t("Удалить") }}</TheButton
          >
        </div>
      </TheModal>
    </Transition>
    <Transition name="slide-down">
      <div v-if="item.sub_categories && isActiveCategory">
        <StorageNavElemGoods
          class="mt-2"
          v-for="child in item.sub_categories"
          :item="child"
          :key="child.id"
        />
      </div>
    </Transition>
    <UContextMenu @contextmenu.prevent v-model="isOpen" :virtual-element="virtualElement">
      <StorageNavContextMenu>
        <template v-slot:ContextMenuSvg>
          <svg
            class="dark:stroke-white stroke-black"
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-a06cf116=""
              d="M10 12V17"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              data-v-a06cf116=""
              d="M14 12V17"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              data-v-a06cf116=""
              d="M4 7H20"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              data-v-a06cf116=""
              d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              data-v-a06cf116=""
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </template>

        <template v-slot:ContextMenuText>
          {{ $t("Удалить") }}
        </template>
      </StorageNavContextMenu>
    </UContextMenu>
  </div>
</template>

<style scoped lang="scss"></style>
