import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import * as Contacts from "expo-contacts";
import InputComponent from "../Reuse/InputComponent";

const Invites = () => {
  const [contacts, setContacts] = useState([]);
  const [refreshing, setrefreshing] = useState(false);

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setContacts((contacts) => [...contacts]);
      setrefreshing(false);
    }, 2000);
  };

  const handleContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });

      if (data.length > 0) {
        const updated =
          data &&
          data.map((item) => {
            const updatedName = item.name
              .split(" ")
              .map((s) =>
                String.fromCodePoint(s.codePointAt(0) || "").toUpperCase()
              )
              .join("");
            return {
              name: item.name,
              id: item.id,
              initial: updatedName,
            };
          });

        const filterd = updated.sort((a, b) => a.name.localeCompare(b.name));
        setContacts(filterd);
      }
    }
  };

  return (
    <View style={[tw`h-full p-2 pt-4`, { backgroundColor: "#f2f0e4" }]}>
      <Text style={tw`text-center text-base text-gray-700`}>
        Who's great addition to Clubhouse? {"\n"} You'll get credit for the
        invite on their profile!
      </Text>
      <View style={tw`flex-row justify-between items-center px-2 py-6 `}>
        <InputComponent placeholder="Invite a phone #" />
        <Icon name="address-book-o" type="font-awesome" color="black" />
      </View>

      {contacts.length < 1 ? (
        <View style={tw`bg-white rounded-xl p-4 mx-8 my-2 shadow items-center`}>
          <View style={tw`flex-row relative`}>
            <View style={tw`absolute top-2 pr-4 right-10`}>
              <Icon size={6} name="star" type="font-awesome" color="#FBBF24" />
            </View>
            <View style={tw`absolute top-0 pr-4 right-6`}>
              <Icon size={8} name="star" type="font-awesome" color="#FBBF24" />
            </View>
            <View style={tw`absolute top-1 pr-4 right-2`}>
              <Icon size={10} name="star" type="font-awesome" color="#FBBF24" />
            </View>
            <Icon size={18} name="search" type="font-awesome" color="#9CA3AF" />
            <View style={tw`absolute left-3 bottom-2`}>
              <Icon size={12} name="star" type="font-awesome" color="#FBBF24" />
            </View>
          </View>
          <Text style={tw`font-semibold text-lg`}>
            Let's find your friends!
          </Text>
          <Text style={tw`font-normal py-3 pb-6 text-center`}>
            We'll show you who's already here {"\n"} and notify you when new
            friends join
          </Text>
          <View style={tw`bg-gray-200 rounded-full px-3 py-1`}>
            <TouchableOpacity onPress={() => handleContacts()}>
              <Text style={tw`font-semibold text-xs`}>
                Search using my contacts
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={tw`px-4`}>
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            refreshing={refreshing}
            onRefresh={onRefresh}
            renderItem={({ item: { name, id, initial } }) => (
              <View style={tw`flex flex-row items-center justify-between mb-2`}>
                <TouchableOpacity
                  style={tw`bg-gray-200 z-50 p-2 border-gray-300 rounded-3xl border-solid border-2`}
                >
                  <Text style={tw`text-2xl font-light`}>{initial}</Text>
                </TouchableOpacity>
                <Text style={tw`text-sm font-semibold`}>{name}</Text>
                <TouchableOpacity
                  style={[
                    tw`px-1 py-1  items-center  rounded-full w-20`,
                    { backgroundColor: "#5576ab" },
                  ]}
                >
                  <Text style={tw`text-white text-center text-lg`}>Invite</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Invites;

const styles = StyleSheet.create({});
