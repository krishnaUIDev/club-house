import React from "react";
import { FlatList, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const Conversation = ({ icon, title, list }) => {
  return (
    <View style={tw`bg-white rounded-lg p-2 mb-4 shadow`}>
      <View style={tw`flex flex-row items-center`}>
        <Text>{icon}</Text>
        <Text style={tw`text-sm font-semibold pl-1`}>{title}</Text>
      </View>
      {/* <FlatList
        data={list}
        keyExtractor={(item) => item.title}
        // horizontal={false}
        //numColumns={2}
        renderItem={({ item: { title } }) => (
          <Text style={tw`text-xs text-gray-600`}>{title}</Text>
        )}
      /> */}
      {/* <Text style={tw`text-xs text-gray-600`}>{list}</Text> */}
    </View>
  );
};

export default Conversation;
