import Book from './class/book.class.js';
import createHtmlEL from './helper/createEl.js';

console.log('Hello from ts');

// const h1 = createHtmlEL<HTMLHeadingElement>(
//   'h1',
//   { class: 'title', href: '/' },
//   'Hello world'
// );

// document.body.prepend(h1);

const b1 = new Book('Aplink pasauli', 'Z. Varnas', 542874);
console.log('b1 ===', b1);
