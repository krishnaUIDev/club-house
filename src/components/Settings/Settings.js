import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { ListItem, Avatar, Switch, Icon, Button } from "react-native-elements";
import { auth } from "../../firebase";
import AuthHook from "../customHook/AuthHook";

const Settings = () => {
  const navigation = useNavigation();
  const user = AuthHook();

  const [notification, setNotification] = useState(false);
  const [fewNotification, setFewNotification] = useState(false);
  const [audio, setAudio] = useState(false);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("StartStack");
      })
      .catch((err) => console.log(err));
  };
  return (
    <SafeAreaView style={[tw`h-full p-2 pt-1`, { backgroundColor: "#f2f0e4" }]}>
      <ScrollView>
        <View style={tw`px-3 py-3`}>
          <ListItem onPress={() => navigation.navigate("account")}>
            <Avatar
              size="medium"
              rounded
              source={{
                uri: user?.photoURL,
              }}
            />
            <ListItem.Content>
              <View
                style={tw`flex flex-row items-center justify-between w-full`}
              >
                <View>
                  <ListItem.Title>{user?.name}</ListItem.Title>
                  <ListItem.Subtitle>@krishnakondoju</ListItem.Subtitle>
                </View>
                <TouchableOpacity
                  style={tw`bg-gray-100 z-50 p-2 rounded-full shadow-sm`}
                  onPress={() => navigation.navigate("qr")}
                >
                  <Icon
                    size={24}
                    name="qr-code-outline"
                    type="ionicon"
                    color="#286ef0"
                  />
                </TouchableOpacity>
              </View>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={tw`px-3 py-4`}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Pause Notifications</ListItem.Title>
            </ListItem.Content>
            <Switch
              value={notification}
              color="green"
              onChange={() => setNotification(!notification)}
            />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Send Fewer Notifications</ListItem.Title>
            </ListItem.Content>
            <Switch
              value={fewNotification}
              color="green"
              onChange={() => setFewNotification(!fewNotification)}
            />
          </ListItem>
          <ListItem
            bottomDivider
            onPress={() => navigation.navigate("notificationCenter")}
          >
            <ListItem.Content>
              <ListItem.Title>Notifications Settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        {/* second */}
        <View style={tw`px-3 py-2`}>
          <ListItem
            bottomDivider
            onPress={() => navigation.navigate("intrest")}
          >
            <ListItem.Content>
              <ListItem.Title>Interests</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem
            bottomDivider
            onPress={() => navigation.navigate("payments")}
          >
            <ListItem.Content>
              <ListItem.Title>Payments</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Spatial Audio</ListItem.Title>
            </ListItem.Content>
            <Switch
              value={audio}
              color="green"
              onChange={() => setAudio(!audio)}
            />
          </ListItem>
        </View>
        {/* thried */}
        <View style={tw`px-3 py-2`}>
          <ListItem
            bottomDivider
            onPress={() => navigation.navigate("intrest")}
          >
            <ListItem.Content>
              <ListItem.Title>Whats New</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>FAQ /Contact Us</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Community Guidelines</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Terms of Service</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Privacy Policy</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
        <View style={tw`px-3 py-2`}>
          <Button
            title="Logout"
            titleStyle={{ color: "red" }}
            buttonStyle={{ backgroundColor: "white" }}
            onPress={() => handleLogout()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
