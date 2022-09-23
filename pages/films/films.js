import { filterMovies, sortAZ } from "../films/data.js"

export default async () => {


    const url = 'https://ghibliapi.herokuapp.com/films';
    let carDiv = document.createElement('div');
    carDiv.classList.add("card-div")

    try {
        const response = await fetch(url);
        const data = await response.json();
        let card = data;

        carDiv.innerHTML = ` 
        <section class="section-input">
            <input type="search" class="search" id="searchFilms" placeholder="Search by films, director, or producer" />

            <select id="inputSelect" class="inputs" >
            <option selected disabled value="">Sort by:</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            </select>  
        </section>
        <section id="section-cards"> ${createCards(card)}</section>`;

        const sectionCards = carDiv.querySelector("#section-cards")

        const inputSearch = carDiv.querySelector("#searchFilms");
        inputSearch.addEventListener("keyup", (e) => {
            const searchString = e.target.value;
            inputSelect.value = "";
            const result = filterMovies(searchString, card);
            sectionCards.innerHTML = createCards(result)

        });

        const inputSelect = carDiv.querySelector("#inputSelect");

        inputSelect.addEventListener("change", (e) => {
            e.preventDefault();
            const selectedSort = e.target.value;
            inputSearch.value = "";
            const filterAz = sortAZ(card, selectedSort);
            sectionCards.innerHTML = createCards(filterAz)
        });

        function createCards(array) {
            return array.map((movie) => `
        <div class="info-caards">
            <div class="imge-and-title">
                <img class="img-card" src="${movie.image}"/>
                <p class="title"> ${movie.title}</p>
            </div>
            <div class="card-deetails">
                <p><strong> Score: </strong> ${movie.rt_score}</p>
                <p><strong> Producer: </strong> ${movie.producer}</p>
                <p><strong> Director: </strong> ${movie.director}</p>
                <p><strong> Description: </strong> ${movie.description}</p>
            </div>
        </div>
        `).join("")
    };


        return carDiv;

    } catch (error) {
        console.log(error);
    }


}

