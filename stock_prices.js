/*
from Interview Cake:
Suppose we could access yesterday's stock prices as an array, where:

The values are the price in dollars of Apple stock.
A higher index indicates a later time.
So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

stockPricesYesterday[60] = 500;

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.


No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/


var stockPricesYesterday = [10, 7, 19, 5, 8, 11, 9, 16];


function getMaxProfit(arr) {

  if (arr.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  const profits = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const remainingPrices = arr.slice(i + 1);
    profits.push(Math.max(...remainingPrices) - arr[i]);
  }
  return Math.max(...profits);
}
