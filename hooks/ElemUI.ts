import axios from '~/composables/axios'

export const uploadImage = (event: any, item: any) => {
  item.file = event
  if (event.type === 'image/svg+xml' || event.type === 'image/jpeg' || event.type === 'image/jpg' || event.type === 'image/png' || event.type === 'image/webp') {
    item.src = URL.createObjectURL(event);
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

export const uploadFile = (event: any, item: any) => {
  item.file = event
  if (event.type) {
    item.src = URL.createObjectURL(event)
    if (event.size == 0) {
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

const forceFileDownload = (res: any, item: any) => {
  const url = window.URL.createObjectURL(new Blob([res.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${item.file_name}`)
  document.body.appendChild(link)
  link.click()
}

export const downloadWithAxios = (item: any) => {
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