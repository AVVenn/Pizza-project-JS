export function clickOnSauce (target, domNodes, data) {
	if(+target.parentElement.id === 0) return;

	let selectedSauce = data.sauce.find((sauce) => sauce.id === +target.parentElement.id);
	selectedSauce.checked = true;

	let checkedSauceArr = data.sauce.filter((sauce) => sauce.id !== selectedSauce.id && sauce.checked === true);

	if (checkedSauceArr.length > 0){
	checkedSauceArr[0].checked = false;
	document.getElementById(`${checkedSauceArr[0].id}`).classList.remove(`active`);
	}	
	target.parentElement.classList.add(`active`);
	domNodes.pizzaImage2.classList.add(`change`);

	let resultPriceArr = [...data.ingridientsOne, ...data.ingridientsTwo, ...data.sauce, ...data.size].filter((item) => item.checked === true);
	let resultPrice = resultPriceArr.reduce((acc, item) => acc += item.price , 0);

	domNodes.button.textContent = `Добавить в корзину за ${resultPrice.toFixed(2)} руб.`;

	document.querySelector(`.order-sauce`).textContent = `Cоус ${selectedSauce.text} - ${selectedSauce.price.toFixed(2)} руб.`
}



