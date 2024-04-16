import { forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  return createPortal(
    <dialog className="modal cart" ref={ref}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
