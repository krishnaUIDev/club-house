import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

const ButtonComponent = ({ onChange, label, buttonColor }) => {
  return (
    <TouchableOpacity
      onPress={() => onChange()}
      style={[
        tw`px-4 py-2  items-center  rounded-full w-40`,
        { backgroundColor: buttonColor },
      ]}
    >
      <Text style={tw`text-white text-center text-xl`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
