import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatRoomItem = ({ chatRoom }) => {
  const navigation = useNavigation();
  const user = chatRoom?.users[1];
  const handle = () => {
    navigation.navigate("chatRoomScreen", { id: chatRoom?.id });
    navigation.setOptions({ title: "test" });
  };
  return (
    <Pressable style={styles.container} onPress={handle}>
      <TouchableOpacity>
        <Image
          source={{
            uri: user?.imageUri,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      {chatRoom?.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.text}>{chatRoom?.lastMessage?.createdAt}</Text>
        </View>
        <Text style={styles.text} numberOfLines={1}>
          {chatRoom?.lastMessage?.content}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: "#3777f0",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    position: "absolute",
    left: 45,
    top: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: "gray",
  },
});

export default ChatRoomItem;
