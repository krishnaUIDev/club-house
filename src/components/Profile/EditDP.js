import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { auth, db } from "../../firebase";
import { Button } from "react-native-elements";
import AuthHook from "../customHook/AuthHook";
import { useNavigation } from "@react-navigation/native";

const EditDP = () => {
  const [profile, setProfile] = useState(null);
  const user = AuthHook();
  const navigation = useNavigation();

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

  const handleUpdate = () => {
    db.collection("users")
      .doc(auth?.currentUser?.uid)
      .update({ photoURL: profile })
      .then(() => {
        Alert.alert(
          "Profile Updated!",
          "Your profile has been updated successfully.",
          [{ text: "OK", onPress: () => navigation.navigate("Profile") }]
        );
      });
  };
  return (
    <View
      style={[
        tw`h-full p-2 pt-4 flex items-center`,
        { backgroundColor: "#f2f0e4" },
      ]}
    >
      <Text style={tw`text-xl font-normal`}>Change your photo</Text>
      <TouchableOpacity onPress={handleAddProfilePic}>
        <Image
          source={{
            uri: profile ? profile : user?.photoURL,
          }}
          style={[tw`rounded-full h-36 w-36 mt-20`]}
        />
      </TouchableOpacity>
      <View style={tw`mt-10`}>
        <Button
          title="Done"
          containerStyle={{ width: 120, borderRadius: 25 }}
          disabled={profile === null}
          onPress={() => handleUpdate()}
        />
      </View>
    </View>
  );
};

export default EditDP;
