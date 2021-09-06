const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won";
    } else {
      return "you won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer won";
    } else {
      return "user won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer won";
    } else {
      return "user won";
    }
  }
  if (userChoice === "bomb") {
    return "user won";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
