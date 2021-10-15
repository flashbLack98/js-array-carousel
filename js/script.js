const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let containerHero = document.querySelector(".container_hero");
let myText = document.querySelector(".my_text");

let indexCurrent = 2;



for (let i = 0; i < items.length; i++) {


    const img = items[i];
    const hUno = title[i];
    const paragraph = text[i];

    let classeDaUsare = "";
    let classeTestoDaUsare = "";


    if (i === indexCurrent) {
        classeDaUsare = "opacity-100";
        classeTestoDaUsare = "text-white";
    }

    let tagImg = `<img class="${classeDaUsare}" src= "${img}" alt="foto ${i + 1}">`;
    let tagText = ` <div class="my_text">
    <h3 class="${classeTestoDaUsare}">${hUno}</h3>
    <h5 class="${classeTestoDaUsare}">${paragraph}</h5>
</div>`;

    containerHero.innerHTML += tagImg + tagText;

}

//--------FRECCIA SU----------
const btnUp = document.querySelector(".fa-chevron-circle-up");

//QUANDO CLICCO SULLA FRECCIA, L'ELEMENTO SUCCESSIVO DIVENTA VISIBILE
btnUp.addEventListener("click", function () {

    //QUESTA È L'IMMAGINE ATTUALE 
    let currentImg = document.querySelector(".opacity-100");
    let currentTitle = document.querySelector("h3.text-white");
    let currentText = document.querySelector("h5.text-white");

    //TOLGO LA CLASSE OPACITY
    currentImg.classList.remove("opacity-100");
    currentTitle.classList.toggle("text-white");
    currentText.classList.toggle("text-white");

    //QUESTO È L'INDICE MENO 1
    indexCurrent--;

    //FACCIO UNA SPECIE DI ARRAY CON TUTTE LE IMG
    const allImg = containerHero.querySelectorAll("img");
    const allTitle = containerHero.querySelectorAll("h3");
    const allText = containerHero.querySelectorAll("h5");





    //QUANDO ANDIAMO SOTTO L'INDICE 0 
    //DOBBIAMO METTERE LA CLASSE ACTIVE ALL'ULTIMO ELEMENTO
    if (indexCurrent < 0) {
        indexCurrent = items.length - 1;
    }

    //QUESTA È LA NUOVA IMG ATTUTALE (INDEX DICHIARATO PRIMA MENO 1) 
    let newCurrentImg = allImg[indexCurrent];
    let newCurrentTitle = allTitle[indexCurrent];
    let newCurrentText = allText[indexCurrent];


    //ALLA NUOVA IMMAGINE ATTUALE AGGIUNGIAMO LA CLASSE OPACITY
    newCurrentImg.classList.add("opacity-100");
    newCurrentTitle.classList.add("text-white");
    newCurrentText.classList.add("text-white");

});



//--------FRECCIA GIÚ----------
const btnDown = document.querySelector(".fa-chevron-circle-down");

//QUANDO CLICCO SULLA FRECCIA, L'ELEMENTO SUCCESSIVO DIVENTA VISIBILE
btnDown.addEventListener("click", function () {

    //QUESTA È L'IMMAGINE ATTUALE 
    let currentImg = document.querySelector(".opacity-100");
    let currentTitle = document.querySelector("h3.text-white");
    let currentText = document.querySelector("h5.text-white");

    //TOLGO LA CLASSE OPACITY
    currentImg.classList.remove("opacity-100");
    currentTitle.classList.toggle("text-white");
    currentText.classList.toggle("text-white");

    //QUESTO È L'INDICE MENO 1
    indexCurrent++;

    //FACCIO UNA SPECIE DI ARRAY CON TUTTE LE IMG
    const allImg = containerHero.querySelectorAll("img");
    const allTitle = containerHero.querySelectorAll("h3");
    const allText = containerHero.querySelectorAll("h5");

    if (indexCurrent > items.length - 1) {
        //QUANDO ANDIAMO SOTTO L'INDICE 0 
        //DOBBIAMO METTERE LA CLASSE ACTIVE ALL'ULTIMO ELEMENTO
        indexCurrent = 0;
    }

    //QUESTA È LA NUOVA IMG ATTUTALE (INDEX DICHIARATO PRIMA MENO 1) 
    let newCurrentImg = allImg[indexCurrent];
    let newCurrentTitle = allTitle[indexCurrent];
    let newCurrentText = allText[indexCurrent];

    //ALLA NUOVA IMMAGINE ATTUALE AGGIUNGIAMO LA CLASSE OPACITY
    newCurrentImg.classList.add("opacity-100");
    newCurrentTitle.classList.add("text-white");
    newCurrentText.classList.add("text-white");
});











//CREARE UNA LISTA DI TUTTE LE IMMAGINI

//PRENDERLE SINGOLARMENTE

//INSERIRLE TUTTE NELL'HTML

//FARNE VEDERE SOLO UNA














