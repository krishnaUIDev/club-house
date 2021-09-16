import React from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { intersetsData } from "../../data/intersets";

const index = () => {
  return (
    <View style={[tw`h-full`, { backgroundColor: "#f2f0e4" }]}>
      <Text style={tw`text-center text-sm text-gray-700`}>
        Add your interests so we can begin {"\n"} to personalize Clubhouse for
        you. {"\n"} Interests are private to you
      </Text>
      <FlatList
        data={intersetsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { icon, title, list } }) => (
          <View style={tw`px-4 py-3`}>
            <View style={tw`flex flex-row items-center`}>
              <Text>{icon}</Text>
              <Text style={tw`text-sm font-semibold pl-1`}>{title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default index;
