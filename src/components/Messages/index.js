import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "tailwind-react-native-classnames";

function HomeScreen() {
  return (
    <View style={tw`h-full`}>
      <Text>Home!</Text>
      <Text>Home!</Text>
      <Text>Home!</Text>
      <Text>Home!</Text>
      <Text>Home!</Text>
      <Text>Home!</Text>
      <Text>Home!</Text>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const index = () => {
  return (
    <View style={tw`absolute inset-x-0 bottom-0`}>
      <MyTabs />
    </View>
  );
};

export default index;
