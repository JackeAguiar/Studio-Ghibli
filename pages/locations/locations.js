import { filterLocation, sortAZ } from "../locations/data.js";

export default async () => {

    const url = 'https://ghibliapi.herokuapp.com/locations';
    let carDiv = document.createElement("div");
    carDiv.classList.add("card-div")

    try {
        const response = await fetch(url);
        const data = await response.json();
        let card = data;

        carDiv.innerHTML = ` 
        <section class="section-input">
            <input type="search" class="search" id="searchFilms" placeholder="Search by locations, climate, or terrain"/>

            <select id="inputSelect" class="inputs" >
            <option selected disabled value="">Sort by:</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            </select>  
        </section>
        <section id="section-location">${createCards(card)}</section>`;

        const sectionCards = carDiv.querySelector("#section-location");
        const inputSearch = carDiv.querySelector("#searchFilms");

        inputSearch.addEventListener("keyup", (e) => {
            const searchString = e.target.value;
            inputSelect.value = "";
            const result = filterLocation(searchString, card);
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
            return array.map((location) => `
        <div class="info-cards">
            <div class="card-details">
                <p><strong> Name: </strong>${location.name}</p>
                <p><strong> Climate: </strong>${location.climate}</p>
                <p><strong> Terrain: </strong> ${location.terrain}</p>
                <p><strong> Surface water: </strong> ${location.surface_water}</p>
            </div>
        </div> 
    `).join("")
        };



        return carDiv;
    } catch (error) {
        console.log(error);
    }
}