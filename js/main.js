let inputEle = document.getElementById("msg");
let btnEle = document.getElementById("btn");
let prgEle = document.getElementById("prg");

btnEle.onclick = function () {
    let inputvalue = inputEle.value
    if (inputvalue != "") {
        prgEle.innerHTML = inputvalue
        inputEle.value = ""
    }
}

// The Second Project is calculator

let outPut = document.getElementById("textviwe");

function display(num) {
    outPut.value += num;
}
function Clear() {
    outPut.value = '';
}
function Delete() {
    outPut.value = outPut.value.slice(0, -1);
}
function calc() {
    try {
        outPut.value = eval(outPut.value);
    }
    catch {
        outPut.value = 'Error'
    }
}