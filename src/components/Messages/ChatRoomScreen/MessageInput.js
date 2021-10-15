import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Icon } from "react-native-elements";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setMessage("");
  };

  const handleSend = () => {
    if (message) {
      sendMessage();
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -120 : 0}
    >
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Icon
            size={24}
            name="happy-outline"
            type="ionicon"
            color="#595959"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity>
          <Icon
            size={24}
            name="camera-outline"
            type="ionicon"
            color="#595959"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            size={24}
            name="mic-outline"
            type="ionicon"
            color="#595959"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSend}>
        <Icon
          size={18}
          name={message ? "send" : "add-outline"}
          type="ionicon"
          color="white"
          style={styles.icon}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
