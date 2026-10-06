function* generatorExample(a,b){
    yield a+b;
    yield a-b;
    yield a*b;
    yield a/b;
    yield a%b;
}

const gen = generatorExample(3,4);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);