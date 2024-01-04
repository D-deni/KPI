
const setFocus= (text: string)=>{
  nextTick(()=>{
    text.focus()
  })
}

export default setFocus;