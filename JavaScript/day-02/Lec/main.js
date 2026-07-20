// **************************sync vs async*****************************
//sync -> one by one
//async ->works parallel

//js is sync and single thread but the async code implemnt with wep api(callback queue - event loop )
//event loop works on async code when the whole sync code end

//the priorty{ 1- call stack ,2- microtask queue (for promise) ,3- callback queue}


// let users=[
//     {
//         name:"eslam",
//         email:"ea3322@com",
//         age:"20"
//     }
// ]

// function getUser(email){
//     setTimeout(()=>{
//         const userEmail=users.find((e)=>e.email)
//         if (!userEmail) {
//             console.log("the email ");
//         }else{
//             console.log({userEmail});
//         }
//     },3000)
// }


// function logIn(email,paa){
//     const result=getUser(email);
//     console.log({result});
// }

// logIn("ea3322@com","eslam")


// *************************pass function as parameter*****************************


// let users=[
//     {
//         name:"eslam",
//         email:"ea3322@com",
//         age:"20",
//         password:"123"
//     }
// ]

// function compareHash(account,fe_paa,fn){  //fn = editEmail
//     setTimeout(()=>{
//         if (account.password!=fe_paa) {
//             console.log("invalid account pass");
//         }else{
//             console.log("valid login");
//             fn("ea2233@com")
//         }
//     },3000)
// }

// function getUser({email,pass},fn,fn2){   //fn =compareHash //fn2=editEmail
//     setTimeout(()=>{
//         const userEmail=users.find((e)=>e.email)
//         if (!userEmail) {
//             console.log("the email ");
//         }else{
//             console.log({userEmail});
//             fn(userEmail,pass,fn2)
//         }
//     },3000)
// }

// function editEmail(email){
//     setTimeout(() => {
//         console.log("the email changed succ");
//     }, 3000);
// }


// function logIn(email,pass){
//     const result=getUser({email,pass},compareHash,editEmail);//pass to here as a method with not call(refrense)
//     console.log({result});
    
// }

// logIn("ea3322@com","123")


//******************************  Callback  ******************************* */
//callback is the same of pass function as parameter but more readable
// let users=[
//     {
//         name:"eslam",
//         email:"ea3322@com",
//         age:"20",
//         password:"123"
//     }
// ]

// function getUser({email,pass},callback){   
//     setTimeout(()=>{
//         const userEmail=users.find((e)=>e.email)
//         if (!userEmail) {
//             console.log("the email ");
//         }else{
//             console.log({userEmail});
//             callback()
//         }
//     },3000)
// }



// function logIn(email,pass){
//     const result=getUser({email,pass},
//         ()=>{
//         console.log("lol")
//     });
//     console.log({result});
    
// }

// logIn("ea3322@com","123")

//******************************  Promise  ******************************* */

// let users=[
//     {
//         name:"eslam",
//         email:"ea3322@com",
//         age:"20",
//         password:"123"
//     }
// ]

// function compareHash(account,fe_paa){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if (account.password!=fe_paa) {
//                 console.log("invalid account pass");
//                 rej("invalid")
//             }else{
//                 console.log("valid login");
//                 res(account.email)
//             }
//         },3000)
//     })

// }

// function getUser({email,pass}){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             const userEmail=users.find((e)=>e.email==email)
//             if (!userEmail) {
//                 console.log("the email ");
//                 rej("invalid login creadentials")
//             }else{
//                 console.log({userEmail});
//                 res(userEmail);
//             }
//         },3000)
//     })
// }

// function editEmail(email){
//     setTimeout(() => {
//         console.log("the email changed succ");
//     }, 3000);
// }


// function logIn(email,pass){
//     const result=getUser({email,pass})
//     result.then((result)=>{
//         console.log("after run user succ");
//         compareHash(result,pass).then((email)=>{
//             editEmail(email)
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }).catch((err)=>{
//         console.log({err});
//     })
// }

// logIn("ea3322@com","1233")


//******************************  Async & Await  ******************************* */
// let users=[
//     {
//         name:"eslam",
//         email:"ea3322@com",
//         age:"20",
//         password:"123"
//     }
// ]

// function compareHash(account,fe_paa){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if (account.password!=fe_paa) {
//                 console.log("invalid account pass");
//                 rej("invalid")
//             }else{
//                 console.log("valid login");
//                 res(account.email)
//             }
//         },3000)
//     })

// }

// function getUser({email,pass}){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             const userEmail=users.find((e)=>e.email==email)
//             if (!userEmail) {
//                 console.log("the email ");
//                 rej("invalid login creadentials")
//             }else{
//                 console.log({userEmail});
//                 res(userEmail);
//             }
//         },3000)
//     })
// }

// function editEmail(email){
//     setTimeout(() => {
//         console.log("the email changed succ");
//     }, 3000);
// }


// async function logIn(email,pass){ //await only valid inside async function
//     try {
//         const account =await getUser({email,pass})
//         console.log(account);
//         const emaill =await compareHash(account,pass)
//         console.log(emaill);
//         await editEmail(emaill)
//     } catch (error) {
//         console.log(error);
//     }


// }

// logIn("ea3322@com","123")

//******************************  Await Promise.allsettled([]) || Promise.any([]) || Promise.all([]) ******************************* */
/*
/*

Promise.all()
==========================================================

- Waits for ALL promises to be fulfilled.
- If ONE promise is rejected, the whole Promise.all() is rejected.
- Returns an array of resolved values in the same order.

Use when:
- Every async operation must succeed.


Promise.allSettled()
==========================================================

- Waits until ALL promises are finished.
- Doesn't care if they are fulfilled or rejected.
- Always resolves with an array of result objects.

Each object looks like:

{
    status: "fulfilled",
    value: ...
}

or

{
    status: "rejected",
    reason: ...
}

Use when:
- You want the result of every promise, even if some fail.


Promise.any()
==========================================================

- Returns the FIRST fulfilled promise.
- Ignores rejected promises.
- Throws AggregateError only if ALL promises are rejected.

Use when:
- You only need the first successful result.
==========================================================
*/


// function task1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task 1 Success");
//         }, 3000);
//     });
// }

// function task2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Task 2 Failed");
//         }, 2000);
//     });
// }

// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task 3 Success");
//         }, 1000);
//     });
// }

// async function test() {
//     try {
//         const result = await Promise.all([
//             task1(),
//             task2(),
//             task3()
//         ]);

//         console.log(result);

//     } catch (err) {
//         console.log(err);
//     }


//     const settled = await Promise.allSettled([
//         task1(),
//         task2(),
//         task3()
//     ]);

//     console.log(settled);


//     try {

//         const any = await Promise.any([
//             task2(),
//             task3(),
//             task1()
//         ]);

//         console.log(any);

//     } catch (err) {

//         console.log(err);

//     }

// }

// test();


//******************************  forEach & forOf ******************************* */
// let data=[2,33,232];
// data.forEach((ele,index,arr)=>{ // don't have break statment bcz (async code)
//     console.log({ele,index,arr});
// })

// for(const ele of data){  // use it for handel sync task i can make await inside here
//     console.log(ele);
// }

// for(const [ele,index] of data.entries()){  
//     console.log("element : ",index," the index of element is : ",ele);
// }

//******************************  scope share and clouser ******************************* */



//******************************  typs of server ******************************* */
// 1-didicated server for each service  --> for large org
// 2-single didicated server for handel all task  -> for samll org


// physical server and virtual server

//****************************** URL ******************************* */
// url==> Uniform resource locator
// uri==> Uniform resource identifir


//****************************** Protocols ******************************* */
// ser of rules between sender and resever that govern the comm between each other
//HTTP.HTTPS.FTP.SMTP

//HTTP -> hypertext transfer protocol  : transfer web pages accros the internet
//http is stateLess protocole everytime a logIn in need a new requst and make a token the can server recoginize me

//HTTPS -> hypertext transfer protocol  :(man in the middle -> target the all requst on the server )

//****************************** DNS ******************************* */
// dns -> domain name server
// dns -> convert the name of wepsite to IP address


//****************************** port ******************************* */
//every domian has port num uniqe 


//****************************** NgIX ******************************* */  
//ngix || apache -> web server


//****************************** HTTP requst respose cycle ******************************* */



//****************************** HTTP requst with postman ******************************* */
// have req header and req body

// i have 4 main methods {get ,post , patch , delete}

// get send data on qurey params (URL)  on search or share data
// post send data on body
//patch update on data (send the changed data only)
// delete -> delete the data

// we use the postman instide of front end the we can test the API on it
//while it works on post man then the back end every thing is OK

//****************************** HTTP response ******************************* */
//response status{search on google on status code cats}
