const search_bar_form = document.getElementById('search_bar_form');
const nav_search = document.getElementById('nav_search');

nav_search.addEventListener('focus', ()=>{

	search_bar_form.style.border = "2px solid #82f";
})

nav_search.addEventListener('focusout', ()=>{

	search_bar_form.style.border = "none";
})