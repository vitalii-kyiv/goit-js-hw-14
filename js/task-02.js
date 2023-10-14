const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemContents = [];
const list = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const itemContent = document.createElement("li");
  itemContent.textContent = item;
  itemContent.classList.add("item");
  itemContents.push(itemContent);
});
list.append(...itemContents);
