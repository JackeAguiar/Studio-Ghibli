export const filterMovies = (searchString, dataGhibli) => {
    const search = searchString.trim().toLowerCase();
    const data = dataGhibli.filter((movie) => {
        return (
            movie.title.toLowerCase().includes(search) ||
            movie.producer.toLowerCase().includes(search) ||
            movie.director.toLowerCase().includes(search)
        );
    });

    return data;
}
export const sortAZ = (data, order) => {
    const sortaz = [...data];
    if (order === "A-Z") {
        return sortaz.sort((a, z) => (a.title > z.title ? 1 : -1));
    } else {
        return sortaz.sort((a, z) => (a.title > z.title ? -1 : 1));
    }
};