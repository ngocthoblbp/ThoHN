let filter = (arr, callback) => {
  if (arr === null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  let result = [];
  arr.forEach(currentValue => {
    if (callback(currentValue)) {
      result.push(currentValue)
    }
  });
  return result;
}
let a = [1, 2, 3, 4, 6, 7, 8, 11];
let b = filter(a, (currentValue) => currentValue > 2);
console.log(b);
