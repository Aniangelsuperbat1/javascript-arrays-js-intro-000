var chocolateBars = ["snickers", "hundred grad", "kitkat", "skittles" ]

function addElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
  return array.push(element)

}

function addElementToEndOfArray(array, element){

}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
