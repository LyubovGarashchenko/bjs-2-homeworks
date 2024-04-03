//Задача №1. Форматтер чисел
function parseCount(parseValue) {
    if(Number.isNaN(Number.parseFloat(parseValue))) {
        throw new Error ("Невалидное значение");
    }
    return Number.parseFloat(parseValue);
}

function validateCount(parseValue) {
    try {
        return parseCount(parseValue);
    } catch (error) {
        return error;
    }
}

//Задача №2. Треугольник
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        
        if((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
        throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    get area() {
        const semiPerimeter = this.perimeter / 2;
        const square = Math.sqrt(semiPerimeter * ((semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3)));
        return Number(square.toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}