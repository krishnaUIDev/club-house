import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import InputComponent from "../Reuse/InputComponent";
import Conversation from "./Conversation";

const data = [
  {
    id: 0,
    icon: "🗣️",
    title: "Idetity",
    list: "Black, Gen X, Latino, East Aian, BIPOC, South Asian",
  },
  {
    id: 1,
    icon: "💡",
    title: "Knowledge",
    list: "Physics, Space, Psychology, History, Math",
  },
  {
    id: 3,
    icon: "💭",
    title: "Arts",
    list: "Writing, Art, Dance, Fashion, Beauty, Design",
  },
  {
    id: 4,
    icon: "🎸",
    title: "Entertainment",
    list: "Television,Gaming, Performances, Advice, Podcasts",
  },
  {
    id: 5,
    icon: "🥳",
    title: "Hanging Out",
    list: "Late Night, Chill Vibes, Meet People",
  },
  {
    id: 6,
    icon: "🕊️",
    title: "Faith",
    list: "Hinduism, Agnosticism, Sikhism",
  },
  {
    id: 7,
    icon: "🌍",
    title: "World Affairs",
    list: "US Politics, Markets, Climate, Economics",
  },
  {
    id: 8,
    icon: "👨‍💻",
    title: "Tech",
    list: "Angle Investing, SaaS, Engineering, DTC",
  },
  {
    id: 9,
    icon: "🌿",
    title: "Wellness",
    list: "Veganism, Psychedelics, Fitness, Meditation, Health",
  },
  {
    id: 10,
    icon: "🏆",
    title: "Sports",
    list: "Cricket, MMA, Cycling, Basketball, Soccer",
  },
  {
    id: 11,
    icon: "🔥",
    title: "Hustle",
    list: "Clubhose, Pitch Practice, Enterprenuership",
  },
  {
    id: 12,
    icon: "🌆",
    title: "Places",
    list: "New York, Africa, Atlanta, Los Angeles, Paris, London",
  },
  {
    id: 13,
    icon: "🌻",
    title: "Life",
    list: "Relationships, Traveling,Parenting",
  },
  {
    id: 14,
    icon: "💬",
    title: "Languages",
    list: "Hindi, Indonasian, Spanish, Mandarin",
  },
];

const Index = () => {
  return (
    <View>
      <InputComponent placeholder="Find People and Clubs" />
      <View style={tw`px-4`}>
        <Text style={tw`text-sm font-semibold text-gray-500`}>
          FIND CONVERSATIONS ABOUT...
        </Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          // horizontal={false}
          numColumns={2}
          renderItem={({ item: { icon, title, list } }) => (
            <View style={tw`mr-3 w-40`}>
              <Conversation icon={icon} title={title} list={list} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
