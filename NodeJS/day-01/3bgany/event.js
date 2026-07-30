const EventEmitter=require("events")
const event=new EventEmitter();
//=============================================== on =============================================================
// event.on("hi",(name)=>{
//     console.log("hi",name);
// })

// event.emit("hi","eslam")  //call the listener to be called and apply
// event.emit("hi","eslam")
// event.emit("hi","eslam")
// event.emit("hi","eslam")

//=============================================== once =============================================================

// event.once("hi",(name)=>{
//     console.log("hi",name);
// })

// event.emit("hi","eslam") //run once only and the rest of emit will not 
// event.emit("hi","eslam")
// event.emit("hi","eslam")
// event.emit("hi","eslam")

//=============================================== prependListener  vs on =============================================================


// event.on("hi",(name)=>{
//     console.log("hi",name,"from on");
// })

// event.prependListener("hi",(name)=>{              //have high priorty on the same event name
//     console.log("hi",name,"from prependListener");
// })

// event.emit("hi","eslam")
// event.emit("hallo","eslam")

//=============================================== eventNames() =============================================================

// event.on("hi",(name)=>{
//     console.log("hi",name,"from on");
// })

// event.on("make",(name)=>{
//     console.log("hi",name,"from on");
// })

// event.on("this",(name)=>{
//     console.log("hi",name,"from on");
// })

// console.log(event.eventNames()); //this is a function return array with event names
// event.emit("hi","eslam")

//=============================================== removeListener=============================================================

// function listenerFun(name){
//     console.log(name);
// }

// event.on("hi",listenerFun)

// event.on("make",(name)=>{
//     console.log("hi",name,"from on");
// })

// event.on("this",(name)=>{
//     console.log("hi",name,"from on");
// })

// event.removeListener("hi",listenerFun)  //will remove listener with name hi and should have listener ref

// console.log(event.eventNames()); 
// event.emit("hi","eslam")
// event.emit("make","eslam")

//=============================================== removeAllListener=============================================================

function listenerFun(name){
    console.log(name);
}

event.on("hi",listenerFun)

event.on("make",(name)=>{
    console.log("hi",name,"from on");
})

event.on("this",(name)=>{
    console.log("hi",name,"from on");
})

event.removeAllListeners()  //will remove all listeners once i called it function 
console.log(event.eventNames()); 
event.emit("hi","eslam")
event.emit("make","eslam")