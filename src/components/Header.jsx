import HeaderLogo from "../assets/logo.jpg";

const Header = ({ handleOpenModel }) => {
  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={HeaderLogo} alt="Header Logo" />
          <h1>ELHEITFOOD</h1>
        </div>
        <button onClick={handleOpenModel}>Cart(0)</button>
      </div>
    </>
  );
};

export default Header;
