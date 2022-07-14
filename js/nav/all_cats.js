// const cats_close = document.getElementById('all_cats_close');
const allCats = document.getElementById('all_categories');
const catsOver = document.getElementById('cats_overlay');

function cats_open(e){

	e.preventDefault();
	allCats.style.left = 0;
	catsOver.style.left = 0;
}

function cats_close(e){

	e.preventDefault();
	allCats.style.left = '-200px';
	catsOver.style.left = '-100%';
}