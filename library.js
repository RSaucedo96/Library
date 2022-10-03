library = [{ title: "Spyro", genre: "Plataformer", plataform: "PS1", state: "on" }];

const gameLibrary = document.getElementById("gameLibrary")
const addGameForm = document.getElementById("addGame-form"); 
addGameForm.addEventListener("submit", addGameToLibrary);
displayLibrary();

function Game(title,genre,plataform,state) {
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
  displayLibrary()
  console.log(library);
}

function displayLibrary(){
  document.getElementById("gameLibrary").innerHTML = "";
  for (let index = 0; index < library.length; index++) {
    const newCard = document.createElement("div");
    const newCardTitle = document.createElement("p");
    const newCardData = document.createElement("p");
    const deleteCard = document.createElement("button")
    
    deleteCard.addEventListener('click', function handleClick(event) {
      event.target.parentElement.remove();
    });
    
    deleteCard.innerHTML = "Delete Game";
  
    newCard.classList.add("card");
    newCard.setAttribute('id',`card-${index}`);
    
    newCardTitle.classList.add("title");
    newCardData.classList.add("data");
    
    newCardTitle.append(`${library[index].title}`);
    newCardData.append(`Plataform:${library[index].plataform}\nGenre:${library[index].genre}\nState:${library[index].state}`);
   
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardData);
    newCard.appendChild(deleteCard);
    gameLibrary.appendChild(newCard);
  }
}



function openForm() {
    document.getElementById("addGame-form").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("addGame-form").style.display = "none";
  } 


