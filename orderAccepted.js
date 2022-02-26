export function end(domNodes, fn, data) { 
	let end = document.createElement('div');
	end.classList.add('end');
	end.insertAdjacentHTML('afterbegin',`
		<div class="end-text">Ваш заказ принят. Ожидайте звонка.</div>
		<div class="end-button">Ok</div>
	`
	)
	document.body.append(end);
	document.body.classList.add(`accepted`);


	let chosenSize = data.size.find((item) => item.checked === true);
	let chosenSauce = data.sauce.find((item) => item.checked === true);
	let chosenIngridientsArr = data.ingridientsOne.filter((item) => item.checked === true);

	let ingridients = chosenIngridientsArr.reduce((acc, item) => acc +="/" + item.text, "");
	let ingridientPrice = +chosenIngridientsArr.reduce((acc, item) => acc += item.price, 0);

	let chosenIngridients2Arr = data.ingridientsTwo.filter((item) => item.checked === true);

	let ingridients2 = chosenIngridients2Arr.reduce((acc, item) => acc +="/" + item.text, "");
	let ingridient2Price = +chosenIngridients2Arr.reduce((acc, item) => acc += item.price, 0);


	console.log(`
				Основа ${chosenSize.diametr}см - ${chosenSize.price.toFixed(2)} руб.
				Соус - ${chosenSauce.text} - ${chosenSauce.price.toFixed(2)} руб.
				Ингридиенты 1 - ${ingridients} - ${ingridientPrice.toFixed(2)}  руб.  - ПОЛОЖИТЬ ПОБОЛЬШЕ ДЛЯ ВАЛЕРЧИКА!!!
				Ингридиенты 2 - ${ingridients2} -  ${ingridient2Price.toFixed(2)} руб. - ПОЛОЖИТЬ ПОБОЛЬШЕ ДЛЯ ВАЛЕРЧИКА!!!
				Итого - ${+chosenSize.price.toFixed(2) + +chosenSauce.price.toFixed(2) + +ingridientPrice + +ingridient2Price}`);

	domNodes.rightSide.removeEventListener(`click`, fn);

	document.querySelector(`.end-button`).addEventListener(`click`, () => {
		end.style.display = `none`;
		document.body.firstElementChild.classList.add(`none`);
		document.body.classList.remove(`accepted`);
	});

}