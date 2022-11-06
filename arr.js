function missing(arr) {
    let missArray = [];


    let minNum = Math.min(...arr); //1
    let maxNum = Math.max(...arr);//8

    for (let i = minNum; i < maxNum; i++) {
        if (arr.indexOf(i) < 0) {
            missArray.push(i);
        }

    }
    return missArray;


}
console.log(missing([1, 2, 3, 6, 8]))
console.log(missing([1, 3, 6, 7, 8]))
console.log(missing([1, 2]))