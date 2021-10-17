import React, { useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import CreateRoom from "./CreateRoom";
import { showMessage, hideMessage } from "react-native-flash-message";
import IconComponent from "../Reuse/IconComponent";

const StartRoom = ({ theme }) => {
  const roomRef = useRef(null);
  const onOpen = () => roomRef.current?.open();
  const navigation = useNavigation();
  return (
    <View>
      <View style={tw`flex flex-row justify-between items-center px-8 mb-4`}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <IconComponent
            style={tw`pr-6`}
            size={24}
            name="keypad"
            type="ionicon"
            color="#000"

            // onPress={() => {
            //   /* HERE WE GONE SHOW OUR FIRST MESSAGE */
            //   showMessage({
            //     message: "Simple message",
            //     type: "success",
            //     // backgroundColor: "#27ae61",
            //   });
            // }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onOpen}
          style={[
            tw`flex flex-row justify-between px-4 py-2  items-center  rounded-full w-40`,
            { backgroundColor: "#27ae61" },
          ]}
        >
          <IconComponent
            name="plus"
            type="font-awesome"
            color="white"
            size={16}
          />
          <Text style={tw`text-white text-center text-xl`}>Start a room</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconComponent
            style={tw`pr-6`}
            size={24}
            name="paper-plane-o"
            type="font-awesome"
            color="#000"
            onPress={() => navigation.navigate("chatStack")}
          />
        </TouchableOpacity>
      </View>
      <CreateRoom roomRef={roomRef} />
    </View>
  );
};

export default StartRoom;
