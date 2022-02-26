export function changeButton (domNodes, data){
	let func = (item) => item.checked === true;
	let arrayForButton = [data.size.some(func), data.sauce.some(func),  data.ingridientsOne.some(func),
		 data.ingridientsTwo.some(func)].every(item => item === true);

	if(arrayForButton === false){
	domNodes.button.classList.add(`disable`);
	}

	if(arrayForButton) {
	domNodes.button.classList.remove(`disable`);
}
}