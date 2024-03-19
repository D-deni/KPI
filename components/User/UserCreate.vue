<script setup>
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue"
import UserContentCreateElems from "~/components/User/UserUI/UserContentCreateElems.vue";

import {useUserStore} from "~/stores/users";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";


import VueDatePicker from "@vuepic/vue-datepicker";

const loadCurrentUser = useAuthStore()
const company = useCompanies()
const userList = useUserStore()
const createForm = ref({
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  phone: '',
  photo_file: '',
  position_id: '',
  date_of_birth: '',
  company_id: Number(),
  department_id: Number(),
  role_id: Number(),
  permissions: {}
})

function loads() {
  // if (loadCurrentUser.user.role_en === 'admin') {
    userList.loadPositionList() // Удалить после создания Должности === 'РУКОВОДИТЕЛЬ'
  // } else if (loadCurrentUser.user.role_en === 'company_admin') {
    userList.loadUserList()
    userList.loadPositionList()
    company.loadDepartmentList();
  // }
  userList.loadRoleList()
}


//
// watch(company, ()=> {
//   if(createForm.company_id){
//     company.loadDepartmentList()
//   }
// })
defineProps({
  showCreateUser: {
    type: Boolean,
    default: false
  },
})

</script>

<template>
  <div>
    <TheButton class="max-md:w-full w-full px-4 text-sm" type="signIn" v-if="loadCurrentUser.current_user.permissions"
               @click="showCreateUser = true; loads(); loadCurrentUser.user.role_en === 'admin' ? company.loadCompanyList({page: 1, limit: 1000, query: ''}) : ''">
      {{ $t('Создать пользователя') }}
    </TheButton>
    <TheModal v-if="showCreateUser"
              @showModal="showCreateUser = !showCreateUser; !showCreateUser ? createForm = {} : createForm = {} "
              :show-create-user="showCreateUser">
      <TheTextContent>{{ $t('Создание пользователя') }}</TheTextContent>
      <form enctype="multipart/form-data" @submit.prevent="userList.createUser(createForm)">
        <UserContentCreateElems>
          <div class="w-6/12 max-lg:w-full">
            <TheInput type="text" :label="$t('Имя')" v-model="createForm.first_name"/>
          </div>
          <div class="w-6/12 max-lg:w-full">
            <TheInput type="text" :label="$t('Фамилия')" v-model="createForm.last_name"/>
          </div>
        </UserContentCreateElems>
        <UserContentCreateElems>
          <div class="w-6/12 max-lg:w-full">
            <TheInput type="text" label="Email" v-model="createForm.email"/>
          </div>
          <div class="w-6/12 max-lg:w-full">
            <TheInput type="password" :label="$t('Пароль')" v-model="createForm.password"/>
          </div>
        </UserContentCreateElems>
        <UserContentCreateElems>
          <div class="w-6/12 max-lg:w-full flex flex-col">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Дата рождения') }}</p>
            <VueDatePicker v-model="createForm.date_of_birth" :select-text="$t('Выбрать')"
                             :cancel-text="$t('Отменить')" placeholder="Start Typing ..." text-input
                             class="w-full max-lg:hidden rounded-lg p-2 dark:border-none mx-auto outline-semiCyan outline-1" auto-apply
                             multi-calendars-solo />
            <input type="date" v-model="createForm.date_of_birth" class="max-lg:block border outline-semiCyan dark:outline-none outline-1 dark:border-none hidden p-4 dark:bg-gray-300 dark:text-black mb-4 rounded-lg">
          </div>
          <div class="w-6/12 flex flex-col max-lg:w-full gap-y-1">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Номер телефона') }}</p>
            <TheInput type="tel" class="w-full rounded-lg p-2 outline-1"
                   id="phone"
                   placeholder="+998 (__) ___-__-__"
                   v-model="createForm.phone"
            />
          </div>
        </UserContentCreateElems>
        <UserContentCreateElems>
          <div class="w-6/12 flex flex-col max-lg:w-full">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Фото') }}</p>
            <label class="cursor-pointer hover:bg-semiCyan rounded-lg border-dashed border p-4 transition-all mt-2">
              <input type="file" name="file" :label="'Фото'" class="dark:text-white cursor-pointer" @input="createForm.photo_file = $event.target.files[0]">
            </label>
          </div>
        </UserContentCreateElems>
        <UserContentCreateElems>
          <div class="w-6/12 flex flex-col max-lg:w-full gap-y-2">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Роль') }}</p>
            <div>
              <p v-if="loadCurrentUser.user.role_en === 'admin'" class="tracking-widest dark:text-white">{{$t('Администратор компании')}}</p>
              <select @click="console.log(userList.get_role_list)" v-else type="text" v-model="createForm.role_id"
                      class="w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black" required>
                <option v-for="(role, id) in userList.get_role_list" :value="role.id">{{ role.name }}</option>
              </select>
            </div>
          </div>
          <div class="w-6/12 max-lg:w-full">
            <p class="text-md dark:text-white tracking-wider">{{ $t('Должность') }}</p>
            <select type="text" v-model="createForm.position_id" :modelValue="createForm.position_name"
                    class="w-full dark:bg-gray-300 rounded-lg p-2.5 mt-2 border dark:border-none outline-semiCyan outline-1 text-black" required>
              <option v-for="position in userList?.get_position_list" :value="position.id">{{ position.name }}</option>
            </select>
          </div>
        </UserContentCreateElems>
        <UserContentCreateElems>
          <div class="w-full">
            <p v-if="loadCurrentUser.user.role_en === 'admin'"
               class="text-md dark:text-white tracking-widest mb-2">{{ $t('Компании') }}</p>
            <p v-else class="text-md dark:text-white tracking-widest mb-2">{{ $t('Компания') }}</p>
            <select type="text" v-model="createForm.company_id"
                    class="w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black"
                    v-if="loadCurrentUser?.user.role_en === 'admin'">
              <option class="text-black" v-for="companyItem in company?.get_all_company?.results" :value="companyItem.id" >
                {{ companyItem.name }}
              </option>
            </select>
            <div v-else-if="loadCurrentUser.user.role_en === 'company_admin'">
              <p class="text-md dark:text-white tracking-widest mb-2">{{loadCurrentUser.user.company}}</p>
            </div>
          </div>
          <div class="w-full" v-if="loadCurrentUser.user.role_en === 'company_admin'">
            <p class="text-md dark:text-white tracking-widest mb-2">{{ $t('Отдел') }}</p>
            <select type="text" v-model="createForm.department_id"
                    class="w-full dark:bg-gray-300 rounded-lg p-2.5 border dark:border-none outline-semiCyan outline-1 text-black">
              <option v-for="department in company?.get_all_department.results" :value="department.id">{{ department.name }}</option>
            </select>
          </div>
        </UserContentCreateElems>
        <UserContentCreateElems>
          <TheButton class="py-2 px-6 rounded-full" t="button" type="danger" @click="showCreateUser = false">
            {{ $t('Отменить') }}
          </TheButton>
          <TheButton class="py-2 px-6 rounded-full" t="submit" type="success">
            {{ $t('Создать') }}
          </TheButton>
        </UserContentCreateElems>
      </form>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">

</style>