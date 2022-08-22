const preview2 = document.getElementById('preview_2');

const nav = document.getElementById('navbar').offsetHeight

const previewElement = document.getElementById('preview_element');

document.addEventListener('scroll', (e)=>{

	const scroll = this.scrollY;
	const fadeLength = 350;

	if(scroll === 0){preview2.style.opacity = 0;}
	else{preview2.style.opacity = scroll / fadeLength;}
});

if((window.innerHeight - (nav + 20)) > previewElement.offsetHeight){

	previewElement.style.top = `${nav + 10}px`;
}else{

	previewElement.style.top = `${-(previewElement.offsetHeight - window.innerHeight + 30)}px`;
}
