let users = require('./mockdata.json');
let newUsers =[];
newUsers= users.map(element =>{
    return element.first_name + " " + element.last_name;

})
console.log(newUsers);