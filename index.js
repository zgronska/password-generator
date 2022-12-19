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

const passes = document.querySelectorAll(".pass-one, .pass-two");

const copies = document.querySelectorAll(".copy-one, .copy-two");

generateBtn.addEventListener("click", generatePasswords);

function generateCharacter() {
  let randomCharIndex = Math.floor(Math.random() * characters.length);
  let randomChar = characters[randomCharIndex];
  return randomChar;
}

function generatePasswords() {
  passes.forEach((pass) => {
    pass.textContent = "";
  });

  for (let i = 0; i < 16; i++) {
    passes.forEach((pass) => {
      pass.textContent += generateCharacter();
    });
  }

  copies.forEach((copy) => {
    copy.style.display = "block";
    if (copy.classList.contains("fa-check")) {
      copy.classList.remove("fa-check", "fa-solid");
      copy.classList.add("fa-copy", "fa-regular");
    }
  });
}

// Copy password function

function copyPassword(pass, copy) {
  navigator.clipboard.writeText(pass.textContent);
  copy.classList.add("fa-check", "fa-solid");
  copy.classList.remove("fa-copy", "fa-regular");
}

copies.forEach((copy) => {
  copy.addEventListener("click", function () {
    if (copy.classList.contains("copy-one")) {
      // the code here is kinda wonky but it's the clearest solution I could come up with
      copyPassword(passes[0], copies[0]);
    } else if (copy.classList.contains("copy-two")) {
      copyPassword(passes[1], copies[1]);
    } else {
      console.log("error");
    }
  });
});
