class student {
    constructor(stdName,subject){
        this.stdName = stdName;
        this.subject = subject;

    }

    showDetails(){
        console.log(`stdName: ${this.stdName} and subject: ${this.subject}`);

    }
}

class teacher extends student{
    constructor(stdName,subject,teacherName,designation){
        // call parent class constructor
        super(stdName,subject);
        this.teacherName = teacherName;
        this.designation = designation;

    }

    showTeacherDetails(){
        console.log(`teacher name : ${this.teacherName} and designation : ${this.designation}`);

    }
}

//create teacher(child class) class object

const tobj = new teacher("Deepak Yadav","JavaScript","Mr. Dilip Joshi","JavaScript trainer");

tobj.showTeacherDetails();
tobj.showDetails();
