import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, Button } from "react-native-elements";

const Following = ({
  route: {
    params: { followingData: user },
  },
}) => {
  return (
    <View style={[tw`h-full p-4`, { backgroundColor: "#f2f0e4" }]}>
      <View style={tw`flex-row justify-between items-center px-2`}>
        <Image
          style={[
            tw`mr-3 rounded-3xl`,
            {
              width: 50,
              height: 50,
            },
          ]}
          source={{ uri: user[0].photoURL }}
        />
        <View style={tw`-ml-6`}>
          <Text style={tw`flex flex-wrap items-start text-lg font-semibold`}>
            {user[0].displayName}
          </Text>
          <Text style={tw`text-sm font-normal`}> {user[0].accountId}</Text>
        </View>
        <Button
          type={"solid"}
          title={"Following"}
          // onPress={handleFollow}
          buttonStyle={{ height: 36, borderRadius: 25, borderWidth: 2 }}
          titleStyle={{ fontSize: 12, marginLeft: 2, fontWeight: "bold" }}
        />
      </View>
    </View>
  );
};

export default Following;
