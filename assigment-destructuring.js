const person = {
    name:'john',
    lastName:'anderson',
    age: 15
}

/*const name =  person.name;
const lastName = persona. lastName;
*/

const {name:firstName, age:old} = person;

console.log(firstName, old);


const distance =  [100, 50, 200];

const [home, store, work] = distance;

console.log(home, store, work);

let num1 = 5;

let num2 = -10;

let num3 = num1;

num1 = num2;

num2 = num3;

console.log(num1, num2);

[num1, num2] = [num2, num1];

console.log(num1, num2);

const items = ["orange", "pants", "candy"];
const [fruit, , sweet="candy"] = items;

console.log(fruit, sweet);

function sayName(person){
    console.log(person.name);
    console.log(person.age);
}

sayName(person);

function sayNameDestructuring({name, lastName}){
    console.log(name);
    console.log(lastName);
} 

sayNameDestructuring(person);

function getPerson () {
    return {
        name:'bob',
        lastName:'jordan',
        age: 47
    }
}


const {name, lastName, age} = getPerson();

console.log(name, age)