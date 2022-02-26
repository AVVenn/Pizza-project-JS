
export function createSize (domNodes, data) {
	data.size.forEach((size) => {
		let newSize = document.createElement('input');
		let newLabel = document.createElement('label');

		newSize.type = "radio";
		newSize.name = "size-pizza"
		newSize.classList.add('radio-input');
		newSize.id = size.id;
		newSize.checked = size.checked;

		newLabel.htmlFor = size.id;
		newLabel.textContent = size.text;														

		domNodes.sizePizzaContainer.append(newSize);
		domNodes.sizePizzaContainer.append(newLabel);
	});
}


export function createSauce (domNodes, data) {
	data.sauce.forEach((sauce) => {
		let newSauce = document.createElement('div');
		newSauce.classList.add('basic-ingridient', `${sauce.name}`);
		newSauce.id = sauce.id;
		newSauce.insertAdjacentHTML(`afterbegin`, `
		<div class="basic-sause__img"></div>
		<div class="basic-sause__title">${sauce.text}</div>
		<div class="basic-sause__price">${sauce.price} руб.</div>
		`)
		newSauce.children[0].style.background = `url('images/${sauce.name}.png') center / cover no-repeat`;
		domNodes.sauceContainer.append(newSauce);
	} )
}


export function createIngridients (container, ingridients) {
	ingridients.forEach((ingridient) => {
		let newIngridient = document.createElement('div');
		newIngridient.classList.add('basic-ingridient', `${ingridient.name}`);
		newIngridient.id = ingridient.id;
		newIngridient.insertAdjacentHTML(`afterbegin`, `
		<div class="basic-ingridient__img"></div>
		<div class="basic-ingridient__title">${ingridient.text}</div>
		<div class="basic-ingridient__price">${ingridient.price} руб.</div>
		`)
		newIngridient.children[0].style.background = `url('images/${ingridient.name}.png') center / cover no-repeat`;
		container.append(newIngridient);
	} )
}



export function windowOrder (domNodes, data) {
	let windowOrd = document.createElement('div');
	windowOrd.classList.add("left-side__container-grid");
	windowOrd.insertAdjacentHTML(`afterbegin`, `
	<div class="order1">
		<div class="order-size">Пицца Средняя (30см, 720 грамм) - 12.00 руб.</div>
	</div>
	<div class="order2">
		<div class="order-sauce"></div>
	</div>
	<div class="order3">
		<div class="order-ingridient1"></div>
		<i class="fa-solid fa-trash none"></i>
	</div>
	<div class="order4">
		<div class="order-ingridient2"></div>
		<i class="fa-solid fa-trash none"></i>
	</div>
	<div class="order5">
		<div class="order-ingridient3"></div>
		<i class="fa-solid fa-trash none"></i>
	</div>
	<div class="order6">
		<div class="order-ingridient4"></div>
		<i class="fa-solid fa-trash none"></i>
	</div>
	`)
	domNodes.order.append(windowOrd);
}








