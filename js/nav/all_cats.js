// const cats_close = document.getElementById('all_cats_close');
const allCats = document.getElementById('all_categories');

function cats_open(e){

	e.preventDefault();
	// allCats.style.display = 'flex';
	allCats.style.left = 0;
}

function cats_close(e){

	e.preventDefault();
	allCats.style.left = '-200px'
	// allCats.style.display = 'none';
}