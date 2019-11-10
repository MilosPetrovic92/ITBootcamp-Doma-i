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
    
    else(brojac>0)
            window.alert(`Naručili ste ${brojac} pice/a.`);
            alert(logMessageTimeStamp());
            brojac=0;
            counter.innerHTML=brojac;
    
}
    
function logMessageTimeStamp(){ 
    let today = new Date();
    let d= today.getDate();
    let mo=today.getMonth()+1;
    let y=today.getUTCFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds(); 
    return [ d, mo, y ].join('.')+'.  '+[ h, m, s].join(':')
  }
  
