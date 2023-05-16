export const fetchDrinks = async (searchTerm) => {
  try {
    const response = await fetch(
      `www.thecocktaildb.com/api/json/v1/1/search.php?${searchTerm}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    const { drinks } = data;
    return drinks;
  } catch (error) {
    console.error(error.message);
  }
};
export const fetchDrink = async (id) => {
  try {
    const response = await fetch(
      "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
