import React, { useContext } from "react";
import { currencyFormatter } from "../util/formating";
import Button from "./UI/Button";
import CartContext from "../sotre/CartContext";

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CartContext);

  const handleAddMealToCart = () => {
    addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h2>{meal.name}</h2>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
