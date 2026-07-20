// //function type


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // 1- declaration function -> has name
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function nameOfFunction(){}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // 2-anonymous function  -> has no name  --- alawas we put this function into variable
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//     let x=function(){}
//     x()
// // no hoisting happend here

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // 3-arrow function 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let y=()=>{
//     console.log("name");
// }

// let sum=(x)=>x;
// console.log(sum(39));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4-self invoked function   ->function called his self in side it anonymous function
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// (function(){
//     console.log("inside self invoked");
// })()

// if i write two self invoked function the should seperated by semi colon

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//js have auto semi colon insertion
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//js is loosely and dynamic lang => loosely caz not have data types  => dynamic caz i can convert to another data type easly
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4-self invoked function   ->function called his self in side it anonymous function
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//this keyword
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let obj={
//     name:"elsam",
//     age:23,
//     fu:function setName(){
//         console.log(this);
//         console.log("Hi",this.name);
//     },
//     fn:()=>{
//         console.log(this);
//     }

// }
// obj.name="mohamed"
// obj.fu()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Array
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let color=["red","black","blue"];

// console.log(color.length);
// console.log(color.sort());
// console.log(color.reverse());
// color.push("white")

// color.shift(); //remove from the first element
// console.log(color);
// color.unshift("red") //add to the first element
// console.log(color);

// console.log(color.slice(0,2));  //make a slice on the array startes with and ends with (not included)

// console.log(color.splice(1,2));  //make a slice on the array startes with and ends with (not included)  to remove from the main array

// console.log(color.toString());

// console.log(color.indexOf("black"));
// console.log(color.lastIndexOf());


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//loops
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// while(){

// }

// let arr=[2,3,4,455,3]
// for(let ele of arr){  //come with value
//     console.log(ele);
// }

// for(let ele in arr){  come with index of ele
//     console.log(ele);
//

// for in loop on obj

// for(let key in obj){
//     console.log(obj[key]);
// }