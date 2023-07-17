const incrementBtn = document.querySelector("#inc")
const displayValue = document.querySelector("#display")

// Increment button
const incBtn = () => {
    const num = Number(displayValue.innerText)
    if (num >= 70) {
        alert("70+ values are not allowed");
    }
    else{
        displayValue.innerText = num + 1;
    }
}
incrementBtn.addEventListener("click", incBtn)

// Decrement button
const decrementBtn = document.querySelector("#dec")
const decBtn = () => {
    num = Number(displayValue.innerText)
    if (num <= 0) {
        alert("Negative value are restricted");
    }
    else {
        displayValue.innerText = num - 1
    }
}

decrementBtn.addEventListener('click', decBtn)

// Reset button
const resetButton = document.querySelector("#reset")
const resetBtn = () => {
    displayValue.innerText = 0
}

resetButton.addEventListener('click', resetBtn)