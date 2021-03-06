import React from "react";
import { Text, View, Share } from "react-native";
import tw from "tailwind-react-native-classnames";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Interests from "./Interests";
import Settings from "./Settings";
import Payments from "./Payments";
import NotificationCenter from "./NotificationCenter";
import Profile from "./Profile";
import { TouchableOpacity } from "react-native";
import IconComponent from "../Reuse/IconComponent";
import { useNavigation } from "@react-navigation/native";
import Account from "./Account";
import QR from "./QR";
import UserBarCodeScan from "./UserBarCodeScan";

const Stack = createStackNavigator();

const headerStyles = {
  headerTitleStyle: {
    fontWeight: "normal",
    fontSize: 16,
    textTransform: "uppercase",
  },
  headerStyle: {
    backgroundColor: "#f2f0e4",
    shadowColor: "#f2f0e4",
    elevation: 0,
  },
};

const index = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "React Native",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Stack.Navigator initialRouteName="settingsStack">
      <Stack.Screen
        name="settingsStack"
        component={Settings}
        options={{
          title: "SETTINGS",
          ...headerStyles,
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
        name="intrest"
        component={Interests}
        options={{
          title: "Intrests",
          ...headerStyles,
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("settingsStack")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="UserBarCodeScan"
        component={UserBarCodeScan}
        options={{
          title: "Scan user profile",
          ...headerStyles,
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("settingsStack")}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="qr"
        component={QR}
        options={{
          title: "QR Code",
          ...headerStyles,
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("settingsStack")}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <IconComponent
                name="share-outline"
                type="ionicon"
                color="#000"
                size={26}
                style={tw`pr-4`}
                onPress={() => onShare()}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          title: "Account",
          ...headerStyles,
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("settingsStack")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="payments"
        component={Payments}
        options={{
          title: "Payments",
          ...headerStyles,
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("settingsStack")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="notificationCenter"
        component={NotificationCenter}
        options={{
          title: "Notification Settings",
          ...headerStyles,
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("settingsStack")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Profile",
          ...headerStyles,
          headerLeft: () => (
            <TouchableOpacity>
              <IconComponent
                name="angle-left"
                type="font-awesome"
                color="#000"
                size={30}
                style={tw`pl-4`}
                onPress={() => navigation.navigate("settingsStack")}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default index;
