let target = Math.floor(Math.random() * 10 + 1);
let value = prompt("Hey! Welcome to the guessing game , enter a number ");
let count = 1;
while (parseInt(value) !== target) {
  if (parseInt(value) > target)
    value = prompt("Guess lower , hint : number is between 1 to 10");
  else {
    value = prompt(" Guess higher ");
  }
  count++;
}
console.log(`Hey you won the game in ${count} times`);
