import React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { auth } from "../../firebase";
import Container from "./Container";

const ForgotPass = ({ navigation }) => {
  const reset = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      alert(
        "There is no user record corresponding to this identifier. The user may have been deleted"
      );
    }
  };
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
      <View style={tw`mt-36`}>
        <Button
          onPress={() => reset("krishn.kondoju007@gmail.com")}
          title="test"
        />
      </View>
      <Container />
    </SafeAreaView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({});
