import { useContext } from "react";
import HeaderLogo from "../assets/logo.jpg";
import { MealsContext } from "../store/meals_cart_context";

const Header = ({ handleOpenModel }) => {
  const { nbrCartMeals } = useContext(MealsContext);
  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={HeaderLogo} alt="Header Logo" />
          <h1>ELHEITFOOD</h1>
        </div>
        <button onClick={handleOpenModel}>{`Cart(${nbrCartMeals})`}</button>
      </div>
    </>
  );
};

export default Header;
