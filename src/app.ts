import Book from './class/book.class.js';
import UI from './class/ui.class.js';
// import { BookIntereface } from './interface/inteface.js';

console.log('Hello from ts');

// const h1 = createHtmlEL<HTMLHeadingElement>(
//   'h1',
//   { class: 'title', href: '/' },
//   'Hello world'
// );

// document.body.prepend(h1);

UI.showBooks();

const b1 = new Book('Aplink pasauli', 'Z. Vernas', 542874);

// UI.createAndAppendOneRow(b1);
// UI.createAndAppendOneRow(b1);
// UI.createAndAppendOneRow(b1);
UI.addBook(b1);
console.log('b1 ===', b1);

// nusitaikom i forma
const formEl = document.getElementById('book-form') as HTMLTableSectionElement | null;
// dedam event listineri
formEl?.addEventListener('submit', (event: SubmitEvent): void => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement | null;
  const authorEl = document.getElementById('author') as HTMLInputElement | null;
  const isbnEl = document.getElementById('isbn') as HTMLInputElement | null;
  const priceEl = document.getElementById('price') as HTMLInputElement | null;

  // paimame reiksmes
  if (!titleEl || !authorEl || !isbnEl || !priceEl) return console.warn('toks elementas nerastas');
  const newBook = new Book(titleEl.value, authorEl.value, +isbnEl.value);
  console.log('newBook ===', newBook);

  // Todo.validation

  // sukuriame nauja knyga
  UI.addBook(newBook);
  // issivalome inputus
});
