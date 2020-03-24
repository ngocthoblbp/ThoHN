let users = require('./mockdata.json')
// console.log(users);
let newUser = [];
users.forEach(element => {
    newUser.push(element.first_name + " " + element.last_name);

});

console.log(newUser);
