const liItem = document.querySelectorAll('.item');

console.log(`Number of categories:`, liItem.length);
for (const item of liItem) {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.childElementCount);
}

