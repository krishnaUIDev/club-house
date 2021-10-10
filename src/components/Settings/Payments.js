import React from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ListItem } from "react-native-elements";

const Payments = () => {
  return (
    <View style={[tw`h-full`, { backgroundColor: "#f2f0e4" }]}>
      <Text style={tw`text-center text-sm text-gray-700`}>
        Give your audience and others easy access to {"\n"} send you money. To
        start, create account {"\n"}with Stripe, out payment parter.
      </Text>
      <View style={tw`px-4 py-2`}>
        <ListItem bottomDivider onPress={() => {}}>
          <ListItem.Content>
            <ListItem.Title>Payment Account</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </View>
  );
};

export default Payments;
