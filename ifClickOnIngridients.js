let checkedIngridientsArr = [];
let checkedIngridientsArr2 = [];

export function changeIngridient(target, domNodes, dataModel, ingridients) {
  if (+target.parentElement.id === 0) return;

  let selectedIngrident = ingridients.find((ingridient) => ingridient.id === +target.parentElement.id);

  if (
    (checkedIngridientsArr.includes(selectedIngrident) &&
      selectedIngrident.part === 1) ||
    (checkedIngridientsArr2.includes(selectedIngrident) &&
      selectedIngrident.part === 2)
  ) {
    let index = checkedIngridientsArr.indexOf(selectedIngrident);
    index === -1  ? (index = checkedIngridientsArr2.indexOf(selectedIngrident)) : index;

    document.getElementById(`${selectedIngrident.id}`).classList.remove(`active`);

    selectedIngrident.part === 1 ? checkedIngridientsArr.splice(index, 1) : checkedIngridientsArr2.splice(index, 1);

    selectedIngrident.checked = false;
  } else {
    selectedIngrident.checked = true;
    (selectedIngrident.part === 1 ? checkedIngridientsArr : checkedIngridientsArr2).push(selectedIngrident);

    target.parentElement.classList.add(`active`);
  }

  if (checkedIngridientsArr.length > 2) {
    checkedIngridientsArr[0].checked = false;
    document.getElementById(`${checkedIngridientsArr[0].id}`).classList.remove(`active`);
    checkedIngridientsArr = checkedIngridientsArr.slice(1);
  }

  if (checkedIngridientsArr2.length > 2) {
    checkedIngridientsArr2[0].checked = false;
    document.getElementById(`${checkedIngridientsArr2[0].id}`).classList.remove(`active`);
    checkedIngridientsArr2 = checkedIngridientsArr2.slice(1);
  }

  const resultPriceArr = [...ingridients, ...dataModel.sauce, ...dataModel.size].filter((item) => item.checked === true);
  let resultPrice = resultPriceArr.reduce((acc, item) => (acc += item.price), 0);

  domNodes.button.textContent = `Добавить в корзину за ${resultPrice.toFixed(2)} руб.`;
}
