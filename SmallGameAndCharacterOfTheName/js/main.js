// This to generate any random character in you name
let nm = "Unique";
console.log(nm.charAt(Math.floor(Math.random() * nm.length)));
// This is a small game
let playGame = confirm("Do you wanna play rock , paper and scissors ");
if (playGame) {
    let playerChoise = prompt("Enter rock , paper or scissors ");
    if (playerChoise) {
    let playerOne = playerChoise.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let ComputerChoise = Math.floor(Math.random() * 3 + 1);
      let computer =
        ComputerChoise === 1
          ? "rock"
          : ComputerChoise === 2
          ? "paper"
          : "scissors";
      let result =
        computer === playerOne
          ? `Game Tied computer and User both choosed ${computer}`
          : computer === "rock" && playerOne === "scissors"
          ? `Computer Wins , computer - ${computer} , user - ${playerOne}`
          : computer === "paper" && playerOne === "rock"
          ? `Computer Wins , computer - ${computer} , user - ${playerOne}`
          : computer === "scissors" && playerOne === "paper"
          ? `Computer Wins , computer - ${computer} , user - ${playerOne}`
          : `Player Wins  computer - ${computer} , player - ${pl}`;
      alert(result);
    } else {
      alert("you entered wrong input ");
    }
  } else {
    alert("I guess next time  , bye");
  }
} else {
  alert("ok , maybe next time");
}
