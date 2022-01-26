const API_URL = `https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1&limit=10`;

//const IMG_PATH =

//Get initial animes

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//getAnimes(API_URL);

async function getAnimes(url) {
	const res = await fetch(url);
	const data = await res.json();

	showAnimes(data.results);
}

function showAnimes(animes) {
	main.innerHTML = "";

	animes.forEach((anime) => {
		const { title, score, rating, synopsis, image_url } = anime;

		const animeItem = document.createElement("div");
		animeItem.classList.add("anime");

		animeItem.innerHTML = `
        
            <img src="${image_url}" alt="${title}">
            <div class="anime-info">
            <h3>${title}</h3>
            <span class="${getClassByScore(score)}">${score}</span>
        </div>
        <div class="synopsis"> 
            <h3>Synopsis</h3>
            ${synopsis}
        </div>
       
  
        `;
		main.appendChild(animeItem);
	});
}

function getClassByScore(rate) {
	if (rate >= 8) {
		return "green";
	} else if (rate >= 5) {
		return "orange";
	} else {
		return "red";
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const query = search.value;
	const SEARCH_URL = `https://api.jikan.moe/v3/search/anime?q=${query}&page=1&limit=10`;

	if (query && query !== "") {
		getAnimes(SEARCH_URL);

		search.value = "";
	} else {
		window.location.reload();
	}
});
