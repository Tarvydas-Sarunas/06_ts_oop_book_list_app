import Book from './class/book.class.js';
import UI from './class/ui.class.js';
console.log('Hello from ts');
UI.showBooks();
const b1 = new Book('Aplink pasauli', 'Z. Vernas', 542874);
UI.addBook(b1);
console.log('b1 ===', b1);
const formEl = document.getElementById('book-form');
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const authorEl = document.getElementById('author');
    const isbnEl = document.getElementById('isbn');
    const priceEl = document.getElementById('price');
    if (!titleEl || !authorEl || !isbnEl || !priceEl)
        return console.warn('toks elementas nerastas');
    const newBook = new Book(titleEl.value, authorEl.value, +isbnEl.value);
    console.log('newBook ===', newBook);
    UI.addBook(newBook);
});
//# sourceMappingURL=app.js.map