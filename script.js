const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const output = document.getElementById("output")



function add(){
    output.innerHTML = `${parseInt(input1.value) + +input2.value}`
}

function subtract(){
    output.innerHTML = `${parseInt(input1.value) - input2.value}`
}

function multi(){
    output.innerHTML = `${parseInt(input1.value) * input2.value}`
}

function divide(){
    output.innerHTML = `${parseInt(input1.value) / input2.value}`
}