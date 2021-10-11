import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../slices/userSlice";
import { auth } from "../../firebase";
import { Button } from "react-native-elements";

const EditDP = () => {
  const [profile, setProfile] = useState(null);
  const user = useSelector(getUserDetails);

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
            uri: profile ? profile : user?.image,
          }}
          style={[tw`rounded-full h-36 w-36 mt-20`]}
        />
      </TouchableOpacity>
      <View style={tw`mt-10`}>
        <Button
          title="Done"
          containerStyle={{ width: 120, borderRadius: 25 }}
          disabled={profile === null}
        />
      </View>
    </View>
  );
};

export default EditDP;
