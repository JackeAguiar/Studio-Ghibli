import home from "./pages/home/home.js";
import films from "./pages/films/films.js";
import characters from "./pages/characters/characters.js";
import location from "./pages/locations/locations.js";

let main = document.getElementById('main');

const init = () => {
    window.addEventListener('hashchange', async() => {
        main.innerHTML = " ";
        switch (window.location.hash) {
            case " ":
                main.appendChild(home());
                break;
            case "#/films":
                main.appendChild(await films());
                break;
            case "#/characters":
                main.appendChild(await characters());
                break;
            case "#/locations":
                main.appendChild(await location());
                break;
            default:
                main.appendChild(home());

        }

    })
}


window.addEventListener("load", () => {
    window.location.hash = ""
    main.appendChild(home());
    init()
})
