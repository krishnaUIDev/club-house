import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import firebase from "firebase";
import { Button, Avatar } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Container from "./Container";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { auth } from "../../firebase";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [profile, setProfile] = useState(null);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Camera.requestPermissionsAsync();
      return status;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        allowMultiple: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!result.cancelled) {
        setProfile(result.uri);
      }
    } catch (error) {
      console.log(error, "ERROR picImage");
    }
  };

  const handleAddProfilePic = async () => {
    const status = await getPermission();
    if (status !== "granted") {
      alert("We need Access");
      return;
    }
    pickImage();
  };

  const onSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((result) => {
        result.user.updateProfile({ displayName: name, photoURL: profile });
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <KeyboardAvoidingView enabled>
          <View style={tw`p-12 mt-24`}>
            <View style={tw`items-center h-1/4 mt-4`}>
              <TouchableOpacity onPress={handleAddProfilePic}>
                <View>
                  {!profile ? (
                    <Avatar
                      size={200}
                      rounded
                      icon={{
                        name: "camera-sharp",
                        type: "ionicon",
                        size: 42,
                      }}
                      style={[tw`h-32 w-32 bg-red-500`, { borderRadius: 200 }]}
                    />
                  ) : (
                    <Avatar
                      rounded
                      size={200}
                      source={{
                        uri: profile,
                      }}
                      style={[tw`h-32 w-32`]}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View style={tw`h-3/4`}>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="First Name"
                  onChangeText={(name) => setName(name)}
                  returnKeyType="next"
                  autoCapitalize="none"
                  keyboardType="default"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Email"
                  onChangeText={(name) => setEmail(name)}
                  returnKeyType="next"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  onChangeText={(name) => setPass(name)}
                  secureTextEntry={true}
                />
              </View>
              <View style={tw`items-center`}>
                <Button
                  title="Signup"
                  color="white"
                  buttonStyle={{
                    backgroundColor: "#57534E",
                    width: 260,
                    borderRadius: 20,
                  }}
                  onPress={onSignUp}
                />
                <Text style={tw`text-base p-2 font-extralight text-opacity-30`}>
                  {/* OR */}
                </Text>
                <Text
                  style={tw`text-lg font-semibold text-blue-500`}
                  onPress={() => navigation.navigate("forgotPass")}
                >
                  Forgot Password
                </Text>
                <Text
                  style={tw`text-xs p-4 font-normal  text-center text-opacity-30`}
                >
                  By creating an account you agree with our Terms of Use
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Container />
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    margin: 8,
  },
});
