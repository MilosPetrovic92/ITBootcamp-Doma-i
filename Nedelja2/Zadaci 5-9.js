{
    let cenaPice=600;
    let precnik=30;
    let polurecnik=precnik/2;
    var povrsina=Math.pow(polurecnik,2)*Math.PI;
    console.log(`Površina pice je ${povrsina.toFixed(2)} cm².`);
    let cenaZacm=cenaPice/povrsina;
    console.log(`Cena pice po cm² je ${cenaZacm.toFixed(2)} dinara.`)
  }
{
    let brojevi='';
    for(a=1;a<=100;a++){
        if(a%3==0 && a%5==0){
            brojevi+='FizzBuzz, ';    
        }
        else if(a%3==0){
            brojevi+='Fizz, ';
}
    else if (a%5==0){
        brojevi+='Buzz, ';
}else {
    brojevi+=a+', '; 
}
}console.log(brojevi);
}

{
    let n=5;
    for(let a=1;a<=n;a++){
        let b='';
        for(let c=1;c<=n;c++){
            b+=' ';
        }
        for (let c=1;c<=a;c++){
            b+='#';
        }
        console.log(b);
    }
}

{
     let n=5;
     for(let a=1;a<=n;a++){
        let b='';
           for(let c=1;c<=n-a;c++){
              b+=' ';
          }
         for (let c=1;c<=a;c++){
             b+='#';
         }
         console.log(b);
     }
}
//Prvi način
{
    let n=5;
    let donjiDeo='#'.repeat(n)+' '+'#'.repeat(n);
    let srednjiDeo1=' '+'#'.repeat(n-1) +' '+'#'.repeat(n-1)+ ' ';
    let srednjiDeo2='  '+'#'.repeat(n-2) +' '+'#'.repeat(n-2)+ '  ';
    let srednjiDeo3='   '+'#'.repeat(n-3) +' '+'#'.repeat(n-3)+ '   ';
    let srednjiDeo4='    '+'#'.repeat(n-4) +' '+'#'.repeat(n-4)+ '    ';
    for(let brojac=1;brojac<=n-4;brojac++){
        console.log(srednjiDeo4);
    } for(let brojac=1;brojac<=n-4;brojac++){
        console.log(srednjiDeo3);
    }
    for(let brojac=1;brojac<=n-4;brojac++){
        console.log(srednjiDeo2);
    }for(let brojac=1;brojac<=n-4;brojac++){
        console.log(srednjiDeo1);
        console.log(donjiDeo);
    }
}

//Drugi način. Mislim da je bolji, jer može vrlo lako da se menja. Prvi je baš statičan.
{
    let n=5;
    for(let a=0;a<n;a++){
        let b='';
        for(let c=1;c<n-a;c++){
            b+=' ';
        }
        for (let d=1;d<=(2*a+2);d++){
            b+='#';
            if(d===(2*a+2)/2){
            b+=' ';
        }
        }
        console.log(b);
    }
}