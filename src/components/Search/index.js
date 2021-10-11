import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { auth } from "../../firebase";
import { intersetsData } from "../data/intersets";
import InputComponent from "../Reuse/InputComponent";
import Conversation from "./Conversation";
import firebase from "firebase/app";
import "firebase/database";

const Index = () => {
  return (
    <View style={[tw``, { backgroundColor: "#f2f0e4" }]}>
      <InputComponent placeholder="Find People and Clubs" />
      <View style={tw`px-4`}>
        <Text style={tw`text-sm font-semibold text-gray-500`}>
          FIND CONVERSATIONS ABOUT...
        </Text>

        <FlatList
          data={intersetsData}
          keyExtractor={(item) => item.id}
          // horizontal={false}
          numColumns={2}
          renderItem={({ item: { icon, title, list } }) => (
            <View style={tw`mr-3 w-40`}>
              <Conversation icon={icon} title={title} list={list} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Index;
