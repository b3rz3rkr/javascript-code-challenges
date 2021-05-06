export default class AvailableBooks {
    constructor(book) {
        this.title = book.title;
        this.author = book.author;
        this.isbn = book.isbn;
        this.numCopies = book.numCopies;
    }

    getAvailability() {
        if (0 === this.numCopies) {
            return 'out of stock';
        } else if (this.numCopies < 10) {
            return 'low stock';
        } else {
            return 'in stock';
        }
    }

    sell(numSold = 1) {
        this.numCopies = this.numCopies - numSold;
    }

    restock(numCopies = 5) {
        this.numCopies = this.numCopies + numCopies;
    }
}
{
    const bookGreenMile = {
        title: 'Green Mile',
        author: 'Stephen King',
        isbn: '978-3-16-148410-0',
        numCopies: 6
    };

    const greenMileStore = new AvailableBooks(bookGreenMile);
    console.log(greenMileStore.getAvailability());
    greenMileStore.sell(2);
    greenMileStore.restock(2);
    console.log(greenMileStore.numCopies);
}