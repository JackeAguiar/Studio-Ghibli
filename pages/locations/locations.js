export default () => {

    const url = 'https://ghibliapi.herokuapp.com/locations';
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            let card = data;
            console.log(card)

            let carDiv = document.createElement("div");
            carDiv.classList.add("card-div")
            carDiv.innerHTML = ` 
            ${card?.map((location) => `
        <div class="info-cards">
            <div class="card-details">
                <p><strong> Name: </strong>${location.name}</p>
                <p><strong> Climate: </strong>${location.climate}</p>
                <p><strong> Terrain: </strong> ${location.terrain}</p>
                <p><strong> Surface water: </strong> ${location.surface_water}</p>
            </div>
        </div>  
     `).join("")
    }`
})

.catch(function(error) {
    console.log(error);
})
}