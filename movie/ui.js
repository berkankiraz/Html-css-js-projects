function UI(){

}

UI.prototype.addFilmtoUI = function(newFilm){
    console.log(newFilm)
    const filmlist = document.querySelector("#films");
    filmlist.innerHTML +=`
<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`;
    
}

UI.prototype.clearInputs = function(input1,input2,input3){

    input1.value="";
    input2.value="";
    input3.value="";

}

UI.prototype.displayMessage = function(message,type){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.style.marginBottom  = 0;
    alert.style.marginTop = 0;

    cardbody.appendChild(alert);
    setTimeout(function(){
        alert.remove();   
    },1000)

}