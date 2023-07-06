const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//suivie index diapositive en demarrant à la 1ere diapo.
let currentSlideIndex = 0;

  // Attendre que la page soit chargée avant d'exécuter le code

window.addEventListener('load', function() {
	 // Sélectionner l'élément HTML avec la classe 'dots'
	const dotsContainer = document.querySelector('.dots');
	// Appeler la fonction pour créer les points du carrousel les placer à l'intérieur de cet élément.
	createCarouselDots(dotsContainer);
  });
  
  //itération des images

  function createCarouselDots(container) {
	// boucle, Parcourir les images du carrousel (slides)
	for (let i = 0; i < slides.length; i++) {
	 // Créer un nouvel élément 'div' pour représenter un point a  chaque iteration
	  const dot = document.createElement('div');
	  // Ajouter la classe 'dot' à ce point
	  dot.classList.add('dot');

	// Si l'index du point correspond à l'index de la diapositive actuelle (currentSlideIndex)
    // Ajouter la classe 'dot_selected' pour le mettre en évidence (il sera blanc)
	  
	  if (i === currentSlideIndex) {
		dot.classList.add('dot_selected');
	  }

	  // Ajouter ce point à l'intérieur de l'élément 'container' (l'élément avec la classe 'dot')
      container.appendChild(dot);
	}
 
  }

const prevArrow = document.getElementById('prev-arrow');
console.log (prevArrow);
const nextArrow = document.getElementById('next-arrow');
console.log (nextArrow);

prevArrow.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextArrow.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarousel();
});


function updateCarousel() {
    // Récupération de la diapositive actuelle à partir du tableau "slides"
    const currentSlide = slides[currentSlideIndex];

	// Sélection de l'élément HTML de l'image du carrousel
    const bannerImg = document.querySelector('.banner-img');

	 // Sélection de l'élément HTML de la balise <p> dans la bannière
	const tagLine = document.querySelector('#banner p');

	// Sélectionner tous les points du carrousel
	const dots = document.querySelectorAll('.dot');

     // Mise à jour de la source de l'image avec l'image de la diapositive actuelle
	bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
	
	// Mise à jour du contenu de la balise <p> avec le texte de la diapositive actuelle
	tagLine.innerHTML = currentSlide.tagLine;

	  // Mise à jour de la classe des points pour refléter la diapositive actuelle
	for (let i = 0; i < dots.length; i++) {
		if (i === currentSlideIndex) {
		// Si l'index du point correspond à l'index de la diapositive actuelle, ajouter la classe 'dot_selected'
		  dots[i].classList.add('dot_selected');
		} else {
			
		// Sinon, retirer la classe 'dot_selected'
		  dots[i].classList.remove('dot_selected');
		}
	  }
}
