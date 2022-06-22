class UI{
    constructor(){
        this.profilediv = document.getElementById("profile")
        this.repodiv = document.getElementById("repos")
        this.lastusers = document.getElementById("last-users")
        this.inputfield = document.getElementById("githubname")
        this.cardbody = document.querySelector(".card-body")
    }
    clearInput(){
        this.inputfield.value = "";

    }
    showUserInfo(user){
        this.profilediv.innerHTML = `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> 
                        </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong>
                         </div>
                         <hr>


                         <div id="bio">${user.bio}</div>

                        </div>
                      <div class="col-md-8">
                         
                         <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        `

    }



    showrepoinfo(repo){

        repo.forEach(repo => {
            this.repodiv.innerHTML +=`
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>
            
            `
            
        });
    }



    showerror(message){
        const alertdiv = document.createElement("div");
        alertdiv.className = "alert alert-danger"
        alertdiv.textContent = message;
        this.cardbody.appendChild(alertdiv);

        setTimeout(function(){
            alertdiv.remove();

        },2500)




    }


}