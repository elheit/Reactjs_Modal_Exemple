import { useRef } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart";
import MealsContextProvider from "./store/meals_cart_context";

function App() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <MealsContextProvider>
      <Modal ref={dialogRef}>
        <Cart closeDialog={closeDialog} />
      </Modal>
      <Header handleOpenModel={openDialog} />
      <CardList />
    </MealsContextProvider>
  );
}

export default App;
