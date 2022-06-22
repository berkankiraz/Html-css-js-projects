class Currency{
    constructor(firstcur,secondcur){
        this.firstcur=firstcur;
        this.secondcur=secondcur;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amount = null;
    }


    exchange(){
        return new Promise((resolve,reject)=>{
            fetch(this.url + this.firstcur)
            .then(response => response.json())
            .then(data =>{
                const parity = data.rates[this.secondcur];
                const amount2 = Number(this.amount)
                let total = parity * amount2;
                resolve(total)
        })
        .catch(err => reject(err))
        })

       
    }
    changelast(total){
        this.total=total;
    }

    
    changeamount (amount){
        this.amount = amount;
    }
    changefirstcur(newcurfirst){
        this.firstcur=newcurfirst;
    }
    changesecondcur(newcursec){
        this.secondcur=newcursec;
    }

}

