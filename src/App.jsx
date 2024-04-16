import { useRef, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart";

function App() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <div></div>
      <Modal ref={dialogRef}>
        <Cart closeDialog={closeDialog} />
      </Modal>
      <Header handleOpenModel={openDialog} />
      <CardList />
    </>
  );
}

export default App;
