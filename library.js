library = [{ title: "Spyro", genre: "Plataformer", plataform: "PS1", state: true }];

const gameLibrary = document.getElementById("gameLibrary")
const gameForm = document.getElementById("game-form"); 
gameForm.addEventListener("submit", addGameToLibrary);
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
  const title = document.querySelector('#title').value;
  const genre = document.querySelector('#genre').value;
  const plataform = document.querySelector('#plataform').value;
  const state = document.querySelector('#state').checked;
  
  const game  = new Game(title,genre,plataform,state);
  
  library.push(game);
  clearFields()
  displayLibrary();
}

function displayLibrary(){
  document.getElementById("gameLibrary").innerHTML = "";
  for (let index = 0; index < library.length; index++) {
    const newCard = document.createElement("div");
    const newCardTitle = document.createElement("p");
    const newCardData = document.createElement("p");
    var newCardState = document.createElement("input");
    const newlabel = document.createElement("label");
    const deleteCard = document.createElement("button");
    
    deleteCard.addEventListener('click', function handleClick(event) {
      event.target.parentElement.remove();
      library = library.filter(element => element !== library[event.target.parentElement.id]);
    });

    newCardState.addEventListener('click', function handleClick(event) {
      if (library[event.target.parentElement.id].state) {
        library[event.target.parentElement.id].state.checked = false;
      }
      else {
        library[event.target.parentElement.id].state.checked = true;
      }
    });
    
    deleteCard.innerHTML = "Delete Game";
  
    newCard.classList.add("card");
    newCard.setAttribute('id',`${index}`);
    
    newCardTitle.classList.add("title");
    newCardData.classList.add("data");
    
    newCardState.type = 'checkbox';
    newlabel.setAttribute("for",`${index}`);
    newlabel.innerHTML = "Finished:";
    
    
    newCardTitle.append(`${library[index].title}`);
    newCardData.append(`Plataform:${library[index].plataform} \nGenre:${library[index].genre}`);
    
    if (library[index].state) {
      newCardState.checked = true;
    }
    else {
      newCardState.checked = false;
    }

    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardData);
    newCard.appendChild(newlabel);
    newCard.appendChild(newCardState);
    newCard.appendChild(deleteCard);
    gameLibrary.appendChild(newCard);
  }
}

function clearFields() {
  document.querySelector('#title').value='';
  document.querySelector('#genre').value='';
  document.querySelector('#plataform').value='';
}

function openForm() {
    document.getElementById("game-form").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("game-form").style.display = "none";
  } 


