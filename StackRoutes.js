import React, { useState } from "react";
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "./src/components/Home";
import Search from "./src/components/Search";
import Invites from "./src/components/Invites";
import Welcome from "./src/components/Welcome";
import SignIn from "./src/components/Welcome/SignIn";
import Signup from "./src/components/Welcome/Signup";
import ForgotPass from "./src/components/Welcome/ForgotPass";

import JoinedRoom from "./src/components/JoinedRoom";
import Profile from "./src/components/Profile";
import Messages from "./src/components/Messages";
import ChatRoomScreen from "./src/components/Messages/ChatRoomScreen";
import NewMessage from "./src/components/Messages/NewMessage";

import UpdateUser from "./src/components/Profile/UpdateUser";
import UserDp from "./src/components/Profile/UserDp";
import ChangeUser from "./src/components/Profile/ChangeUser";
import UserInfo from "./src/components/Profile/UserInfo";

import Followers from "./src/components/Profile/Followers";
import Following from "./src/components/Profile/Following";
import EditDP from "./src/components/Profile/EditDP";
import AddInsta from "./src/components/Profile/AddInsta";
import AddTwitter from "./src/components/Profile/AddTwitter";

import Settings from "./src/components/Settings";

import { checkConnected } from "./network";
import Connection from "./src/components/Connection";
import IconComponent from "./src/components/Reuse/IconComponent";
import OtpScreen from "./src/components/Welcome/OtpScreen";
import AuthHook from "./src/components/customHook/AuthHook";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";

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
        name="addTwitter"
        component={AddTwitter}
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
        name="addInsta"
        component={AddInsta}
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
        options={{
          title: "",
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="user"
        component={UpdateUser}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f2f0e4",
            shadowColor: "#f2f0e4",
            elevation: 0,
          },
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
        name="userInfo"
        component={UserInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="changeUser"
        component={ChangeUser}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#f2f0e4",
            shadowColor: "#f2f0e4",
            elevation: 0,
          },
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
          headerStyle: {
            backgroundColor: "#f2f0e4",
            shadowColor: "#f2f0e4",
            elevation: 0,
          },
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
          headerStyle: {
            backgroundColor: "#f2f0e4",
            shadowColor: "#f2f0e4",
            elevation: 0,
          },
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="forgotPass"
        component={ForgotPass}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="signup"
        component={Signup}
        options={{ headerShown: false }}
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
  const user = AuthHook();
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
            <View style={tw`flex flex-row items-center content-center pr-6`}>
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
              {user?.photoURL ? (
                <Avatar
                  size={26}
                  rounded
                  source={{
                    uri: user?.photoURL,
                  }}
                  onPress={() => navigation.navigate("ProfileScreen")}
                />
              ) : (
                <IconComponent
                  size={28}
                  name="person-circle-outline"
                  type="ionicon"
                  color="#000"
                  onPress={() => navigation.navigate("ProfileScreen")}
                />
              )}
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
        name="chatStack"
        component={ChatStack}
        options={{ headerShown: false }}
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

const ChatRoomHeader = (props) => {
  return (
    <View>
      <Text>{props?.children}</Text>
    </View>
  );
};

const ChatStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={"MessageScreen"}>
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
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("newMessage")}
              >
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
        name="chatRoomScreen"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="newMessage"
        component={NewMessage}
        options={{
          headerTitle: "NEW MESSAGE",
          headerBackTitleVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerStyleInterpolator: HeaderStyleInterpolators.forStatic,
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

  let initialRouteName = "StartStack";

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
