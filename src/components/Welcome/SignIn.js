import React, { useState, createRef, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import Container from "./Container";
import { auth } from "../../firebase";

const SignIn = () => {
  const navigation = useNavigation();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState({});
  const [error, setError] = useState("");

  const passwordInputRef = createRef();

  useEffect(() => {
    setUserEmail("");
    setUserPassword("");
    setErrortext({});
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("HomeStack");
      }
    });
    return unsubscribe();
  }, []);

  const handleSubmitPress = () => {
    if (userEmail === "" && userPassword === "") {
      setErrortext({
        emailError: "Please enter email",
        passWordError: "Please enter password",
      });
    }
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((result) => {
        navigation.replace("HomeStack");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={tw`flex-1`}>
      <View style={tw`mt-60`}>
        <Text style={tw`text-2xl text-black text-center font-semibold`}>
          Welcome Back!
        </Text>
      </View>
      <View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            placeholder="Enter Email"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            placeholder="Enter Password" //12345
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        {errortext ? (
          <Text style={styles.errorTextStyle}>{errortext?.emailError}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleSubmitPress}
        >
          <Text style={styles.buttonTextStyle}>Sign In</Text>
        </TouchableOpacity>
        <Text
          style={tw`text-sm text-black text-center font-medium`}
          onPress={() => navigation.navigate("signup")}
        >
          New to TaxiApp ? <Text style={{ color: "#ec5882" }}> Sign Up</Text>
        </Text>
      </View>
      <Container />
    </KeyboardAvoidingView>
  );
};
export default SignIn;

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
