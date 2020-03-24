let users = require('./mockdata.json')
users = users.filter(function (element) {
  return element.age < 40 && element.gender == "Male";
})
console.log(users);