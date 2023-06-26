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

let currentSlideIndex = 0;

const prevArrow = document.getElementById('prev-arrow');
console.log (prevArrow);
const nextArrow = document.getElementById('next-arrow');
console.log (nextArrow);

prevArrow.addEventListener('click', function() {
  alert('Clic sur la flèche gauche');
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextArrow.addEventListener('click', function() {
  alert('Clic sur la flèche droite');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarousel();
});


  

