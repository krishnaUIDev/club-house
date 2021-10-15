import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./Chats";

function Requests() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
        },
        tabBarIcon: () => null,
        tabBarInactiveBackgroundColor: "#f9f9f9",
      }}
    >
      <Tab.Screen
        name="chats"
        component={Chats}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
