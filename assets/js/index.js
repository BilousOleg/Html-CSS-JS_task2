const purchasePriceInput = prompt('Введіть суму покупки');
const bigDiscountLimit = 800;
const smallDiscountLimit = 500;
const bigDiscount = 5; // Значення "у відсотках"
const smallDiscount = 3; // Значення "у відсотках"
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
        if (purchasePrice > bigDiscountLimit) {
          discount = bigDiscount / 100;
        } else if (purchasePrice > smallDiscountLimit) {
          discount = smallDiscount / 100;
        } else {
          discount = 0;
        }

        console.log(discount);
        alert(purchasePrice - purchasePrice * discount);
      } else {
        alert("Сума покупки не може бути від'ємною");
      }
    }
  }
}
