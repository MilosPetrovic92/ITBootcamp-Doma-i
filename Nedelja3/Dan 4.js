const orderBtnClassName='btn-order';
let orderButtons=document.getElementsByClassName(orderBtnClassName);
console.log(orderButtons);
for(let button of orderButtons){
    console.log(button);
}
const counter=document.getElementById('counter');
var brojac=0;
for(let button of orderButtons){
    button.addEventListener('click', function(){
        izaberi(button);
    });
}
function izaberi(element){
    console.log(element);
    brojac++;
    counter.innerHTML=brojac;
}
const orderNowClassName='btn-order-now';
let orderNow=document.getElementsByClassName(orderNowClassName);
console.log(orderNow);
for(let dugme of orderNow){
    dugme.addEventListener('click', function(){
        naručiOdmah(brojac);
    });
}
function naručiOdmah(brojac){
    console.log(brojac);
    if(brojac<=0)
        window.alert('GREŠKA!');
    else
        window.alert(`Naručili ste ${brojac} pice/a.`);
    }
    function logMessageTimeStamp(message){ //prva funkcija je glavna
        let now=new Date();
        console.log(`${getTimeFormat(now)} ${message}`);
    }
    function getTimeFormat(time){
        return `[${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}]`; //druga funkcija se učitava u prvu 
    }
logMessageTimeStamp(brojac);