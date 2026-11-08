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
class Employee {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
class Department {
    id;
    name;
    employees;
    departemnts = [];
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
        this.name = name;
        this.departemnts.push({ id, name, employees });
    }
    Departemnts() {
        return this.departemnts;
    }
}
const emp1 = new Employee("eslam", 20);
const emp2 = new Employee("mohamed", 22);
const departemnt = new Department(Date.now(), "tech", [emp1, emp2]);
class Room {
    name;
    space;
    constructor(name, space) {
        this.name = name;
        this.space = space;
        this.name = name;
        this.space = space;
    }
}
class Home {
    name;
    location;
    rooms = [];
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.name = name;
        this.location = location;
    }
    addRoom(name, space) {
        this.rooms.push({ name, space });
    }
    get room() {
        return this.rooms;
    }
}
const rootHome = new Home("eslam_home", "damanhour_behera_egypt");
rootHome.addRoom("bed_room", 2);
rootHome.addRoom("bed_room", 2);
rootHome.addRoom("bed_room", 2);
rootHome.addRoom("bed_room", 2);
class Name {
    fName;
    lName;
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    get fullName() {
        return `${this.fName} ${this.lName}`;
    }
}
const fullName = new Name("eslam", "alaa");
console.log("name :" + fullName.fullName);
class Rec {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    get area() {
        return `the Rec area is : ${(this.width + this.height) * 2}`;
    }
    get mesa7a() {
        return `the Rec area is : ${this.width * this.height}`;
    }
}
class Square extends Rec {
    width;
    constructor(width) {
        super(width, width);
        this.width = width;
    }
    get area() {
        return `the square area is : ${this.width * 4}`;
    }
    get mesa7a() {
        return `the square area is : ${this.width * this.width}`;
    }
}
const rec = new Rec(10, 20);
const square = new Square(10);
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    profile() {
        return `user name is ${this.name}`;
    }
}
class User {
    id;
    name;
    email;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class DatabaseRepository {
    data = [];
    getCount() {
        return this.data.length;
    }
}
class UserRepository extends DatabaseRepository {
    create(user) {
        this.data.push(user);
        console.log("User created successfully");
    }
    findAll() {
        return this.data;
    }
    findById(id) {
        return this.data.find(user => user.id === id);
    }
}
class ProductRepository extends DatabaseRepository {
    create(product) {
        this.data.push(product);
        console.log("Product created successfully");
    }
    findAll() {
        return this.data;
    }
    findById(id) {
        return this.data.find(product => product.id === id);
    }
}
