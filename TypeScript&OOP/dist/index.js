"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenderEnum;
(function (GenderEnum) {
    GenderEnum[GenderEnum["male"] = 0] = "male";
    GenderEnum[GenderEnum["female"] = 1] = "female";
})(GenderEnum || (GenderEnum = {}));
let user = {
    fullName: { fName: "eslam", lName: "alaa" },
    age: 20,
    gender: GenderEnum.male,
    photo: ["update/user", "update/admin"]
};
if (user.age > 10) {
}
let users = [];
function signup({ password, email, userName }) {
    const isExist = users.some((user) => user.email === email);
    if (isExist) {
        return "the user exists";
    }
    const id = Date.now();
    users.push({ userName, email, password, id });
    return "user added successfully";
}
function login({ email, password }) {
    const user = users.find((user) => user.email === email);
    if (!user) {
        return "user not found";
    }
    if (user.password !== password) {
        return "incorrect password";
    }
    return "login successfully";
}
