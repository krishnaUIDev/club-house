import React from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Input } from "react-native-elements";
import ButtonComponent from "../Reuse/ButtonComponent";

const UpdateUser = () => {
  return (
    <View
      style={[
        tw`h-full flex items-center px-3`,
        { backgroundColor: "#f2f0e4" },
      ]}
    >
      <Text style={tw`text-xl font-semibold`}>Correct your full name?</Text>
      <View style={tw`flex flex-row mx-24 mt-8`}>
        <Input
          placeholder="first name"
          inputContainerStyle={{
            borderRadius: 4,
            backgroundColor: "#ffff",
            height: 38,
            paddingLeft: 6,
            paddingRigt: 6,
            borderBottomWidth: 0,
          }}
        />
        <Input
          placeholder="last name"
          inputContainerStyle={{
            borderRadius: 4,
            backgroundColor: "#ffff",
            height: 38,
            paddingLeft: 6,
            paddingRigt: 6,
            borderBottomWidth: 0,
          }}
        />
      </View>
      <Text style={tw`text-sm text-gray-500`}>
        People use real names on Clubhouse
      </Text>
      <ButtonComponent buttonColor="#5576ab" label="Update" />
    </View>
  );
};

export default UpdateUser;
