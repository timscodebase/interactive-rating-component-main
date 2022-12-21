const ratings = document.querySelectorAll('input[type="button"]');
const submit = document.querySelector('input[type="submit"]');
const rate = document.querySelector(".rate");
const result = document.querySelector(".result");
const final_rating = document.querySelector(".final_rating");

let rating;

ratings.forEach((rating) => {
	rating.addEventListener("click", (e) => {
    e.preventDefault();
    rating = e.target.value;
    final_rating.innerHTML = rating;  
    e.target.classList.add("active");
	});
});

submit.addEventListener("click", (e) => {
	e.preventDefault();
	rate.classList.toggle('hide');
	result.classList.toggle('hide');
});