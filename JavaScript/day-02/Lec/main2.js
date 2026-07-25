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




///////////////////////{part 2}///////////////////////////////////


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // array methods
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const users=[
//     {
//         name:"eslam",
//         age:29,
//         collage:true
//     },
//         {
//         name:"ahmed",
//         age:20,
//         collage:true
//     },
//         {
//         name:"mohamed",
//         age:19,
//         collage:false
//     }
// ]


//find-->return undefined or the ele matching return the first match 
//findIndex -> return the index of ele that matches the condition 
// const userEx=users.find((user)=>{
//     return user.name=="eslam"
// })

// if (!userEx) {
//     console.log("not exist");
// }else{
//     console.log("user exist");
// }


//filter-->always return the array are element matches the condition
// const userEx=users.filter((user)=>{
//     return user.name=="eslam"
// })

// if (!userEx) {
//     console.log("not exist");
// }else{
//     console.log("user exist");
// }

//map-->make loop on array to edit on it or something like that
// const userEx=users.map((user)=>{
//     return {id:user.age,name:user.name}
// })

// console.log(userEx);

//slice and split

//slice -> make a slice of string or array  (start index,end index)
// split => convert string to array with split of the separator ("separator")
// let s="mohamed salah is the GOAT"
// let arr=s.split(" ");
// console.log(arr);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // closure
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function outer(){
//     let x=5;
//     return function inner(){
//         console.log(x);
//     }
// }
// let outcall=outer();
// outcall();

//the outer function make a scope call closure that keep the value of the varabile on it
// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// const increment=counter();
// increment();
// increment()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //destructing
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let user={
//     name:"eslam",
//     age:22,
//     wife:{
//         age:11,
//         name:"nameOfWoman",
//         son:{
//             name:"omar",
//             age:2
//         }
//     }
// }

// const{name,age,wife}=user;
// const{name,age,son}=user.wife;
// const{name:Wname,age:Wage,son}=user.wife; //make the elise to not come up with error
// console.log(name,age);

// destructing ->for array and obj or string

// const nums=["eslam","ahemd","mohamed"]  => take the index on consedration on destruct on arr

// const[x,z,y]=nums;
// const[,z,]=nums;
// console.log(z);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //spreed operator and rest param
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let user={
//     name:"eslam",
//     age:22,
//     wife:{
//         age:11,
//         name:"nameOfWoman",
//         son:{
//             name:"omar",
//             age:2
//         }
//     }
// }

// const{age,name,...data}=user; //rest :  must be last element
// console.log(data);

// const arr1=[3,4,3,52,3];
// const arr2=[...arr1];  //spreed

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //heap VS stack
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //Sync VS Async code
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let obj=structuredClone(obj1);