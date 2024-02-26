<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import {useChat} from "~/stores/chat";
import {useRoute, useRouter} from "vue-router";
import {toast} from "vue3-toastify";
import {vIntersectionObserver} from '@vueuse/components'
import ChatContentContextMenuItem from "~/components/Chat/ChatContent/ChatContentContextMenuItem.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheChatContentEmpty from "~/components/Chat/ChatNav/UI/TheChatContentEmpty.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheChatAvatar from "~/components/Chat/ChatNav/UI/TheChatAvatar.vue";
import {useAnchorScroll} from "#imports";

const router = useRouter()
const route = useRoute()
const chat = useChat()
const currentUser = useAuthStore()
const {x, y} = useMouse()
const {y: windowY} = useWindowScroll()
const isOpen = ref(false)
const virtualElement = ref({getBoundingClientRect: () => ({})})
const scrollPosition = ref(null)
const page = ref(1)
const limit = ref(99)
const messages_block = ref({
  scrollTop: '',
  scrollHeight: '',
  clientHeight: '',
  root: null,
})
const props = defineProps({
  messageObject: {
    type: Object,
    default: () => {
    }
  },
  showDeleteWarn: {
    type: Boolean,
    default: false
  },
  showPinnedWarn: {
    type: Boolean,
    default: false
  },
  showUnPinWarn: {
    type: Boolean,
    default: false
  },
  showDateModal: {
    type: Boolean,
    default: false
  }
})

function onScroll({target: {scrollTop, clientHeight, scrollHeight}}) {
  scrollPosition.value = scrollTop
  if (scrollTop === 0) {
    page.value = Number(page.value) + 1
    if(chat.messageLimit == 100){
      chat?.loadUserChat({page: page.value, limit: 100, id: route.params.id})
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    const el = messages_block.value
    el.scrollTop = el?.scrollHeight
  }, 500)
})
watchEffect(() => {
  setTimeout(() => {
    const el = messages_block.value
    el.scrollTop = el?.scrollHeight
  }, 500)
})

function scrollBottom() {
  const el = document.getElementById('messages_block')
  el?.scrollTo({
    top: el?.scrollHeight,
    behavior: "smooth"
  })
}

let to = ref(null)

function onIntersectionObserver([{target}]: IntersectionObserverEntry[]) {
  if (target.dataset.read === '0' && target.dataset.senderId !== `${currentUser.user.id}`) {
    if (chat.messagesMakeRead.indexOf(target.id) === -1) {
      chat.messagesMakeRead.push(target.id)
      clearTimeout(to)
      to = setTimeout(() => {
        chat.makeRead({messages: chat.messagesMakeRead})
      }, 1000)
    }
  }
}
function StartRecording(){
  if (chat.showVoiceInfo && chat.voiceTimer === 0) {
    setTimeout(() => {
      chat.showVoiceInfo = false
    }, 2000)
  } else {
    chat.showVoiceInfo = false;
    setTimeout(() => {
      chat.voiceTimer += 1
    }, 1000)
  }
  console.log(chat.voiceTimer)
}

</script>

<template>
  <div class="flex flex-col !overflow-x-hidden gap-y-2 check overflow-y-auto" @dragenter.prevent="chat.showDragInfo = true" @scroll="onScroll"
       ref="messages_block" id="messages_block">
    <Transition name="slide-up">
      <button v-if="scrollPosition < this.$refs.messages_block?.scrollHeight - this.$refs.messages_block?.clientHeight"
              @click="scrollBottom"
              class="absolute bottom-20 right-3 dark:bg-gray-700 bg-white rounded-full">
        <svg class="stroke-blueSemiLight" width="40px" height="40px" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M17 9.5L12 14.5L7 9.5" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
    </Transition>
    <Transition name="fade">
      <div
        class="mr-4 absolute bottom-10 right-0 bg-black dark:bg-opacity-70 z-50 bg-opacity-20 dark:text-white text-white tracking-wide p-4 rounded-lg mb-4 max-[400px]:mx-4 break-words"
        v-if="chat.showVoiceInfo">
        <p class="text-sm">{{ $t('Удерживайте для записи голосового сообщения') }}</p>
      </div>
    </Transition>
    <UContextMenu @contextmenu.prevent v-model="isOpen" :virtual-element="virtualElement">
      <ChatContentContextMenuItem
        v-if="currentUser.user?.id === messageObject.sender?.id && !messageObject.forwarded_from && messageObject.message_type === 'default'"
        @click="chat.messageUpdate = {...messageObject, updateText: messageObject?.text}; chat.messageText = ''; chat.messageReplied = {}; chat.messagePinned = {}; chat.messageForwarded = {}; isOpen = false">
        <template v-slot:ContextMenuSvg>
          <svg class="stroke-black dark:stroke-white" width="22px" height="22px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path data-v-a06cf116=""
                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path data-v-a06cf116=""
                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </template>
        <template v-slot:ContextMenuText>{{ $t('Изменить') }}</template>
      </ChatContentContextMenuItem>
      <ChatContentContextMenuItem v-if="messageObject.message_type === 'default'"
                                  @click="chat.messageReplied = messageObject; messageObject = {}; chat.messageUpdate = {}; isOpen = false">
        <template v-slot:ContextMenuSvg>
          <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 32 32" xml:space="preserve" fill="none" width="22px" height="22px" class="dark:stroke-white stroke-black">
            <path class="st0" d="M11.7,8.1V6c0-0.8-0.9-1.3-1.5-0.8l-6.8,6c-0.5,0.4-0.5,1.2,0,1.6l6.8,6c0.6,0.5,1.5,0,1.5-0.8v-2h0.9
              c7.1,0,13.5,4.3,16.5,11C29,16.8,21.3,8.6,11.7,8.1z"/>
          </svg>
        </template>
        <template v-slot:ContextMenuText>{{ $t('Ответить') }}</template>
      </ChatContentContextMenuItem>
      <ChatContentContextMenuItem v-if="messageObject.message_type === 'default'"
        @click="chat.showSendWindow = true; isOpen = false; chat.messageReplied = {}; chat.messageUpdate = {}">
        <template v-slot:ContextMenuSvg>
          <svg class="dark:stroke-white stroke-black fill-none" width="22px" height="22px" version="1.1" id="Icons"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 32 32" xml:space="preserve">
              <path d="M20.3,8.1V6c0-0.8,0.9-1.3,1.5-0.8l6.8,6c0.5,0.4,0.5,1.2,0,1.6l-6.8,6c-0.6,0.5-1.5,0-1.5-0.8v-2h-0.9
              C12.4,16,5.9,20.3,3,27C3,16.8,10.7,8.6,20.3,8.1z"/>
          </svg>
        </template>
        <template v-slot:ContextMenuText>{{ $t('Переслать') }}</template>
      </ChatContentContextMenuItem>
      <ChatContentContextMenuItem v-if="!messageObject.pinned && messageObject.message_type === 'default'"
                                  @click="chat.messagePinned = {...messageObject}; showPinnedWarn = true; isOpen = false;">
        <template v-slot:ContextMenuSvg>
          <svg class="dark:fill-white" xmlns="http://www.w3.org/2000/svg"
               width="22px" height="22px" viewBox="0 0 261.811 261.811"
               xml:space="preserve">
                <g>
                  <g>
                    <path d="M24.715,261.811c-5.492,0-10.645-2.133-14.521-6.01c-8.011-8.017-8.011-21.054-0.006-29.064
                      l70.375-70.372L38.51,113.785c-7.073-7.179-7.928-18.303-2.039-26.466c0.855-1.184,21.314-28.839,58.964-28.839
                      c2.224,0,4.492,0.101,6.756,0.295L180.62,3.597c8.103-5.729,20.081-4.48,26.863,2.796l44.675,48.037
                      c6.919,7.436,7.319,19.006,0.926,26.906l-55.882,69.151c1.979,23.759,1.052,63.069-23.901,77.725
                      c-7.959,4.666-18.578,3.26-25.021-3.282l-38.837-39.316l-70.206,70.183C35.365,259.678,30.208,261.811,24.715,261.811z
                       M95.43,70.194c-31.735,0-48.763,23.009-49.472,23.987c-2.53,3.502-2.159,8.291,0.883,11.376l50.227,50.865l-78.6,78.594
                      c-3.442,3.448-3.442,9.058,0,12.505c3.319,3.328,9.157,3.328,12.482,0l78.531-78.52l47.122,47.7
                      c2.762,2.813,7.325,3.407,10.761,1.412c20.957-12.316,19.539-52.303,17.961-68.919l-0.229-2.373l58.878-72.854
                      c2.745-3.402,2.573-8.371-0.406-11.567l-44.663-48.031c-2.904-3.116-8.062-3.671-11.545-1.212l-82.042,57.726l-2.213-0.251
                      C100.536,70.34,97.952,70.194,95.43,70.194z"/>
                  </g>
                </g>
            </svg>
        </template>
        <template v-slot:ContextMenuText>{{ $t('Закрепить') }}</template>
      </ChatContentContextMenuItem>
      <ChatContentContextMenuItem v-else-if="messageObject.pinned && messageObject.message_type === 'default'" @click="showUnPinWarn = true; isOpen = false">
        <template v-slot:ContextMenuSvg>
          <svg class="dark:fill-white fill-black" width="22px" height="22px" viewBox="0 0 256 256" id="Flat"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50.96,37.30957A4,4,0,0,0,45.04,42.69043l38.59424,42.4541c-11.416-2.39062-31.02295-2.76172-51.54444,13.79248a12.01279,12.01279,0,0,0-.96484,17.84424L82.34326,168,45.17188,205.17139a3.99992,3.99992,0,1,0,5.65625,5.65722L88,173.65674l51.02051,51.021a12.00814,12.00814,0,0,0,8.49219,3.51954q.42041,0,.84277-.02979a11.97039,11.97039,0,0,0,8.73047-4.74512c6.33252-8.4165,15.40625-23.479,15.38379-40.55859L205.04,218.69043a4,4,0,1,0,5.91992-5.38086Zm99.7334,181.30322a3.99357,3.99357,0,0,1-6.01563.40821L36.78125,111.124a4.01376,4.01376,0,0,1,.332-5.96045c27.17188-21.91943,52.06543-10.09375,53.09766-9.58593a3.99477,3.99477,0,0,0,3.08984.20019l69.71729,76.689C168.36816,191.2041,157.64355,209.374,150.69336,218.61279ZM232.68652,96a11.92292,11.92292,0,0,1-3.51562,8.48584l-41.4043,41.40381a3.99975,3.99975,0,1,1-5.65625-5.65674l41.4043-41.4043a3.99915,3.99915,0,0,0,0-5.65674L162.8291,32.48535a4.00621,4.00621,0,0,0-5.6582.00049l-37.97559,37.9751a3.99957,3.99957,0,1,1-5.65625-5.65625l37.97559-37.97608a12.01526,12.01526,0,0,1,16.9707-.00049L229.1709,87.51465A11.921,11.921,0,0,1,232.68652,96Z"/>
          </svg>
        </template>
        <template v-slot:ContextMenuText>{{ $t('Открепить') }}</template>
      </ChatContentContextMenuItem>
      <ChatContentContextMenuItem @click="showDeleteWarn = true; isOpen = false">
        <template v-slot:ContextMenuSvg>
          <svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path data-v-a06cf116="" d="M10 12V17" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"></path>
            <path data-v-a06cf116="" d="M14 12V17" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"></path>
            <path data-v-a06cf116="" d="M4 7H20" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"></path>
            <path data-v-a06cf116="" d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path data-v-a06cf116="" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </template>
        <template v-slot:ContextMenuText>{{ $t('Удалить') }}</template>
      </ChatContentContextMenuItem>
    </UContextMenu>
    <div class="p-2">
      <div v-for="(date, i) in chat.userChat?.messages" :key="i">
        <div class="w-6/12 mx-auto max-md:w-3/12 " @contextmenu.stop>
          <p class="bg-white bg-opacity-20 w-[120px] max-[450px]:w-[90px] py-1 text-sm text-center rounded-full"
             @click="showDateModal = true">
            {{ date.date }}
          </p>
        </div>
        <ChatChatContentUserElem class=""
                                 :id="item.id"
                                 :data-read="item.read ? 1 : 0"
                                 :data-sender-id="item.sender.id"
                                 v-for="(item, id) in date.messages"
                                 :item="item"
                                 :key="id"
                                 v-intersection-observer="[onIntersectionObserver, {item}]"
                                 @click="messageObject = {}"
                                 @contextmenu.prevent="()=> {
                              const top = unref(y) - unref(windowY)
                              const left = unref(x)
                              virtualElement.getBoundingClientRect = () => ({
                                width: 0,
                                height: 0,
                                top,
                                left
                              })
                              isOpen = true
                              messageObject = {...item}
                            }">
          <template v-slot:userForwarded>
            {{ $t('Переслано от') + ' ' + item.forwarded_from.name }}
          </template>
          <template v-slot:userImage>
            <img class="w-[30px] h-[30px] rounded-full"
                 :src="currentUser.get_server_domain + item.sender.photo"
                 alt="">
          </template>
          <template v-slot:userSenderName>{{ item.sender.first_name + ' ' + item.sender.last_name }}</template>
          <template v-slot:userMessage>
            <span v-if="item.message_type !== 'default' && item.message_type !== 'change'" class="">
              <button @click="router.push(chat.chatList.results[i]?.user?.id === item.sender.id ? `/base/chat/${chat.chatList.results[i]?.id}` : ``)" class="hover:underline hover:text-blueDarkSemiLight cursor-pointer">{{item.text.split(' ').slice(0, 1)[0]}}</button>
              <span>{{' ' + item.text.split(' ').slice(0, 2)[1] + ' '}}</span>
              <button class="hover:underline hover:text-blueDarkSemiLight cursor-pointer">{{item.text.split(' ').slice(2, 3)[0]}}</button>
            </span>
            <span v-else class="whitespace-pre-line">
              {{item.text}}
            </span>
          </template>
          <template v-slot:userDate>{{ new Date(item.updated_at).toLocaleTimeString().slice(0, 5) }}</template>
        </ChatChatContentUserElem>
      </div>
    </div>
    <TheChatContentEmpty/>
    <Transition name="fade">
      <TheModal :type="'resize'" v-if="showDeleteWarn" @showModal="showDeleteWarn = false; messageObject = {}">
        <div>
          <p class="text-lg tracking-wider">{{ $t('Удалить выбранное сообщение?') }}</p>
        </div>
        <div class="flex mt-4 gap-x-4 justify-center">
          <TheButton class="py-2 px-4 rounded-lg" type="chat" @click="showDeleteWarn = false">
            {{ $t('Отмена') }}
          </TheButton>
          <TheButton class="py-2 px-4 rounded-lg" type="chat"
                     @click="chat.deleteMessage({id: messageObject?.id}); isOpen = false; showDeleteWarn = false">
            {{ $t('Удалить') }}
          </TheButton>
        </div>
      </TheModal>
      <TheModal :type="'resizeSendWindow'" class="overflow-hidden " v-else-if="chat.showSendWindow"
                @showModal="chat.showSendWindow = false; messageObject = {}">
        <TheTextContent class="mt-2">{{ $t('Переслать') }}</TheTextContent>
        <div class="w-full relative flex items-center">
          <div class="absolute rotate-90 ml-2">
            <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <input type="text" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]" placeholder="Поиск..."/>
        </div>
        <div class="dark:bg-gray-800 bg-gray-200 flex flex-col gap-y-3 py-4 h-[400px] overflow-y-auto">
          <div v-for="item in chat.get_chat_list.results"
               @click="messageObject.id ? chat.messageForwarded = messageObject : chat.messageForwarded; router.push(`/base/chat/${item.id}`); chat.showSendWindow = false"
               class="flex bg-transparent border-none gap-x-4 items-center w-full dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer transition-all px-5">
            <TheChatAvatar :user="currentUser" :chat="item"/>
            <div class="w-9/12 break-words">
              <p class="text-sm" v-if="item.user?.id || item.is_group">
                {{ item.user?.id && !item.is_group ? item.user?.first_name + ' ' + item.user?.last_name : item.name }}</p>
              <p class="text-sm" v-else>{{ $t('Избранное') }}</p>
            </div>
          </div>
        </div>
        <div class="w-full h-[50px] flex items-center justify-center">
          <TheButton type="chat" @click="chat.showSendWindow = false">{{ $t('Отмена') }}
          </TheButton>
        </div>
      </TheModal>
      <TheModal :type="'resize'" v-else-if="showPinnedWarn" @showModal="showPinnedWarn = false; messageObject = {}">
        <div>
          <p class="text-lg tracking-wider">{{ $t('Закрепить это сообщение?') }}</p>
        </div>
        <div class="flex mt-4 gap-x-4 justify-center">
          <TheButton type="chat" @click="showPinnedWarn = false; chat.messagePinned = {}">
            {{ $t('Отмена') }}
          </TheButton>
          <TheButton type="chat"
                     @click="chat.makePinned({messages: [chat.messagePinned?.id]}).then(res=>{
                       chat.messagePinned = {}
                       toast.info('Сообщение закреплено', {autoClose: 1500, theme: 'auto'})
                     }); isOpen = false; showPinnedWarn = false">
            {{ $t('Закрепить') }}
          </TheButton>
        </div>
      </TheModal>
      <TheModal :type="'resize'" v-else-if="showUnPinWarn" @showModal="showUnPinWarn = false; messageObject = {}">
        <div>
          <p class="text-lg tracking-wider">{{ $t('Открепить это сообщение?') }}</p>
        </div>
        <div class="flex mt-4 gap-x-4 justify-center">
          <TheButton type="chat" @click="showUnPinWarn = false">
            {{ $t('Отмена') }}
          </TheButton>
          <TheButton type="chat"
                     @click="chat.makePinned({messages:[ messageObject?.id]}).then(res=>{
                       toast.info('Сообщение откреплено', {autoClose: 1500, theme: 'auto'})
                     }); isOpen = false; showUnPinWarn = false">
            {{ $t('Открепить') }}
          </TheButton>
        </div>
      </TheModal>
      <TheModal :type="'resize'" v-else-if="showDateModal" @showModal="showDateModal = false">
      </TheModal>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

</style>