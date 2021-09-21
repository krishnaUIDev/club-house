import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";

const SignIn = () => {
  const navigation = useNavigation();
  const [phoneNumber, addPhoneNumber] = useState("+1");

  const GetOTP = () => {
    if (phoneNumber && phoneNumber.length > 9) {
      navigation.navigate("OtpScreen", { phoneNumber });
    } else alert("Please enter 10 digit phone number");
  };
  return (
    <View style={[tw`flex-1 px-14 `, { backgroundColor: "#f2f0e4" }]}>
      <Text style={tw`text-xl text-gray-700 text-center`}>
        Sign in with your phone #
      </Text>

      <TextInput
        value={phoneNumber}
        style={{
          height: 50,
          width: 300,
          paddingLeft: 20,
          backgroundColor: "azure",
          fontSize: 20,
        }}
        placeholder="+91 1234567890"
        onChangeText={(text) => addPhoneNumber(text)}
      />
      <Pressable onPress={GetOTP}>
        <Text>Get OTP!</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
