function unroll(squareArray, array=[]) {

    
    for (let i=0; i<squareArray.length; i++) {
        array.push(squareArray[0][i])
    }
    squareArray.shift();

    for (let i=0; i<squareArray.length; i++) {
        array.push(squareArray[i][squareArray.length])
        squareArray[i].pop()
    }

    for (let i=squareArray.length-1; i>=0; i--) {
        array.push(squareArray[squareArray.length-1][i])
    }
    squareArray.pop();

    for (let i=squareArray.length-1; i>=0; i--) {
        array.push(squareArray[i][0])
        squareArray[i].shift()
    }

    if (squareArray.length>0) {
        return unroll(squareArray,array)
    }
    return array
}
module.exports = unroll;

const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];

console.log(unroll(square));
console.log(unroll(smallerSquare));
