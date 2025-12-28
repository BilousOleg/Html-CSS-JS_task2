const firstInput = prompt('Введіть перше число');
const secondInput = prompt('Введіть друге число');

// У випадку, якщо натиснуто "Відмінити", у відповідь нічого не виводиться,
// адже prompt() передає null, якого немає в умовній конструкції
if (firstInput !== null && secondInput !== null) {
  // У випадку, якщо не введено нічого (або один чи декілька пробілів) в хоча б один з промптів
  if (firstInput.trim() === '' || secondInput.trim() === '') {
    alert('Будь-ласка, введіть обидва числа!');
  } else {
    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);

    // У випадку, якщо введено НЕ числа
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      alert('Будь-ласка, введіть ЧИСЛА!');
    } else {
      if ((firstNumber + secondNumber) % 5 === 0) {
        alert('Сума чисел кратна 5');
      } else {
        alert('Сума чисел НЕ кратна 5');
      }
    }
  }
}
