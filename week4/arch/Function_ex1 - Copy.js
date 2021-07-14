function getAreaOfCircle(radius) {   
    const area = (3.14 * (radius * radius));
    console.log(`The Area is =`, area);
}
console.log(getAreaOfCircle(5));
console.log(getAreaOfCircle(6));

function getCircumferenceOfCircle(radius) {   
    const circumference = (2 * 3.14 * radius);
    console.log(`The Circumference is =`, circumference)
}
console.log(getCircumferenceOfCircle(6));
console.log(getCircumferenceOfCircle(7));

function getAreaOfSquare(side) {   
    const areaSquare = (side * side);
    console.log(`The Area of a Square is =`, areaSquare)
}
console.log(getAreaOfSquare(6));
console.log(getAreaOfSquare(7));

function getAreaOfTriangle(base, height) {   
    const areaTriangle = (0.5 * base * height);
    console.log(`The Area of a Triangle is =`, areaTriangle)
}
console.log(getAreaOfTriangle(6));
console.log(getAreaOfTriangle(7));


