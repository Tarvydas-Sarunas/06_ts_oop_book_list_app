class StoreBooks {
    static getData() {
        const gotFromStorage = localStorage.getItem(StoreBooks.storageKey);
        if (!gotFromStorage)
            return [];
        return JSON.parse(gotFromStorage);
    }
    static saveData(data) {
        localStorage.setItem(StoreBooks.storageKey, JSON.stringify(data));
    }
}
StoreBooks.storageKey = 'MyBooks';
export default StoreBooks;
//# sourceMappingURL=storeBooks.js.map