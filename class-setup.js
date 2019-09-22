class Employee {
    constructor(id){
        this.id = id;
    }
    showId(){
        console.log(`my id number is ${this.id}`)
    }
}

const john = new Employee(2);

console.log(john);

class Manager {
    constructor(name, department){
        this.name = name;
        this.department = department;
    }
    callMeeting(){
        console.log(`i'm calling a meeting`)
    }
}

const sara = new Manager('sara', 'sales');
sara.callMeeting();
console.log(sara);