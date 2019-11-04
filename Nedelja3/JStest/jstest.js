//Zadatak 1 alternativni

{   let s = 0;
    let zbir = 0;
    let dz = 1;
    let n = 4;
    let k=5;
    for (let counter = 1; counter <= n; counter++) {
        dz=k+ counter;
        zbir += counter;
        s += zbir / dz;
    }
    console.log(`Suma iznosi ${s.toFixed(2)}.`);
}//10



//Zadatak 2
{
let n=70;
let suma=0;
let prosek=0;
for(m=1;m<=n;m++){
    if(m%7==0){
        suma+=m;
    prosek=suma/n;
    }
}console.log(`Suma bojeva deljivih sa 7 od M do N, uključujući M i N je ${suma}.`)
console.log(`Prosek ovih brojeva je ${prosek}.`);
}//15

//Zadatak 3
{
    let n=4;
    
    
    
}

//Zadatak 4

{
    {
        let mesec=4;
        let pres=false;
        switch(mesec){
        case 0: danUMesecu='31';
        break;
        case 1: danUMesecu='28';
        break;
        case 2: danUMesecu='31';
        break;
        case 3: danUMesecu='30';
        break;
        case 4: danUMesecu='31';
        break;
        case 5: danUMesecu='30';
        break;
        case 6: danUMesecu='31';
        break;
        case 7: danUMesecu='31';
        break;
        case 8: danUMesecu='30';
        break;
        case 9: danUMesecu='31';
        break;
        case 10: danUMesecu='30';
        break;
        case 11: danUMesecu='31';
        break;
        default: console.error(`${mesec}`);
            danUNedelji='ERROR';
            break;
            }console.log(danUMesecu,' ',pres);
    }  
}//15

