import { BookIntereface } from '../interface/inteface.js';

export default class UI {
  private static booksArr: BookIntereface[] = [
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

  public static addBook(book: BookIntereface): void {
    UI.booksArr.push(book);
    console.table(UI.booksArr);
  }

  public static deleteBook(book: BookIntereface): void {}
}
