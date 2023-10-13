const allListItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allListItems.length}`);

allListItems.forEach((item) => {
  const itemTitle = item.querySelector("h2");
  const itemElements = item.querySelectorAll("li");
  console.log(`
  Category: ${itemTitle.textContent}
  Elements: ${itemElements.length}
  `);
});
