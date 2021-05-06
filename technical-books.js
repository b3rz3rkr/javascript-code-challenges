import AvailableBooks from './available-books.js';

class TechnicalBooks extends AvailableBooks {
    constructor(book) {
        super(book);
        this.edition = book.edition;
    }

    getEdition() {
        return `The current version of this book is ${this.edition}`;
    }
}

{
    const deadCow = {
        title: 'Cult of the Dead Cow: How the Original Hacking Supergroup Might Just Save the World',
        author: 'Joseph Menn',
        isbn: '978-1-54-176238-1',
        numCopies: 34,
        edition: 'June 4, 2019'
    };

    const deadCowStore = new TechnicalBooks(deadCow);
    console.log(deadCowStore);
    console.log(deadCowStore.getEdition());
    console.log(deadCowStore.getAvailability());
}