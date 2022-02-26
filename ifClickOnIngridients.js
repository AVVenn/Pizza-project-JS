let checkedIngridientsArr = [];
let checkedIngridientsArr2 = [];   																	//? CHECKED === CHOSEN OR SELECTED

export function changeIngridient (target, domNodes, data, ingridients) {
	if(+target.parentElement.id === 0) return;
	let selectedIngrident = ingridients.find((ingridient) => ingridient.id === +target.parentElement.id);

	selectedIngrident.part === 1 ? domNodes.pizzaImage3.classList.add(`change`) : domNodes.pizzaImage4.classList.add(`change`);

	if (checkedIngridientsArr.includes(selectedIngrident) && selectedIngrident.part === 1 
	|| checkedIngridientsArr2.includes(selectedIngrident) && selectedIngrident.part === 2){
		let index = checkedIngridientsArr.indexOf(selectedIngrident);
		index === -1 ? index = checkedIngridientsArr2.indexOf(selectedIngrident) : index;

		document.getElementById(`${selectedIngrident.id}`).classList.remove(`active`);

		selectedIngrident.part === 1 ? (checkedIngridientsArr.splice(index, 1)) : ( checkedIngridientsArr2.splice(index, 1));
		selectedIngrident.checked = false;
	} else {
		selectedIngrident.checked = true;
		(selectedIngrident.part === 1 ? checkedIngridientsArr : checkedIngridientsArr2).push(selectedIngrident);
		target.parentElement.classList.add(`active`);
	}

	if (checkedIngridientsArr.length > 2){
		checkedIngridientsArr[0].checked = false;
		document.getElementById(`${checkedIngridientsArr[0].id}`).classList.remove(`active`);
		checkedIngridientsArr = checkedIngridientsArr.slice(1);
	}	

	if (checkedIngridientsArr2.length > 2){
		checkedIngridientsArr2[0].checked = false;
		document.getElementById(`${checkedIngridientsArr2[0].id}`).classList.remove(`active`);
		checkedIngridientsArr2 = checkedIngridientsArr2.slice(1);
	}	

	let resultPriceArr = [...ingridients, ...data.sauce, ...data.size].filter((item) => item.checked === true);
	let resultPrice = resultPriceArr.reduce((acc, item) => acc += item.price , 0);

	domNodes.button.textContent = `Добавить в корзину за ${resultPrice.toFixed(2)} руб.`;

	if(checkedIngridientsArr.length === 0) {
		domNodes.pizzaImage3.classList.remove(`change`);
	}
	if(checkedIngridientsArr2.length === 0) {
		domNodes.pizzaImage4.classList.remove(`change`);
	}


	let domElem = [document.querySelector(`.order-ingridient1`), document.querySelector(`.order-ingridient2`)];
	let domElem2 = [document.querySelector(`.order-ingridient3`), document.querySelector(`.order-ingridient4`)];

	if (checkedIngridientsArr[0]) {
	domElem[0].textContent = `${checkedIngridientsArr[0].text} - ${checkedIngridientsArr[0].price} руб`
	domElem[0].nextElementSibling.classList.remove(`none`)
	}

	if (checkedIngridientsArr[1]) {
	domElem[1].textContent = `${checkedIngridientsArr[1].text} - ${checkedIngridientsArr[1].price} руб`
	domElem[1].nextElementSibling.classList.remove(`none`)
	}

	if (checkedIngridientsArr2[0]) {
	domElem2[0].textContent = `${checkedIngridientsArr2[0].text} - ${checkedIngridientsArr2[0].price} руб`
	domElem2[0].nextElementSibling.classList.remove(`none`)
	}

	if (checkedIngridientsArr2[1]) {
	domElem2[1].textContent = `${checkedIngridientsArr2[1].text} - ${checkedIngridientsArr2[1].price} руб`
	domElem2[1].nextElementSibling.classList.remove(`none`)
	}
}

//  domElem[2].textContent = ''
// orderIngridient1: document.querySelector(`.order-ingridient1`),
// orderIngridient2: document.querySelector(`.order-ingridient2`),
// orderIngridient3: document.querySelector(`.order-ingridient3`),
// orderIngridient4: document.querySelector(`.order-ingridient4`),