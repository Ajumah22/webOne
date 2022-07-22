// OBJECT ORIENTED PROGRAMMING (OOP)

//how to write a class in OOP

class Student { 
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dobName = dob;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    
    getBirthYear() {
        return this.dob.getFullYear();
    }
}

//how to write an object in OOP
const Oluwakemi = new Student ('Oluwakemi', 'Onajinrin', '4-3-1980') 
console.log(Oluwakemi);
console.log(Oluwakemi.getFullName());

const Chidu = new Student ('Chidu', 'Ugochukwu', '4-2-1970')
console.log(Chidu);
console.log(Chidu.getFullName());