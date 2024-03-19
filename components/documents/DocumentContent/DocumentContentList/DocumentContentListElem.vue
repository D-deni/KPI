<script setup lang="ts">

import {downloadWithAxios} from "~/hooks/ElemUI";
import {useAuthStore} from "~/stores/auth";

const router = useRouter()
const domain = useAuthStore()
defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <div @click.stop="router.push(`/base/documents/${item.id}`)"
       class="border p-2 rounded-lg dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer transition-all">
    <div class="text-center tracking-widest font-bold text-lg capitalize">
      <p>
        <slot name="documentTitle"/>
      </p>
    </div>
    <div
      class="flex items-center gap-x-4 my-6 hover:bg-blueSemiLight cursor-pointer p-2 rounded-lg transition-all hover:text-white"
      @click.stop="downloadWithAxios(item)">
      <div v-if="item.file_name.substr(-3) === 'pdf'">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="50px" height="50px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve">
          <g>
            <path fill="#8C181A"
                  d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
            <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
            <path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
          </g>
                    <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
            c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
             M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
            h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
            s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
            C42.2,42.8,41.9,43.1,41.5,43.1z"/>
        </svg>
      </div>
      <div v-if="item.file_name.substr(-3) === 'doc' || item.file_name.substr(-4) === 'docx'">
        <svg width="50px" height="50px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg">

          <g fill-rule="evenodd">

            <path d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z" fill="#107cad"/>

            <path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"/>

            <path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5"/>

          </g>

          <path d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z" fill="#ffffff"/>

        </svg>
      </div>
      <p class="tracking-widest">
        <slot name="documentFileName"/>
      </p>
    </div>
    <div class="flex items-center gap-x-2 ">
      <div class="w-[30px] h-[30px]">
        <img class="rounded-full w-full" :src="domain.get_server_domain + item.author.photo" alt="">
      </div>
      <p>
        <slot name="documentUserName"/>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>