//complete this code
class Person {
  constructor(myName, myAge) {
    this.myName = myName;
    this.myAge = myAge;
  }
  get name() {
    return this.myName;
  }
  set age(val) {
    this.myAge = val;
  }
}

class Student extends Person {
  constructor(myName, myAge) {
    super(myName, myAge);
  }
  study() {
    console.log(`${this.myName} is studying`);
  }
}

class Teacher extends Person {
  constructor(myName, myAge) {
    super(myName, myAge);
  }
  teach() {
    console.log(`${this.myName} is teaching`);
  }
}
let person = new Person("John", 25);
console.log(person.myName);
person.myAge = 30;
console.log(person.myAge);
const student = new Student("Alice", 22);
student.study();
const teacher = new Teacher("Bob", 40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
