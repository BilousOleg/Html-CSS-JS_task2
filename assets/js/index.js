let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');

if (firstNumber && secondNumber !== '') {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    // У випадку, якщо введено НЕ числа
    alert('Будь-ласка, введіть ЧИСЛА!');
  } else {
    if ((firstNumber + secondNumber) % 5 === 0) {
      alert('Сума чисел кратна 5');
    } else {
      alert('Сума чисел НЕ кратна 5');
    }
  }
} else if (firstNumber || secondNumber === '') {
  // У випадку, якщо не введено нічого в зоча б один з промптів
  alert('Будь-ласка, введіть обидва числа!');
}
// У випадку, якщо натиснуто "Відмінити", у відповідь нічого не виводиться,
// адже prompt() передає null, якого немає в умовній конструкції
