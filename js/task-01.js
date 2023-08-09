const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}

`);

const categoryName = document.querySelectorAll(".item h2");
const elements = document.querySelectorAll(".item ul");

for (let i = 0; i < categoryName.length; i++) {
  console.log(`Category: ${categoryName[i].textContent}`);
  console.log(
    `Elements: ${categoryName[i].nextElementSibling.children.length}
    `
  );
}
