const firstNumInput = prompt('Введіть перше число');
const secondNumInput = prompt('Введіть друге число');
let isMultiple = false;

// Якщо натиснуто "Відмінити"
if (firstNumInput !== null && secondNumInput !== null) {
  // Якщо не введено нічого
  if (firstNumInput.trim() === '' || secondNumInput.trim() === '') {
    alert('Будь-ласка, введіть обидва числа!');
  } else {
    const firstNum = Number(firstNumInput);
    const secondNum = Number(secondNumInput);
    // Якщо введено символ
    if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
      alert('Будь-ласка, введіть ЧИСЛА!');
    } else {
      if (firstNum % secondNum === 0) {
        isMultiple = true;
      }
      alert(isMultiple);
    }
  }
}
