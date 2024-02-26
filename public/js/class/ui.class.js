import createHtmlEL from '../helper/createEl.js';
import BookApp from './bookApp.class.js';
export default class UI {
    static render(booksArr) {
        UI.clearContainer();
        booksArr.forEach((bookObj) => UI.createAndAppendOneRow(bookObj));
    }
    static clearContainer() {
        const tabelBodyEl = document.getElementById('book-list');
        if (tabelBodyEl === null)
            return console.warn('nerastas tabelBodyEl ');
        tabelBodyEl.innerHTML = '';
    }
    static createAndAppendOneRow(book) {
        const tabelBodyEl = document.getElementById('book-list');
        const trEl = document.createElement('tr');
        const col1 = createHtmlEL('td', {}, book.title);
        const col2 = createHtmlEL('td', {}, book.author);
        const col3 = createHtmlEL('td', {}, book.isbn.toString());
        const col4 = createHtmlEL('td', {}, book.price ? book.price.toString() : '0');
        const col5 = createHtmlEL('td', {});
        const delBtn = createHtmlEL('button', { class: 'btn btn-danger btn-sm' }, 'X');
        delBtn.addEventListener('click', () => BookApp.deleteBook(book));
        col5.appendChild(delBtn);
        trEl.append(col1, col2, col3, col4, col5);
        if (tabelBodyEl === null)
            return console.warn('nerastas tabelBodyEl ');
        tabelBodyEl.append(trEl);
    }
}
//# sourceMappingURL=ui.class.js.map