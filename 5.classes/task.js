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
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (type in this.books[i]) {
                if (this.books[i][type] === value) {
                    return this.books[i];
                }
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }

        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addGrade(subjectName, mark) {
        if (mark > 5 || mark < 1 || typeof mark !== "number") {
            console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
            return 0;
        }
        if (!this.marks[subjectName]) {
            this.marks[subjectName] = [];
        }
        this.marks[subjectName].push(mark);
    }
<<<<<<< Updated upstream

    getAverageBySubject(subjectName) {
        let sum = 0;
        let average = 0;
        if (!this.marks[subjectName]) {
            console.log(`${subjectName} - несуществующий предмет!`);
            return 0;
        }

        for (let i = 0; i < this.marks[subjectName].length; i++) {
            
            sum += this.marks[subjectName][i];
        }
        average = sum / this.marks[subjectName].length;
        return average; 
=======
    getAverageBySubject(obj) {
        for(let i = 0; i < obj.length; i++) {
            
        }
>>>>>>> Stashed changes
    }
}

const student = new Student("Олег Никифоров");
<<<<<<< Updated upstream
student.addGrade("algebra", 3);
student.addGrade("algebra", 5);
student.addGrade("geometry", 5);
student.addGrade("geometry", 4);
student.addGrade("geometry", 6); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("algebra"); // Средний балл по предмету geometry 4.5
=======
student.addMark("algebra", 5);
student.addMark("algebra", 5);
student.addMark("geometry", 5);
student.addMark("geometry", 4);
student.addMark("geometry", 6); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
>>>>>>> Stashed changes
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");