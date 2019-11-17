//Zadatak 1
{
    let recepti = [
    {
        ime: 'Pire od slatkog krompira', tezina: 'lak', sastojci: 'batat, puter, pečeni lešnik, cimet',
        opis: function () {
            return `${this.ime}\nTežina:${this.tezina}:\nSastojci:${this.sastojci}.`
        }
    },
    {
        ime: 'Punjene paprike', tezina: 'srednji', sastojci: 'paprike, pirinač, mleveno meso, vegeta',
        opis: function () {
            return `${this.ime}\nTežina:${this.tezina}:\nSastojci:${this.sastojci}.`
        }
    },
    {
        ime: 'Kikiriki puter', tezina: 'pocetni', sastojci: 'kikiriki, pečeni lešnik, maslinovo ulje',
        opis: function () {
            return `${this.ime}\nTežina:${this.tezina}:\nSastojci:${this.sastojci}.`
        }
    },
    {
        ime: 'Pasulj', tezina: 'tezak', sastojci: 'pasulj, ulje, brašno, aleva paprika, suvo meso, crni luk',
        opis: function () {
            return `${this.ime}\nTežina:${this.tezina}:\nSastojci:${this.sastojci}.`
        }
    }
]

    function receptiZaKuvanje(recepti) {
        
        let receptiString = recepti[0].opis() + '\n------------------------\n' + recepti[1].opis() + '\n------------------------\n' + recepti[2].opis() + '\n------------------------\n' + recepti[3].opis();
        return receptiString

    }
    console.log(receptiZaKuvanje(recepti));
    
    //Zadatak 2
    let lakiIPocetniRecepti=[];
    function odredjeniRecepti(recepti) {
       for (element of recepti) {
            if (element.tezina == 'lak' || element.tezina == 'pocetni') {
                lakiIPocetniRecepti.push(element);
           }
       }
       return lakiIPocetniRecepti
    }
    console.log(odredjeniRecepti(recepti));

    
    //Zadatak 3
        let sastojak1 = {
            ime: 'Kakao', kolicina: 1, cena: 100,
        }
        let sastojak2 = {
            ime: 'Ovsene pahuljice', kolicina: 1, cena: 13,
        }
        let sastojak3 = {
            ime: 'Banana', kolicina: 1, cena: 30,
        }
        let sastojak4 = {
            ime: 'Lešnik', kolicina: 1, cena: 60,
        }
        let sastojak5 = {
            ime: 'Jogurt', kolicina: 1, cena: 60,
        }
        //Zadatak 4
        var sastojci = [
            {
                ime: 'Kakao', kolicina: 1, cena: 100,
            },
            {
                ime: 'Batat', kolicina: 1, cena: 100,
            },
            {
                ime: 'Pasulj', kolicina: 2, cena: 300,
            },
            {
                ime: 'Lešnik', kolicina: 1, cena: 60,
            },
            {
                ime: 'Jogurt', kolicina: 1, cena: 60,
            }]

        //Zadatak 5
        var receptX= {
            ime: 'Smuti', sastojci: [sastojci[0],sastojci[3], sastojci[4]],
            cena:0,
            opis: function () {
                return `${this.ime}\nTežina:${this.tezina}:\nSastojci:${this.sastojci}.`
            },
            cenaRecepta: function() {
        
                                for(let i=0;i<this.sastojci.length;i++) {
                                        this.cena+=(this.sastojci[i].cena*this.sastojci[i].kolicina);
                                }
            }   
        }
        receptX.cenaRecepta(receptX.cena);
        console.log(receptX.cena);
        
    }

