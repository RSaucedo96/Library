library = [{ title: "Spyro", genre: "Plataformer", plataform: "PS1", state: "on" }];

function Book(title,genre,plataform,state) {
    this.title = title;
    this.genre = genre;
    this.plataform = plataform;
    this.state = state;
    this.info=function () {
        return `Title:${this.title}\nAuthor:${this.plataform}\nNumber of pages:${this.genre}\nState:${this.state}`       
    };
}

function addGameToLibrary(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  library.push(formProps);
  console.log(library);
}

function openForm() {
    document.getElementById("addGame-form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("addGame-form").style.display = "none";
  } 

const addGameForm = document.getElementById("addGame-form"); 
addGameForm.addEventListener("submit", addGameToLibrary);
