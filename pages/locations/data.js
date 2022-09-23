export const filterLocation = (searchString, dataGhibli) => {
    const search = searchString.trim().toLowerCase();
    const data = dataGhibli.filter((location) => {
      return (
        location.name.toLowerCase().includes(search) ||
        location.climate.toLowerCase().includes(search) ||
        location.terrain.toLowerCase().includes(search)
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
