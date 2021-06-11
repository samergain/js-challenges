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

