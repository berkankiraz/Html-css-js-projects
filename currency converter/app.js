//elementleri seçme

const amountelement = document.getElementById("amount")
const firstselectelement = document.getElementById("firstCurrency")
const secondselectelement = document.getElementById("secondCurrency")

const ui = new UI(firstselectelement,secondselectelement);
const currency = new Currency("USD","TRY");

eventlistener();

function eventlistener(){
    amountelement.addEventListener("input",exchangecurrency);
    firstselectelement.onchange = function(){
        
        currency.changefirstcur(firstselectelement.options[firstselectelement.selectedIndex].textContent);
        exchangecurrency();
        ui.changeFirst();
    };
    secondselectelement.onchange = function(){
       
        currency.changesecondcur(secondselectelement.options[secondselectelement.selectedIndex].textContent);
        exchangecurrency();
        ui.changeSecond();
    };

}
function exchangecurrency(){
    currency.changeamount(amountelement.value)
    currency.exchange()
    .then(result => {
        ui.changeresult(result)
    })
    .then(err => console.log(err))
}