//===============================================================
//1-Convert the string "123" to a number and add 7.
//===============================================================
let s="123";
console.log(Number(s)+7);


//===============================================================
//2-Check if the given variable is falsy and return "Invalid" if it is.
//===============================================================
let falseValue=[undefined,null,NaN,0,false,""]
let input=0;
for(value of falseValue){
    if (input===value) {
        console.log("Invalid");
        break;
    }
}

//=========================================================================================
//3-Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
//=========================================================================================
let oddValue=[];
for(let i=1;i<=10;i++){
    if (i%2==0) {
        continue
    }else
        oddValue.push(i)
}

console.log(oddValue);


//=========================================================================================
//4-Create an array of numbers and return only the even numbers using filter method
//=========================================================================================

let arr= [1, 2, 3, 4, 5];
let evenValue=arr.filter((ele)=>{
    return ele%2==0;
})
console.log(evenValue);

//=========================================================================================
//5-Use the spread operator to merge two arrays, then return the merged array
//=========================================================================================

let arr1=[1, 2, 3];
let arr2=[4, 5, 6];
let mergeArr=[...arr1,...arr2];
console.log(mergeArr);

//=========================================================================================
//6-Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)
//=========================================================================================

let day=2;
switch(day){
    case 1:
        console.log("Sun");
        break;
    case 2:
        console.log("Mon");
        break;
    case 3:
        console.log("Tues");
        break;
    case 4:
        console.log("Wedn");
        break;
    case 5:
        console.log("Thur");
        break;
    case 6:
        console.log("Fri");
        break;
    default:
        console.log("Sat");
}


//=========================================================================================
//7-Create an array of strings and return their lengths using map method
//=========================================================================================
let arrString=["a", "ab", "abc"];
let lengthArr=arrString.map((ele)=>{
    return ele.length
})
console.log(lengthArr);

//=========================================================================================
//8-Write a function that checks if a number is divisible by 3 and 5
//=========================================================================================
function divNum(num){
    if (num%3==0 && num%5==0) {
        console.log("Divisible by both");
    }else if (num%3==0 || num%5==0){
        console.log("Divisible by one of them");
    }else{
        console.log("Divisible by none of each");
    }
}

let numDiv=15;
divNum(15);


//=========================================================================================
//9-Write a function using arrow syntax to return the square of a number
//=========================================================================================
let numToSqure=5;
let squareNum= num=>num*num;
console.log(squareNum(numToSqure));

//=========================================================================================
//10-Write a function that destructures an object to extract values and returns a formatted string
//=========================================================================================
function sayHi({name,age}){
    console.log(`${name} is ${age} years old `);
}

const person = {name: 'John', age: 25}
sayHi(person)

//=========================================================================================
//11-Write a function that accepts multiple parameters (two or more) and returns their sum
//=========================================================================================
function sumNums(){
    let total=0;
    for(num of arguments){
        total+=num;
    }
    console.log(total);
}

sumNums(1, 2, 3, 4, 5)

//==================================================================================================
//12-Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
//==================================================================================================
let statusPromise=true;
function runAfter3(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if (statusPromise) {
                res("Success")
            }else{
                rej("invalid")
            }
        },3000);
        
    })
}
runAfter3().then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})

//==================================================================================================
//13-Write a function to find the largest number in an array
//==================================================================================================
let arrMax=[1,3,7,2,4];
let maxEle=0;
for(ele of arrMax){
    maxEle=Math.max(maxEle,ele)
}
console.log(maxEle);

//==================================================================================================
//14-Write a function that takes an object and returns an array containing only its keys
//==================================================================================================
function convertObj(obj){
    let arrKey=[];
    let arrObjData=[];
    for(value in obj){
        arrKey.push(value);  //the key of obj
        arrObjData.push(obj[value]) //the value of key
    }
    console.log(arrKey);
    console.log(arrObjData);
}

let objToConvet={
    name:"John",
    age:30
}
convertObj(objToConvet);

//==================================================================================================
//15-Write a function that splits a string into an array of words based on spaces
//==================================================================================================
let stringToConvert= "The quick brown fox";
let arrStringConvert=[];
let word="";
for (let index = 0; index < stringToConvert.length; index++) {
    if (stringToConvert[index]==" ") {
        arrStringConvert.push(word);
        word="";
    }else{
        word+=stringToConvert[index];
    }
}
arrStringConvert.push(word);
console.log(arrStringConvert);