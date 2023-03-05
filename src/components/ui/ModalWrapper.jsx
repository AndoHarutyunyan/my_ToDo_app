import React from "react";

const ModalWrapper = ({ children, close }) => {
  return (
    <div onClick={close} className="main_bg_modals">
      <div onClick={(e) => e.stopPropagation()} id="children">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
