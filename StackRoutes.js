import React, { useState } from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import { View, TouchableOpacity, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "./src/components/Home";
import Search from "./src/components/Search";
import Invites from "./src/components/Invites";
import Welcome from "./src/components/Welcome";
import SignIn from "./src/components/Welcome/SignIn";
import JoinedRoom from "./src/components/JoinedRoom";
import Profile from "./src/components/Profile";
import Messages from "./src/components/Messages";
import UpdateUser from "./src/components/Profile/UpdateUser";
import ChangeUser from "./src/components/Profile/ChangeUser";
import Followers from "./src/components/Profile/Followers";
import Following from "./src/components/Profile/Following";
import EditDP from "./src/components/Profile/EditDP";
import Settings from "./src/components/Settings";

import { checkConnected } from "./network";
import Connection from "./src/components/Connection";
import IconComponent from "./src/components/Reuse/IconComponent";
import OtpScreen from "./src/components/Welcome/OtpScreen";

const Stack = createStackNavigator();

const UserStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditImage"
        component={EditDP}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f2f0e4",
            shadowColor: "#f2f0e4",
            elevation: 0,
          },
          gestureEnabled: true,
          cardOverlayEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity>
              <IconComponent
                name="close-outline"
                type="ionicon"
                color="#000"
                size={34}
                style={tw`pr-4`}
                onPress={() => navigation.navigate("Profile")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        // options={{ headerShown: false }}
        options={{
          title: "",
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          // headerRight: () => (
          //   <TouchableOpacity>
          //     <IconComponent
          //       name="close-outline"
          //       type="ionicon"
          //       color="#000"
          //       size={34}
          //       style={tw`pr-4`}
          //       onPress={() => navigation.navigate("Profile")}
          //     />
          //   </TouchableOpacity>
          // ),
        }}
      />
      <Stack.Screen
        name="user"
        component={UpdateUser}
        options={{
          title: "",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 16,
            textTransform: "uppercase",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("Profile")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="changeUser"
        component={ChangeUser}
        options={{
          title: "",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 16,
            textTransform: "uppercase",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("Profile")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="followers"
        component={Followers}
        options={{
          title: "Followers",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 16,
            textTransform: "uppercase",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("Profile")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="following"
        component={Following}
        options={{
          title: "Following",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 16,
            textTransform: "uppercase",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("Profile")}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const StartRoutes = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcomeScreen"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={SignIn}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f2f0e4",
            shadowColor: "#f2f0e4",
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("welcomeScreen")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
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
            <IconComponent
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
              <IconComponent
                style={tw`pr-6`}
                size={28}
                name="mail-open-outline"
                type="ionicon"
                color="#000"
                onPress={() => navigation.navigate("InvitesScreen")}
              />
              <IconComponent
                style={tw`pr-6`}
                size={28}
                name="calendar-outline"
                type="ionicon"
                color="#000"
              />
              <IconComponent
                style={tw`pr-6`}
                size={28}
                name="notifications-outline"
                type="ionicon"
                color="#000"
              />
              <IconComponent
                style={tw`pr-6`}
                size={28}
                name="person-circle-outline"
                type="ionicon"
                color="#000"
                onPress={() => navigation.navigate("ProfileScreen")}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{
          title: "EXPLORE",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 16,
            textTransform: "uppercase",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("HomeScreen")}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <IconComponent
                style={tw`pr-6`}
                size={20}
                name="user-plus"
                type="font-awesome-5"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MessageScreen"
        component={Messages}
        options={{
          title: "BACKCHANNEL",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 16,
            textTransform: "uppercase",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("HomeScreen")}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={tw`flex flex-row items-center content-center`}>
              <TouchableOpacity>
                <IconComponent
                  style={tw`pr-6`}
                  size={20}
                  name="ellipsis-h"
                  type="font-awesome"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconComponent
                  style={tw`pr-6`}
                  size={24}
                  name="pencil-square-o"
                  type="font-awesome"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={UserStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JoinedRoom"
        component={JoinedRoom}
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
              <IconComponent
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
  const [connectedStatus, setConnected] = useState(false);

  checkConnected()
    .then((res) => {
      setConnected(res);
    })
    .catch((err) => {
      console.log(err);
    });

  let initialRouteName = "HomeStack";

  if (!connectedStatus) {
    return <Connection onCheck={checkConnected} />;
  }

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StartStack"
        component={StartRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
