"use strict";

class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

}

class Magazine extends PrintEditionItem {
    constructor() {
        super();
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author) {
        super();
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor() {
        super();
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor() {
        super();
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor() {
        super();
        this.type = "detective";
    }
}

const picknick = new Book("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
console.log(picknick.name);
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state);