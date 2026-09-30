function totalSurfaceAreaOfCube(a) {
    return 6 * a * a;
}

function lateralSurfaceAreaOfCube(a) {
    return 4 * a * a;
}

function volumeOfCube(a) {
    return a ** 3;   // a*a*a
}

function diagonalOfCube(a) {
    return a * Math.sqrt(3);
}

// CUBOID

function totalSurfaceAreaOfCuboid(l, b, h) {
    return 2 * (l * b + b * h + h * l);

}

function lateralSurfaceAreaOfCuboid(l, b, h) {
    return 2 * h * (l + b);
}

function volumeOfCuboid(l, b, h) {
    return l * b * h;
}

function diagonalOfCuboid(l, b, h) {
    return Math.sqrt(l * l + b * b + h * h)
}

//CYLINDER
function totalSurfaceAreaOfCylinder(r, h) {
    const pi = 3.14;
    return 2 * pi * r * (r + h);
}

function lateralSurfaceAreaOfCylinder(r, h) {
    const pi = 3.14;
    return 2 * pi * r * h;
}

function volumeOfCylinder(r, h) {
    const pi = 3.14;
    return pi * r * r * h;
}

//CONE
function totalSurfaceAreaOfCone(r, l) {
    const pi = 3.14;
    return pi * r * (l + r);
}
function curvedSurfaceAreaOfCone(r, l) {
    const pi = 3.14;
    return pi * r * l;

}
function volumeOfCone(r, h) {
    const pi = 3.14;
    return (1 / 3) * pi * r * r * h;
}

//SPHERE

function totalSurfaceAreaOfSphere(r) {
    const pi = 3.14;
    return 4 * pi * r * r;

}

function volumeOfSphere(r) {
    const pi = 3.14;
    return (4 / 3) * pi * r * r * r;
}

//HEMISPHERE

function totalSurfaceAreaOfHemisphere(r) {
    const pi = 3.14;
    return 3 * pi * r * r;
}

function curvedSurfaceAreaOfHemisphere(r){
    const pi = 3.14;
    return 2 * pi * r * r;
}

function volumeOfHemisphere(r){
        const pi = 3.14;
    return (2 /3)* pi * r * r*r;
}

module.exports = { totalSurfaceAreaOfCube, lateralSurfaceAreaOfCube, volumeOfCube, diagonalOfCube, totalSurfaceAreaOfCuboid, lateralSurfaceAreaOfCuboid, volumeOfCuboid, diagonalOfCuboid, totalSurfaceAreaOfCylinder, lateralSurfaceAreaOfCylinder, volumeOfCylinder, totalSurfaceAreaOfCone, curvedSurfaceAreaOfCone, volumeOfCone, totalSurfaceAreaOfSphere, volumeOfSphere,totalSurfaceAreaOfHemisphere,curvedSurfaceAreaOfHemisphere,volumeOfHemisphere };