const form = document.querySelector("#film-form")
const titlelement = document.querySelector("#title")
const directorelement = document.querySelector("#director")
const urlelement = document.querySelector("#url")
const cardbody = document.querySelector(".card-body")

//run UI object

const ui = new UI();


//LOAD ALL EVENTS
eventlisteners();

function eventlisteners(){
    form.addEventListener("submit",addFilm);
}

function addFilm(e){
    console.log("patama")
    const title = titlelement.value;
    const director = directorelement.value;
    const url = urlelement.value;
    if(title ==="" || director ==="" || url ===""){
        ui.displayMessage("herhangi bir şey girmediniz.","info");

    }
    else{
        const newFilm =new Film(title,director,url);
        ui.addFilmtoUI(newFilm);
        ui.displayMessage("Kaydedildi.","success");

    }
    ui.clearInputs(titlelement,directorelement,urlelement);

    e.preventDefault();
  

}