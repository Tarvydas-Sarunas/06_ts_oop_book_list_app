import createHtmlEL from '../helper/createEl.js';
class UI {
    static showBooks() {
        UI.render();
    }
    static render() {
        UI.booksArr.forEach((bObj) => UI.createAndAppendOneRow(bObj));
    }
    static createAndAppendOneRow(book) {
        const tableBodyEl = document.getElementById('book-list');
        const trEl = document.createElement('tr');
        const col1 = createHtmlEL('td', {}, book.title);
        const col2 = createHtmlEL('td', {}, book.author);
        const col3 = createHtmlEL('td', {}, book.isbn.toString());
        const col4 = createHtmlEL('td', {});
        const delBtn = createHtmlEL('button', { class: 'btn btn-danger btn-sm' }, 'X');
        col4.append(delBtn);
        trEl.append(col1, col2, col3, col4);
        if (tableBodyEl === null)
            return console.warn('nerastas elementas');
        tableBodyEl.append(trEl);
    }
    static addBook(book) {
        UI.booksArr.push(book);
        console.table(UI.booksArr);
    }
    static deleteBook(book) { }
}
UI.booksArr = [
    {
        title: 'Book One',
        author: 'John Doe',
        isbn: 3434434,
    },
    {
        title: 'Book Two',
        author: 'Jane Doe',
        isbn: 111111,
    },
    {
        title: 'Book Two',
        author: 'Serbentautas Doe',
        isbn: 222222,
    },
];
export default UI;
//# sourceMappingURL=ui.class.js.map