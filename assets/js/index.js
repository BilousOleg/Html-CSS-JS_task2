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
