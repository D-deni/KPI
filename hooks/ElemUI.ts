import axios from '~/composables/axios'
import nuxtStorage from "nuxt-storage/nuxt-storage";

export type TEventInput = Event & {target: HTMLInputElement}

export const uploadImage = (event: TEventInput, item: any): void => {
  item.file = event
  if (event.type === 'image/svg+xml' || event.type === 'image/jpeg' || event.type === 'image/jpg' || event.type === 'image/png' || event.type === 'image/webp') {
    item.src = URL.createObjectURL(item.file);
  } else {
    setTimeout(() => {
      item.fileChecked = true
    }, 0)
    setTimeout(() => {
      item.fileChecked = false
    }, 3000)
    item.src = ''
    item.file = ''
  }
}

export const uploadFile = (event: TEventInput, item: any): void => {
  item.file = event
  if (event.type) {
    item.src = URL.createObjectURL(item.file)
    if (item.file.size == 0) {
      setTimeout(() => {
        item.fileSizeInfo = true
      }, 0)
      setTimeout(() => {
        item.fileSizeInfo = false
        item.file = ''
        item.src = ''
      }, 3000)
    }
  }
}

const forceFileDownload = (res: any, item: any): void => {
  const url = window.URL.createObjectURL(new Blob([res.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${item.file_name}`)
  document.body.appendChild(link)
  link.click()
}

export const downloadWithAxios = (item: any): void => {
  axios.post(`api/v1/download`, {
    url: item.file,
    name: item.file.name
  }, {
    headers: {
      Authorization: `Bearer ${nuxtStorage.localStorage.getData('token')}`
    }
  }).then(res => {
    forceFileDownload(res, item)
  })
}
export const setFocus = (value: any) => {
  nextTick(() => {
    value.focus()
  })
}


export const clearTimer = (recordingVoice: boolean, clicker: NodeJS.Timeout | null): void => {
  if(clicker !== null) {
    clearTimeout(clicker)
    clicker = null
    recordingVoice
  }
}

export const viewSelect = [
  {
    label: 'Список',
    icon: 'i-heroicons-list-bullet',
    type: 'list'
  },
  {
    label: 'Плитка',
    icon: 'i-heroicons-squares-2x2',
    type: 'tile'
  },
]