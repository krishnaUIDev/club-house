import React from "react";
import { Icon } from "react-native-elements";
import ThemeHook from "../Theme/ThemeHook";

const IconComponent = (props) => {
  const theme = ThemeHook();
  return <Icon {...props} color={theme ? "#fff" : props?.color} />;
};

export default IconComponent;
