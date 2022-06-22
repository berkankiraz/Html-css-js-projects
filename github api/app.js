// elementleri seçme :
const githubinput = document.getElementById("githubname")
const githubform = document.getElementById("github-form")
const clearlast = document.getElementById("clear-last-users")
const lastusers = document.getElementById("last-users")
//OBJELERİ OLUŞTURMA :
const github = new Github();
const ui=new UI();

eventlistener();

function eventlistener(){
    githubform.addEventListener("submit",getdata)
    clearlast.addEventListener("click",clearallsearched)
    document.addEventListener("DOMContentLoaded",getallsearched)

}

function getdata(e){
    let username=githubinput.value.trim();
    if(username===""){
        alert("geçerli bir kullanıcı adı yazın.")
    }
    else{
        github.getgithubdata(username)
        .then(response => {
            if(response.user.message==="Not Found" ){
                ui.showerror("Kullanıcı bulunamadı.")
            }
            else{
                ui.showUserInfo(response.user);
                ui.showrepoinfo(response.repo);

            }
        })

    }
    ui.clearInput();
    e.preventDefault();

}










function clearallsearched(){
    //tüm aramalrı temizle

}
function getallsearched(){
    //arannaları storagedan al
    
}