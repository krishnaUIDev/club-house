import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, Avatar } from "react-native-elements";

const RoomCard = () => {
  return (
    <View style={tw`bg-white rounded-xl p-4 mb-4 shadow`}>
      <View style={tw`flex flex-row justify-between items-center flex-wrap`}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`text-gray-500 font-medium uppercase`}>
            Telugu house
          </Text>
          <TouchableOpacity style={tw`pl-2`}>
            <Icon size={14} name="home" type="font-awesome" color="#27ae61" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity>
            <Icon size={18} name="lock" type="font-awesome" color="#989898" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`pl-4`}>
            <Icon
              size={18}
              name="ellipsis-h"
              type="font-awesome"
              color="#989898"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={tw`font-semibold text-sm`}>
        Ekkada unna pakkanenvu unnatuu untunnadi
      </Text>
      <View style={tw`w-full flex-row pt-2`}>
        <View style={tw`w-3/12`}>
          <Avatar
            rounded
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />
        </View>
        <View style={tw`w-9/12`}>
          <View>
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-base tracking-wide`}>Krishna</Text>
              <TouchableOpacity style={tw`pl-1`}>
                <Icon
                  size={14}
                  name="commenting-o"
                  type="font-awesome"
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-base tracking-wide`}>Krishna</Text>
              <TouchableOpacity style={tw`pl-1`}>
                <Icon
                  size={14}
                  name="commenting-o"
                  type="font-awesome"
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-base tracking-wide`}>Krishna</Text>
              <TouchableOpacity style={tw`pl-1`}>
                <Icon
                  size={14}
                  name="commenting-o"
                  type="font-awesome"
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-sm text-gray-400 pr-1`}>3</Text>
              <Icon size={12} name="user" type="font-awesome" color="#9CA3AF" />
              <Text style={tw`p-1 text-gray-400`}>/</Text>
              <Text style={tw`text-sm text-gray-400 pr-1`}>3</Text>
              <Icon
                size={12}
                name="commenting"
                type="font-awesome"
                color="#9CA3AF"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoomCard;

const styles = StyleSheet.create({});