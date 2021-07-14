function getAreaOfCircle(radius) {   
    const area = (3.14 * (radius * radius));
    return area;
}
console.log(getAreaOfCircle(5));
console.log(getAreaOfCircle(6));

function getCircumferenceOfCircle(radius) {   
    const circumference = (2 * 3.14 * radius);
    return circumference;
}
console.log(getCircumferenceOfCircle(6));
console.log(getCircumferenceOfCircle(7));

function getAreaOfSquare(side) {   
    const areaSquare = (side * side);
    return areaSquare;
}
console.log(getAreaOfSquare(6));
console.log(getAreaOfSquare(7));

function getAreaOfTriangle(base, height) {   
    const areaTriangle = (0.5 * base * height);
    return areaTriangle;
}
console.log(getAreaOfTriangle(6, 5));
console.log(getAreaOfTriangle(7, 9));


