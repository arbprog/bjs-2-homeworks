"use strict";

function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}
 
Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
};

// ваш код для остальных методов
Student.prototype.addMark = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  
  this.marks.push(...mark);
};

Student.prototype.getAverage = function () {
  let sum = 0;
  this.average = 0;

  for (let i = 0; i < this.marks.length; i++) {    
    sum += this.marks[i];
  }

  this.average = sum / this.marks.length;
};

Student.prototype.excludeStudent = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};