function person(name){
    this.name = name;

}

person.prototype.greet=function(){
    console.log(`the person name is ${this.name}`);
}

person.prototype.test=function(){
    console.log(`this is test function and name is ${this.name}`);
}

function Student(name,subject){
    person.call(this,name);
    this.subject=subject;

}

Student.prototype=Object.create(person.prototype);


// create object

const student1 = new  Student("Lakshy Bhawsar","MERN STACK");

student1.greet();
student1.test();