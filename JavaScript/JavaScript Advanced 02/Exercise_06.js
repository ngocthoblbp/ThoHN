
//Exercise_01
let users = require('./mockdata.json')
// let fullName = users.reduce((accumulator,currentValue)=>{
// return accumulator.concat((currentValue.first_name + " " + currentValue.last_name));

// },[])
// console.log(fullName);
// Exercise_02
// let newArr= []
// let abc = users.reduce((accumulator,currentValue)=>{
//     currentValue.age < 40 && currentValue.gender =="Male" ? newArr.push(currentValue) : [];


//     return newArr;

// },[])
// console.log(abc);

let arrayCamelCase = users.reduce((cur, user) => {
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
            user[key] = user[oldKey];
            delete user[oldKey];
        }
    })
    return [...cur, user];
}, [])
console.log(arrayCamelCase);

