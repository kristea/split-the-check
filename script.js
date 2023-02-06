var mealCost = Number(prompt("Cost of meal (eg. $25.99)"));
var tip = Number(prompt("Write 0.15 for 15%"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("min. 1"));

console.log(
  `The meal cost is $${mealCost} and with tip it comes down to $${total.toFixed(
    2
  )} Your share is $${(total / numOfPeople).toFixed(2)}.`
);
