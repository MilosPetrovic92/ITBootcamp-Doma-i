//Zadatak 3

var a=21;
if (a%3===0){
    console.log(`Broj ${a} je deljiv sa 3.`);
}else{
    console.log(`Broj ${a} nije deljiv sa 3.`)
}
/* sabiranje svih brojeva deljivih sa 3 i 5
let sum=0;
for(let i=1; i<1000; i++){
    if(i%3===0 || i%5===0){
        sum +=i;
    }
}
console.log(sum);
*/
let brojac = ""; //brojac će držati promenljivu i
for(let i = 5; i <=5000; i++){ //i je broj 5, i sve dok je jednaka broju 5 i manja ili jednaka 5000 dodavaće po još jedan broj iznad (i++)
    if(i%5===0){ // ako je ostatak deljenja i i 5 jednak 0
        brojac += i + ", " //+= dodaje vrednost promenljive i u promenljivu brojac. Pošto smo imali i++ to znači da dodaje po jedan broj naviše, a pošto je loop for <=5000 to znači da će dodavati sve dok ne stigne do 5000
    }
}
console.log(brojac); 
