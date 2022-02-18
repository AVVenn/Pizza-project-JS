class Ingridients {
	constructor(name, price, text) {
		this.name = name;
		this.price = price;
		this.text = text;
		this.checked = false;
		this.id = Math.floor(Math.random()*10000);
	}
}

let mushrooms = new Ingridients(`mushrooms`, 1.80, `Грибы`);
let becon = new Ingridients(`becon`, 2.40, `Бекон`);
let ham = new Ingridients(`ham`, 2.40, `Ветчина`);
let mozzarella = new Ingridients(`mozzarella`, 2.40, `Моцарелла`);
let pepper = new Ingridients(`pepper`, 1.80, `Перец`);
let onion = new Ingridients(`onion`, 1.80, `Лук`);
let cucumber= new Ingridients(`cucumber`, 1.80, `cucumber`);
let brynza = new Ingridients(`brynza`, 2.40, `Брынза`);
let peperoni = new Ingridients (`pepeproni`, 2.40, `Пеперони`);
let tomato = new Ingridients(`tomato`, 1.80, `Помидоры`);
let chicken = new Ingridients(`chicken`, 2.40, `Цыпленок`);
let pineapple = new Ingridients(`pineapple`, 1.80, `Ананасы`);
let cheese = new Ingridients(`cheese`, 2.40, `Чеддер`);
let jalapeno = new Ingridients(`jalapeno`, 1.80, `Халапеньо`);
let meatballs = new Ingridients(`meatballs`,2.40, `Митбол`);
let chorizo = new Ingridients(`chorizo`, 2.40, `Чирозо`);
// ______________________________________________________________________________________________
let tomatoSauce = new Ingridients(`tomatoSauce `, 3.00, `Томатный` );
let mustardSauce = new Ingridients (`mustardSauce`, 4.00, `Горчичный`);
let bbqSauce = new Ingridients(`bbqSauce`, 3.50, `Барбекью`);
let garlicSauce = new Ingridients(`garlicSauce`, 1.00, `Чесночный`);
let cezarSauce = new Ingridients (`cezarSauce`, 1.20, `Цезарь`);
let cheeseSauce = new Ingridients (`cazerSauce`, 0.70, `Сырный`);
// ______________________________________________________________________________________________

let data = [];
const ingridientContainer = document.querySelector(`.container-ingridients`);





// let newIngridiet = document.createElement('div');
// newIngridiet.classList.add(`name ingridiet`);
// newIngridiet.style.background =  `url('images/${$}.$) center / cover no-repeat`;

