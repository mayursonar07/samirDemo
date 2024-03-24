
console.log(" Hello");

class Animal { 
    constructor(name){
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Herbivorous extends Animal {
    constructor(name, vegetableName){
        super(name);
        this.vegetableName = vegetableName;
    }
    getVegName() {
        return (this.name + " eats " + this.vegetableName);
    }

}

const hAnimal1 = new Herbivorous("horse", "grass");
console.log(hAnimal1.getVegName());



