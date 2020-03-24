
let users = require('./mockdata.json')
let arrayCamelCase = users.map((user) => {
    Object.keys(user).map(key => {
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
    return user
   })
   console.log(arrayCamelCase);

//    let arrayCamelCase = users.map((user) => {
   
//     return  Object.values(user);
// });
// console.log(arrayCamelCase);