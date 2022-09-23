const url = 'https://ghibliapi.herokuapp.com/films';
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let card = data;
        console.log(card)
          card.map((movie) => {
                 movie.image
                movie.title
              
               
                 movie.rt_score
                  movie.producer
                  movie.director
                  movie.description
            

          }
           console.log()
          
    //     movie.image
    //             movie.title
              
               
    //              movie.rt_score
    //               movie.producer
    //               movie.director
    //               movie.description
    // ).join("")
    //  }


    })
    .catch(function (error) {
        console.log(error);
    });
















// const filterMovies = (searchString, dataGhibli) => {
//     const search = searchString.trim().toLowerCase();
//     const data = dataGhibli.filter((movie) => {
//       return (
//         movie.title.toLowerCase().includes(search) ||
//         movie.producer.toLowerCase().includes(search) ||
//         movie.director.toLowerCase().includes(search)
//       );
//     });
  
//     return data;

//     const inputSearch = document.getElementById("search");

//     if(inputSearch){
//         inputSearch.addEventListener("keypress", (e) => {
//             const searchTitle = e.target.value;
//             console.log(searchTitle)
//             const dataFiltered = filterCharacters(searchTitle, data.films);
//         card(dataFiltered)  
//         });
//     }



  // };
  