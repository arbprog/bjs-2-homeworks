"use strict";

// Задание 1
function getArrayParams(arr) {
  let min,
    max,
    sum = 0,
    avg = 0;
  // Ваш код
  //Обходим массив
  for (let prop in arr) {
    //Если значение меньше min, то это значение записываем в min
    if (arr[prop] === Math.min(...arr)) {
      min = arr[prop];
    }
    //Если значение больше max, то это значение записываем в max
    if (arr[prop] === Math.max(...arr)) {
      max = arr[prop];
    }
    //Находим сумму всех элементов массива
    sum += arr[prop];
  }
  //Находим среднее значение массива с округлением до 2х значений после запятой
  avg = (sum / arr.length).toFixed(2);

  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
//Функция, которая находит суммы всех элементов массива
function worker(arr) {
  let sum = 0;
  // Ваш код
  
  for (let prop in arr) {
    sum += arr[prop];
  }
  return sum;
}

//Функция, которая находит наибольшее значение элементов массива
function makeWork(arrOfArr, func) {
  let max = 0;
  // Ваш код
  // for ...
  for (let prop in arrOfArr) {
    if(func(arrOfArr[prop]) > max) {
      max = func(arrOfArr[prop]);
    }
  }

  return max;
}