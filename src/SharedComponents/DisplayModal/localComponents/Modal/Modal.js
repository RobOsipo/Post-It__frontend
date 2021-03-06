import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../../../MainNavigation/localComponents/Backdrop/Backdrop";

import "./Modal.scss";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <div className={`modal__content ${props.contentClass}`}>
        {props.children}
      </div>
      <footer className={`modal__footer ${props.footerClass}`}>
        {props.footer}
      </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
