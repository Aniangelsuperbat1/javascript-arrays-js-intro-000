var chocolateBars = ["snickers", "hundred grad", "kitkat", "skittles" ]

function addElementToBeginningOfArray(array, element){
  let oldArray = array
  let newArray = array.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array

}

function addElementToEndOfArray(array, element){
  [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
   return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
