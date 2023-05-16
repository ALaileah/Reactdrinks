import React, { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Loader from "./Loader";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const DrinkDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktailDetail, setCocktailDetail] = useState(null);
  // const fetchDetail = useCallback(async (id) => {
  //   try {
  //     const response = await fetch(`${url}${id}`);
  //     const data = await response.json();
  //     console.log(data, "try");
  //     const { drinks } = data;
  //     return drinks;
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, []);
  useEffect(() => {
    setLoading(true);
    const fetchDetail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data, "try");
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
          } = data.drinks[0];
          const newDrinks = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
          };
          setCocktailDetail(newDrinks);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (!cocktailDetail) {
    return <h2 className="sec2tion-title">oops no cocktail</h2>;
  }
  const { name, image, info, category, glass, instructions } = cocktailDetail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h1 className="section-title">{name}</h1>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  );
};
export default DrinkDetail;
