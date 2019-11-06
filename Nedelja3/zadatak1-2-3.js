//Zadatk 1
{
function najveiBroj(a,b,c){ //naziv funkcije + 

let niz = [5,2,10]; //niz brojeva koji će se proveravati
let najveći=0; //promenljiva koja će ispisati najveći broj

for (i=0; i<=najveći;i++){
    if (niz[i]>najveći) { //ako je broj u nizu koji se dobija uvećavanjem promenljive i veći od najvećeg broja
        najveći=niz[i]; //najveći broj je broj niza koji potiće od i
    }
}return najveći; //vraća promeljivu najveći
}console.log(najveiBroj(5,10,2));
}

//Zadatak 2
{
    function cenaPicePoCM(a,b){
        let cenaPice=600;
        let poluprecnik=15;
        let povrsina=Math.pow(poluprecnik,2)*Math.PI;
        return cenaPice/povrsina;
    }console.log(cenaPicePoCM(600,15));
}
//Druga varijanta. Obe rade, ali mislim da je ova druga funkcionalnija, jer se vrednosti mogu menjati pri samom pozivu funkcije.
//A u prvoj bismo morali u funkciji da menjamo vrednosti.
{
    function cenaPicePoCM(cenaPice,poluprecnik){
        let povrsina=Math.pow(poluprecnik,2)*Math.PI;
        return cenaPice/povrsina;
    }console.log(cenaPicePoCM(600,15));
}