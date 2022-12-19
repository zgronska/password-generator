// Dark mode toggle

const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  btnTheme.classList.toggle("fa-moon");
  btnTheme.classList.toggle("fa-sun");
});

// Password characters

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Password generating function

const generateBtn = document.querySelector("#generate-btn");

const passOne = document.querySelector("#pass-1");
const passTwo = document.querySelector("#pass-2");

generateBtn.addEventListener("click", generatePasswords);

function generateCharacter() {
  let randomCharIndex = Math.floor(Math.random() * characters.length);
  let randomChar = characters[randomCharIndex];
  return randomChar;
}

function generatePasswords() {
  passOne.textContent = "";
  passTwo.textContent = "";
  for (let i = 0; i < 17; i++) {
    passOne.textContent += generateCharacter();
    passTwo.textContent += generateCharacter();
  }
}
