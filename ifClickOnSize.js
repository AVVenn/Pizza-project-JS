export function clickOnSize (target, domNodes, data) {
	let resultPrice;

	if (target.tagName === "INPUT" ){
		let selectedSize = data.size.find((size) => size.id === +target.id);             
		selectedSize.checked = true;

		data.size.forEach((size) => size.id !== selectedSize.id ? size.checked = false : undefined);

		domNodes.subtitleInformation.textContent = `${selectedSize.diametr} см ${selectedSize.size} грамм`;
	
		let resultPriceArr = [...data.ingridientsOne, ...data.ingridientsTwo, ...data.sauce, ...data.size].filter((item) => item.checked === true);
		resultPrice = resultPriceArr.reduce((acc, item) => acc += item.price , 0);

		domNodes.button.textContent = `Добавить в корзину за ${resultPrice.toFixed(2)} руб.`;


		document.querySelector(`.order-size`).textContent = `Пицца ${selectedSize.text} (${selectedSize.diametr}см, ${selectedSize.size} грамм) - ${selectedSize.price.toFixed(2)} руб.`
	}
} 

