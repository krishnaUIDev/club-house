import React from "react";
import { Icon, Input } from "react-native-elements";

const InputComponent = ({ placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      inputStyle={{ fontSize: 16 }}
      //   containerStyle={{ width: 310 }}
      inputContainerStyle={{
        borderRadius: 10,
        backgroundColor: "#e3e0d7",
        height: 38,
        paddingLeft: 6,
        paddingRigt: 6,
        borderBottomWidth: 0,
      }}
      leftIcon={
        <Icon name="search-outline" type="ionicon" size={19} color="black" />
      }
    />
  );
};

export default InputComponent;
