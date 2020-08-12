﻿
function Massalaskin() {
    window.location = "Massalaskuri.html";
};
function Pituuslaskin() {
    window.location = "Pituuslaskin.html";
};
function Osalista() {
    window.location = "Osalista.html";
};
function Suosikit() {
    window.location = "Suosikit.html";
};
function Alkuun() {
    window.location = "Index.html";
};

//Osalistan Toiminnot

function PalautaJuoksuLista() {
    document.getElementById("osat").innerHTML = "";
    for (let index = 0; index < juoksuLista.length; index++) {
        var element = juoksuLista[index];
        if (element.nimi.length) {
            document.getElementById("osat").innerHTML += "<li>" + element.nimi + ": Oikea pituus: " +
                element.pituus.toPrecision(3) + "m, Massa: " + element.paino.toPrecision(3) + "kg" + "</li>";

        }
    }
};
function PalautaJokatLista() {
    document.getElementById("osat").innerHTML = "";
    for (let index = 0; index < jokatLista.length; index++) {
        var element = jokatLista[index];
        if (element.nimi.length) {
            document.getElementById("osat").innerHTML += "<li>" + element.nimi + ": Oikea pituus: " +
                element.pituus.toPrecision(3) + "m, Massa: " + element.paino.toPrecision(3) + "kg" + "</li>";

        }

    }
};

//Massalaskuri

var osienLisaysKentta = "";
var osienMaaraKentta = 0;
var kokonaisMassa = 0;

function TyhjennaTaulu() {
    document.getElementById('massalista').innerHTML = '';
    document.getElementById('summapaikka').innerHTML = '0kg';

};


function LisaaMassaa() {
    osienLisaysKentta = document.getElementById("massanlisäyssyöte").value;
    osienMaaraKentta = document.getElementById("massanmääräsyöte").value;

    for (let index = 0; index < juoksuLista.length; index++) {
        const element = juoksuLista[index];
        if (element.haku.toUpperCase() == osienLisaysKentta.toUpperCase()) {
            kokonaisMassa += osienMaaraKentta * element.paino;
            document.getElementById("summapaikka").innerHTML = kokonaisMassa + "kg";
            document.getElementById("massalista").innerHTML += "<li>" + osienMaaraKentta + " kpl " +
                element.nimi + "- Oikea pituus: " + element.pituus + ", Osan massa: " + element.paino;

        }
    }

    for (let index = 0; index < jokatLista.length; index++) {
        const element = jokatLista[index];
        if (element.haku.toUpperCase() == osienLisaysKentta.toUpperCase()) {
            kokonaisMassa += osienMaaraKentta * element.paino;
            document.getElementById("summapaikka").innerHTML = kokonaisMassa + "kg";
            document.getElementById("massalista").innerHTML += "<li>" + osienMaaraKentta + " kpl " +
                element.nimi + "- Oikea pituus: " + element.pituus + ", Osan massa: " + element.paino;
        }
    }


};

// Pituuslaskuri

// Tästä alkaa osalistat

var juoksuLista = [
    { haku: "4m juoksu", nimi: "Juoksu 4,14 m, teräs LW", pituus: 4.09, paino: 13.4 },
    { haku: "3m juoksu", nimi: "Juoksu 3,07 m, teräs LW", pituus: 3.02, paino: 10.1 },
    { haku: "2,5m juoksu", nimi: "Juoksu 2,57 m, teräs LW", pituus: 2.52, paino: 8.5 },
    { haku: "2m juoksu", nimi: "Juoksu 2,07 m, teräs LW", pituus: 2.02, paino: 7.0 },
    { haku: "1,5m juoksu", nimi: "Juoksu 1,57 m, teräs LW", pituus: 1.52, paino: 5.5 },
    { haku: "1,4 juoksu", nimi: "Juoksu 1,57 m, teräs LW", pituus: 1.35, paino: 5.0 }
];
var jokatLista = [
    { haku: "3m juoksuvahvari", nimi: "U-kaksoisjuoksu 3,07 m, teräs LW", pituus: 3.07, paino: 19.0 },
    { haku: "2,5m juoksuvahvari", nimi: "U-kaksoisjuoksu 2,57 m, teräs LW", pituus: 2.57, paino: 15.7 },
    { haku: "2m juoksuvahvari", nimi: "U-kaksoisjuoksu 2,07 m, teräs LW", pituus: 2.07, paino: 12.7 },
    { haku: "1,5m juoksuvahvari", nimi: "U-kaksoisjuoksu 1,57 m, teräs LW", pituus: 1.57, paino: 7.4 },
    { haku: "1m jokka", nimi: "U-jokka, vahv. 1,09 m", pituus: 1.09, paino: 5.7 },
    { haku: "3m vahvari", nimi: "U-jokka vahv. 3,07 m LW T14", pituus: 1.40, paino: 19.0 },
    { haku: "0,45 jokka", nimi: "U-jokka 0,45 m LW T14", pituus: 0.40, paino: 2.1 },
    { haku: "0,73 jokka", nimi: "U-jokka 0,73 m LW T14", pituus: 0.68, paino: 3.1},
    { haku: "1m jokka", nimi: "U-jokka 1,00 m LW", pituus: 0.95, paino: 4.1}
    
    /*U-jokka 1,09 m LW	4,4
    U-jokka 1,40 m, teräs LW T14	5,4
    U-jokka vahv. 1,40 m, teräs LW T14	8,9
    U-jokka vahv. 1,57 m LW T14	9,4
    U-jokka vahv. 2,07 m LW T14	12,7
    U-jokka vahv. 2,57 m LW T14	15,7
    U-jokka vahv. 3,07 m LW T14	19*/
];


