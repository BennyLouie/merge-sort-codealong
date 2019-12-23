function findMinAndRemove(firstHalf, secondHalf) {
    let minfirstHalf = firstHalf[0]
    let minsecondHalf = secondHalf[0]
   
    if(minfirstHalf < minsecondHalf){
      return firstHalf.shift()
    } else {
      return secondHalf.shift()
    }
}

function merge(firstHalf, secondHalf) {
    let sorted = []
    let currentMin
    while(firstHalf.length != 0 && secondHalf.length != 0) {
      currentMin = findMinAndRemove(firstHalf, secondHalf)
      sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    
    if(array.length < 2){
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}