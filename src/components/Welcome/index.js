import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        tw`flex items-center justify-center h-full relative`,
        { backgroundColor: "#f2f0e4" },
      ]}
    >
      <Icon
        name="hand-sparkles"
        size={36}
        type="font-awesome-5"
        color="#517fa4"
      />
      <Text
        style={[
          tw`font-extrabold text-opacity-25`,
          { color: "#454237", fontSize: 45 },
        ]}
      >
        Clubhouse
      </Text>
      <View style={tw`absolute inset-x-0 bottom-4 h-28 items-center`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={[
            tw`flex flex-row justify-between px-4 py-3  items-center  rounded-full w-48`,
            { backgroundColor: "#5576ab" },
          ]}
        >
          <Text style={tw`text-white text-center text-xl`}>🎉 Welcome in!</Text>
          <Icon
            name="long-arrow-right"
            type="font-awesome"
            color="white"
            size={16}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
