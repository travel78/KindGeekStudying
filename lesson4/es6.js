'use strict';

class Animal {
    private _name;
    private _age;
    height;
    weight;

    constructor(name, age) {
        this._name = name;
        this._age = age;
        this.height = 0;
        this.weight = 0;
    };

    run = function () {
        console.log(this._name + 'is running');
    };

    static greet = function () {
        console.log('Hello');
    };

    set name(name) {
        this._name = name;
    };

    set age(age) {
        this._age = age;
    };

    get name() {
        return this._name;
    };

    get age() {
        return this._age;
    };

}

class Mammal extends Animal {
    private _kind;

    constructor(name, age, kind) {
        super(name, age);
        this._kind = kind;
    };

    eat = function () {
        console.log('eat');
    };

    static greet = function () {
        console.log('Hello from mammal');
    };

    get kind() {
        return this._kind;
    };

    set kind(value) {
        this._kind = value;
    };
}
