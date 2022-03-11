export function clickOnSize (target, domNodes, dataModel) {
	let resultPrice;

	if (target.tagName === "INPUT" ){
		let selectedSize = dataModel.size.find((size) => size.id === +target.id);             
		selectedSize.checked = true;

		dataModel.size.forEach((size) => {
			if(size.id !== selectedSize.id){
				size.checked = false 
			}
		});

		domNodes.subtitleInformation.textContent = `${selectedSize.diametr} см ${selectedSize.size} грамм`;
	
		let resultPriceArr = [...dataModel.ingridientsOne, ...dataModel.ingridientsTwo, ...dataModel.sauce, ...dataModel.size].filter((item) => item.checked);
		resultPrice = resultPriceArr.reduce((acc, item) => acc += item.price , 0);

		domNodes.button.textContent = `Добавить в корзину за ${resultPrice.toFixed(2)} руб.`;

		document.querySelector(`.order-size`).textContent = `Пицца ${selectedSize.text} (${selectedSize.diametr}см, ${selectedSize.size} грамм) - ${selectedSize.price.toFixed(2)} руб.`
	}
} 

