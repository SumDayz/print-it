const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// constante
const dots = document.querySelector(".dots");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
// Initialisation currentSlide variable
let currentSlide = 0;
function generateDots() {
	// boucle parcourir slides
	for (i = 0; i < slides.length; i++) {
		// Créer balise div a chaque passage du i
		const dot = document.createElement("div");
        //Ajout de la class dot
		dot.classList.add('dot');
		// Vérification que i == currentSlide
		if (i === currentSlide) {
			//Ajout de l'élement dot_selected
			dot.classList.add('dot_selected');
		}
		// Attache le dot au parent dots
		dots.appendChild(dot);
	}
}
//lancement de la fonction dots
generateDots();
// recupération nombre Dots
const dotsNbr = document.querySelectorAll('.dot');

// Ajout de l'event click pour la flèche gauche
arrow_left.addEventListener("click", function () {
	console.log("Gauche");
	//On retire -1 au currentSlide
	currentSlide -= 1;
	// Si current slide négatif
	if (currentSlide === -1) {
		//On met le current slide au dernier element
		currentSlide = slides.length - 1;
	}
	//Update des points et des slides
	updateDot();
	updateSlide();
});
// Ajout de l'event click pour la flèche droite
arrow_right.addEventListener("click", function () {
	console.log("Droite");
	// Incrémentation du currentSlide
	currentSlide++;
	//Si currentSlide supérieur aux nombres de points
	if (currentSlide >= dotsNbr.length) {
		//Retour à 0
		currentSlide = 0
	}
	//update des dots et slides
	updateDot();
	updateSlide();
});


function updateDot() {
	//Récupération du dot selected
	const selected = document.querySelector('.dot_selected');
	// retirer la class a ce dots
	selected.classList.remove('dot_selected');
	// Ajouté dot_select au dots actuel
	dotsNbr[currentSlide].classList.add('dot_selected');
}

function updateSlide() {
	// Mise a jour de l'image via les assets
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	// Mise a jour du code HTML via le tagLine au lieu de innerText qui lui modifie le text d'une balise
	tagLine.innerHTML = slides[currentSlide].tagLine;
}