class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log("YUM!")
    }
    yell(){
        console.log("hello");
    }
}

class Cat extends Pet {
    //override
    constructore(name,age,livesLeft=9){
        super(name,age);
        this.livesLeft = 9
    }
    yell(){
        console.log("meow");
    }
}
class Dog extends Pet{
    yell(){
        console.log("bark")
    }
}