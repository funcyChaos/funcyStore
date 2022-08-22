const preview2 = document.getElementById('preview_2');

document.addEventListener('scroll', (e)=>{
	
	console.log(this.scrollY);

	const scroll = this.scrollY;
	const fadeLength = 350;

	if(scroll === 0){

		preview2.style.opacity = 0;
	}else{

		preview2.style.opacity = scroll / fadeLength;
		console.log(preview2.style.opacity);
	}
});