let users = require('./mockdata.json');
let avgAge = users.reduce( (total ,element )=>{
    return (total + element.age);
},0)/users.length;
// let avgAge = totalAge/users.length;
console.log(avgAge);


