function sayHi(){
    console.log("hello");
}

/*const hello = function(name){
    console.log(`helo ${name}`)
}*/


let hello = () => console.log("hello");

hello();

function triple(num){
    return num = 2;
}

let num = triple(2);

console.log(num);

let multiple = (num1, num2) => {
    const result = num1 * num;
    return result;
}

console.log(multiple(2,3));

const obj= () => ({name:'bob', age:25});

const person =  obj();

console.log(person);

numbers = [1, 2, 3, 4, 5, 6];

const big = numbers.filter(number => number >2);

console.log(big);

document.getElementById('btn').addEventListener('click', () => console.log('you clicked'))