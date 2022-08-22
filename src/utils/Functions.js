export const selectShelf = (allBooks, shelfName) => {
    switch (shelfName) {
        case 'Currently Reading':
            return allBooks?.filter((book) => book?.shelf === 'currentlyReading')
        case 'Want To Read':
            return allBooks?.filter((book) => book?.shelf === 'wantToRead')
        case 'Read':
            return allBooks?.filter((book) => book?.shelf === 'read')
        default:
            return allBooks
    }
}