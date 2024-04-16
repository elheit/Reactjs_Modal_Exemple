import { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      console.log("==> data", data);
      if (data.length > 1) {
        setMeals(data);
      }
      // i need to do a try list and handle errors
    }
    getMeals();
  }, []);

  return (
    <div id="meals">
      {console.log("meals", meals)}
      {meals.length === 0 && <p>loading...</p>}
      {meals &&
        meals.map((meal) => {
          return (
            <Card
              key={meal.id}
              description={meal.description}
              image={meal.image}
              name={meal.name}
              price={meal.price}
            />
          );
        })}
    </div>
  );
};

export default CardList;
