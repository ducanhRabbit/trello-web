export const capitalizeFirstLetter = (val) => {
  if (!val) {
    return ''
  }
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

export const mapOrder = (originalArray,orderArray,key)=>{
  const cloneArray = [...originalArray]

  const orderedArray = cloneArray.sort((a,b)=>{
      return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })

  return orderedArray
}