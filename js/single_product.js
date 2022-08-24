const nav 						= document.getElementById('navbar').offsetHeight
const previewElement	= document.getElementById('preview_element');
const preview2 				= document.getElementById('preview_2');
const qtyMinus 				= document.getElementById('qty_minus');
const qtyPlus 				= document.getElementById('qty_plus');
const qtyCount 				= document.getElementById('qty_count');
const reviewsTitle 		= document.getElementById('reviews_title');
const specsTitle 			= document.getElementById('specs_title');
const reviewsSect			= document.getElementById('reviews_sect');
const specsSect				= document.getElementById('specs_sect');

// second preview fade in
document.addEventListener('scroll', (e)=>{

	const scroll = this.scrollY;
	const fadeLength = 60;

	if(scroll === 0){preview2.style.opacity = 0;}
	else{preview2.style.opacity = scroll / fadeLength;}
});

// Quantity functionality
qtyMinus.addEventListener('click', ()=>{

	if(parseInt(qtyCount.value) > 1){

		qtyCount.value = parseInt(qtyCount.value) - 1;
	}
});

qtyPlus.addEventListener('click', ()=>{

	qtyCount.value = parseInt(qtyCount.value) + 1;
});

qtyCount.addEventListener('input', ()=>{

	let input = qtyCount.value;

	if(parseInt(input) === 0){qtyCount.value = 1;}
})

// reviews and specs functionality
reviewsTitle.addEventListener('click', ()=>{

	specsSect.style.display = 'none';
	specsTitle.classList.remove('active');

	reviewsSect.style.display = 'block';
	reviewsTitle.classList.add('active');
});

specsTitle.addEventListener('click', ()=>{

	reviewsSect.style.display = 'none';
	reviewsTitle.classList.remove('active');

	specsSect.style.display = 'block';
	specsTitle.classList.add('active');
});

// Preview top adjust
if((window.innerHeight - (nav + 20)) > previewElement.offsetHeight){

	previewElement.style.top = `${nav + 10}px`;
}else{

	previewElement.style.top = `${-(previewElement.offsetHeight - window.innerHeight + 30)}px`;
}

