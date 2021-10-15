import React from "react";
import { StyleSheet, Text, View } from "react-native";

const blue = "#3777f0";
const grey = "lightgrey";

const myID = "u1";

const Message = ({ message }) => {
  const isMe = message?.user?.id === myID;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.leftContainer : styles.rightContainer,
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>
        {message?.content}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  leftContainer: {
    backgroundColor: grey,
    marginLeft: "auto",
    marginRight: 10,
  },
  rightContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: "auto",
  },
});
