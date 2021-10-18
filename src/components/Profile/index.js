import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import Dialog from "react-native-dialog";
import AuthHook from "../customHook/AuthHook";
import { showMessage, hideMessage } from "react-native-flash-message";
import { db } from "../../firebase";

const AlertBox = ({ visible, setVisible }) => {
  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Update your Bio</Dialog.Title>
        <Dialog.Description>
          <Dialog.Input style={tw`w-32`} />
        </Dialog.Description>
        <Dialog.Button
          label="Cancel"
          bold={true}
          onPress={() => setVisible(false)}
        />
        <Dialog.Button label="Update" onPress={() => setVisible(false)} />
      </Dialog.Container>
    </View>
  );
};

const index = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [followingData, setFollowingData] = useState([]);
  const [following, setFollowing] = useState(0);
  const userInfo = AuthHook();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [userInfo]);

  useEffect(() => {
    const getFollowers = () => {
      db.collection("follow")
        .doc(userInfo?.uid)
        .get()
        .then((snap) => {
          const data = snap?.data();
          if (data && data?.uid) {
            setFollowing(data?.uid.length);
            setFollowingData(data?.uid);
          } else {
            setFollowing(0);
            setFollowingData([]);
          }
        })
        .catch((err) => {});
    };
    getFollowers();
  }, [userInfo]);

  const createAlert = () =>
    Alert.alert(
      "Clubhouse is for real names",
      "You can fix your legal name or add an optional creator alias if you are a puglic figure. This can only be changed once in a while",
      [
        {
          text: "Correct my legal name...",
          onPress: () => navigation.navigate("user"),
        },
        {
          text: "Add my creator alias...",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Never mind",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );

  const navigateFollowing = () => {
    if (following) {
      navigation.navigate("following", { followingData });
    } else {
      showMessage({
        message: "You dont have any following",
        type: "danger",
        icon: "danger",
        style: { height: 100 },
        titleStyle: { fontSize: 16 },
      });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f0e4" }}>
      <View style={tw`flex-row justify-between px-3 items-center`}>
        <TouchableOpacity>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color="#000"
            size={26}
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </TouchableOpacity>
        <View style={tw`flex flex-row content-center`}>
          <Icon
            style={tw`pr-6`}
            size={26}
            name="share-outline"
            type="ionicon"
            color="#000"
          />
          <Icon
            size={26}
            name="cog-outline"
            type="ionicon"
            color="#000"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
      </View>
      <AlertBox visible={visible} setVisible={setVisible} />
      <View style={[tw`flex h-full px-6 py-4`]}>
        <View style={tw`flex items-center`}>
          <TouchableOpacity onPress={() => navigation.navigate("EditImage")}>
            <Image
              source={{
                uri: user?.photoURL,
              }}
              style={[tw`rounded-3xl h-24 w-24`]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={createAlert}>
            <Text style={tw`text-lg font-bold pt-2`}>{user?.displayName}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("changeUser")}>
            <Text style={tw`text-base font-normal pb-6`}>
              {user?.accountId}
            </Text>
          </TouchableOpacity>
          <View style={tw`flex-row pb-6`}>
            <TouchableOpacity onPress={() => navigation.navigate("followers")}>
              <Text style={tw`pr-6 text-base font-semibold`}>23 followers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateFollowing}>
              <Text style={tw`text-base font-semibold`}>
                {following} following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View style={tw`pb-6`}>
            <Text style={tw`text-base font-normal py-2`}>
              Hello I am new Here
            </Text>
          </View>
        </TouchableOpacity>
        <View style={tw`flex-row items-center pb-6`}>
          <TouchableOpacity onPress={() => navigation.navigate("addTwitter")}>
            <View style={tw`flex-row items-center`}>
              <Icon name="twitter" type="font-awesome" color="#5576aa" />
              <Text style={tw`pr-6 pl-1 text-base text-indigo-800`}>
                Add Twitter
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("addInsta")}>
            <View style={tw`flex-row items-center`}>
              <Icon name="instagram" type="font-awesome" color="#5576aa" />
              <Text style={[tw`pl-1 text-base text-indigo-800`]}>
                Add Instagram
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center pb-6`}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            }}
            style={[tw`rounded-3xl h-12 w-12 mr-3`]}
          />
          <View>
            <Text style={tw`text-sm`}>Joined on</Text>
            <Text style={tw`text-base font-normal`}>Nominated By</Text>
          </View>
        </View>
        <View>
          <Text style={tw`text-sm font-semibold`}>Member of</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
