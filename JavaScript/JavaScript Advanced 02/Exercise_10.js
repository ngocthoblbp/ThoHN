// const {reduce} = require('./Exercise_09');
let reduce = (arr, callback, initialValue) => {
    if (arr === null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    if (initialValue === undefined) {
        initialValue = arr[0];

        // arr.forEach(element => {
        //     initialValue =callback(initialValue,element)       
        // });
        for (let i = 1; i < arr.length; i++) {
            initialValue = callback(initialValue, arr[i]);
        }
    } else {
        arr.forEach(element => {
            initialValue = callback(initialValue, element)

        });
    }
    return initialValue
}
let a = [1, 2, 3];
// let b = reduce(a, (n, c) => n + c, 0);
// console.log(b);

let filter = (arr, callback) => {
    if (arr === null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    return reduce(arr, ((acc, item) => callback(item) ? [...acc, item] : []), [])
}

// let filter_1 =(collection,fn)=>{
//     return collection.reduce((acc,item)=>{
//         return fn(item) ?[...acc,item]:[];
//     },[])
// }
// let z= filter(a,(j)=>j>1);
// console.log(z);
let map = (arr, callback) => {
    if (arr === null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    return reduce(arr, (acc, item) => [...acc, callback(item)], [])
}
let l = map(a, (a) => a * 2);
console.log(l);