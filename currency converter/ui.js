class UI{
    constructor(firstselectelement,secondselectelement){

        this.firstselectelement=firstselectelement;
        this.secondselectelement=secondselectelement;
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }
    changeFirst(){
        this.outputFirst.textContent=this.firstselectelement.options[this.firstselectelement.selectedIndex].textContent;
    }
    changeSecond(){
        this.outputSecond.textContent=this.secondselectelement.options[this.secondselectelement.selectedIndex].textContent;
    }
    changeresult(result){
        this.outputResult.value=result;
        console.log(result);
    }
}