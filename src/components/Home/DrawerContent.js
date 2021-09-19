import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeHook from "../Theme/ThemeHook";

const DrawerContent = () => {
  const theme = ThemeHook();
  return (
    <View style={{ flex: 1, backgroundColor: theme ? "#000000" : "#f2f0e4" }}>
      <Text>test</Text>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
