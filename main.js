const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

const nameCountries = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

const description = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let listImages = '';
let mainImage = '';

for (let i = 0; i < images.length; i++) {
    listImages += `<div class="image">
                    <img src="${images[i]}" alt="">
                </div>`
                
    mainImage += `<div class="main-image">
                    <img src="${images[i]}" alt="">
                    <div class="text">
                        <h2 id="country">${nameCountries[i]}</h2>
                        <h4 id="description">${description[i]}</h4>
                    </div>
                </div>`
}

// Inietto lista immagini
let listImagesInjector = document.querySelector('.container-list-images');
listImagesInjector.innerHTML += listImages;

// Inietto l'immagine principale
let mainImageInjector = document.querySelector('.container-main-image');
mainImageInjector.innerHTML += mainImage;

// Contatore
let imageSelected = 1;

// Applicco active all'immagine selezionata

// Lista immagini
let listImagesActive = document.getElementsByClassName('image');
listImagesActive[imageSelected].classList.add('active');

// Immagine principale
let mainImageActive = document.getElementsByClassName('main-image');
mainImageActive[imageSelected].classList.add('active');