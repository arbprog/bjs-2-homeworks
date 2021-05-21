"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let D = (b ** 2) - (4 * a * c);

  if (D < 0) {
    return arr;
  }

  if (D === 0) {
    arr.push((-b) / 2 * a);
    return arr;
  }

  if (D > 0) {
    arr.push(((-b) + Math.sqrt(D)) / (2 * a));
    arr.push(((-b) - Math.sqrt(D)) / (2 * a));
    return arr;
  }
  return arr; // array
}

const percentTitle = document.querySelector('#percent'),
  contributionTitle = document.querySelector('#contribution'),
  amountTitle = document.querySelector('#amount');

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь  
  if (isNaN(percent)) {
    return `Параметр '${percentTitle}' содержит неправильное значение ${percent}`;
  }

  if (isNaN(contribution)) {
    return `Параметр '${contributionTitle}' содержит неправильное значение ${contribution}`;
  }

  if (isNaN(amount)) {
    return `Параметр '${amountTitle}' содержит неправильное значение ${amount}`;
  }
  //Расчитываем тело кредита
  let creditBody = amount - contribution;

  //Расчитываем количество месяцев, в течении которых необходимо оплатить ипотеку
  let monthCount = (date.getMonth() - new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) * 12);

  //Расчитываем ежемесячный платеж
  let percentPerMonth = (percent / 100) / 12;
  let monthlyPayment = (creditBody * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** monthCount) - 1)));

  //Расчитываем общую сумму, которую выплатит пользователь
  totalAmount = (monthlyPayment * monthCount).toFixed(2);

  // return totalAmount;
  return parseFloat(totalAmount);
}