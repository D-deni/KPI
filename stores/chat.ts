import {defineStore} from "pinia";
import axios from "~/composables/axios";
import {toast} from "vue3-toastify";
import {useRoute} from "vue-router";

export const useChat = defineStore('chat', {
  state: () => ({
    chatList: {},
    userChat: {
      messages: []
    },
    messagesMakeRead: [],
    messageUpdate: {},
    messageText: '',
    searchElem: '',
    messageForwarded: {},
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
    isGroup: false,
    flag: true,
    displayChat: 'all',
    file: '',
    file_image: ''
  }),
  getters: {
    get_chat_list: (state)  => state.chatList,
    get_user_chat:(state) => state.userChat
  },
  actions: {
    async loadChatList() {
      await axios.get(`api/v1/chat/chat-list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.chatList = res.data
      })
    },
    async loadUserChat(params: { id: any, limit: number, page: any }) {
      await axios.get(`api/v1/chat/${params.id}?limit=${params.limit}&page=${params.page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (params.page == 1) {
          this.userChat = res.data
          let new_array = res.data.messages.reverse()
          let temp = [...new_array]
          new_array = new_array.map(el => {
            return new Date(el.created_at).toLocaleDateString()
          })
          new_array = [...new Set(new_array)]
          let new_messages = new_array.map(el => {
            return {
              messages: temp.filter(e => {
                return new Date(e.created_at).toLocaleDateString() == el
              }),
              date: el
            }
          })
          // console.log(new_messages)
          this.userChat.messages = new_messages
        } else {
          this.userChat.messages = [...res.data.messages.reverse(), ...this.userChat.messages]
        }
      })
    },

    async createMessage(params: { id: any, text: any, message_id: any }) {
      let fd = new FormData();
      if (!this.messageForwarded.id) {
        fd.set('text', params.text)
      } else {
        fd.set('text', params.text)
        fd.set('message_id', params.message_id)
      }
      await axios.post(`api/v1/chat/message/create/${params.id}`, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    },

    async updateMessage(params: { id: number, text: any }) {
      await axios.patch(`api/v1/chat/message/update/${params.id}`, {
        text: params.text
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
      })
    },

    async deleteMessage(params: { id: number }) {
      await axios.delete(`api/v1/chat/message/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
      })
    },

    async makeRead(params: { messages: any }) {
      await axios.post(`api/v1/chat/message/make-read`, {
        messages: params.messages
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
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
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
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
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.loadChatList()
      })
    }
  }
})
