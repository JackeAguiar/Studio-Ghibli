import { filterCharacters, sortAZ } from "../characters/data.js";

export default async () => {


    const url = 'https://ghibliapi.herokuapp.com/people';
    let carDiv = document.createElement("div");
    carDiv.classList.add("card-div")

    try {
        const response = await fetch(url);
        const data = await response.json();
        let card = data;

        carDiv.innerHTML = ` 
        <section class="section-input">
            <input type="search" class="search" id="searchFilms" placeholder="Search by name, age, or hair color"/>

            <select id="inputSelect" class="inputs" >
            <option selected disabled value="">Sort by:</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            </select>  
        </section>
        <section  id="section-people">${createCards(card)}</section>`;

        const sectionCards = carDiv.querySelector("#section-people")

        const inputSearch = carDiv.querySelector("#searchFilms");

        inputSearch.addEventListener("keyup", (e) => {
            const searchString = e.target.value;
            inputSelect.value = "";
            const result = filterCharacters(searchString, card);
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
            return array.map((people) => `
           <div class="info-cards">
               <div class="card-details">
                   <p><strong> Name: </strong>${people.name}</p>
                   <p><strong> Gender: </strong>${people.gender}</p>
                   <p><strong> Age: </strong> ${people.age}</p>
                   <p><strong> Eyes color: </strong> ${people.eye_color}</p>
                   <p><strong> Hair color: </strong> ${people.hair_color}</p>
               </div>
           </div>   
       `).join("")


        };

        return carDiv;
    } catch (error) {
        console.log(error);
    }

}

