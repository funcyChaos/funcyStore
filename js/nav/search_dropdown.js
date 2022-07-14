const Select = document.getElementById('search_category_select');
const multiplier = 7;
const adder = 40;
const firstWidth = Select.value.length * multiplier + adder;
Select.style.width = `${firstWidth}px`;

Select.addEventListener('change', ()=>{

	const adjdWidth = Select.value.length * multiplier + adder;
	Select.style.width = `${adjdWidth}px`;
});