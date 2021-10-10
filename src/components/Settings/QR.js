import React from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import QRCode from "react-native-qrcode-svg";
import { Avatar } from "react-native-elements";

const QR = () => {
  return (
    <View style={[tw`h-full relative`, { backgroundColor: "#f2f0e4" }]}>
      <View style={tw`absolute left-36 top-10 z-50`}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
      </View>
      <View
        style={tw`bg-white p-4 pt-10 mt-20 shadow-xl rounded-lg flex items-center mx-8`}
      >
        <Text>Krishna</Text>
        <Text>Clubhouse account</Text>
        <View style={tw`bg-white shadow-md p-4 rounded-lg`}>
          <QRCode
            value="some string value"
            color={"#000000"}
            backgroundColor={"white"}
            size={150}
            logo={require("../../../assets/icon.png")}
            logoMargin={2}
            logoSize={60}
            logoBorderRadius={50}
            logoBackgroundColor={"transparent"}
          />
        </View>
      </View>
      <Text>
        Your QR code is private. if you share it with someone, they can scan it
        with their clubhouse Camera to add you as a follower
      </Text>
    </View>
  );
};

export default QR;
