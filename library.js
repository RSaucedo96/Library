library = [["The Hobbit", "Tolkien", "168" ,"finished"]];

function Book(title,genre,plataform,state) {
    this.title = title;
    this.genre = genre;
    this.plataform = plataform;
    this.state = state;
    this.info=function () {
        return `Title:${this.title}\nAuthor:${this.plataform}\nNumber of pages:${this.genre}\nState:${this.state}`       
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