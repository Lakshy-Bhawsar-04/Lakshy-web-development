class udata{
    //construct initilization value of class data members

    constructor(uname,gender){
        this.uname=uname;
        this.gender=gender
    }
    
    // class method

    showDetails(){
        console.log(`username is ${this.uname} and gender is ${this.gender}`)

    }
};

//create Object of a class

let uOne = new udata("Ram sharma","Male");
let uTwo = new udata("sakshi sharma","Female")

uOne.showDetails();
uTwo.showDetails();