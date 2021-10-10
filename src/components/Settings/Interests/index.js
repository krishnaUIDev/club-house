import React from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { intersetsData } from "../../data/intersets";

const index = () => {
  const Items = ({ item: { icon, title, list } }) => {
    return (
      <View style={tw`px-4 py-2`}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`text-base`}>{icon}</Text>
          <Text style={tw`text-base font-semibold pl-1`}>{title}</Text>
        </View>
        <FlatList
          data={list}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item: { icon, title } }) => (
            <View
              style={tw`flex flex-row bg-white rounded-lg p-1 mr-1 mt-2 shadow items-center`}
            >
              <Text>{icon}</Text>
              <Text style={tw`text-sm font-semibold pl-1`}>{title}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  return (
    <View style={[tw`h-full`, { backgroundColor: "#f2f0e4" }]}>
      <Text style={tw`text-center text-sm text-gray-700`}>
        Add your interests so we can begin {"\n"} to personalize Clubhouse for
        you. {"\n"} Interests are private to you
      </Text>
      <FlatList
        data={intersetsData}
        keyExtractor={(item) => item.id}
        renderItem={Items}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default index;
