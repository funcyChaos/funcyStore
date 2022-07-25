const search_bar_form = document.getElementById('search_bar_form');
const nav_search = document.getElementById('nav_search');

// *******************************************************
const Select = document.getElementById('search_category_select');
const multiplier = 7;
const adder = 40;
const firstWidth = Select.value.length * multiplier + adder;

nav_search.addEventListener('focus', ()=>{

	search_bar_form.style.border = "2px solid #82f";
});

nav_search.addEventListener('focusout', ()=>{

	search_bar_form.style.border = "none";
});

// *******************************************************

Select.style.width = `${firstWidth}px`;

Select.addEventListener('change', ()=>{

	const adjdWidth = Select.value.length * multiplier + adder;
	Select.style.width = `${adjdWidth}px`;
});