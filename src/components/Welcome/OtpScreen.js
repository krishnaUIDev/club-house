import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import { auth, phoneAuthProvider } from "../../firebase";
import firebase from "firebase";
import Constants from "expo-constants";

const OtpScreen = ({
  route: {
    params: { phoneNumber },
  },
  navigation,
}) => {
  const [otpArray, setOtpArray] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [verificationId, setVerificationId] = useState(null);
  useEffect(() => {
    sendVerification();
  }, []);

  const recaptchaVerifier = React.useRef(null);

  const sendVerification = () => {
    const phoneProvider = phoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };

  const confirmCode = () => {
    const credential = phoneProvider.credential(verificationId, code);
    auth.signInWithCredential(credential).then((result) => {
      console.log(result);
    });
  };

  const onOtpChange = (e) => setOtpArray(e);

  return (
    <SafeAreaView>
      {/* <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={Constants.manifest.extra.firebase}
      /> */}
      <TextInput
        value={otpArray}
        style={{
          height: 50,
          width: 300,
          paddingLeft: 20,
          backgroundColor: "azure",
          fontSize: 20,
        }}
        onChangeText={(e) => onOtpChange(e)}
      />
      <Pressable onPress={() => confirmCode()}>
        <Text>Get OTP!</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
