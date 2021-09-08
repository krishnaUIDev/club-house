import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const SignIn = () => {
  return (
    <View style={[tw`flex-1 px-14 `, { backgroundColor: "#f2f0e4" }]}>
      <Text style={tw`text-xl text-gray-700 text-center`}>
        Sign in with your phone #
      </Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
