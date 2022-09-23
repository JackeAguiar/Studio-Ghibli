export default () => {
    const url = 'https://ghibliapi.herokuapp.com/people';
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
            ${card?.map((people) => `
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
        }`
    })
    .catch(function(error) {
    console.log(error);
    });

}

