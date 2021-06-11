class Book {
    constructor(title,author,isbn,numCopies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }
    get availability() {
        return this.getAvailability();
    }
    
    getAvailability(){
        if(this.numCopies == 0){
            return "Out of Stock";
        } else if(this.numCopies <= 10){
            return "Limited Availability";
        } else return "In Stock"
    }
    sell(numSold = 1){
        this.numCopies -= numSold;
    }
    restock(numAdded = 5){
       this.numCopies += numAdded;
    }

}

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition){
        super(title, author, isbn, numCopies);
        this.edition = edition
    }

    getEdition(){
        return `The current version of this book is ${this.edition}`
    }
}

const book11 = new TechnicalBook(
    'Cracking the Coding Interview',
    'MCDOWELL',
    '123456',
    6,
    '3rd'
);

console.log(book11.availability);
console.log(book11.getEdition());


