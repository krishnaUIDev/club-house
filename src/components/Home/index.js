import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, SafeAreaView, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import RoomCard from "../RoomCard";
import StartRoom from "./StartRoom";
import DrawerContent from "./DrawerContent";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";
  return (
    <View style={[tw`relative flex-1`, { backgroundColor: "#f2f0e4" }]}>
      <View style={tw`p-6`}>
        <TouchableOpacity onPress={() => navigation.navigate("JoinedRoom")}>
          <RoomCard />
        </TouchableOpacity>
      </View>
      {!isDrawerOpen && (
        <View style={tw`absolute inset-x-0 bottom-4 h-16`}>
          <StartRoom />
        </View>
      )}
    </View>
  );
};

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        overlayColor: "transparent",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
