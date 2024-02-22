class UI {
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