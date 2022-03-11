export function clickOnSauce(target, domNodes, dataModel) {
  if (+target.parentElement.id === 0) return;

  let selectedSauce = dataModel.sauce.find((sauce) => sauce.id === +target.parentElement.id);
  selectedSauce.checked = true;

  let checkedSauceArr = dataModel.sauce.filter((sauce) => sauce.id !== selectedSauce.id && sauce.checked);

  if (checkedSauceArr.length > 0) {
    checkedSauceArr[0].checked = false;
    document.getElementById(`${checkedSauceArr[0].id}`).classList.remove(`active`);
  }
    target.parentElement.classList.add(`active`);

  const resultPriceArr = [
    ...dataModel.ingridientsOne,
    ...dataModel.ingridientsTwo,
    ...dataModel.sauce,
    ...dataModel.size,
  ].filter((item) => item.checked);
  let resultPrice = resultPriceArr.reduce((acc, item) => (acc += item.price), 0);

  domNodes.button.textContent = `Добавить в корзину за ${resultPrice.toFixed(2)} руб.`;

  document.querySelector(`.order-sauce`).textContent = `Cоус ${ selectedSauce.text} - ${selectedSauce.price.toFixed(2)} руб.`;
}
