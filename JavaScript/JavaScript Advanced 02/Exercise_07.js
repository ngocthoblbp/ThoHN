let map = (arr, callback) => {
    if (arr === null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    let newArr = [];
    arr.forEach(element => {
        newArr.push(callback(element))
    });
    return newArr;
}
let a = [1, 2, 3, 4];
let b = map(a, (x) => x * x);
console.log(b);
