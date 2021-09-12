import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
// import BottomSheet from "../BottomSheet/BottomSheet";
import { useNavigation } from "@react-navigation/native";

const StartRoom = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex flex-row justify-between items-center px-8 mb-4`}>
      {/* <BottomSheet /> */}
      <TouchableOpacity>
        <Icon
          style={tw`pr-6`}
          size={24}
          name="keypad"
          type="ionicon"
          color="#000"
          // onPress={() => navigation.navigate("SearchScreen")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("JoinedRoom")}
        style={[
          tw`flex flex-row justify-between px-4 py-2  items-center  rounded-full w-40`,
          { backgroundColor: "#27ae61" },
        ]}
      >
        <Icon name="plus" type="font-awesome" color="white" size={16} />
        <Text style={tw`text-white text-center text-xl`}>Start a room</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          style={tw`pr-6`}
          size={24}
          name="paper-plane-o"
          type="font-awesome"
          color="#000"
          // onPress={() => navigation.navigate("SearchScreen")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StartRoom;

const styles = StyleSheet.create({});
