import React from "react";
import { Link } from "react-router-dom";

const Drink = ({ drink, deleteDrink }) => {
  return (
    <article className="cocktail">
      <div className="cocktail-img">
        <img src={drink?.strDrinkThumb} alt="drinks" />
      </div>
      <div className="cocktail-footer">
        <h3>{drink?.strAlcoholic}</h3>
        <h4>{drink?.strGlass}</h4>
        <button onClick={() => deleteDrink(drink?.idDrink)}>
          Delete Drink
        </button>
        <Link to={`/drink/${drink?.idDrink}`}>
          <button className="btn btn-primary btn-details">Detail</button>
        </Link>
      </div>
    </article>
  );
};

export default Drink;
