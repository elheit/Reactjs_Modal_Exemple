import { createContext, useState } from "react";

export const MealsContext = createContext({
  meals: [],
  addMealToCart: () => {},
  nbrCartMeals: 0,
});

export default function MealsContextProvider({ children }) {
  const [mealsCart, setMealsCart] = useState({
    meals: [],
  });
  function addMealToCart(meal) {
    setMealsCart((prev) => {
      const mealExistIndex = prev.meals.findIndex(
        (item) => item.id === meal.id
      );
      if (mealExistIndex !== -1) {
        const newMeals = [...prev.meals];
        newMeals[mealExistIndex] = {
          ...newMeals[mealExistIndex],
          count: newMeals[mealExistIndex].count + 1,
        };
        return { ...prev, meals: [...newMeals] };
      }
      meal = { ...meal, count: 1 };
      return { ...prev, meals: [...prev.meals, meal] };
    });
  }

  const ctxValue = {
    meals: mealsCart.meals,
    addMealToCart: addMealToCart,
    nbrCartMeals: mealsCart.meals.length,
  };

  return (
    <MealsContext.Provider value={ctxValue}>{children}</MealsContext.Provider>
  );
}
