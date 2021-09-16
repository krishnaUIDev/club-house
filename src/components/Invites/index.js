import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, Input } from "react-native-elements";
import InputComponent from "../Reuse/InputComponent";

const Invites = () => {
  return (
    <View style={[tw`h-full p-2 pt-4`, { backgroundColor: "#f2f0e4" }]}>
      <Text style={tw`text-center text-base text-gray-700`}>
        Who's great addition to Clubhouse? {"\n"} You'll get credit for the
        invite on their profile!
      </Text>
      <View style={tw`flex-row justify-between items-center px-2 py-8 `}>
        <InputComponent placeholder="Invite a phone #" />
        <Icon name="address-book-o" type="font-awesome" color="black" />
      </View>

      <View style={tw`bg-white rounded-xl p-4 mx-8 my-2 shadow items-center`}>
        <View style={tw`flex-row relative`}>
          <View style={tw`absolute top-2 pr-4 right-10`}>
            <Icon size={6} name="star" type="font-awesome" color="#FBBF24" />
          </View>
          <View style={tw`absolute top-0 pr-4 right-6`}>
            <Icon size={8} name="star" type="font-awesome" color="#FBBF24" />
          </View>
          <View style={tw`absolute top-1 pr-4 right-2`}>
            <Icon size={10} name="star" type="font-awesome" color="#FBBF24" />
          </View>
          <Icon size={18} name="search" type="font-awesome" color="#9CA3AF" />
          <View style={tw`absolute left-3 bottom-2`}>
            <Icon size={12} name="star" type="font-awesome" color="#FBBF24" />
          </View>
        </View>
        <Text style={tw`font-semibold text-lg`}>Let's find your friends!</Text>
        <Text style={tw`font-normal py-3 pb-6 text-center`}>
          We'll show you who's already here {"\n"} and notify you when new
          friends join
        </Text>
        <View style={tw`bg-gray-200 rounded-full px-3 py-1`}>
          <Text style={tw`font-semibold text-xs`}>
            Search using my contacts
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Invites;

const styles = StyleSheet.create({});
