<script setup lang="ts">
import {useObjects} from "~/stores/objects";
import {useRoute} from "vue-router";
import TheTitle from '~/components/UI/TheTitle.vue'
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import ObjectParticipants from "~/components/Objects/ObjectParticipants.vue";
import ObjectSwiper from "~/components/Objects/ObjectSwiper.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
const route = useRoute()
const currentObject = useObjects()
watchEffect(()=> {
  currentObject.loadObject({id: route.params.id})
})

watchSyncEffect(()=>{
  useSeoMeta({
    title: `${currentObject.objects.name}`
  })
})
</script>

<template>
  <div class="text-center">
      <TheTextContent :text-type="'pageTitle'">{{$t('Страница объекта ')}} <span class="bg-semiCyan px-2 py-1 rounded-full text-white">{{currentObject.get_objects.name}}</span></TheTextContent>
    <div class="flex max-sm:flex-col max-sm:my-6 items-center gap-x-4">
      <TheBreadcrumbs :breadcrumb-link="'/base/objects'">
        {{ $t('Список объектов') }}
      </TheBreadcrumbs>
      <div>
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="dark:stroke-white stroke-black"
                d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <TheBreadcrumbs>
        {{currentObject.get_objects.name}}
      </TheBreadcrumbs>
    </div>
    <div class="flex mt-6 gap-x-4">
      <TheContentBlock class="w-9/12">
        <div class="flex justify-between gap-x-2">
         <div>
           <p>{{$t('Дата создания:')}}</p>
           <p>{{new Date(currentObject.get_objects.created_at).toLocaleDateString()}}</p>
         </div>
          <TheTextContent :text-type="'pageTitle'">{{$t('Описание')}}</TheTextContent>
          <div>
            <p>{{$t('Email:')}}</p>
            <p>{{currentObject.get_objects.email}}</p>
          </div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur exercitationem fugiat in minus non suscipit velit voluptatum? Expedita facere itaque iusto magni possimus quis reiciendis rem tenetur totam voluptatibus. Beatae commodi corporis culpa hic iusto, natus numquam perferendis quas repellat saepe sed totam, vel voluptatum. Amet architecto at commodi consequuntur culpa delectus deleniti dicta dolore ea eius eos est eum explicabo, id impedit ipsam itaque necessitatibus nemo neque officia pariatur perspiciatis placeat praesentium quaerat quam quas quos repellat repudiandae saepe sint soluta tenetur vel voluptatum. Aliquam asperiores incidunt omnis repellendus. Beatae eaque exercitationem quia sed tempore? Maiores quia, quo!</p>
        </div>
      </TheContentBlock>
      <TheContentBlock class="w-3/12">
        <TheTextContent>{{$t('Участники')}}</TheTextContent>
        <div>
          <ObjectParticipants v-if="currentObject.get_objects.participants?.length > 0" v-for="user in currentObject.get_objects.participants" :user="user"/>
          <div v-else>
            <p>{{$t('Участники отсутствуют')}}</p>
          </div>
        </div>
      </TheContentBlock>
    </div>
    <TheContentBlock class="my-10">
      <TheTextContent :text-type="'pageTitle'">{{$t('Изображения объекта')}}</TheTextContent>
      <ObjectSwiper></ObjectSwiper>
    </TheContentBlock>
  </div>
</template>

<style scoped lang="scss">

</style>