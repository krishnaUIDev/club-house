import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const Container = () => {
  return (
    <>
      <View style={[tw`absolute inset-x-0 -top-9 z-10`]}>
        <View
          style={[
            tw`absolute inset-x-0 -left-9 z-10 w-2/4 h-48 bg-yellow-500 opacity-100`,
            {
              borderRadius: "100px",
            },
          ]}
        ></View>
        <View
          style={[
            tw`absolute w-full bg-pink-600 opacity-80`,
            {
              height: 440,
              borderRadius: "200px",
              right: -100,
              top: -200,
              zIndex: 0,
            },
          ]}
        ></View>
      </View>
      <View style={tw`absolute bottom-0 pl-24 pb-8`}>
        <Text style={tw`font-semibold text-center mt-2`}>
          Created with ❤ by Krishna
        </Text>
      </View>
    </>
  );
};

export default Container;
