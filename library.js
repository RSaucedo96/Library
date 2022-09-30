function Book(title,author,numberPages,state) {
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.state = state;
    this.info=function () {
        return `Title:${this.title}\nAuthor:${this.author}\nNumber of pages:${this.numberPages}\nState:${this.state}`       
    };
}

const theHobbit = new Book("The Hobbit", "Tolkien", "168" ,"finished");

console.log(theHobbit.info());