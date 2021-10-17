import React from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import QRCode from "react-native-qrcode-svg";
import { Avatar } from "react-native-elements";
import ButtonComponent from "../Reuse/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const QR = ({
  route: {
    params: { user },
  },
}) => {
  const navigation = useNavigation();

  return (
    <View style={[tw`h-full relative`, { backgroundColor: "#f2f0e4" }]}>
      <View style={tw`absolute left-36 top-10 z-50`}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: user?.photoURL,
          }}
        />
      </View>
      <View
        style={tw`bg-white p-4 pt-10 mt-20 shadow-lg rounded-lg flex items-center mx-8`}
      >
        <Text style={tw`text-base font-bold`}>{user?.displayName}</Text>
        <Text style={tw`text-base font-light`}>{user?.accountId}</Text>
        <View style={tw`bg-white shadow-md p-4 mt-2 rounded-lg`}>
          <QRCode
            value={user?.accountId}
            color={"#000000"}
            backgroundColor={"white"}
            size={150}
            logoMargin={2}
            logoSize={60}
            logoBorderRadius={50}
            logoBackgroundColor={"transparent"}
          />
        </View>
      </View>
      <Text style={tw`text-center p-10 text-xs font-light`}>
        Your QR code is private. if you share it with someone, they can scan it
        with their clubhouse Camera to add you as a follower
      </Text>
      <View style={tw`mt-1 flex items-center absolute inset-x-0 bottom-12`}>
        <ButtonComponent
          buttonColor="#5576ab"
          label="Scan"
          onChange={() => navigation.navigate("UserBarCodeScan", {user})}
        />
      </View>
    </View>
  );
};

export default QR;
