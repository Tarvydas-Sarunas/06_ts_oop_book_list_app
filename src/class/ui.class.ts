import createHtmlEL from '../helper/createEl.js';
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
  public static showBooks() {
    UI.render();
  }

  private static render(): void {
    // sukti cikla per visas knygas ir surasyti jas i html
    UI.booksArr.forEach((bObj) => UI.createAndAppendOneRow(bObj));
  }

  private static createAndAppendOneRow(book: BookIntereface): void {
    const tableBodyEl = document.getElementById(
      'book-list'
    ) as HTMLTableSectionElement | null;
    const trEl = document.createElement('tr');
    const col1 = createHtmlEL<HTMLTableCellElement>('td', {}, book.title);
    const col2 = createHtmlEL<HTMLTableCellElement>('td', {}, book.author);
    const col3 = createHtmlEL<HTMLTableCellElement>(
      'td',
      {},
      book.isbn.toString()
    );
    const col4 = createHtmlEL<HTMLTableCellElement>('td', {});
    const delBtn = createHtmlEL<HTMLButtonElement>(
      'button',
      { class: 'btn btn-danger btn-sm' },
      'X'
    );
    col4.append(delBtn);
    trEl.append(col1, col2, col3, col4);
    if (tableBodyEl === null) return console.warn('nerastas elementas');
    tableBodyEl.append(trEl);
  }

  public static addBook(book: BookIntereface): void {
    UI.booksArr.push(book);
    console.table(UI.booksArr);
  }

  public static deleteBook(book: BookIntereface): void {}
}