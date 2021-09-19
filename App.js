import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store";
import tw from "tailwind-react-native-classnames";
import StackRoutes from "./StackRoutes";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
            <StackRoutes />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
      <StatusBar style="auto" />
      <FlashMessage />
    </Provider>
  );
}
