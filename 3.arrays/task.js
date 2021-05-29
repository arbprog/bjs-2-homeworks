"use strict";

function compareArrays(arr1, arr2) {
  let result;
  // Ваш код
  // Первый вариант решения
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    result = arr1.every(function (item, index) {
      for (let i = 0; i < arr2.length; i++) {
        if (index === i && item === arr2[i]) {
          return true;
        }
      }
    });
  }

  // Второй вариант решения
  result = arr1.length !== arr2.length ? false :
    arr1.every(function (index, item) {
      return arr1[index] === arr2[index] && arr1[item] === arr2[item];
    });

  // Третий вариант решения
  result = (arr1.length === arr2.length &&
    arr1.every((index, item) => {
      return arr1[index] === arr2[index] && arr1[item] === arr2[item];
    })) ? true : false;

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = [];
  // Ваш код
  // Первый вариант решения
  let intermediateArr = arr.filter(value => {
    if (value > 0 && value % 3 === 0) {
      return value;
    }
  });

  resultArr = intermediateArr.map(item => {
    return item * 10;
  });

  //Второй вариант решения
  resultArr = arr.filter(value => {if(value > 0 && value % 3 === 0) {return value;}}).map(item => {return item * 10;});

  return resultArr; // array
}