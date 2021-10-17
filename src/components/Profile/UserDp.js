import React from "react";
import { StyleSheet, Image, View, SafeAreaView, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";

const UserDp = ({ photoURL }) => {
  return (
    <SafeAreaView
      style={[
        tw`flex-1 items-center bg-gray-300 bg-opacity-100`,
        {
          justifyContent: "center",
          opacity: 0.91,
        },
      ]}
    >
      <Image
        source={{
          uri: photoURL,
        }}
        style={[tw`rounded-full h-72 w-72`, { opacity: 1 }]}
      />
    </SafeAreaView>
  );
};

export default UserDp;

const styles = StyleSheet.create({});
