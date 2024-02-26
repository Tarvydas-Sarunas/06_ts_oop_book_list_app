import { BookInterface } from '../interface/inteface.js';
import MyAlert from './myAlertClass.js';
import StoreBooks from './storeBooks.js';

import UI from './ui.class.js';

export default class BookApp {
  private static booksArr: BookInterface[] = StoreBooks.getData();

  public static showBooks() {
    UI.render(BookApp.booksArr);
    new MyAlert('Books loaded', 'success');
  }

  public static resetBooks() {
    // atstatyti knygas i pradini masyva
    // nusitaikyti i btn reset jam duoti add event listineri
    // const resetBtn = document.getElementById('reset') as HTMLButtonElement | null;
    // if (resetBtn === null) return console.warn('nerastas tabelBodyEl ');
    // // kuri paspaudus iskvies rendder
    // resetBtn.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   UI.render();
    // });
  }

  public static addBook(book: BookInterface): void {
    // patikrinti ar jau yra tokia knyga
    const yraTokiaKnyga = BookApp.booksArr.some((bObj) => bObj.isbn === book.isbn);
    if (yraTokiaKnyga) {
      // jei yra paalertinti klaida
      new MyAlert(`"${book.title}" jau yra irasyta`, 'warning');
      return;
    }
    // jei nera prideti knyga
    BookApp.booksArr.push(book);
    console.table(BookApp.booksArr);
    UI.render(BookApp.booksArr);
    new MyAlert('Book added', 'success');
    StoreBooks.saveData(BookApp.booksArr);
  }

  public static deleteBook(book: BookInterface): void {
    console.log('book delete ===', book);
    const isbnToDelete = book.isbn;
    // 1 istrinti is knygu masyvo knyga kuris sutampa su book (isbn)
    BookApp.booksArr = BookApp.booksArr.filter((bObj) => bObj.isbn !== isbnToDelete);
    // 2 sugeneruoti sarasa is naujo
    UI.render(BookApp.booksArr);
    // 3 iskviesti alerta kad knyga istrinta
    // atspaustini knygos title kuri istrinta
    new MyAlert(`"${book.title}" was Deleted`, 'danger');
    StoreBooks.saveData(BookApp.booksArr);
  }
}
