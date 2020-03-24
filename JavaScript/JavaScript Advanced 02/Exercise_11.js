// sum
arr1 =[ 1,2,4];
// arr2 =[{}]
// let total= ;
// console.log(total);
// reverse
function _sum(arr){
    return arr.reduce((acumulator,currentValue)=>acumulator+currentValue);

}
function _product(arr){
    return arr.reduce((acumulator,currentValue)=>acumulator*currentValue);

}
function _reverse(arr){
    return arr.reduce((acc,cur)=>{
        return [cur,...acc]
    },[])
  
}
let total = _reverse(arr1);

// let total= ;
// console.log(total);
console.log(total)
