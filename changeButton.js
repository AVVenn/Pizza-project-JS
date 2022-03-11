export function changeButton(domNodes, dataModel) {
  const func = (item) => item.checked;

  const arrayForButton = [
    dataModel.size.some(func),
    dataModel.sauce.some(func),
    dataModel.ingridientsOne.some(func),
    dataModel.ingridientsTwo.some(func),
  ].every((item) => item);

  if (!arrayForButton) {
    domNodes.button.classList.add(`disable`);
  } else {
    domNodes.button.classList.remove(`disable`);
  }
}
