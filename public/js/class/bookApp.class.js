import MyAlert from './myAlertClass.js';
import StoreBooks from './storeBooks.js';
import UI from './ui.class.js';
class BookApp {
    static showBooks() {
        UI.render(BookApp.booksArr);
        new MyAlert('Books loaded', 'success');
    }
    static resetBooks() {
    }
    static addBook(book) {
        const yraTokiaKnyga = BookApp.booksArr.some((bObj) => bObj.isbn === book.isbn);
        if (yraTokiaKnyga) {
            new MyAlert(`"${book.title}" jau yra irasyta`, 'warning');
            return;
        }
        BookApp.booksArr.push(book);
        console.table(BookApp.booksArr);
        UI.render(BookApp.booksArr);
        new MyAlert('Book added', 'success');
        StoreBooks.saveData(BookApp.booksArr);
    }
    static deleteBook(book) {
        console.log('book delete ===', book);
        const isbnToDelete = book.isbn;
        BookApp.booksArr = BookApp.booksArr.filter((bObj) => bObj.isbn !== isbnToDelete);
        UI.render(BookApp.booksArr);
        new MyAlert(`"${book.title}" was Deleted`, 'danger');
        StoreBooks.saveData(BookApp.booksArr);
    }
}
BookApp.booksArr = StoreBooks.getData();
export default BookApp;
//# sourceMappingURL=bookApp.class.js.map