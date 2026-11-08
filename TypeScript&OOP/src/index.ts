enum GenderEnum{
    male,
    female
}

type userName={
    fName:string,
    lName:string
}

type userType={
    fullName:userName
    age?:number,
    gender:GenderEnum,
    photo:string[]
}


let user:userType&{age:number}={
    fullName:{fName:"eslam",lName:"alaa"},
    age:20,
    gender:GenderEnum.male,
    photo:["update/user","update/admin"]
}

if(user.age! > 10){
    // console.log("3mk Eslammmmmm")
}

// console.log(user.photo[0])


//interface

interface Ilogin {
    password: string;
    email: string;
}

interface Isignup extends Ilogin {
    userName: string;
}

interface Iuser extends Isignup {
    id: number;
}

let users: Iuser[] = [];

function signup({ password, email, userName }: Isignup): string {
    const isExist = users.some((user) => user.email === email);
    if (isExist) {
        return "the user exists";
    }
    const id = Date.now();
    users.push({ userName, email, password, id });
    return "user added successfully";
}


function login({ email, password }: Ilogin): string {
    const user = users.find((user) => user.email === email);

    if (!user) {
        return "user not found";
    }

    if (user.password !== password) {
        return "incorrect password";
    }

    return "login successfully";
}


// console.log(signup({
//     password: "123",
//     userName: "eslamalaa",
//     email: "ea@gmail.com"
// }));

// console.log(signup({
//     password: "456",
//     userName: "anotherUser",
//     email: "ea@gmail.com"
// }));

// console.log(login({
//     email: "ea@gmail.com",
//     password: "123"
// }));

// console.log(login({
//     email: "wrong@gmail.com",
//     password: "123"
// }));

// console.log(login({
//     email: "ea@gmail.com",
//     password: "wrong"
// }));

// console.log(users);


//reopen interface
// interface Iuser {
//     age: number;
// }

// interface Iuser {
//     level: number;
// }
// const man: Iuser = {
//     age: 3,
//     level: 4
// };




