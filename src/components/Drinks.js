import React from "react";
import { useState, useEffect, useCallback } from "react";
import Drink from "./Drink";
import Loader from "./Loader";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Drinks = () => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const fetchDrinks = useCallback(async () => {
  //   try {
  //     const response = await fetch(`${url}${searchTerm}`);
  //     const data = await response.json();
  //     console.log(data, "Hi");
  //     return data;
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, [searchTerm]);

  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        console.log(data, searchTerm, "Hi");
        const { drinks } = data;

        setLoading(false);
        return drinks;
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchDrinks().then((drinks) => setDrinks(drinks));
  }, [searchTerm]);

  const deleteDrink = async (id) => {
    try {
      const filteredDrinks = drinks.filter((drink) => drink?.idDrink !== id);
      setDrinks(filteredDrinks);
      console.log("delete drink", id, filteredDrinks);
    } catch (error) {
      console.error(error.message);
    }
  };
  // return <div style={{ marginTop: "10rem" }}>Hi</div>;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Search Your Favorite Drink</label>
            <input
              type="name"
              id="name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </section>
      <section className="section">
        <div className="section-title">cocktails</div>
        <div className="cocktails-center">
          {drinks.length ? (
            drinks.map((drink) => (
              <Drink
                drink={drink}
                key={drink?.idDrink}
                deleteDrink={deleteDrink}
              />
            ))
          ) : (
            <div>No available drinks</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Drinks;
