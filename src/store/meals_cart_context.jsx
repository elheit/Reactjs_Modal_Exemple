import { createContext, useReducer } from "react";

export const MealsContext = createContext({
  meals: [],
  addMealToCart: () => {},
  nbrCartMeals: 0,
  incrementCount: () => {},
  decrementCount: () => {},
  totalAmount: 0,
});

function CartMealsReducer(state, action) {
  if (action.type === "addMealToCart") {
    const mealExistIndex = state.meals.findIndex(
      (item) => item.id === action.payload.id
    );
    console.log("action", action);
    if (mealExistIndex !== -1) {
      const newMeals = [...state.meals];
      newMeals[mealExistIndex] = {
        ...newMeals[mealExistIndex],
        count: newMeals[mealExistIndex].count + 1,
      };
      return { ...state, meals: [...newMeals] };
    }
    action.payload = { ...action.payload, count: 1 };
    return { ...state, meals: [...state.meals, action.payload] };
  }
  if (action.type === "incrementCount") {
    const mealExistIndex = state.meals.findIndex(
      (item) => item.id === action.payload
    );
    if (mealExistIndex !== -1) {
      const newMeals = [...state.meals];
      newMeals[mealExistIndex] = {
        ...newMeals[mealExistIndex],
        count: newMeals[mealExistIndex].count + 1,
      };
      return { ...state, meals: [...newMeals] };
    }
  }
  if (action.type === "decrementCount") {
    const mealExistIndex = state.meals.findIndex(
      (item) => item.id === action.payload
    );
    if (mealExistIndex !== -1) {
      const newMeals = [...state.meals];
      if (newMeals[mealExistIndex].count <= 1) {
        newMeals.splice(mealExistIndex, 1);
      } else {
        newMeals[mealExistIndex] = {
          ...newMeals[mealExistIndex],
          count: newMeals[mealExistIndex].count - 1,
        };
      }
      return { ...state, meals: [...newMeals] };
    }
  }
  return state;
}

export default function MealsContextProvider({ children }) {
  const [mealsCartState, mealsCartDispatch] = useReducer(CartMealsReducer, {
    meals: [],
  });

  function addMealToCart(meal) {
    mealsCartDispatch({
      type: "addMealToCart",
      payload: meal,
    });
  }
  function incrementCount(id) {
    mealsCartDispatch({
      type: "incrementCount",
      payload: id,
    });
  }
  function decrementCount(id) {
    mealsCartDispatch({
      type: "decrementCount",
      payload: id,
    });
  }

  const totalAmount = mealsCartState.meals.reduce(
    (total, meal) => total + meal.price * meal.count,
    0
  );
  const ctxValue = {
    meals: mealsCartState.meals,
    addMealToCart: addMealToCart,
    nbrCartMeals: mealsCartState.meals.length,
    incrementCount,
    decrementCount,
    totalAmount,
  };

  return (
    <MealsContext.Provider value={ctxValue}>{children}</MealsContext.Provider>
  );
}
