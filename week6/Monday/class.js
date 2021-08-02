class Student {      // this Student is the class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

constructor(name, age, address){
this.name = name;
this.age = age;
this.address = address;

}

const student = new Student("Matthew Fanto", 38); 
const student2 = new Student("Matthew Satos", 43); 
 //this student is a variable
console.log(student, student2);