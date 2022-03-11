import {createSize, createSauce,createIngridients} from "./createElements.js";
import { clickOnSize } from "./ifClickOnSize.js";
import { clickOnSauce } from "./ifClickOnSauce.js";
import { changeIngridient } from "./ifClickOnIngridients.js";
import { changeButton } from "./changeButton.js";
import { end } from "./orderAccepted.js";

const domNodes = {
  productCart: document.querySelector(`.product__cart`),
  subtitleInformation: document.querySelector(`.right-side__subtitle`),
  sizePizzaContainer: document.querySelector(`.right-side__container`),
  ingridientContainer: document.querySelector(`.container-ingrigients__container`),
  ingridientContainer2: document.querySelector(`.container-ingrigients__container2`),
  sauceContainer: document.querySelector(`.container-sauce__container`),
  button: document.querySelector(`.button`),
  rightSide: document.querySelector(`.right-side-main`),
};

class Ingridients {
  constructor(name, price, text, part) {
    this.name = name;
    this.price = price;
    this.text = text;
    this.checked = false;
    this.id = Math.floor(Math.random() * 1000000);
    this.part = part;
  }
}

class PizzaSize {
  constructor(diametr, size, price, text, checked = false) {
    this.diametr = diametr;
    this.size = size;
    this.price = price;
    this.text = text;
    this.checked = checked;
    this.id = Math.floor(Math.random() * 1000000);
  }
}

const dataModel = {
  ingridientsOne: [
    new Ingridients(`mozzarella`, 2.4, `Моцарелла`, 1),
    new Ingridients(`pepper`, 1.8, `Перец`, 1),
    new Ingridients(`onion`, 1.8, `Лук`, 1),
    new Ingridients(`cucumber`, 1.8, `Огурчики`, 1),
    new Ingridients(`brynza`, 2.4, `Брынза`, 1),
    // new Ingridients (`pepeproni`, 2.40, `Пеперони`),
    new Ingridients(`tomato`, 1.8, `Помидоры`, 1),
    new Ingridients(`pineapple`, 1.8, `Ананасы`, 1),
    new Ingridients(`cheese`, 2.4, `Чеддер`, 1),
    new Ingridients(`jalapeno`, 1.8, `Халапеньо`, 1),
  ],
  ingridientsTwo: [
    new Ingridients(`mushrooms`, 1.8, `Грибы`, 2),
    new Ingridients(`becon`, 2.4, `Бекон`, 2),
    new Ingridients(`ham`, 2.4, `Ветчина`, 2),
    new Ingridients(`chicken`, 2.45, `Цыпленок`, 2),
    new Ingridients(`meatballs`, 2.3, `Митбол`, 2),
    new Ingridients(`chorizo`, 2.35, `Чирозо`, 2),
  ],
  sauce: [
    new Ingridients(`tomatoSauce`, 1.0, `Томатный`, 3),
    new Ingridients(`mustardSauce`, 2.0, `Горчичный`, 3),
    new Ingridients(`bbqSauce`, 1.5, `Барбекью`, 3),
    new Ingridients(`garlicSauce`, 1.0, `Чесночный`, 3),
    new Ingridients(`cezarSauce`, 1.2, `Цезарь`, 3),
    new Ingridients(`cheeseSauce`, 0.7, `Сырный`, 3),
  ],
  size: [
    new PizzaSize(25, 480, 5.0, `Маленькая`),
    new PizzaSize(30, 720, 12.0, `Средняя`, true),
    new PizzaSize(35, 980, 17.0, `Большая`),
  ],
};

createSize(domNodes, dataModel);
createSauce(domNodes, dataModel);
createIngridients(domNodes.ingridientContainer, dataModel.ingridientsOne);
createIngridients(domNodes.ingridientContainer2, dataModel.ingridientsTwo);

function checkClick(target, domNodes, dataModel) {
  if (target.closest(`.right-side__container`)) {
    clickOnSize(target, domNodes, dataModel);
  }

  if (target.closest(`.container-sauce__container`)) {
    clickOnSauce(target, domNodes, dataModel);
  }

  if (target.closest(`.container-ingrigients__container`)) {
    changeIngridient(target, domNodes, dataModel, dataModel.ingridientsOne);
  }

  if (target.closest(`.container-ingrigients__container2`)) {
    changeIngridient(target, domNodes, dataModel, dataModel.ingridientsTwo);
  }
}

let fn = ({ target }) => {
  checkClick(target, domNodes, dataModel);
  changeButton(domNodes, dataModel);
};

domNodes.rightSide.addEventListener(`click`, fn);

domNodes.button.addEventListener(`click`, () => {
  if (!domNodes.button.classList.contains(`disable`)) {
    end(domNodes, fn, dataModel);
  }
});
