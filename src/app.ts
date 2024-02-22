import Book from './class/book.class.js';
import UI from './class/ui.class.js';

console.log('Hello from ts');

// const h1 = createHtmlEL<HTMLHeadingElement>(
//   'h1',
//   { class: 'title', href: '/' },
//   'Hello world'
// );

// document.body.prepend(h1);

const b1 = new Book('Aplink pasauli', 'Z. Vernas', 542874);

UI.addBook(b1);
console.log('b1 ===', b1);
