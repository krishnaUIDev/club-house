import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
} from "react-native";
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
    <KeyboardAvoidingView enabled behavior="padding" style={tw`flex-1`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={[
          tw`z-50 p-3 rounded-full shadow-lg absolute top-16 left-4 bg-yellow-600`,
        ]}
      >
        <Icon name="arrow-back-outline" type="ionicon" color="#fff" />
      </TouchableOpacity>
      <View style={tw`mt-60`}>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            // onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            placeholder="Enter Email"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            // onSubmitEditing={() =>
            //   passwordInputRef.current && passwordInputRef.current.focus()
            // }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => reset("krishn.kondoju007@gmail.com")}
        >
          <Text style={styles.buttonTextStyle}>Send</Text>
        </TouchableOpacity>
      </View>
      <Container />
    </KeyboardAvoidingView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 8,
  },
  buttonStyle: {
    backgroundColor: "#ec5882",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#ec5882",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
