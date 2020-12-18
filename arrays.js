var chocolateBars = ["snickers", "hundred grad", "kitkat", "skittles" ]

function addElementToBeginningOfArray(array, element){
  return [element...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
  return array.push(element)

}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
