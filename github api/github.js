class Github{
    constructor(){
        this.url = "https://api.github.com/users/"
        
    }

    async getgithubdata(username){
        //username url si gönderiliyor.dönen promise responsuser oluyor.
        const responsuser = await fetch(this.url +username)
        const responserepo = await fetch(this.url+username+"/repos")

        if(responsuser.ok || responserepo.ok){
            //response.json() – parse the response as JSON,
            const userdata=await responsuser.json();
            const repodata=await responserepo.json();
            return{
                user:userdata,
                repo:repodata
            }
        }
        else{
            ui.showerror("kullanıcı bulunamadı.")
        }


    }
}