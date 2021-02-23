function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.introduce = function(){
    console.log(`Hi my name is ${this.name}, currently ${this.age} years old`);
}

Person.prototype.incrementAge = function(){
    this.age++;
    console.log(`Now my age is ${this.age}`);
}

const James = new Person('James', 35, "M");
const Jenny = new Person('Jenny', 12, "F");

James.introduce()
James.incrementAge()
James.incrementAge()
James.incrementAge()