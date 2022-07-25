const carItems = document.querySelectorAll('.car-item');
const left = document.getElementById('prod_car_left');
const right = document.getElementById('prod_car_right');
const totalItems = carItems.length - 1;
let current = 0;

carItems.forEach((item, index)=>{

	item.style.transform = `translateX(${index * 100}%)`;
});

left.addEventListener('click', ()=>{

	if(current === totalItems){current = 0;}else{current++;}

	carItems.forEach((item, index)=>{

		item.style.transform = `translateX(${100 * (index - current)}%)`;
	})
});

right.addEventListener('click', ()=>{

	if(current === 0){current = totalItems;}else{current--;}

	carItems.forEach((item, index)=>{

		item.style.transform = `translateX(${100 * (index - current)}%)`;
	});
});