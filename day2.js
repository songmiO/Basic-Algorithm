'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function solve(meal_cost, tip_percent, tax_percent) {}

function main() {
  const meal_cost = parseFloat(readLine(1).trim());
  console.log('확인');
  const tip_percent = parseInt(readLine().trim(), 10);

  const tax_percent = parseInt(readLine().trim(), 20);

  solve(meal_cost, tip_percent, tax_percent);
  console.log('');
}
