function somaArray(array) {
    if (array.length === 0) {
        return 0; 
    }
    return array[0] + somaArray(array.slice(1))
}

console.log(somaArray([2,3,6]))