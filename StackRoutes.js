import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Home from "./src/components/Home";
import Search from "./src/components/Search";
import Invites from "./src/components/Invites";

const Stack = createStackNavigator();

// const Auth = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="loginScreen"
//         component={Login}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="RegisterScreen"
//         component={Signup}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ForgotScreen"
//         component={ForgotPass}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        // headerStyle: { shadowColor: "#f2f0e4", elevation: 0 },
        headerStyle: {
          backgroundColor: "#f2f0e4",
          shadowColor: "#f2f0e4",
          elevation: 0,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: "",
          headerLeft: () => (
            <Icon
              name="search-outline"
              type="ionicon"
              color="#000"
              size={28}
              style={tw`pl-4`}
              onPress={() => navigation.navigate("SearchScreen")}
            />
          ),
          headerRight: () => (
            <View style={tw`flex flex-row content-center`}>
              <Icon
                style={tw`pr-6`}
                size={28}
                name="mail-open-outline"
                type="ionicon"
                color="#000"
                onPress={() => navigation.navigate("InvitesScreen")}
              />
              <Icon
                style={tw`pr-6`}
                size={28}
                name="calendar-outline"
                type="ionicon"
                color="#000"
              />
              <Icon
                style={tw`pr-6`}
                size={28}
                name="notifications-outline"
                type="ionicon"
                color="#000"
              />
              <Icon
                style={tw`pr-6`}
                size={28}
                name="person-circle-outline"
                type="ionicon"
                color="#000"
              />
            </View>
            // <Icon
            //   name="search-outline"
            //   type="ionicon"
            //   color="#000"
            //   size={30}
            //   style={tw`pl-4`}
            //   backgroundColor="#f2f0e4"
            //   onPress={() => navigation.navigate("HomeScreen")}
            // />
          ),
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InvitesScreen"
        component={Invites}
        options={{
          title: "Invites",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 16,
            textTransform: "uppercase",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Icon
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("HomeScreen")}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default StackRoutes;
