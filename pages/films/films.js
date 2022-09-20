
export default () => {

    const infoCard = document.createElement('div');
    infoCard.classList.add("cards")


    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const card = `<div class="info-cards">
                <div class="imge-and-title">
                <img class="img-card" src="${movie.image}"/>
                <p class="title"> ${movie.title}</p>
                </div>
                <div class="card-details">
                <p><strong> Score: </strong> ${movie.rt_score}</p>
                <p><strong> Producer: </strong> ${movie.producer}</p>
                <p><strong> Director: </strong> ${movie.director}</p>
                <p><strong> Description: </strong> ${movie.description}</p>
                </div>`

                infoCard.innerHTML = card

            }).catch(err => {
                const errorMessage = document.createElement('h1');
                errorMessage.textContent = `Essa não! Não está funcionando!`
                errorMessage;
            });
        })
    return infoCard
     

}


