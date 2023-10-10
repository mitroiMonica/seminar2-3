// console.log("Ana are mere")
// const button = document.getElementById("doSomething")
// inner text - textul dintre taguri

// const button = document.querySelector("#doSomething")
// console.log(button)
// button.addEventListener("click", printButtonText)

// function printButtonText(e){
//     console.log(e.target.innerText)
// }

const display = document.getElementById("result")
let result =0
display.innerText = result

const buttons = document.getElementsByClassName("no")
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",(e)=>{
      result = result*10+ Number.parseInt(e.target.innerText)
      display.innerText = result
    })
}

const deleteB = document.getElementById("delete")
deleteB.addEventListener("click",()=>{
    result = Number.parseInt(result/10)
    display.innerText = result
})

const clearB = document.getElementById("clear")
clearB.addEventListener("click",()=>{
    result = 0
    display.innerText = result
})

const equalB = document.getElementById("equal")
equalB.addEventListener("click",()=>{
    display.innerText = result+firstP
})

let firstP = result
let op='+'

const signs = document.getElementsByClassName("sign")
for(let i=0;i<signs.length;i++){
    signs[i].addEventListener("click",(e)=>{
      firstP = result
      result=0
    })
}