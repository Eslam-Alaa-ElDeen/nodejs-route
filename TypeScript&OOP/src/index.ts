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


// reopen interface
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


//start of class and aggregation

class Employee{
    constructor(public name:string,public age:number){
        this.name=name;
        this.age=age;
    }
}

class Department{
    public departemnts:{name:string,id:number,employees:Employee[]}[]=[];
    constructor(public id:number,public name:string,public employees:Employee[]){
        this.name=name;
        this.departemnts.push({id,name,employees})
    }

    public Departemnts(){
        return this.departemnts;
    }
}

const emp1=new Employee("eslam",20);
const emp2=new Employee("mohamed",22);

const departemnt=new Department(Date.now(),"tech",[emp1,emp2]);
// console.log(departemnt.departemnts[0]);

//composition
class Room{
    constructor(public name:string,public space:number){
        this.name=name;
        this.space=space;
    }
}

class Home{
    private rooms:Room[]=[];
    constructor(public name:string,public location:string){
        this.name=name;
        this.location=location;
    }

    public addRoom(name:string,space:number){
        this.rooms.push({name,space})
    }

    get room(){
        return this.rooms;
    }
}

const rootHome=new Home("eslam_home","damanhour_behera_egypt")
rootHome.addRoom("bed_room",2);
rootHome.addRoom("bed_room",2);
rootHome.addRoom("bed_room",2);
rootHome.addRoom("bed_room",2);


// console.log(rootHome.room);

//inheritance
class Name{
    constructor(public fName:string,public lName:string){

    }

    public get fullName (){
        return`${this.fName} ${this.lName}`
    }
}

const fullName=new Name("eslam","alaa");
console.log("name :"+fullName.fullName)



class Rec{
    constructor(public width:number,public height:number){
        this.width=width;
        this.height=height
    }

    
    public get area() {
        return `the Rec area is : ${(this.width+this.height)*2}`
    }
    public get mesa7a() {
        return `the Rec area is : ${this.width*this.height}`
    }
    
}

class Square extends Rec{
    constructor(public width:number){
        super(width,width)
    }

    
    override get area() {
        return `the square area is : ${this.width*4}`
    }
    override get mesa7a() {
        return `the square area is : ${this.width*this.width}`
    }
    
}

const rec=new Rec(10,20);
// console.log(rec.mesa7a);
// console.log(rec.area);

const square=new Square(10);
// console.log(square.mesa7a);
// console.log(square.area);

// interface with class

interface Iperson{
    name:string,
    age:number,
    profile():string
}

class Person implements Iperson{
    constructor(public name:string,public age:number){
        this.name=name;
        this.age=age;
    }

    public profile():string{
        return`user name is ${this.name}`
    }
}


//abstraction & generics

class User {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
}
class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

 // Abstract Database Repository
abstract class DatabaseRepository<T> {
    protected data: T[] = [];
    abstract create(item: T): void;
    abstract findAll(): T[];
    abstract findById(id: number): T | undefined;
    getCount(): number {
        return this.data.length;
    }
}


// User Repository
class UserRepository extends DatabaseRepository<User> {

    create(user: User): void {
        this.data.push(user);
        console.log("User created successfully");
    }

    findAll(): User[] {
        return this.data;
    }

    findById(id: number): User | undefined {
        return this.data.find(user => user.id === id);
    }
}

// Product Repository
class ProductRepository extends DatabaseRepository<Product> {

    create(product: Product): void {
        this.data.push(product);
        console.log("Product created successfully");
    }

    findAll(): Product[] {
        return this.data;
    }

    findById(id: number): Product | undefined {
        return this.data.find(product => product.id === id);
    }
}

// ===>test<===
// const userRepo = new UserRepository();
// const productRepo = new ProductRepository();

// const user1 = new User(1, "Eslam", "eslam@gmail.com");
// const user2 = new User(2, "Mohamed", "mohamed@gmail.com");

// const product1 = new Product(1, "Laptop", 20000);
// const product2 = new Product(2, "Mouse", 500);

// userRepo.create(user1);
// userRepo.create(user2);

// productRepo.create(product1);
// productRepo.create(product2);

// console.log("All Users:", userRepo.findAll());
// console.log("All Products:", productRepo.findAll());

// console.log("User:", userRepo.findById(1));
// console.log("Product:", productRepo.findById(2));

// console.log("Users Count:", userRepo.getCount());
// console.log("Products Count:", productRepo.getCount());

