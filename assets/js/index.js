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
