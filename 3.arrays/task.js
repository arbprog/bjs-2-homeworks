"use strict";

function compareArrays(arr1, arr2) {
  let result;
  // Ваш код
  // Проверяем равенство длин массивов
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    // Для каждого элемента массива arr1 проверяем равен ли элемент массива arr2
    result = arr1.every(function (item, index) {
      for (let i = 0; i < arr2.length; i++) {
        if (index === i && item === arr2[i]) {
          return true;
        }
      }
    });
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = [];
  // Ваш код
  //Фильтруем по положительным и кратным 3
  let intermediateArr = arr.filter(value => {
    if (value > 0 && value % 3 === 0) {
      return value;
    }
  });
  //Каждое значение массива intermediateArr умножаем на 10 и записываем в resultArr
  resultArr = intermediateArr.map(item => {
    return item * 10;
  });
  return resultArr; // array
}