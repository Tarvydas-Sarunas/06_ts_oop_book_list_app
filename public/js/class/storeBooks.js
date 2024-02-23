class StoreBooks {
    static getData() {
        const gotFromLStorage = localStorage.getItem(StoreBooks.storageKey);
        if (!gotFromLStorage)
            return [];
        return JSON.parse(gotFromLStorage);
    }
    static saveData(data) {
        localStorage.setItem(StoreBooks.storageKey, JSON.stringify(data));
    }
}
StoreBooks.storageKey = 'MyBooks';
export default StoreBooks;
//# sourceMappingURL=storeBooks.js.map