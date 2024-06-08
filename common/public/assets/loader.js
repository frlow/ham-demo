Object.entries(localStorage).filter(([key])=>key.startsWith("load-")).forEach(([key,value])=>{
  console.log("Loading",key, value)
  import(value)
})
