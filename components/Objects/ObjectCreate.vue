<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import ObjectContentCreateElems from "~/components/Objects/ObjectUI/ObjectContentCreateElems.vue";
import TheInput from "~/components/UI/TheInput.vue";
import {useObjects} from "~/stores/objects";

const objects = useObjects()
const createForm = ref({
  name: '',
  description: '',
  email: '',
  files: '',
  address: ''
})

defineProps({
  showCreate: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div>
    <button class="font-bold tracking-widest text-white bg-blue-400 mx-auto py-4 rounded-xl w-full px-4 text-sm"
            @click="showCreate = true">{{ $t('Создать объект') }}
    </button>
    <TheModal v-if="showCreate" @showModal="showCreate = !showCreate">
      <TheTextContent>{{ $t('Создание объекта') }}</TheTextContent>
      <form @submit.prevent="objects.createObject(createForm)">
        <ObjectContentCreateElems>
          <div class="w-6/12">
            <TheInput type="text" :label="$t('Наименование')" v-model="createForm.name"></TheInput>
          </div>
          <div class="w-6/12">
            <TheInput type="text" :label="$t('Email')" v-model="createForm.email"></TheInput>
          </div>
        </ObjectContentCreateElems>
        <ObjectContentCreateElems class="flex-wrap">
          <div class="w-6/12">
            <TheInput type="text" :label="$t('Адрес')" v-model="createForm.address"></TheInput>
          </div>
          <div class="w-full text-center mx-auto border p-4 border-dashed rounded-md">
            <TheInput type="file" :label="$t('Прикрепите файлы')"
                      @input="createForm.files = $event.target.files[0]"></TheInput>
          </div>
        </ObjectContentCreateElems>
        <ObjectContentCreateElems>
          <div class="w-full">
            <TheInput type="textarea" :label="$t('Описание')"
                      v-model="createForm.description"></TheInput>
          </div>
        </ObjectContentCreateElems>
        <ObjectContentCreateElems>
          <TheButton class="py-2 px-6 rounded-full" t="button" type="danger" @click="showCreate = false">
            {{ $t('Отменить')
            }}
          </TheButton>
          <TheButton class="py-2 px-6 rounded-full" t="submit" type="success">{{ $t('Создать') }}</TheButton>
        </ObjectContentCreateElems>
      </form>

    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>