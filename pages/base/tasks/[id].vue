<script setup lang="ts">
import {useRoute} from "vue-router";
import {useTaskList} from "~/stores/tasks";
import {useAuthStore} from "~/stores/auth";
import {useCompanies} from "~/stores/companies";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TasksUserCheckbox from "~/components/Tasks/TaskUI/TasksUserCheckbox.vue";

const currentUser = useAuthStore()
const route = useRoute()
const currentTask = useTaskList()
const department = useCompanies()
const date = new Date()
department.loadDepartmentList()
const updateForm = ref({})
const files = ref({})
const props = defineProps({
  showCancelError: {
    type: Boolean,
    default: false
  },
  showAddPerformer: {
    type: Boolean,
    default: false
  },
  showDeleteTask: {
    type: Boolean,
    default: false
  },
  model_value: {
    type: Object,
    default: () => {
    }
  }
})

watchEffect(() => {
  currentTask.loadCurrentTask({id: route.params.id})

})
watchSyncEffect(()=>{
  useSeoMeta({
    title: `${currentTask.task.title}`
  })
})

</script>

<template>
  <div class="overflow-hidden">
    <TheContentBlock class="w-11/12 mx-auto relative">
      <div class="w-full mx-auto flex justify-center">
        <div class="absolute top-10 flex justify-center w-2/12 max-lg:w-4/12 h-4 rounded-b-full"
             :class="{'bg-orange-500' : currentTask.task.status === 'performing', 'bg-red-500' : currentTask.task.status === 'rejected', 'bg-green-500' : currentTask.task.status === 'completed', 'bg-blue-500' : currentTask.task.status === 'watching'}"></div>
        <p class="text-sm text-gray-400">{{ $t('Последние изменения') }}
          {{
            new Date(currentTask.task.updated_at).toLocaleDateString() + ', ' + new Date(currentTask.task.updated_at).toLocaleTimeString()
          }}</p>
      </div>
      <div class="flex items-center gap-x-4 ">
        <TheBreadcrumbs :breadcrumb-link="'/base/tasks'">
          {{ $t('Список заданий') }}
        </TheBreadcrumbs>
        <div>
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="dark:stroke-white stroke-black"
                  d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                  stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <TheBreadcrumbs>
          {{ currentTask.task.title }}
        </TheBreadcrumbs>
      </div>
      <div class="flex items-center justify-center gap-x-10">
        <p class="text-[12px] text-gray-400">{{ new Date(currentTask.task.created_at).toLocaleDateString() }}</p>
        <TheTextContent>
          {{ currentTask.task.title }}
        </TheTextContent>
        <p class="text-[12px] text-gray-400">{{ new Date(currentTask.task.deadline).toLocaleDateString() }}</p>
      </div>
      <div class="flex mx-6 max-sm:mx-0 gap-x-10 max-lg:flex-col">
        <div class="my-10 w-10/12 max-lg:w-full">
          <div>
            <TheTextContent>{{ $t('Описание') }}</TheTextContent>
            <div class="w-full mx-auto border p-10 my-6 border-gray-400 rounded-lg">
              {{ currentTask.task.description }}
            </div>
          </div>
          <div>
            <TheTextContent>{{ $t('Прикреплённые файлы') }}</TheTextContent>
            <div
                class="w-full flex flex-wrap gap-x-4 gap-y-2 items-center mx-auto border p-10 my-6 border-gray-400 rounded-lg">
              <a v-for="files in currentTask.task.author_files_urls"
                 class="flex dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-all flex-col items-center"
                 :href="currentUser.get_server_domain + files.file_url" :download="files.file_name"
                 :title="files.file_name">
                <div>
                  <div v-if="files.file_name?.slice(0 - 3) === 'pdf'">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="60px" height="60px" viewBox="0 0 56 64" enable-background="new 0 0 56 64"
                         xml:space="preserve">
                        <g>
                          <path fill="#8C181A"
                                d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                          <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                          <path opacity="0.5" fill="#FFFFFF" enable-background="new"
                                d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                        </g>
                          <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                          c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                           M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                          h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                          s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                          C42.2,42.8,41.9,43.1,41.5,43.1z"/>
                    </svg>
                  </div>
                  <div
                      v-else-if="files.file_name?.slice(0 - 3) === 'doc' || files.file_name?.slice(0 - 4) === 'docx'">
                    <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <g fill-rule="evenodd">
                        <path
                            d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z"
                            fill="#107cad"/>
                        <path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"/>
                        <path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5"/>
                      </g>
                      <path
                          d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z"
                          fill="#ffffff"/>
                    </svg>
                  </div>
                  <div
                      v-else-if="files.file_name?.slice(0 - 3) === 'xls' || files.file_name?.slice(0 - 4) === 'xlsx'">
                    <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.112.006c-2.802 0-5.073 2.273-5.073 5.074v53.841c0 2.803 2.271 5.074 5.073 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z"
                          fill-rule="evenodd" clip-rule="evenodd" fill="#45B058"/>
                      <path
                          d="M19.429 53.938c-.216 0-.415-.09-.54-.27l-3.728-4.97-3.745 4.97c-.126.18-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.035-.306.144-.432l3.89-5.131-3.619-4.826c-.09-.126-.145-.27-.145-.414 0-.342.288-.72.721-.72.216 0 .432.108.576.288l3.438 4.628 3.438-4.646c.127-.18.324-.27.541-.27.378 0 .738.306.738.72 0 .144-.036.288-.127.414l-3.619 4.808 3.891 5.149c.09.126.125.27.125.414 0 .396-.324.738-.719.738zm9.989-.126h-5.455c-.595 0-1.081-.486-1.081-1.08v-10.317c0-.396.324-.72.774-.72.396 0 .721.324.721.72v10.065h5.041c.359 0 .648.288.648.648 0 .396-.289.684-.648.684zm6.982.216c-1.782 0-3.188-.594-4.213-1.495-.162-.144-.234-.342-.234-.54 0-.36.27-.756.702-.756.144 0 .306.036.433.144.828.738 1.98 1.314 3.367 1.314 2.143 0 2.826-1.152 2.826-2.071 0-3.097-7.111-1.386-7.111-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.278.162.144.253.342.253.54 0 .36-.307.72-.703.72-.145 0-.307-.054-.432-.162-.883-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636 0 1.748-1.188 3.53-4.43 3.53z"
                          fill="#ffffff"/>
                      <path d="M55.953 20.352v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#349C42"/>
                      <path d="M37.049 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z" opacity=".5"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div v-else-if="files.file_name?.slice(0 - 3) === 'txt'">
                    <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.151-.036c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z"
                          fill-rule="evenodd" clip-rule="evenodd" fill="#F9CA06"/>
                      <g fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M56.008 20.316v1h-12.799s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z"
                              fill="#F7BC04"/>
                        <path d="M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799l-18.903-20.353z"
                              opacity=".5"
                              fill="#ffffff"/>
                      </g>
                      <path
                          d="M18.763 43.045h-3.277v10.047c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685 0 .359-.288.647-.648.647zm11.7 10.803c-.216 0-.415-.089-.541-.27l-3.727-4.97-3.745 4.97c-.126.181-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826c-.09-.126-.144-.27-.144-.414 0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646c.126-.18.324-.27.541-.27.378 0 .738.306.738.721 0 .144-.036.288-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415 0 .396-.325.738-.721.738zm11.195-10.803h-3.277v10.047c0 .414-.323.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685.001.359-.287.647-.648.647z"
                          fill="#ffffff"/>
                    </svg>
                  </div>
                  <div
                      v-else-if="files.file_name?.slice(0 - 3) === 'svg' || files.file_name?.slice(0 - 3) === 'png' || files.file_name?.slice(0 - 3) === 'jpeg' || files.file_name?.slice(0 - 3) === 'jpg' || files.file_name?.slice(0 - 4) === 'webp'">
                    <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <g fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M5.125.042c-2.801 0-5.072 2.273-5.072 5.074v53.841c0 2.803 2.271 5.073 5.072 5.073h45.775c2.801 0 5.074-2.271 5.074-5.073v-38.604l-18.904-20.311h-31.945z"
                            fill="#49C9A7"/>
                        <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                              fill="#37BB91"/>
                        <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                              fill="#ffffff"/>
                      </g>
                      <path
                          d="M10.119 53.739v-20.904h20.906v20.904h-20.906zm18.799-18.843h-16.691v12.6h16.691v-12.6zm-9.583 8.384l3.909-5.256 1.207 2.123 1.395-.434.984 5.631h-13.082l3.496-3.32 2.091 1.256zm-3.856-3.64c-.91 0-1.649-.688-1.649-1.538 0-.849.739-1.538 1.649-1.538.912 0 1.65.689 1.65 1.538 0 .85-.738 1.538-1.65 1.538z"
                          fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div
                      v-else-if="files.file_name?.slice(0 - 3) === 'rar' || files.file_name?.slice(0 - 3) === 'zip'">
                    <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z"
                          fill-rule="evenodd" clip-rule="evenodd" fill="#8199AF"/>
                      <g fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                              fill="#617F9B"/>
                        <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                              fill="#ffffff"/>
                      </g>
                      <path
                          d="M18.438 53.906h-7.581c-.378 0-.756-.342-.756-.828 0-.18.054-.36.162-.504l6.68-9.345h-6.212c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h7.454c.378 0 .756.342.756.829 0 .18-.054.36-.162.504l-6.68 9.345h6.338c.36 0 .648.288.648.648.001.395-.287.683-.647.683zm4.012.108c-.414 0-.738-.324-.738-.738v-10.767c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767c0 .413-.324.738-.756.738zm8.839-4.879h-3.331v4.141c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.299c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619s-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287-.001-1.35-.973-2.286-2.395-2.286z"
                          fill="#ffffff"/>
                    </svg>
                  </div>
                  <div v-else-if="files.file_name?.slice(0 - 4) === 'html'">
                    <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.135.008c-2.803 0-5.074 2.272-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.903-20.309h-31.946z"
                          fill-rule="evenodd" clip-rule="evenodd" fill="#F7622C"/>
                      <g fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                              fill="#F54921"/>
                        <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                              fill="#ffffff"/>
                      </g>
                      <path
                          d="M18.942 50.841c-.126 0-.231-.021-.336-.063l-7.58-3.38c-.483-.21-.798-.714-.798-1.28 0-.504.315-1.008.798-1.219l7.58-3.4c.105-.043.21-.063.336-.063.441 0 .882.356.882.903 0 .336-.189.672-.525.818l-7.034 3.002 7.034 2.982c.336.146.525.461.525.818 0 .546-.462.882-.882.882zm8.464-11.044l-4.43 13.291c-.126.398-.504.629-.903.629-.525 0-.924-.398-.924-.881 0-.105.021-.189.063-.295l4.43-13.29c.126-.378.483-.63.903-.63.525 0 .903.42.903.902l-.042.274zm10.184 7.6l-7.58 3.38c-.105.043-.231.063-.336.063-.441 0-.882-.356-.882-.882 0-.357.189-.672.525-.818l7.034-2.982-7.034-3.002c-.357-.146-.546-.482-.546-.818-.021-.547.441-.903.903-.903.105 0 .231.021.336.063l7.58 3.4c.483.211.798.715.798 1.219 0 .567-.315 1.071-.798 1.28z"
                          fill="#ffffff"/>
                    </svg>
                  </div>
                  <div v-else-if="currentTask.task.author_file?.length > 0">
                    <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <g fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z"
                            fill="#8199AF"/>
                        <path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                              fill="#617F9B"/>
                        <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                              fill="#ffffff"/>
                      </g>
                    </svg>
                  </div>
                </div>
                <p class="mt-2">
                  {{ files.file_name?.length > 10 ? files.file_name.slice(0, 10) + '...' : files.file_name }}
                </p>
              </a>
              <div class="w-full text-center mb-4" v-if="currentTask.task.author_files_urls?.length === 0">
                <p class="tracking-widest">{{ $t('Файлы отсутствуют') }}</p>
              </div>
            </div>
          </div>
          <div>
            <TheTextContent>{{ $t('Прикреплённые файлы исполнителей') }}</TheTextContent>
            <form enctype="multipart/form-data"
                  @submit.prevent="currentTask.change_taskStatus({performer_files: files, task_status: 'make-watching', id: currentTask.task.id})"
                  class="w-full mx-auto border p-10 my-6 border-gray-400 rounded-lg">
              <div class="flex gap-x-4 flex-wrap">
                <a v-for="performer_file in currentTask.task.performer_files_urls"
                   class="flex justify-center dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-all flex-col items-center"
                   :href="currentUser.get_server_domain + performer_file.file_url" :download="performer_file.file_name"
                   :title="performer_file.file_name">
                  <div>
                    <div v-if="performer_file.file_name?.slice(0 - 3) === 'pdf'">
                      <svg xmlns="http://www.w3.org/2000/svg"
                           width="60px" height="60px" viewBox="0 0 56 64" enable-background="new 0 0 56 64"
                           xml:space="preserve">
                    <g>
                      <path fill="#8C181A"
                            d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                      <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                      <path opacity="0.5" fill="#FFFFFF" enable-background="new"
                            d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                    </g>
                        <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                      C42.2,42.8,41.9,43.1,41.5,43.1z"/>
                </svg>
                    </div>
                    <div
                        v-else-if="performer_file.file_name?.slice(0 - 3) === 'doc' || performer_file.file_name?.slice(0 - 4) === 'docs'">
                      <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="evenodd">
                          <path
                              d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z"
                              fill="#107cad"/>
                          <path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"/>
                          <path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5"/>
                        </g>
                        <path
                            d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z"
                            fill="#ffffff"/>
                      </svg>
                    </div>
                    <div
                        v-else-if="performer_file.file_name?.slice(0 - 3) === 'xls' || performer_file.file_name?.slice(0 - 4) === 'xlsx'">
                      <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.112.006c-2.802 0-5.073 2.273-5.073 5.074v53.841c0 2.803 2.271 5.074 5.073 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#45B058"/>
                        <path
                            d="M19.429 53.938c-.216 0-.415-.09-.54-.27l-3.728-4.97-3.745 4.97c-.126.18-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.035-.306.144-.432l3.89-5.131-3.619-4.826c-.09-.126-.145-.27-.145-.414 0-.342.288-.72.721-.72.216 0 .432.108.576.288l3.438 4.628 3.438-4.646c.127-.18.324-.27.541-.27.378 0 .738.306.738.72 0 .144-.036.288-.127.414l-3.619 4.808 3.891 5.149c.09.126.125.27.125.414 0 .396-.324.738-.719.738zm9.989-.126h-5.455c-.595 0-1.081-.486-1.081-1.08v-10.317c0-.396.324-.72.774-.72.396 0 .721.324.721.72v10.065h5.041c.359 0 .648.288.648.648 0 .396-.289.684-.648.684zm6.982.216c-1.782 0-3.188-.594-4.213-1.495-.162-.144-.234-.342-.234-.54 0-.36.27-.756.702-.756.144 0 .306.036.433.144.828.738 1.98 1.314 3.367 1.314 2.143 0 2.826-1.152 2.826-2.071 0-3.097-7.111-1.386-7.111-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.278.162.144.253.342.253.54 0 .36-.307.72-.703.72-.145 0-.307-.054-.432-.162-.883-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636 0 1.748-1.188 3.53-4.43 3.53z"
                            fill="#ffffff"/>
                        <path d="M55.953 20.352v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z"
                              fill-rule="evenodd" clip-rule="evenodd" fill="#349C42"/>
                        <path d="M37.049 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z" opacity=".5"
                              fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff"/>
                      </svg>
                    </div>
                    <div v-else-if="performer_file.file_name?.slice(0 - 3) === 'txt'">
                      <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.151-.036c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#F9CA06"/>
                        <g fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M56.008 20.316v1h-12.799s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z"
                                fill="#F7BC04"/>
                          <path d="M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799l-18.903-20.353z"
                                opacity=".5"
                                fill="#ffffff"/>
                        </g>
                        <path
                            d="M18.763 43.045h-3.277v10.047c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685 0 .359-.288.647-.648.647zm11.7 10.803c-.216 0-.415-.089-.541-.27l-3.727-4.97-3.745 4.97c-.126.181-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826c-.09-.126-.144-.27-.144-.414 0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646c.126-.18.324-.27.541-.27.378 0 .738.306.738.721 0 .144-.036.288-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415 0 .396-.325.738-.721.738zm11.195-10.803h-3.277v10.047c0 .414-.323.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685.001.359-.287.647-.648.647z"
                            fill="#ffffff"/>
                      </svg>
                    </div>
                    <div
                        v-else-if="performer_file.file_name?.slice(0 - 3) === 'svg' || performer_file.file_name?.slice(0 - 3) === 'png' || performer_file.file_name?.slice(0 - 3) === 'jpeg' || performer_file.file_name?.slice(0 - 3) === 'jpg' || performer_file.file_name?.slice(0 - 4) === 'webp'">
                      <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="evenodd" clip-rule="evenodd">
                          <path
                              d="M5.125.042c-2.801 0-5.072 2.273-5.072 5.074v53.841c0 2.803 2.271 5.073 5.072 5.073h45.775c2.801 0 5.074-2.271 5.074-5.073v-38.604l-18.904-20.311h-31.945z"
                              fill="#49C9A7"/>
                          <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                                fill="#37BB91"/>
                          <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                                fill="#ffffff"/>
                        </g>
                        <path
                            d="M10.119 53.739v-20.904h20.906v20.904h-20.906zm18.799-18.843h-16.691v12.6h16.691v-12.6zm-9.583 8.384l3.909-5.256 1.207 2.123 1.395-.434.984 5.631h-13.082l3.496-3.32 2.091 1.256zm-3.856-3.64c-.91 0-1.649-.688-1.649-1.538 0-.849.739-1.538 1.649-1.538.912 0 1.65.689 1.65 1.538 0 .85-.738 1.538-1.65 1.538z"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff"/>
                      </svg>
                    </div>
                    <div
                        v-else-if="performer_file.file_name?.slice(0 - 3) === 'rar' || performer_file.file_name?.slice(0 - 3) === 'zip'">
                      <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#8199AF"/>
                        <g fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                                fill="#617F9B"/>
                          <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                                fill="#ffffff"/>
                        </g>
                        <path
                            d="M18.438 53.906h-7.581c-.378 0-.756-.342-.756-.828 0-.18.054-.36.162-.504l6.68-9.345h-6.212c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h7.454c.378 0 .756.342.756.829 0 .18-.054.36-.162.504l-6.68 9.345h6.338c.36 0 .648.288.648.648.001.395-.287.683-.647.683zm4.012.108c-.414 0-.738-.324-.738-.738v-10.767c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767c0 .413-.324.738-.756.738zm8.839-4.879h-3.331v4.141c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.299c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619s-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287-.001-1.35-.973-2.286-2.395-2.286z"
                            fill="#ffffff"/>
                      </svg>
                    </div>
                    <div v-else-if="currentTask.task.performer_file?.length > 0">
                      <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="evenodd" clip-rule="evenodd">
                          <path
                              d="M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z"
                              fill="#8199AF"/>
                          <path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                                fill="#617F9B"/>
                          <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                                fill="#ffffff"/>
                        </g>
                      </svg>
                    </div>
                    <div v-else>
                      <svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">

                        <g fill-rule="evenodd" clip-rule="evenodd">

                          <path
                              d="M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z"
                              fill="#8199AF"/>

                          <path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
                                fill="#617F9B"/>

                          <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5"
                                fill="#ffffff"/>

                        </g>

                      </svg>
                    </div>
                  </div>
                  <p class="mt-2 ">
                    {{ performer_file.file_name?.length > 10 ? performer_file.file_name.slice(0, 10) + '...' : performer_file.file_name }}
                  </p>
                </a>
              </div>
              <div class="w-full text-center mb-4" v-if="currentTask.task.performer_files_urls?.length === 0">
                <p class="tracking-widest">{{ $t('Файлы отсутствуют') }}</p>
              </div>
              <div
                  v-if="currentTask.task.status === 'performing' && currentTask.task.main_performer?.id === currentUser.user.id">
                <div class="flex flex-col items-center border dark:border-gray-500 rounded-lg p-4 w-4/212 mx-auto">
                  <p class="mb-4">{{ $t('Прикрепить файлы') }}</p>
                  <TheInput type="file" @input="files = $event.target.files"/>
                </div>
                <div class="text-center mt-10">
                  <TheButton type="success" class="px-4 py-2 rounded-full" @click="">{{ $t('Отправить') }}</TheButton>
                  <p class="mt-2 text-gray-400">{{ $t('Отправлять файлы может только') }} <span
                      class="font-bold dark:text-gray-300 text-black tracking-widest">{{
                      currentTask.task.main_performer?.first_name + ' ' + currentTask.task.main_performer?.last_name
                    }}</span>
                  </p>
                  <p class="mt-2 text-gray-400">{{ $t('После отправления файлов, статус поменяется на') }} <span
                      class="text-semiCyan font-bold tracking-widest">({{ $t('Просматривается') }})</span></p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
            class="w-4/12 max-lg:w-full overflow-hidden h-1/2 max-sm:p-4 border p-10 max-2xl:p-6 my-6 border-gray-400 rounded-lg">
          <div class="text-center mb-4 tracking-widest text-sm text-gray-400">
            <p>{{ $t('Автор задания') }}</p>
            <p>{{ currentTask.task.author_name }}</p>
          </div>
          <TheTextContent>{{ $t('Исполнители') }}</TheTextContent>
          <div class="mt-2">
            <p class="text-sm">{{ $t('Главный исполнитель') }}</p>
            <NuxtLink :to="`/base/users/${currentTask.task.main_performer?.id}`"
                      class="flex mt-4 max-lg:justify-center gap-x-3 items-center border border-gray-400 rounded-lg p-2 dark:hover:bg-gray-500 hover:bg-gray-200 transition-all duration-200">
              <div class=" max-md:w-full">
                <img class="w-[60px] h-[60px] rounded-full"
                     :src="currentUser.get_server_domain + currentTask.task.main_performer?.photo_url" alt="">
              </div>
              <p>{{
                  currentTask.task.main_performer?.first_name + ' ' + currentTask.task.main_performer?.last_name
                }}</p>
            </NuxtLink>
          </div>
          <div>
            <p class="text-sm mt-6">{{ $t('Список исполнителей') }}</p>
            <div class="mt-4 flex gap-x-6 justify-around"
                 v-if="currentTask.task.status === 'performing' && currentTask.task.author_id === currentUser.user.id">
              <TheButton
                  class="w-6/12 dark:hover:bg-gray-500 hover:bg-gray-300 !text-black dark:!text-white rounded-full border dark:border-gray-500 transition-all duration-200"
                  @click="showAddPerformer = true; updateForm.department.participants = department.get_all_department.participants.map(e=>{e.value = updateForm.participants?.filter(i=>i.id == e.id).length !=0})">
                {{ $t('Добавить') }}
              </TheButton>
            </div>
            <div
                class="mt-4 flex flex-col max-lg:w-full max-lg:gap-x-4 max-h-[500px] h-full gap-y-4 overflow-y-auto px-2">
              <div
                  class="flex relative items-center p-2 max-lg:w-full gap-x-6 border rounded-lg border-gray-400 dark:hover:bg-gray-500 hover:bg-gray-200 transition-all duration-200"
                  v-for="user in currentTask.task.performers_list">
                <NuxtLink :to="`/base/users/${user.id}`" class="w-11/12 flex items-center gap-x-4">
                  <img class="w-[60px] h-[60px] rounded-full" :src="currentUser.get_server_domain + user?.photo_url"
                       alt="">
                  <p class="">{{ user.last_name.slice(0, 1) + '.' + ' ' + user.first_name }}</p>
                </NuxtLink>
                <div
                    v-if="currentTask.task.status === 'performing' && currentTask.task.author_id === currentUser.user.id"
                    class="absolute cursor-pointer dark:stroke-white stroke-black right-0 px-2 py-1 hover:bg-red-400 max-sm:hidden transition-all duration-200 rounded-l-lg hover:stroke-white "
                    name="fade">
                  <div @click="currentTask.deleteUser_task({id: currentTask.task.id, user_id: user.id})">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14 11V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                            stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.2"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div
                    v-if="currentTask.task.status === 'performing' && currentTask.task.author_id === currentUser.user.id"
                    class="absolute cursor-pointer dark:stroke-white stroke-black right-0 top-0 px-2 py-1 bg-red-400 hidden max-sm:block transition-all duration-200 rounded-tr-lg rounded-l-lg hover:stroke-white "
                    name="fade">
                  <div @click="currentTask.deleteUser_task({id: currentTask.task.id, user_id: user.id})">
                    <p>X</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTask.task.status === 'watching' && currentTask.task.author_id === currentUser.user.id"
           class="flex flex-wrap gap-y-4 justify-center mb-10 gap-x-4">
        <TheButton class="px-10 py-2 rounded-full" type="danger" @click="showCancelError = true">{{ $t('Отклонить') }}
        </TheButton>
        <TheButton class="px-10 py-2 rounded-full" type="success"
                   @click="currentTask.change_taskStatus({id: currentTask.task.id , task_status:'make-completed'})">
          {{ $t('Подтвердить') }}
        </TheButton>
      </div>
      <div
          class="absolute max-md:fixed max-md:top-0 max-md:bottom-6 max-md:items-end stroke-white flex items-center top-14 right-6 gap-x-6">
        <div class="rounded-full cursor-pointer bg-blueDarkSemiLight p-2">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H10M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M9 17H11.5M9 13H14M9 9H10M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="rounded-full cursor-pointer bg-red-400 p-2"
             @click="showDeleteTask = true">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <TheModal v-if="showAddPerformer" @showModal="showAddPerformer = !showAddPerformer">
        <TheTextContent>{{ $t('Добавление Исполнителей') }}</TheTextContent>
        <form class="mt-6"
              @submit.prevent="currentTask.addUser_task({id: currentTask.task.id, performers: updateForm.participants?.filter(e=>e.value).map(i=>i.id).join(',')}); showAddPerformer = false"
              v-if="currentUser.user.role_en === 'company_admin' || currentUser.user.role_en === 'director' || currentUser.user.role_en === 'vice_director'">
          <div>
            <p>{{ $t('Выберите департамент') }}</p>
            <div class="flex flex-wrap max-md:justify-center gap-x-4 gap-y-4 my-6">
              <div class="border cursor-pointer px-4 py-2 rounded-lg transition-all duration-200"
                   :class="{'dark:bg-gray-500 bg-gray-200' : updateForm === item}" @click="updateForm = item"
                   v-for="item in department.get_all_department.results">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div>
            <p>{{ $t('Выберите исполнителей') }}</p>
            <Transition name="left-fade">
              <div class="flex flex-wrap max-md:justify-center items-center gap-x-4 gap-y-4 my-6">
                <TasksUserCheckbox v-for="performer in updateForm.participants" :item="performer">
                </TasksUserCheckbox>
              </div>
            </Transition>
          </div>

          <div class="flex justify-center gap-x-10">
            <TheButton class="w-3/12 max-md:w-6/12 rounded-full py-2" type="danger" @click="showAddPerformer = false">
              {{ $t('Отменить') }}
            </TheButton>
            <TheButton class="w-3/12 max-md:w-6/12 rounded-full py-2" type="success">{{ $t('Добавить') }}</TheButton>
          </div>
        </form>
      </TheModal>
      <TheModal v-if="showCancelError" class="!w-[200px]" @showModal="showCancelError = !showCancelError">
        <TheTextContent>{{ $t('Предупреждение') }}</TheTextContent>
        <form
            @submit.prevent="currentTask.change_taskStatus({task_status:'make-rejected', id: currentTask.task.id, comment: updateForm.comment}); showCancelError = false"
            class="mt-10">
          <div>
            <p class="mb-4">{{ $t('Опишите причину отклонения') }}</p>
            <textarea class="w-full resize-none h-[300px] p-4 border dark:border-none rounded-lg"
                      v-model="updateForm.comment"></textarea>
          </div>
          <div class="flex justify-center gap-x-10">
            <TheButton class="py-2 w-2/12 rounded-full" type="danger" @click="showCancelError = false">
              {{ $t('Отмена') }}
            </TheButton>
            <TheButton class="py-2 w-2/12 rounded-full" type="success">{{ $t('Подтвердить') }}</TheButton>
          </div>
        </form>
      </TheModal>
      <TheModal v-if="showDeleteTask" @showModal="showDeleteTask = !showDeleteTask">
        <TheTextContent>{{ $t('Предупреждение') }}</TheTextContent>
        <p class="text-center mt-2 text-base tracking-widest">{{ $t('Удалённые задания не подлежат восстановке') }}</p>
        <div class="my-6">
          <p class="text-center tracking-wider">{{ $t('Вы уверены что хотите удалить?') }}</p>
          <div class="flex gap-4 mt-2 justify-center">
            <TheButton type="danger" class="py-2 px-10 rounded-full" @click="showDeleteTask = false">
              {{ $t('Отменить') }}
            </TheButton>
            <TheButton type="success" class="py-2 px-10 rounded-full"
                       @click="currentTask.delete_task({id: currentTask.task.id}, $router); ">{{ $t('Удалить') }}
            </TheButton>
          </div>
        </div>
      </TheModal>
    </TheContentBlock>
  </div>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>