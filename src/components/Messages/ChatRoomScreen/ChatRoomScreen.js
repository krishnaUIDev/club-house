import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Message from "./Message";
import chatRoomData from "../data/chats";
import MessageInput from "./MessageInput";
import { useRoute, useNavigation } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // navigation.setOptions({ title: "test" });
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData?.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
