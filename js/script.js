// object
// let human ={
//     gender : 'male',
//     name:'xyz',
//     age:23
// }

// if('gender'in human){
//     console.log('True');
// }
// else{
//     console.log('False')
// }
// for(let iterator in human){
//     console.log(iterator,human[iterator])
// }

// for(let iterator of Object.entries(human)){
//     console.log(iterator)
// }

// for(let iterator of Object.keys(human)){
//     console.log((iterator));
// }

let arrr =[1,2,3,4,5]

// arrr.forEach((a,index,arr)=>{
//     console.log(a,index,arr)
// })

// factory function

// function createCar(name,model){
//     return car={
//         name:name,
//         model:model
//     }
// }
// let obj1 = createCar('maruti',800)
// console.log(obj1);

// // constructor function
// function car(nam,mod){
//     this.nam=nam
//     this.mod=mod
// }
// let car1 = new car('kia',800)
// console.log(car1);

// non-permitive

// let a1 ={value:10};
// let b =a1;
// a1.value++;
// console.log(a1);
// console.log(b);

//  21/06/2024

// date time

// let today = new Date()
// let date = today.getDate()
// let month = today.getMonth() 
// let year = today.getFullYear()
// console.log(date,month,year)

// array 

// let value = [1,2,3,4,5,6]
// value.push(29)
// console.log(value)
// value.unshift(10)
// console.log(value)

// object

let car =[
    {name:"maruti",model:800},
    {name:"honda",model:'city'},
]
console.log(typeof(car))
console.log(car[0])
console.log(car[1])

// for(let i in car){
//     console.log(car[i])
// }

// for(let i=0;i<car.length;i+=1){
//     console.log(car[i]);
// }

let arr3=['maruti',1,2,4,5]
console.log(arr3);
let findCar1 = arr3.indexOf('maruti')
let findCar2 = arr3.includes('maruti')
console.log(findCar1);
console.log(findCar2);

// let findCar = car.find((car)=>{
//     return car.name =="maruti"
// })
// console.log(findCar);
