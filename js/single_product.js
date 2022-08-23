const nav = document.getElementById('navbar').offsetHeight
const previewElement = document.getElementById('preview_element');
const preview2 = document.getElementById('preview_2');
const qtyMinus = document.getElementById('qty_minus');
const qtyPlus = document.getElementById('qty_plus');
const qtyCount = document.getElementById('qty_count');

document.addEventListener('scroll', (e)=>{

	const scroll = this.scrollY;
	const fadeLength = 60;

	if(scroll === 0){preview2.style.opacity = 0;}
	else{preview2.style.opacity = scroll / fadeLength;}
});

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
	if(!isNaN(parseFloat(input) && isFinite(input))){

		qtyCount.value = 1
	}
})

if((window.innerHeight - (nav + 20)) > previewElement.offsetHeight){

	previewElement.style.top = `${nav + 10}px`;
}else{

	previewElement.style.top = `${-(previewElement.offsetHeight - window.innerHeight + 30)}px`;
}
