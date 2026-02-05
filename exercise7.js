const shape = {
    caclulateArea() {
        return 0;
    }
};

const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;

rectangle.calculateArea = function(){
    return this.width * this.height;
}

const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function(){
    return Math.PI * this.radius * this.radius;
};

console.log(rectangle.calculateArea()); // 20
console.log(circle.calculateArea()); // 78.53981633974483