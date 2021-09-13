import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Member = ({ name, image, admin }) => {
  return (
    <View style={tw`pr-8`}>
      <TouchableOpacity>
        <Image
          source={{
            uri: image,
          }}
          style={[tw`rounded-3xl h-20 w-20`]}
        />
      </TouchableOpacity>
      <View style={tw`flex-row items-center p-2`}>
        {admin && (
          <Icon
            name="certificate"
            type="font-awesome"
            size={16}
            color="#37b168"
          />
        )}
        <Text style={tw`text-sm font-semibold`}>{name}</Text>
      </View>
    </View>
  );
};

export default Member;

const styles = StyleSheet.create({});
