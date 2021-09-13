import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import RoomCard from "../RoomCard";
import StartRoom from "./StartRoom";

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={[tw`relative flex-1`, { backgroundColor: "#f2f0e4" }]}>
      <View style={tw`p-6`}>
        <TouchableOpacity onPress={() => navigation.navigate("JoinedRoom")}>
          <RoomCard />
        </TouchableOpacity>
      </View>

      <View style={tw`absolute inset-x-0 bottom-4 h-16`}>
        <StartRoom />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
