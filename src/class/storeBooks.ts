import { BookIntereface } from '../interface/inteface.js';

export default class StoreBooks {
  private static storageKey: string = 'MyBooks';

  public static getData(): BookIntereface[] {
    const gotFromLStorage = localStorage.getItem(StoreBooks.storageKey);
    if (!gotFromLStorage) return [];

    // atversti is json i []
    return JSON.parse(gotFromLStorage);
  }

  public static saveData(data: BookIntereface[]) {
    localStorage.setItem(StoreBooks.storageKey, JSON.stringify(data));
  }
}
