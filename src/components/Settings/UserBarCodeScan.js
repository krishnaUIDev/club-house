import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import tw from "tailwind-react-native-classnames";
import ButtonComponent from "../Reuse/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase";

export default function UserBarCodeScan({
  route: {
    params: { user },
  },
}) {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getPermissionSetup = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getPermissionSetup();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (data) {
      db.collection("users")
        .doc(data)
        .get()
        .then((docRef) => {
          const searchUser = docRef?.data();
          if (searchUser?.uid === user?.uid) {
            Alert.alert(
              "Its your profile",
              "",
              [
                {
                  text: "View",
                  onPress: () => navigation.navigate("Profile"),
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("OK Pressed"),
                  style: "cancel",
                },
              ],
              { cancelable: true }
            );
          } else if (searchUser) {
            navigation.replace("userInfo", { user: searchUser });
          } else {
            Alert.alert(
              "User not Found",
              `Please get the valid QR Code`,
              [
                {
                  text: "Back",
                  onPress: () => navigation.navigate("qr", { user }),
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("OK Pressed"),
                  style: "cancel",
                },
              ],
              { cancelable: true }
            );
          }
        })
        .catch((err) => {});
    }
  };

  if (hasPermission === false || hasPermission === "denied") {
    Alert.alert(
      "Camera is disabled",
      `Enale the camera in the Settings App under "Privacy" > "Camera" > "Clubhouse"`,
      [
        {
          text: "Open Settings",
          onPress: () => Linking.openSettings(),
        },
        {
          text: "Cancel",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
    return null;
  }
  if (hasPermission === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <View style={tw`mt-1 flex items-center absolute inset-x-0 bottom-12`}>
        <ButtonComponent
          buttonColor="#5576ab"
          label="My Code"
          onChange={() => navigation.navigate("qr", { user })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
