export default () => {
    const container = document.createElement("div");

    const template = `
    hello characters!
    `;


    container.innerHTML = template;

    return container;

}