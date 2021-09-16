import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createStackNavigator } from "@react-navigation/stack";
import Interests from "./Interests";

const Stack = createStackNavigator();

const index = () => {
  return (
    <View>
      <Text>test</Text>
      {/* <Interests /> */}
    </View>
  );
};

// const index = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="settingsStack"
//         component={Settings}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

export default index;
