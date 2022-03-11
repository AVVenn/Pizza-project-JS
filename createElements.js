export function createSize(domNodes, dataModel) {
  dataModel.size.forEach((size) => {
    let newSize = document.createElement("input");
    let newLabel = document.createElement("label");

    newSize.type = "radio";
    newSize.name = "size-pizza";
    newSize.classList.add("radio-input");
    newSize.id = size.id;
    newSize.checked = size.checked;

    newLabel.htmlFor = size.id;
    newLabel.textContent = size.text;

    domNodes.sizePizzaContainer.append(newSize);
    domNodes.sizePizzaContainer.append(newLabel);
  });
}

export function createSauce(domNodes, dataModel) {
  dataModel.sauce.forEach((sauce) => {
    let newSauce = document.createElement("div");
    newSauce.classList.add("basic-ingridient", `${sauce.name}`);
    newSauce.id = sauce.id;
    newSauce.insertAdjacentHTML(
    `afterbegin`,
    `
		<div class="basic-sause__img"></div>
		<div class="basic-sause__title">${sauce.text}</div>
		<div class="basic-sause__price">${sauce.price} руб.</div>
		`
    );
    newSauce.children[0].style.background = `url('images/${sauce.name}.png') center / contain no-repeat`;
    domNodes.sauceContainer.append(newSauce);
  });
}

export function createIngridients(container, ingridients) {
  ingridients.forEach((ingridient) => {
    let newIngridient = document.createElement("div");
    newIngridient.classList.add("basic-ingridient", `${ingridient.name}`);
    newIngridient.id = ingridient.id;
    newIngridient.insertAdjacentHTML(
    `afterbegin`,
    `
		<div class="basic-ingridient__img"></div>
		<div class="basic-ingridient__title">${ingridient.text}</div>
		<div class="basic-ingridient__price">${ingridient.price} руб.</div>
		`
    );
    newIngridient.children[0].style.background = `url('images/${ingridient.name}.png') center / contain no-repeat`;
    container.append(newIngridient);
  });
}
