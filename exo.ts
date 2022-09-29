export class Person {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
    
    tellMyName() {
        return `I am ${this.name}`  ;
    }

    tellMyAge(){
        return `I am ${this.age} years old`;
    }


}

let person1: Person = new Person('john', 40);
let person2: Person = new Person('mary', 35);