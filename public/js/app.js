import Book from './class/book.class.js';
import BookApp from './class/bookApp.class.js';
import MyAlert from './class/myAlertClass.js';
console.log('Hello from app.ts!111');
BookApp.showBooks();
const b1 = new Book('aplinkk pasauli', 'Z.Vernas', 542874, 3.99);
BookApp.addBook(b1);
const formEl = document.getElementById('book-form');
const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
const isbnEl = document.getElementById('isbn');
const priceEl = document.getElementById('price');
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!titleEl || !authorEl || !isbnEl || !priceEl)
        return console.warn('nera input elemento/u');
    if (titleEl.value.trim() === '' || authorEl.value.trim() === '' || isbnEl.value.trim() === '' || priceEl.value.trim() === '') {
        new MyAlert('All fields required', 'danger');
    }
    const newBook = new Book(titleEl.value, authorEl.value, isbnEl.valueAsNumber, priceEl.valueAsNumber);
    console.log('newBook ===', newBook);
    BookApp.addBook(newBook);
});
//# sourceMappingURL=app.js.map