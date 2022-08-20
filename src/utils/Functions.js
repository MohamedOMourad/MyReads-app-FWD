export const selectShelf = (books, shelfName, setShelfBooks) => {
    switch (shelfName) {
        case 'Currently Reading':
            return books?.filter((book) => book?.shelf === 'currentlyReading')
        case 'Want To Read':
            return books?.filter((book) => book?.shelf === 'wantToRead')
        case 'Read':
            return books?.filter((book) => book?.shelf === 'read')
        default:
            return books
    }
}