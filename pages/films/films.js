export default () => {

const url = 'https://ghibliapi.herokuapp.com/films';
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let card = data;
        console.log(card)
        let carDiv = document.createElement('div');
        carDiv.classList.add("card-div")
        carDiv.innerHTML = ` 
            ${card?.map((movie) => `
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
     }`


    })
    .catch(function (error) {
        console.log(error);
    });


}
