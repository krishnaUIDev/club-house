import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import ChatRoomItem from "./ChatRoomItem";
import chatRoom from "./data/chatRoom";
import { useNavigation } from "@react-navigation/native";

const Chats = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoom}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default Chats;
