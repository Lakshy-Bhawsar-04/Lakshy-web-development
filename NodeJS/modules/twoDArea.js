function areaOfSquare(side) {
    return side * side;
}

function areaOfRectangle(base, height) {
    return base * height;
}

function areaOfParallelogram(base, height) {
    return base * height;
}

function areaOfTrapezoid(a, b, h) {
    return ((a + b) * h) / 2;

}

function areaOfTriangle(base, height) {
    return (base * height) / 2;
}

function areaOfCircle(radius) {
    const pi = 3.14;

    return pi * radius * radius;

}
function areaOfEllipse(a, b) {
    const pi = 3.14;

    return pi * a * b;
}
module.exports = { areaOfSquare, areaOfRectangle, areaOfParallelogram, areaOfTrapezoid, areaOfTriangle, areaOfCircle, areaOfEllipse };



