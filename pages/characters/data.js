export const filterCharacters = (searchString, dataGhibli) => {
    const search = searchString.trim().toLowerCase();
    const data = dataGhibli.filter((people) => {
        return (
            people.name.toLowerCase().includes(search) ||
            people.age.toLowerCase().includes(search) ||
            people.hair_color.toLowerCase().includes(search)
        );
    });

    return data;
}

export const sortAZ = (data, order) => {
    const sortaz = [...data];
    if (order === "A-Z") {
        return sortaz.sort((a, z) => (a.name > z.name ? 1 : -1));
    } else {
        return sortaz.sort((a, z) => (a.name > z.name ? -1 : 1));
    }
};