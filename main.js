import home from "./pages/home/home.js";
import films from "./pages/films/films.js";
import characters from "./pages/characters/characters.js";
import location from "./pages/locations/locations.js";

const main = document.querySelector('#main');


const init = () => {
    main.innerHTML = "";

    switch (window.location.hash) {
        case "":
            main.appendChild(home());
            break;
        case "#/films":
            main.appendChild(films());
            break;
        case "#/characters":
            main.appendChild(characters());
            break;
        case "#/locations":
            main.appendChild(location());
            break;
        default:
            main.appendChild(home());
    
    }
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init()
})

window.addEventListener('hashchange', () => {
    init()
});