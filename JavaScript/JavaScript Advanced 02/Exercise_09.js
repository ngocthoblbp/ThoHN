let users = require('./mockdata.json')

const  _reduce = (arr, callback, initialValue) => {
    if(arr === null){
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
    if (arr.length === 0) {
        return initialValue;
    } else {
       if(initialValue === undefined){
           initialValue = arr[0];
           let [,secondValue, ...rest] = arr;
           let acc = callback(initialValue, secondValue)

           return reduce(rest, callback, acc)

       }else{
        let [firstValue, ...rest] = arr;
        let acc = callback(initialValue, firstValue)
        return reduce(rest, callback, acc);
       }
    }
}


let reduce=(arr,callback,initialValue)=>{
    if(arr === null){
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
    if(initialValue === undefined){
        initialValue = arr[0];
    
        // arr.forEach(element => {
        //     initialValue =callback(initialValue,element)       
        // });
        for (let i=1 ; i< arr.length;i++){
            initialValue =callback(initialValue,arr[i]) ;
        }
    }else{
    arr.forEach(element => {
        initialValue =callback(initialValue,element)   
        
    });
}
    return initialValue
}
// let a=[1,2,33];

// let b = reduce(a, (n, c) => n + c);
// console.log(b);
// let z =[{a:1 ,b:2},{a:2 ,b:2},{a:4 ,b:2}];
// let o =z.reduce((acc,cur)=>acc + cur.a);
// console.log(o);
let arrayCamelCase = reduce(users,(cur,user) => {
    Object.keys(user).forEach(key => {
    // Check key includes '_'
    if (key.includes('_')) {
    // Save old key
    let oldKey = key
    // Find index of _
    let index = key.indexOf('_');
    // Replace _ with '' so indexOf _ become indexOf next char need toUpperCase
    let newKey = key.replace('_', '')
    // Split into array and upperCase at [index] then join back to string
    key = newKey.split("");
    key[index] = key[index].toUpperCase(); 
    key = key.join('')
    // delete old key and add new key
    user[key]=user[oldKey];
    delete user[oldKey]; 
    }
    })
    return [...cur,user];
   },[])
//    module.exports.reduce = reduce;
//    console.log(arrayCamelCase);

