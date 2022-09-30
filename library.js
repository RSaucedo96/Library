library = [["The Hobbit", "Tolkien", "168" ,"finished"]];

function Book(title,author,numberPages,state) {
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.state = state;
    this.info=function () {
        return `Title:${this.title}\nAuthor:${this.author}\nNumber of pages:${this.numberPages}\nState:${this.state}`       
    };
}

function addBookToLibrary() {
    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 
  
const theHobbit = new Book("The Hobbit", "Tolkien", "168" ,"finished");

console.log(theHobbit.info());