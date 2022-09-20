export default () => {

    const container = document.createElement("div");
    container.classList.add("containerMain");

    const template = `
    <img src="logo.svg"/>

    <section class="text">
    <h1>Studio Ghibli’s Origins</h1><br>

    <p>Studio Ghibli was founded in 1985 by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, but Miyazaki and Takahata have a relationship that far predates this.</p>
    <p>The pair first worked together in 1964, marking the beginning of a collaborative relationship that would carry on throughout their careers. They had both worked on numerous Japanese movies and television shows up until 1984, when Nausicaä of the Valley of the Wind, the first original feature film that Hayao Miyazaki directed, became both a box office and critical success.</p>
    <p>While Nausicaä isn’t an actual Studio Ghibli production, it is unmistakably Miyazaki and displays some of the hallmarks that partly define his style. It conveys a strong pro-environmental message and has a heroine at the center of the story, both things that he comes back to throughout his future films.</p>   
    <p>Toshio Suzuki was part of the production team on Nausicaä. Buoyed by the film’s performance, Miyazaki and Suzuki decided to set up their own studio and invited Takahata to join them. Tokuma-Shoten, the Tokyo-based publishing company, provided the necessary funding to found Studio Ghibli, and so a journey was started that would result in 21 feature films and a reputation as one of the world’s best animation studios. Putting it like this makes it sound like it was a straight line to success, but it wasn’t quite that straightforward.</p>

    </section>
    
    `;


    container.innerHTML = template;

    return container;

}