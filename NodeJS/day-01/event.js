const {EventEmitter}=require("node:events");
const { setTimeout } = require("node:timers");
const event=new EventEmitter();

// event.on("sayHi",(data)=>{
//     console.log("data to email");
//     console.log({data});
// })

// event.on("sayHi",(data)=>{
//     console.log("data to notification");
//     console.log({data});
// })

// event.on("sayHi",(data)=>{
//     console.log("data to SMS");
//     console.log({data});
// })

// event.on("welcome",(data)=>{
//     console.log("upload image");
//     console.log({data});
// })

// event.emit("sayHi","this is come form event emit")  //the first parameter is the id of event on and the sec is the data sent to it
// event.emit("welcome","this is come form event emit2") 
// console.log(event.eventNames());


// console.log("========== EventEmitter Demo ==========\n");

// /*---------------------------------------------------
//     Regular listener functions
// ---------------------------------------------------*/

// function saveToDB(user) {
//     console.log(` Saving ${user.name} to database`);
// }

// function sendEmail(user) {
//     console.log(` Sending welcome email to ${user.email}`);
// }

// function createSession(user) {
//     console.log(` Creating session for ${user.name}`);
// }

// /*---------------------------------------------------
//     on()
//     Runs EVERY time the event is emitted.
// ---------------------------------------------------*/

// event.on("register", saveToDB);
// event.on("register", sendEmail);

// /*---------------------------------------------------
//     once()
//     Runs ONLY the first time.
// ---------------------------------------------------*/

// event.once("register", createSession);

// /*---------------------------------------------------
//     prependListener()
//     Adds listener at the beginning.
// ---------------------------------------------------*/

// event.prependListener("register", (user) => {
//     console.log(` Register process started for ${user.name}`);
// });

// /*---------------------------------------------------
//     prependOnceListener()
//     Runs once and before everyone.
// ---------------------------------------------------*/

// event.prependOnceListener("register", () => {
//     console.log(" First register ever");
// });
 
// /*---------------------------------------------------
//     listenerCount()
// ---------------------------------------------------*/

// console.log(
//     "Listeners:",
//     event.listenerCount("register")
// );

// /*---------------------------------------------------
//     eventNames()
// ---------------------------------------------------*/

// console.log(
//     "Events:",
//     event.eventNames()
// );

// console.log();

// /*---------------------------------------------------
//     emit()
//     Triggers the event.
// ---------------------------------------------------*/

// console.log("------ First Emit ------");

// event.emit("register", {
//     name: "Eslam",
//     email: "eslam@gmail.com",
// });

// console.log();

// /*
// Expected:

//  First register ever
//  Register process started...
// Saving...
// Sending...
// Creating session...
// */

// /*---------------------------------------------------
//     Second emit
//     once() listeners disappear automatically.
// ---------------------------------------------------*/

// console.log("------ Second Emit ------");

// event.emit("register", {
//     name: "Ali",
//     email: "ali@gmail.com",
// });

// console.log();

// /*
// Expected:

// Register process started...
// Saving...
// Sending...
// */

// /*---------------------------------------------------
//     listeners()
//     Returns all listeners.
// ---------------------------------------------------*/

// console.log("Current Listeners:");

// console.log(event.listeners("register"));

// console.log();

// /*---------------------------------------------------
//     off()
//     Removes ONE listener.
// ---------------------------------------------------*/

// event.off("register", sendEmail);

// console.log("Removed sendEmail listener");

// console.log();

// /*---------------------------------------------------
//     removeListener()
//     Same as off()
// ---------------------------------------------------*/

// event.removeListener("register", saveToDB);

// console.log("Removed saveToDB listener");

// console.log();

// /*---------------------------------------------------
//     Emit again
// ---------------------------------------------------*/

// console.log("------ Third Emit ------");

// event.emit("register", {
//     name: "Mohamed",
//     email: "m@gmail.com",
// });

// console.log();

// /*
// Expected:

//  Register process started...
// */

// /*---------------------------------------------------
//     removeAllListeners()
// ---------------------------------------------------*/

// event.removeAllListeners("register");

// console.log("All register listeners removed");

// console.log();

// /*---------------------------------------------------
//     Emit after removing everything.
// ---------------------------------------------------*/

// console.log("------ Fourth Emit ------");

// event.emit("register", {
//     name: "Ahmed",
//     email: "a@gmail.com",
// });

// console.log("Nothing happened.");

// console.log();

// /*---------------------------------------------------
//     setMaxListeners()
// ---------------------------------------------------*/

// event.setMaxListeners(20);

// console.log(
//     "Max Listeners:",
//     event.getMaxListeners()
// );

// console.log();

// /*---------------------------------------------------
//     Same listener added multiple times.
// ---------------------------------------------------*/

// function hello() {
//     console.log("Hello");
// }

// event.on("hello", hello);
// event.on("hello", hello);
// event.on("hello", hello);

// console.log(
//     "hello listeners:",
//     event.listenerCount("hello")
// );

// console.log();

// event.emit("hello");

// console.log();

// /*
// Hello
// Hello
// Hello
// */

// /*---------------------------------------------------
//     off() removes ONE occurrence only.
// ---------------------------------------------------*/

// event.off("hello", hello);

// console.log("After removing one:");

// event.emit("hello");

// console.log();

// /*
// Hello
// Hello
// */

// /*---------------------------------------------------
//     Removing non-existing listener
//     No Error.
// ---------------------------------------------------*/

// event.off("hello", hello);
// event.off("hello", hello);
// event.off("hello", hello);

// console.log("Removed all hello listeners.");

// event.emit("hello");

// console.log("\n========== End ==========");


// make a app on event

event.on("createUser",async(data)=>{
    await sendEmail(data.email)
})

event.on("createUser",async(data)=>{
    await sentSMS(data.phone)
})

let users=[]
function addUser(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            users.push({...data});
            console.log(users);
            res();
        },3000)

    })
}

function sentSMS(phone){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("the SMS sent succ to",phone);
            res()
        },2000)

})
}

function sendEmail(email){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("the Email sent succ to ",email);
            res()
        }, 2000);
})
}

async function signUp(data){
    await addUser(data);
    // await sendEmail(data.email);
    // await sentSMS(data.phone)
    event.emit("createUser",data)
    console.log("signUp compelte succ");
}

signUp({
    name:"eslam",
    phone:"01004037294",
    email:"eslam@gmail.com"
})