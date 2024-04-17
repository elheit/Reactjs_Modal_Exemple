import { createContext, useState } from "react";

export const MealsContext = createContext({
  meals: [],
  addMealToCart: () => {},
  nbrCartMeals: 0,
  incrementCount: () => {},
  decrementCount: () => {},
  totalAmount: 0,
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
  function incrementCount(id) {
    setMealsCart((prev) => {
      const mealExistIndex = prev.meals.findIndex((item) => item.id === id);
      if (mealExistIndex !== -1) {
        const newMeals = [...prev.meals];
        newMeals[mealExistIndex] = {
          ...newMeals[mealExistIndex],
          count: newMeals[mealExistIndex].count + 1,
        };
        return { ...prev, meals: [...newMeals] };
      }
    });
    console.log("id", id);
  }
  function decrementCount(id) {
    setMealsCart((prev) => {
      const mealExistIndex = prev.meals.findIndex((item) => item.id === id);
      if (mealExistIndex !== -1) {
        const newMeals = [...prev.meals];
        if (newMeals[mealExistIndex].count <= 1) {
          newMeals.splice(mealExistIndex, 1);
        } else {
          newMeals[mealExistIndex] = {
            ...newMeals[mealExistIndex],
            count: newMeals[mealExistIndex].count - 1,
          };
        }
        return { ...prev, meals: [...newMeals] };
      }
    });
    console.log("id", id);
  }

  const totalAmount = mealsCart.meals.reduce(
    (total, meal) => total + meal.price * meal.count,
    0
  );
  const ctxValue = {
    meals: mealsCart.meals,
    addMealToCart: addMealToCart,
    nbrCartMeals: mealsCart.meals.length,
    incrementCount,
    decrementCount,
    totalAmount,
  };

  return (
    <MealsContext.Provider value={ctxValue}>{children}</MealsContext.Provider>
  );
}
