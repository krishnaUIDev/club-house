import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const index = () => {
  const navigation = useNavigation();

  const createAlert = () =>
    Alert.alert(
      "Clubhouse is for real names",
      "You can fix your legal name or add an optional creator alias if you are a puglic figure. This can only be changed once in a while",
      [
        {
          text: "Correct my legal name...",
          onPress: () => navigation.navigate("changeUser"),
        },
        {
          text: "Add my creator alias...",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Never mind",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f0e4" }}>
      <View style={tw`flex-row justify-between px-3`}>
        <TouchableOpacity>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color="#000"
            size={30}
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </TouchableOpacity>
        <View style={tw`flex flex-row content-center`}>
          <Icon
            style={tw`pr-6`}
            size={30}
            name="share-outline"
            type="ionicon"
            color="#000"
          />
          <Icon
            size={30}
            name="cog-outline"
            type="ionicon"
            color="#000"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
      </View>
      <View style={[tw`flex h-full px-6 py-4`]}>
        <TouchableOpacity onPress={() => navigation.navigate("EditImage")}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            }}
            style={[tw`rounded-3xl h-24 w-24`]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={createAlert}>
          <Text style={tw`text-lg font-bold pt-2`}>Krishna</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("user")}>
          <Text style={tw`text-base font-normal pb-6`}>@Krishna</Text>
        </TouchableOpacity>
        <View style={tw`flex-row pb-6`}>
          <TouchableOpacity onPress={() => navigation.navigate("followers")}>
            <Text style={tw`pr-6 text-base font-semibold`}>23 followers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("following")}>
            <Text style={tw`pr-6 text-base font-semibold`}>23 following</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`pb-6`}>
          <Text style={tw`text-base font-normal py-2`}>
            Hello I am new Here
          </Text>
        </View>
        <View style={tw`flex-row items-center pb-6`}>
          <View style={tw`flex-row items-center`}>
            <Icon name="twitter" type="font-awesome" color="#5576aa" />
            <Text style={tw`pr-6 pl-1 text-base text-indigo-800`}>
              Add Twitter
            </Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Icon name="instagram" type="font-awesome" color="#5576aa" />
            <Text style={[tw`pl-1 text-base text-indigo-800`]}>
              Add Instagram
            </Text>
          </View>
        </View>
        <View style={tw`flex-row items-center pb-6`}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            }}
            style={[tw`rounded-3xl h-12 w-12 mr-3`]}
          />
          <View>
            <Text style={tw`text-sm`}>Joined on</Text>
            <Text style={tw`text-base font-normal`}>Nominated By</Text>
          </View>
        </View>
        <View>
          <Text style={tw`text-sm font-semibold`}>Member of</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
