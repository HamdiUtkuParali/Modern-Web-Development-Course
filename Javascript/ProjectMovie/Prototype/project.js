const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

const ui = new UI();

const storage = new Storage();

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title==="" || director==="" || url===""){
        ui.displayMessages("Tüm alanları doldurun","danger");
    }
    else{
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film eklendi","success");
    }

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        const filmName = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        storage.deleteFilmFromStorage(filmName);
        ui.displayMessages("Silme işlemi başarılı","info");
    }
}

function clearAllFilms(){
    if(confirm("Emin misiniz?"))
    {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessages("Tüm Filmler Temizlendi","info");
    }
}