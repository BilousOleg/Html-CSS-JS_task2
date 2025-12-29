// Завдання 1

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
        alert('Сума чисел кратна 5!');
      } else {
        alert('Сума чисел НЕ кратна 5!');
      }
    }
  }
}

// Завдання 2

const inputChoice = prompt(
  'Введіть цифру, що відповідає обраному вами напою:\n1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода'
);
// Якщо натиснуто на "Відмінити"
if (inputChoice !== null) {
  // Якщо натиснуто на "ОК" без введення даних
  if (inputChoice.trim() === '') {
    // Метод trim() для обрізання пробілів й приведення строки до нормального вигляду
    alert('Будь-ласка, ВВЕДІТЬ цифру!');
  } else {
    const choice = Number(inputChoice);
    // Якщо введено символ
    if (Number.isNaN(choice)) {
      alert('Будь-ласка, введіть ЦИФРУ!');
    } else {
      if (choice === 1) {
        alert('Ви обрали чай');
      } else if (choice === 2) {
        alert('Ви обрали каву');
      } else if (choice === 3) {
        alert('Ви обрали сік');
      } else if (choice === 4) {
        alert('Ви обрали воду');
      } else {
        alert('Такого напою у нас нема');
      }
    }
  }
}
