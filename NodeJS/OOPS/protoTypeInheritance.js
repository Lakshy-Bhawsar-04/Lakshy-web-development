// this is parent Object

const parent = {
    greet() {
        console.log("Hello user by parent object")

    },
    test(a) {
        console.log("test by parents " + a);
    }
};

//parent.greet()

const child = Object.create(parent);


// Calling parent methods through child
child.greet();
child.test(3);