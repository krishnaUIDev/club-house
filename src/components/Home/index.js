import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
  Animated,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import RoomCard from "../RoomCard";
import StartRoom from "./StartRoom";
import DrawerContent from "./DrawerContent";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { roomData } from "../data/intersets";
import ScheduledRooms from "./ScheduledRooms";
import ThemeHook from "../Theme/ThemeHook";
import ActionSheet from "react-native-actionsheet";

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const theme = ThemeHook();
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";
  const scrollY = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = 75 * 3;

  const [refreshing, setrefreshing] = useState(false);
  const [data, setdata] = useState(roomData);
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setdata((data) => [...data]);
      setrefreshing(false);
    }, 2000);
  };

  let actionSheet = useRef();
  var optionArray = ["Option 1", "Option 2", "Option 3", "Option 4", "Cancel"];

  const showActionSheet = () => {
    //To show the Bottom ActionSheet
    actionSheet.current.show();
  };

  return (
    <View
      style={[
        tw`relative flex-1`,
        { backgroundColor: theme ? "#000000" : "#f2f0e4" },
      ]}
    >
      <View>
        <ScheduledRooms />
      </View>
      <View style={tw`pt-3 h-5/6`}>
        <Animated.FlatList
          data={data}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { club, subClub }, index }) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });

            const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 1),
            ];

            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <Animated.View
                style={[
                  tw`px-6`,
                  {
                    transform: [{ scale }],
                    opacity,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("JoinedRoom")}
                  onLongPress={() => showActionSheet()}
                  activeOpacity={1}
                  TouchableOpacity
                >
                  <RoomCard club={club} subClub={subClub} theme={theme} />
                </TouchableOpacity>
              </Animated.View>
            );
          }}
        />
        <ActionSheet
          ref={actionSheet}
          // Title of the Bottom Sheet
          title={"Which one do you like ?"}
          // Options Array to show in bottom sheet
          options={optionArray}
          // Define cancel button index in the option array
          // This will take the cancel option in bottom
          // and will highlight it
          cancelButtonIndex={4}
          // Highlight any specific option
          destructiveButtonIndex={1}
          onPress={(index) => {
            // Clicking on the option will give you alert
            alert(optionArray[index]);
          }}
        />
      </View>
      {!isDrawerOpen && (
        <View style={tw`absolute inset-x-0 bottom-4 h-16`}>
          <StartRoom theme={theme} />
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
