// async function fetchData(){
//     const response =await fetch("https://api.github.com/users")
    
//     const data = await response.json()
//     console.log(data[0].login);
// }

// fetchData();


// function Person(name, age, course){
//     this.Name = name;
//     this.Age = age;
//     this.Course = course;
// }


// let Person1 = new Person("EA23", 23, "MERN");
// let Person2 = new Person("EA24", 23, "MERN");
// console.log(Person1);
// console.log(Person2);
// function Person(first, last, age, eyecolor) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eyecolor;
//       }
//       Person.prototype.nationality = "English";
      
//       var person1 = new Person ('John', 'jane', 24, 'blue');
//       // Access Prototype Method
//       console.log(person1.nationality);


// function print(number , timeout){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log(number);
//             res('done')
//         }, timeout);
//     })
// }

// async function display(){
//   try{
//     await print(1,1000)
//    await print(2,2000)
//    await print(3,2000)
//    await print(4,4000)
//    await print(5,3000)
//   }
//   catch(err){
//     console.log(err);
//   }
    
// }

// display();

// function Animal(name){
//     this.Name = name
// }

// Animal.prototype.sayHello = function(){
//     console.log(` Hello There ${this.Name}`);
// }

// function Dog(name){
//     Animal.call(this , name)
// }
// Dog.prototype = Object.create(Animal.prototype)

// Dog.prototype.bark = function(){
//     console.log("Bark...!!!");
// }
// // Instance

// let animal1 = new Animal('Cat')
// animal1.sayHello()

// let dog1 = new Dog("Becky")
// console.log(dog1.Name);
// dog1.sayHello()
// dog1.bark()


// constructor function
function Person() {
    this.name = 'John'
}

// add a property
Person.prototype.age = 20;

// creating an object
const person1 = new Person();

console.log(person1);
console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20