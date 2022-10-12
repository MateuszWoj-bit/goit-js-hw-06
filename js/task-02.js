const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
for (const item of ingredients) {
  const ingridient = document.createElement('li');
  ingridient.textContent = item;
  ingridient.classList.add(`item`);
  list.append(ingridient);
}
