const Select = document.getElementById('category_select');
const multiplier = 7;
const adder = 40;
const firstWidth = Select.value.length * multiplier + adder;
Select.style.width = `${firstWidth}px`;
console.log(Select.style.width);

Select.addEventListener('change', ()=>{

	const adjdWidth = Select.value.length * multiplier + adder;
	Select.style.width = `${adjdWidth}px`;
});