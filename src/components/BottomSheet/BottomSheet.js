import React from "react";
import { Modalize } from "react-native-modalize";

const Modal = ({ close, children, refModal }) => {
  return (
    <Modalize
      onBackButtonPress={close}
      ref={refModal}
      modalHeight={400}
      handlePosition="inside"
      handleStyle={{
        opacity: 1,
      }}
      overlayStyle={{
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
      dialogStyle={{ position: "absolute", bottom: 0 }}
    >
      {children}
    </Modalize>
  );
};

export default Modal;
