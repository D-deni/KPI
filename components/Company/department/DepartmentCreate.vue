<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import {useCompanies} from "~/stores/companies";
import TaskContentCreateElems from "~/components/Tasks/TaskUI/TaskContentCreateElems.vue";
import TheInput from "~/components/UI/TheInput.vue";
import VueDatePicker from "@vuepic/vue-datepicker";

const department = useCompanies()
const props = defineProps({
  showCreate: {
    type: Boolean,
    default: false
  },

})
const createForm = ref({
  name: '',
  email: '',
  address: '',
})
</script>

<template>
  <div>
    <TheButton class="w-full mr-auto" type="signIn" @click="showCreate = true">{{ $t('Создать департамент') }}</TheButton>
    <TheModal v-if="showCreate" @showModal="showCreate = !showCreate">
      <TheTextContent>{{ $t('Создать департамент') }}</TheTextContent>
      <form @submit.prevent="department.createDepartment({department: createForm}); showCreate = false; createForm.name = ' ' ">
        <TaskContentCreateElems>
            <div class="w-full ">
              <TheInput type="text" :label="$t('Наименование')" v-model="createForm.name"/>
            </div>
        </TaskContentCreateElems>
        <div class="flex justify-center gap-x-10">
          <TheButton class="px-10 rounded-full py-2" t="button" type="danger" @click="showCreate = false">{{$t('Отменна')}}</TheButton>
          <TheButton class="px-10 rounded-full py-2 bg-blueSemiLight" t="submit" @click="department.loadDepartmentList()">{{$t('Создать')}}</TheButton>
        </div>
      </form>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>