let containerHero = document.querySelector(".container_hero");

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

for (let i = 0; i < 5; i++) {
    const imgCurrent = items[i];

    let tagImg = `<img  src= "${imgCurrent}" alt="foto ${i + 1}"></img>`;

    containerHero.innerHTML += tagImg;
}









//CREARE UNA LISTA DI TUTTE LE IMMAGINI

//PRENDERLE SINGOLARMENTE

//INSERIRLE TUTTE NELL'HTML

//FARNE VEDERE SOLO UNA














/* const title = [
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
]; */