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
  } else if (inputChoice === '1') {
    alert('Ви обрали чай');
  } else if (inputChoice === '2') {
    alert('Ви обрали каву');
  } else if (inputChoice === '3') {
    alert('Ви обрали сік');
  } else if (inputChoice === '4') {
    alert('Ви обрали воду');
  } else {
    alert('Такого напою у нас нема');
  }
}

// Завдання 3

const purchasePriceInput = prompt('Введіть суму покупки');
let discount;

// Якщо натиснуто на "Відмінити"
if (purchasePriceInput !== null) {
  // Якщо натиснуто на "ОК" без введення даних
  if (purchasePriceInput.trim() === '') {
    alert('ВВЕДІТЬ суму покупки!');
  } else {
    const purchasePrice = Number(purchasePriceInput);
    // Якщо введено символ
    if (Number.isNaN(purchasePrice)) {
      alert('Введіть ЧИСЛО, що характеризує суму покупки!');
    } else {
      //Якщо ціна покупки від'ємна
      if (purchasePrice >= 0) {
        if (purchasePrice > 800) {
          discount = 0.05;
        } else if (purchasePrice > 500) {
          discount = 0.03;
        } else {
          discount = 0;
        }

        alert(purchasePrice - purchasePrice * discount);
      } else {
        alert("Сума покупки не може бути від'ємною");
      }
    }
  }
}

// Завдання 4

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
