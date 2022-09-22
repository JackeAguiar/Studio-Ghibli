export default () => {
    const url = 'https://ghibliapi.herokuapp.com/people';
    fetch(url)
        .then((response) => {
            return response.json();
    })
        .then((data) => {
            let card = data;
            console.log(card)

            let CarDiv = document.createElement("div");
            CarDiv.innerHTML = ` 
            ${card?.map((people) => `
    <div class="flex">
        <div class="info-cards">
            <div class="card-details">
                <p><strong> Name: </strong>${people.name}</p>
                <p><strong> Gender: </strong>${people.gender}</p>
                <p><strong> Age: </strong> ${people.age}</p>
                <p><strong> Eyes color: </strong> ${people.eye_color}</p>
                <p><strong> Hair color: </strong> ${people.hair_color}</p>
            </div>
        </div>
     </div>   
      `).join("")
        }`
    })
    .catch(function(error) {
    console.log(error);
    });

}




{/* <select class="director" id="director">
    <option selected value="none">Directors</option>
    <option value="Hayao Miyazaki">Hayao Miyazaki</option>
    <option value="Hiromasa Yonebayashi">Hiromasa Yonebayashi</option>
    <option value="Gorō Miyazaki">Gorō Miyazaki</option>
    <option value="Isao Takahata">Isao Takahata</option>
    <option value="Hiroyuki Morita">Hiroyuki Morita</option>
    </select> */}