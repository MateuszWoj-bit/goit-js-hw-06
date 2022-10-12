const liItem = document.querySelectorAll('.item');
console.log(`Number of categories:`, liItem.length);

const firstLiItemTitle = document.querySelector('.item h2');
console.log(`Category:`, firstLiItemTitle.textContent);
const firstLiItemUlist = document.querySelector('.item ul');
console.log(`Elements:`, firstLiItemUlist.childElementCount);
const secondLiItemTitle = document.querySelector('.item:nth-child(2) h2');
console.log(`Category:`, secondLiItemTitle.textContent);
const secondLiItemUlist = document.querySelector('.item:nth-child(2) ul');
console.log(`Elements:`, secondLiItemUlist.childElementCount);
const thirdLiItemTitle = document.querySelector('.item:nth-child(3) h2');
console.log(`Category:`, thirdLiItemTitle.textContent);
const thirdLiItemUlist = document.querySelector('.item:nth-child(3) ul');
console.log(`Elements:`, thirdLiItemUlist.childElementCount);
