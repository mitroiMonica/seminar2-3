// console.log("Ana are mere")
// const button = document.getElementById("doSomething")
// inner text - textul dintre taguri

// const button = document.querySelector("#doSomething")
// console.log(button)
// button.addEventListener("click", printButtonText)

// function printButtonText(e){
//     console.log(e.target.innerText)
// }

const display = document.getElementById("result");
let result = 0;
let firstP = 0;
let secondP = 0;
let operator;
display.innerText = result;

const buttons = document.getElementsByClassName("no");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    // result = result * 10 + Number.parseInt(e.target.innerText);
    result += e.target.innerText;
    result = Number.parseFloat(result);
    display.innerText = result;
  });
}

const deleteB = document.getElementById("delete");
deleteB.addEventListener("click", () => {
  //   result = Number.parseInt(result / 10);
  resultString = "" + result;
  resultString = resultString.slice(0, resultString.length - 1);
  result = Number.parseFloat(resultString);
  display.innerText = result;
});

const clearB = document.getElementById("clear");
clearB.addEventListener("click", () => {
  result = 0;
  display.innerText = result;
});

const equalB = document.getElementById("equal");
equalB.addEventListener("click", () => {
  let finalResult = result;
  switch (operator) {
    case "+":
      finalResult = firstP + result;
      break;
    case "/":
      finalResult = firstP / result;
      break;
    case "-":
      finalResult = firstP - result;
      break;
    case "x":
      finalResult = firstP * result;
      break;
  }
  operator = null;
  display.innerText = finalResult;
  result = finalResult;
});

const signs = document.getElementsByClassName("sign");
for (let i = 0; i < signs.length; i++) {
  signs[i].addEventListener("click", (e) => {
    firstP = result;
    result = 0; //result becomes the second param
    switch (e.target.innerText) {
      case "+":
        operator = "+";
        break;
      case "/":
        operator = "/";
        break;
      case "-":
        operator = "-";
        break;
      case "x":
        operator = "x";
        break;
    }
  });
}

const dotB = document.getElementById("dot");
dotB.addEventListener("click", (e) => {
  result += e.target.innerText;
  display.innerText = result;
});
