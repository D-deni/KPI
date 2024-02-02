import {defineStore} from "pinia";
import axios from "~/composables/axios";
import nuxtStorage from "nuxt-storage/nuxt-storage";
export const useChat = defineStore('chat', {
  state: () => ({
    chatList: {},
    userChat: {
      messages: [],
      name: '',
      description: ''
    },
    messageLimit: null,
    messagesMakeRead: [],
    messageUpdate: {},
    messageReplied: {},
    messageText: '',
    searchElem: '',
    messageForwarded: {
      id: null
    },
    showForwardInfo: false,
    checkboxForwarded: true,
    showSendWindow: false,
    messagePinned: {},
    arrayPin: [],
    activeChatNav: true,
    windowWidth: 0,
    showPinnedWindow: false,
    showGroupCreate: false,
    showGroupCreateChoice: false,
    showVoiceInfo: false,
    showChatInfo: false,
    showSettingChat: false,
    showChatChangeInfo: false,
    showChatChangeInfoModal: false,
    showChatCropper: false,
    showImageChange: false,
    chatChangeInfo: {
      name: '',
      img: '',
      description: '',
    },
    showChangeWindowChat: false,
    showChatGallery: false,
    showDragInfo: false,
    showUploadWindow: false,

    updateChatName: '',
    updateDescription: '',
    voiceTimer: 0,
    isGroup: false,
    flag: true,
    displayChat: 'all',

    file: '',
    src: '',
    signature: '',
    fileSizeInfo : false,
    fileReadInfo: false,
    fileChecked: false,
    fileUpload: null,
    results: {
      coordinates: null,
      image: null,
    },
  }),
  getters: {
    get_chat_list: (state) => state.chatList,
    get_user_chat: (state) => state.userChat,
    get_pinned_list: (state) => state.arrayPin
  },
  actions: {
    async loadChatList(params: { page?: number, limit?: number }) {
      await axios.get(`api/v1/chat/chat-list?page=${params.page}&limit=${params.limit}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.chatList = res.data
      })
    },
    async loadUserChat(params: { id: any, limit: any, page: any }) {
      await axios.get(`api/v1/chat/${params.id}?limit=${params.limit}&page=${params.page}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.messageLimit = res.data.messages.length
        if (res.data.messages) {
          this.userChat = res.data
          let new_array = res.data.messages.reverse()
          let temp = [...new_array]
          new_array = new_array.map(el => {
            return new Date(el.created_at).toLocaleDateString()
          })
          new_array = [...new Set(new_array)]
          let new_messages = new_array.map((el) => {
            return {
              messages: temp.filter(e => {
                return new Date(e.created_at).toLocaleDateString() == el
              }),
              date: el
            }
          })
          this.userChat.messages = new_messages
        }
        // else {
        //   this.userChat.messages = [...res.data.messages.reverse(), ...this.userChat.messages]
        // }
      })
    },
    async loadPinnedList(params: {id: any, page: number, limit: number }) {
      await axios.get(`api/v1/chat/message/pinned-list/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.arrayPin = res.data
      })
    },

    async chatUpdate(params: {
      id: any; update: {
        name: any,
        description: any,
        photo: any
      }
    }) {
      let fd = new FormData();
      if(this.updateChatName !== this.userChat.name){
        fd.set('name', params.update.name)
      }
      if(this.updateDescription !== this.userChat.description) {
        fd.set('description', params.update.description)
      }
      if(this.fileUpload) {
        fd.append('photo', params.update.photo, 'image.webp')
      }
      await axios.patch(`api/v1/chat/update/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      })
    },
    async chatDelete(params: { id: number }) {
      await axios.delete(`api/v1/chat/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {

      })
    },

    async createMessage(params: { id: any, text: any, message_id: any, file: any }) {
      let fd = new FormData();
      if (!this.messageForwarded.id && !this.file) {
        fd.set('text', params.text)
      } else if(!this.signature && !this.messageForwarded.id){
        fd.set('file', params.file)
      } else if(this.signature && this.file){
        fd.set('text', params.text)
        fd.set('file', params.file)
      } else {
        fd.set('text', params.text)
        fd.set('message_id', params.message_id)
      }
      await axios.post(`api/v1/chat/message/create/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res=>{
        this.messageForwarded = {}
      })
    },
    async updateMessage(params: { id: number, text: any }) {
      await axios.patch(`api/v1/chat/message/update/${params.id}`, {
        text: params.text
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
      })
    },
    async deleteMessage(params: { id: number }) {
      await axios.delete(`api/v1/chat/message/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
      })
    },
    async createChatUser(params: { users: any, user_id: any, name: string, photo: any }) {
      let fd = new FormData()
      if (this.isGroup) {
        fd.set('name', params.name)
        fd.set('users', params.users)
        if (typeof params.photo !== 'string') {
          fd.set('photo', params.photo)
        }
      } else {
        fd.set('user_id', params.user_id)
      }
      await axios.post(`api/v1/chat/create`, fd, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.loadChatList()
      })
    },

    async makeRead(params: { messages: any }) {
      await axios.post(`api/v1/chat/message/make-read`, {
        messages: params.messages
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      }).then(res => {
        this.loadChatList()
      })
    },
    async makePinned(params: { messages: any }) {
      await axios.post(`api/v1/chat/message/make-pinned`, {
        messages: params.messages
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
        }
      })
    },
  }
})
