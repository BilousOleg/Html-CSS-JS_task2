const firstInput = prompt('Введіть перше число');
const secondInput = prompt('Введіть друге число');
let isMultiple = false;

// Якщо натиснуто "Відмінити"
if (firstInput !== null && secondInput !== null) {
  // Якщо не введено нічого
  if (firstInput.trim() === '' || secondInput.trim() === '') {
    alert('Будь-ласка, введіть обидва числа!');
  } else {
    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);
    // Якщо введено символ
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      alert('Будь-ласка, введіть ЧИСЛА!');
    } else {
      if (firstNumber % secondNumber === 0) {
        isMultiple = true;
      }
      alert(isMultiple);
    }
  }
}
