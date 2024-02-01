const resultElement = document.getElementById('result');
// console.log(resultElement.textContent); // 49
// resultElement = 42;
// console.log(resultElement.textContent); // 49

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');

console.log(input1.value) // 10
console.log(input2.value) // 5

// const sum = input1.value + input2.value;
// resultElement.textContent = sum; // 105
// console.log(typeof sum) // string

// const sum = Number(input1.value) + Number(input2.value);
// resultElement.textContent = sum; // 15
// console.log(typeof sum) // number

submitBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
    console.log('Hello click');
}