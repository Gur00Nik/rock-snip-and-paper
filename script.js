let computerChoice;

let userChoice;

let result;

const ALL_CHOICE_ITEM = document.querySelectorAll(
  `[type="radio"][name="user-choice"]`
);

const BUTTON_START_PLAY = document.querySelector(".start-game");

const BUTTON_PLAY = document.querySelector(".btn-play");

const FIELD_USER_CHOICE = document.querySelector(".user-choice");

const FIELD_COMPUTER_CHOICE = document.querySelector(".computer-choice");

const FIELD_RESULT = document.querySelector(".result");

BUTTON_START_PLAY.addEventListener("click", () => {
  lockButton(BUTTON_START_PLAY);
  unlockUserChoice(ALL_CHOICE_ITEM);
});

BUTTON_PLAY.addEventListener("click", () => {
  generateComputerChoice();
  calcResult();
});

ALL_CHOICE_ITEM.forEach((choice) => {
  choice.addEventListener("change", () => {
    userChoice = choice.value;
    renderText(FIELD_USER_CHOICE, userChoice);
    unlockButton(BUTTON_PLAY);
  });
});

const selectColorText = (field, color) => {
  field.classList.toggle(color);
};

const renderText = (field, value) => {
  field.innerHTML = value;
};

const unlockButton = (btn) => {
  btn.removeAttribute("disabled");
};

const lockButton = (btn) => {
  btn.setAttribute("disabled", true);
};

const unlockUserChoice = (arr) => {
  arr.forEach((item) => {
    item.removeAttribute("disabled");
  });
};

const generateComputerChoice = () => {
  computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = "Бумага";
      break;
    case 1:
      computerChoice = "Камень";
      break;
    case 2:
      computerChoice = "Ножницы";
      break;
  }

  renderText(FIELD_COMPUTER_CHOICE, computerChoice);
};

const calcResult = () => {
  if (
    (computerChoice === "Бумага" && userChoice === "Камень") ||
    (computerChoice === "Камень" && userChoice === "Ножницы") ||
    (computerChoice === "Ножницы" && userChoice === "Бумага")
  ) {
    result = "Победил Компьютер";
    selectColorText(FIELD_RESULT, "red");
    selectColorText(FIELD_COMPUTER_CHOICE, "green");
    selectColorText(FIELD_USER_CHOICE, "red");
  } else if (
    (userChoice === "Бумага" && computerChoice === "Камень") ||
    (userChoice === "Камень" && computerChoice === "Ножницы") ||
    (userChoice === "Ножницы" && computerChoice === "Бумага")
  ) {
    result = "Победил игрок";
    selectColorText(FIELD_RESULT, "green");
    selectColorText(FIELD_COMPUTER_CHOICE, "red");
    selectColorText(FIELD_USER_CHOICE, "green");
  } else {
    result = "Ничья";
    selectColorText(FIELD_RESULT, "yellow");
    selectColorText(FIELD_COMPUTER_CHOICE, "yellow");
    selectColorText(FIELD_USER_CHOICE, "yellow");
  }

  renderText(FIELD_RESULT, result);
};
