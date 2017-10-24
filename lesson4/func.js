'use strict';

function Animal(_name, _age) {
    let name = _name;
    let age = _age;
    this.height = 10;
    this.weight = 20;
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
Animal.greet = function () {
    console.log('hello');
};

function Mammal() {
    Animal.call(this);
    this.kind = '';
    this.eat = function () {
        console.log('eat');
    };
}
Mammal.greet = function () {
    console.log('hello I am mammal');
};
