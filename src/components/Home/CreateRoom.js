import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Modalize } from "react-native-modalize";
import tw from "tailwind-react-native-classnames";
import Dialog from "react-native-dialog";

const data = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    roomName: "Open",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    roomName: "Social",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    roomName: "Closed",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    roomName: "Closed",
  },
];

const AlertBox = ({ visible, setVisible }) => {
  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Add a Title</Dialog.Title>
        <Dialog.Description>
          e.g., Raising wolves - good idea?
          <Dialog.Input style={tw`p-4`} defaultValue="You can type in me" />
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
        <Dialog.Button label="Set Title" onPress={() => setVisible(false)} />
      </Dialog.Container>
    </View>
  );
};

const CreateRoom = ({ roomRef }) => {
  const onBackButtonPress = () => {
    console.log("test");
  };
  const [visible, setVisible] = useState(false);

  const renderItem = (item) => {
    return (
      <View style={tw`px-3 pt-6`}>
        <TouchableOpacity
          style={tw`border border-blue-200 bg-blue-100 bg-opacity-70 p-2 rounded-lg `}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={[tw`rounded-full h-20 w-20`]}
          />
        </TouchableOpacity>
        <Text style={tw`text-base font-semibold px-4`}>{item.roomName}</Text>
      </View>
    );
  };
  return (
    <Modalize
      onBackButtonPress={onBackButtonPress}
      ref={roomRef}
      handlePosition="inside"
      modalHeight={400}
      handleStyle={{
        opacity: 1,
      }}
      HeaderComponent={
        <View style={tw`px-4 pt-4`}>
          <AlertBox visible={visible} setVisible={setVisible} />
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={tw`text-base font-bold text-right text-green-500`}>
              + Add a Topic
            </Text>
          </TouchableOpacity>
        </View>
      }
      FooterComponent={
        <View style={tw`px-4 pt-4 pb-4 items-center`}>
          <Text style={tw`text-lg font-semibold pb-1`}>
            Start a room open to everyone
          </Text>
          <TouchableOpacity
            style={[
              tw`flex flex-row justify-between px-4 py-2  items-center  rounded-full w-32`,
              { backgroundColor: "#27ae61" },
            ]}
          >
            <Text>🎉</Text>
            <Text style={tw`text-white text-center text-xl`}>Let's go</Text>
          </TouchableOpacity>
        </View>
      }
      flatListProps={{
        horizontal: false,
        numColumns: 3,
        data: data,
        renderItem: (item) => renderItem(item && item.item),
        keyExtractor: (item) => item.id.toString(),
        showsVerticalScrollIndicator: false,
      }}
    />
  );
};

export default CreateRoom;

const styles = StyleSheet.create({});
