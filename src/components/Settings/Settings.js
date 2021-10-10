import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ListItem, Avatar } from "react-native-elements";

const list = [
  {
    name: "Pause Notifications",
  },
  {
    name: "Send",
  },
  {
    name: "Amy Farha",
  },
  {
    name: "Chris Jackson",
  },
];

const Settings = () => {
  const navigation = useNavigation();
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <View style={[tw`h-full p-2 pt-4`, { backgroundColor: "#f2f0e4" }]}>
      <Text onPress={() => navigation.navigate("notificationCenter")}>
        test
      </Text>
      <View>
        <ListItem>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Krishna kk</ListItem.Title>
            <ListItem.Subtitle>@krishnakondoju</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Settings;
