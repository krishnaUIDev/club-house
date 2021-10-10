// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import tw from "tailwind-react-native-classnames";

// function HomeScreen() {
//   return (
//     <View style={tw`h-full`}>
//       <Text>Home!</Text>
//       <Text>Home!</Text>
//       <Text>Home!</Text>
//       <Text>Home!</Text>
//       <Text>Home!</Text>
//       <Text>Home!</Text>
//       <Text>Home!</Text>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function MyTabs() {
//   const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// const index = () => {
//   return (
//     <View style={tw`absolute inset-x-0 bottom-0`}>
//       <MyTabs />
//     </View>
//   );
// };

// export default index;

import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Charts() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Requests() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
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
        component={Charts}
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

export default function Index() {
  return <MyTabs />;
}
