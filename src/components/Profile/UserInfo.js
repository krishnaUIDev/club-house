import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { Icon, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import AuthHook from "../customHook/AuthHook";
import ActionSheet from "react-native-actionsheet";
import { db } from "../../firebase";
import UserDp from "./UserDp";

const UserInfo = ({
  route: {
    params: { user },
  },
}) => {
  const navigation = useNavigation();
  const mainUser = AuthHook();
  const [follow, setFollow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  let actionSheet = React.useRef();
  var optionArray = ["Share Profile", "Block", "Report an incident", "Cancel"];

  const showActionSheet = () => {
    actionSheet.current.show();
  };

  const handleFollow = () => {
    setFollow(!follow);
    db.collection("follow")
      .doc(mainUser?.uid)
      .get()
      .then((snap) => {
        const data = snap.data();
        if (data) {
          if (data?.uid.some((item) => item?.uid !== user?.uid)) {
            db.collection("follow")
              .doc(mainUser?.uid)
              .update({
                followedBy: mainUser?.uid,
                uid: [{ ...user }, { ...data }],
              });
          }
        } else {
          console.log(user, "user");
          db.collection("follow")
            .doc(mainUser?.uid)
            .set({
              followedBy: mainUser?.uid,
              uid: [{ ...user }],
            });
        }
      })
      .catch((err) => {});
  };

  const viewImage = () => setModalVisible(true);

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f0e4" }}>
      <View style={tw`flex flex-row justify-end px-6 pt-4 items-center`}>
        <TouchableOpacity onPress={() => showActionSheet()}>
          <Icon
            style={tw`pr-4`}
            size={28}
            name="ellipsis-horizontal"
            type="ionicon"
            color="#989898"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="close-outline"
            type="ionicon"
            color="#989898"
            size={30}
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </TouchableOpacity>
      </View>
      <View style={[tw`flex h-full px-6 py-4`]}>
        <View style={tw`flex`}>
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity onPress={viewImage}>
              <Image
                source={{
                  uri: user?.photoURL,
                }}
                style={[tw`rounded-full h-24 w-24`]}
              />
            </TouchableOpacity>
            <View style={tw`mt-auto flex-row items-center`}>
              <TouchableOpacity style={tw`pr-2`}>
                <Icon
                  name="notifications-outline"
                  type="ionicon"
                  color="#2288dd"
                  size={30}
                />
              </TouchableOpacity>
              <Button
                type={follow ? "solid" : "outline"}
                title={follow ? "Following" : "Follow"}
                onPress={handleFollow}
                buttonStyle={{ height: 36, borderRadius: 25, borderWidth: 2 }}
                titleStyle={{ fontSize: 12, marginLeft: 2 }}
                icon={
                  !follow ? (
                    <Icon
                      name="person-add"
                      type="ionicon"
                      color="#2288dd"
                      size={15}
                    />
                  ) : null
                }
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={tw`text-lg font-bold pt-2`}>{user?.displayName}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tw`text-base font-normal pb-6`}>
              {user?.accountId}
            </Text>
          </TouchableOpacity>
          <View style={tw`flex-row pb-6`}>
            <TouchableOpacity onPress={() => navigation.navigate("followers")}>
              <Text style={tw`pr-6 text-base font-semibold`}>23 followers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("following")}>
              <Text style={tw`text-base font-semibold`}>23 following</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`pb-6`}>
          <Text style={tw`text-base font-normal py-2`}>
            Hello I am new Here
          </Text>
        </View>
        <View style={tw`flex-row items-center pb-6`}>
          <TouchableOpacity>
            <View style={tw`flex-row items-center`}>
              <Icon name="twitter" type="font-awesome" color="#5576aa" />
              <Text style={tw`pr-6 pl-1 text-base text-indigo-800`}>
                Krishna
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={tw`flex-row items-center`}>
              <Icon name="instagram" type="font-awesome" color="#5576aa" />
              <Text style={[tw`pl-1 text-base text-indigo-800`]}>Krishna</Text>
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
      <ActionSheet
        ref={actionSheet}
        options={optionArray}
        title={user?.displayName}
        cancelButtonIndex={3}
        destructiveButtonIndex={[1, 2]}
        onPress={(index) => {
          /* do something */
        }}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        closeOnClick={true}
        onBackdropPress={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          style={tw`flex-1`}
          onPress={() => setModalVisible(false)}
        >
          <UserDp photoURL={user?.photoURL} />
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default UserInfo;
