import React from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";

const Account = () => {
  return (
    <View>
      <ListItem bottomDivider containerStyle={{ alignItems: "center" }}>
        <ListItem.Content>
          <ListItem.Title>Connect Twitter</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Connect Instagram</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
