import React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Container from "./Container";

const ForgotPass = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={[
          tw`z-50 p-3 rounded-full shadow-lg absolute top-16 left-4 bg-yellow-600`,
        ]}
      >
        <Icon name="arrow-back-outline" type="ionicon" color="#fff" />
      </TouchableOpacity>
      <View></View>
      <Container />
    </SafeAreaView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({});
