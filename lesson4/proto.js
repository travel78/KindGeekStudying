'use strict';

function Animal(_name, _age) {
    let name = _name;
    let age = _age;
    this.height = 0;
    this.weight = 0;
    this.run = function () {
        console.log(name + 'running');
    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getAge = function () {
        return this.age;
    };
    this.setAge = function (age) {
        this.age = age;
    };
}
Animal.prototype.greet = function () {
    console.log('hello');
};

function Mammal() {
    this.kind = '';
    this.eat = function () {
        console.log('eat');
    };
}
Mammal.prototype = Object.create(Animal.prototype);

Mammal.prototype.greet = function () {
    console.log('hello I am mammal');
};
