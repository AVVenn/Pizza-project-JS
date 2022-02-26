import {createSize, createSauce, createIngridients, windowOrder} from "./createElements.js"
import {clickOnSize} from "./ifClickOnSize.js";
import {clickOnSauce} from "./ifClickOnSauce.js";
import {changeIngridient} from "./ifClickOnIngridients.js";
import {changeButton} from "./changeButton.js";
import {end} from "./orderAccepted.js";

const domNodes = {
	productCart: document.querySelector(`.product__cart`),
	subtitleInformation: document.querySelector(`.right-side__subtitle`),
	sizePizzaContainer: document.querySelector(`.right-side__container`),
	ingridientContainer: document.querySelector(`.container-ingrigients__container`),
	ingridientContainer2: document.querySelector(`.container-ingrigients__container2`),
	sauceContainer: document.querySelector(`.container-sauce__container`),
	button: document.querySelector(`.button`),
	rightSide: document.querySelector(`.right-side-main`),
	orderWidow: document.querySelector(`.left-side__container-grid`),
	// pizzaImage1: document.querySelector(`.left-side__container-img1`),
	pizzaImage2: document.querySelector(`.left-side__container-img2`),
	pizzaImage3: document.querySelector(`.left-side__container-img3`),
	pizzaImage4: document.querySelector(`.left-side__container-img4`),
	order: document.querySelector(`.left-side__container`),
}


class Ingridients {
	constructor(name, price, text, part) {
		this.name = name;
		this.price = price;
		this.text = text;
		this.checked = false;
		this.id = Math.floor(Math.random()*1000000);
		this.part = part
	}
}


class PizzaSize {
	constructor(diametr, size, price, text, checked = false) {
		this.diametr = diametr;
		this.size = size;
		this.price = price;
		this.text = text;
		this.checked = checked;
		this.id = Math.floor(Math.random()*1000000);
	}
}

const data = {
	ingridientsOne: [
		new Ingridients(`mozzarella`, 2.40, `Моцарелла`, 1),
		new Ingridients(`pepper`, 1.80, `Перец`, 1),
		new Ingridients(`onion`, 1.80, `Лук`, 1),
		new Ingridients(`cucumber`, 1.80, `Огурчики`, 1),
		new Ingridients(`brynza`, 2.40, `Брынза`, 1),
		// new Ingridients (`pepeproni`, 2.40, `Пеперони`),
		new Ingridients(`tomato`, 1.80, `Помидоры`, 1),
		new Ingridients(`pineapple`, 1.80, `Ананасы`, 1),
		new Ingridients(`cheese`, 2.40, `Чеддер`, 1),
		new Ingridients(`jalapeno`, 1.80, `Халапеньо`, 1),
	],
	ingridientsTwo: [
		new Ingridients(`mushrooms`, 1.80, `Грибы`, 2),
		new Ingridients(`becon`, 2.40, `Бекон`, 2),
		new Ingridients(`ham`, 2.40, `Ветчина`, 2),
		new Ingridients(`chicken`, 2.45, `Цыпленок`, 2),
		new Ingridients(`meatballs`,2.30, `Митбол`, 2),
		new Ingridients(`chorizo`, 2.35, `Чирозо`, 2),
	],
	sauce: [
		new Ingridients(`tomatoSauce`, 1.00, `Томатный`, 3 ),
		new Ingridients (`mustardSauce`, 2.00, `Горчичный`, 3),
		new Ingridients(`bbqSauce`, 1.50, `Барбекью`, 3),
		new Ingridients(`garlicSauce`, 1.00, `Чесночный`, 3),
		new Ingridients (`cezarSauce`, 1.20, `Цезарь`, 3),
		new Ingridients (`cheeseSauce`, 0.70, `Сырный`, 3)
	],
	size: [
		new PizzaSize (25, 480, 5.00, `Маленькая`),
		new PizzaSize (30, 720, 12.00, `Средняя`,  true),
		new PizzaSize (35, 980, 17.00, `Большая`)
	]
}

createSize (domNodes, data);
createSauce(domNodes, data);
createIngridients(domNodes.ingridientContainer, data.ingridientsOne);
createIngridients(domNodes.ingridientContainer2, data.ingridientsTwo);
windowOrder(domNodes, data);


function checkClick (target, domNodes, data) {
	if(target.closest(`.right-side__container`)){
		clickOnSize(target, domNodes, data);
	}

	if(target.closest(`.container-sauce__container`)){
		clickOnSauce(target, domNodes, data);
	}

	if(target.closest(`.container-ingrigients__container`)){
		changeIngridient(target, domNodes, data, data.ingridientsOne); 
	}
	if(target.closest(`.container-ingrigients__container2`)){
		changeIngridient(target, domNodes, data, data.ingridientsTwo); 
	}
}

let fn = ({target}) => {
	checkClick(target, domNodes, data);
	changeButton(domNodes, data);
}

domNodes.rightSide.addEventListener(`click`, fn);

domNodes.button.addEventListener(`click`, () => {
	if(!domNodes.button.classList.contains(`disable`)){
		end(domNodes, fn, data); 	

	}
});





