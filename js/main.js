/* import $ from './jQuery_3_4_1' */


let btnAddNote = document.querySelector('#addNewContent');
let inputNewNote = document.querySelector('#newContent')
let listNote = document.querySelector('.content')

btnAddNote.addEventListener('click', function() {
    addNote(inputNewNote.value);
});

function addNote(contentNote) {
    let newNote = document.createElement('li');
    newNote.textContent = contentNote;
    listNote.appendChild(newNote);
    inputNewNote.value = "";

    /* let btnRemoveNote = document.createElement('button');
    btnRemoveNote.setAttribute("id", "btnRemove");
    btnRemoveNote.textContent = 'Elimina'; */
    /* newNote.appendChild(btnRemoveNote); */
    /* btnRemoveNote.addEventListener('click', function(){
        this.parentNode.remove();
    })  */
};

function AppNote(content) {
    let btnAddNote = document.querySelector('#addNewContent');

    this.content = content
    this.addNote = function (content) {
        document.addEventListener('click', function () {
            //ricevo il testo e lo aggiungo qui
        })
    }
}

/* Defining class using es6 
class Vehicle { 
    constructor(name, maker, engine) { 
      this.name = name; 
      this.maker =  maker; 
      this.engine = engine; 
    } 
    getDetails(){ 
        return (`The name of the bike is ${this.name}.`) 
    } 
  } 
  // Making object with the help of the constructor 
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc'); 
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc'); 

  console.log(bike1.name);    // Hayabusa 
  console.log(bike2.maker);   // Kawasaki 
  console.log(bike1.getDetails()); 
  */