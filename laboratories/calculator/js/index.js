let input = document.getElementsByClassName("inputNumber")[0];
let logTextArea = document.getElementById("logInformation");

let inputVal = ""
let lastAnswer = ""

let getInputNumber = () => {
    if(input.value == "")
        return null;

    return input.value;
}

let setInputNumberPlaceholder = (number) => {
    input.placeholder = number;
}

let clearNumberPlaceholder = () => {
    input.placeholder = "";
}

let clearInputNumber = () => {
    input.value = "";
}

let setResultValue = (value) => {
    let resultInput = document.getElementById("resultValue");
    resultInput.value = value;
}

let addContentToLogArea = (content) => {
    logTextArea.innerHTML += content;
}

let clearContentToLogArea = () => {
    logTextArea.innerHTML = "";
}

let setButtonListeners = () => {
    let opButtons = document.querySelectorAll(".rightContainer > span > span");
    
    opButtons.forEach(element => {
        element.addEventListener('click', (event) => {
            addOperator(element.innerText);
        });
    });
    
    let resetButton = document.querySelector(".resetButton");
    resetButton.addEventListener('click',( event ) => {
        reset();
    });

    let equalButton = document.querySelector(".equalButton");
    equalButton.addEventListener('click',( event ) => {
        getResult();
    });
}

let addOperator = (op) => {
    let n = getInputNumber();
    
    if(n == null && lastAnswer == "") {
        return;
    } else if(n == null && inputVal == "" && lastAnswer != "") {
        n = lastAnswer; 
    } else if(n == null) {
        n = "";
        inputVal = inputVal.substring(0, inputVal.length - 1);
    }

    inputVal += n + op;
    clearInputNumber();
    setInputNumberPlaceholder(inputVal);
}

let getResult = () => {
    let n = getInputNumber();
    
    if(n != null)
        inputVal += n;

    while(isNaN(Number(inputVal[inputVal.length - 1]))) 
        inputVal = inputVal.substring(0, inputVal.length - 1);

    answer = eval(inputVal);
    setResultValue(answer);

    addContentToLogArea(`${inputVal}=${answer}\n`);
    clearInputNumber();
    lastAnswer = `${answer}` 
    inputVal = ""

    setInputNumberPlaceholder(lastAnswer);
}

let reset = () => {
    clearInputNumber();
    setResultValue("");
    clearContentToLogArea();
    clearNumberPlaceholder();
    lastAnswer = "";
    inputVal = "";
}

let init = () => {
    setButtonListeners();
}

init();