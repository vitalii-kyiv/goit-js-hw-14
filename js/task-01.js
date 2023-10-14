const allListItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allListItems.length}`);

allListItems.forEach((item) => {
  const itemTitle = item.firstElementChild;
  const itemElements = itemTitle.nextElementSibling.children;
  console.log(`
  Category: ${itemTitle.textContent}
  Elements: ${itemElements.length}
  `);
});
