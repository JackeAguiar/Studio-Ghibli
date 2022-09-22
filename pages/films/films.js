export default () => {
    // const ul = document.getElementById('test');
    // const list = document.createDocumentFragment();
const url = 'https://ghibliapi.herokuapp.com/films';
    fetch(url)
        .then((response) => {
            return response.json();
    })
        .then((data) => {
            let card = data;
            console.log(card)
            let CarDiv = document.createElement("div");
            CarDiv.innerHTML = ` 
            ${card?.map((movie) => `
        <div class="info-cards">
              <div class="imge-and-title">
                <img class="img-card" src="${movie.image}"/>
                <p class="title"> ${movie.title}</p>
              </div>
               <div class="card-details">
                  <p><strong> Score: </strong> ${movie.rt_score}</p>
                  <p><strong> Producer: </strong> ${movie.producer}</p>
                  <p><strong> Director: </strong> ${movie.director}</p>
                  <p><strong> Description: </strong> ${movie.description}</p>
            </div>
        </div>
      `).join("")
        }`
    })
    .catch(function(error) {
      console.log(error);
    });


}

































// window.onload = function() {
//     showFilms();
//     console.log(showFilms)
// };

// const getFilms = () => {
//     const url = 'https://ghibliapi.herokuapp.com/films';
    
//     fetch(url)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             const cards = data;
//             console.log(cards)
//             return cards["items"];
//         })
//         .catch(function(error){
//             console.log(error);
//         });
// }

// console.log(getFilms)
// function showFilms() {
//     let filmsDiv = document.getElementById('test');
//     filmsDiv.innerHTML = `
//         ${ur.map((movie) => `
//             <div class="info-cards">
//                 <div class="imge-and-title">
//                     <img class="img-card" src="${movie.image}"/>
//                     <p class="title"> ${movie.title}</p>
//                 </div>
//                 <div class="card-details">
//                     <p><strong> Score: </strong> ${movie.rt_score}</p>
//                     <p><strong> Producer: </strong> ${movie.producer}</p>
//                     <p><strong> Director: </strong> ${movie.director}</p>
//                     <p><strong> Description: </strong> ${movie.description}</p>
//                 </div>
//             </div>
//         `).join("")}
//     `
// }

// getProducts();


        // ul.appendChild(list);



    // const infoCard = document.creatElement('div');
    // infoCard.classList.add("cards");

    // fetch('https://ghibliapi.herokuapp.com/films')
    //     .then(response => response.json())
    //     .then(data => {
    //         data.map(movie => {
    //             const card = `<div class="info-cards">
    //             <div class="imge-and-title">
    //             <img class="img-card" src="${movie.image}"/>
    //             <p class="title"> ${movie.title}</p>
    //             </div>
    //             <div class="card-details">
    //             <p><strong> Score: </strong> ${movie.rt_score}</p>
    //             <p><strong> Producer: </strong> ${movie.producer}</p>
    //             <p><strong> Director: </strong> ${movie.director}</p>
    //             <p><strong> Description: </strong> ${movie.description}</p>
    //             </div>`

    //             console.log(card)

    //         }).catch((err) => {
    //             err.innerHTML = `Essa não! Não está funcionando!`
                
    //         });

    //     })

    // return infoCard
// }


