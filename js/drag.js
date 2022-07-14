let sliderContainer = document.querySelector('.categories');
let innerSlider = document.querySelector('.menu-slider');

let pressed = false;
let startX;
let x;
let downTime;

sliderContainer.addEventListener("mousedown", (e)=>{
	
	downTime = new Date().getTime();	
	pressed = true;
	startX = e.offsetX - innerSlider.offsetLeft;
});

sliderContainer.addEventListener("mouseup", ()=>{

	const upTime = new Date().getTime();
	const diff = upTime - downTime;
	
	if(diff < 400){

		console.log(document.querySelectorAll(':hover'));
		console.log(diff);
	}

	pressed = false;
});

sliderContainer.addEventListener('mouseleave', ()=>{

	pressed = false;
})

sliderContainer.addEventListener("mousemove", (e)=>{

	if(!pressed)return;
	e.preventDefault();

	x = e.offsetX;

	innerSlider.style.left = `${x - startX}px`;

	checkBoundary();
});

const checkBoundary = ()=>{

	let outer = sliderContainer.getBoundingClientRect();
	let inner = innerSlider.getBoundingClientRect();

	if(parseInt(innerSlider.style.left) > 0){

			innerSlider.style.left = "0px";
	}

	if(inner.right < outer.right){
		
			innerSlider.style.left = `-${inner.width - outer.width}px`;
	}
};