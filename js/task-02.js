const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredient = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const list = document.createElement("li");
  list.textContent = ingredients[i];
  list.setAttribute("class", "item");
  ingredient.append(list);
}
