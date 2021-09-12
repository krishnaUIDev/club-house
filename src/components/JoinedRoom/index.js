import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import Member from "../Member";

const data = [
  {
    id: 0,
    name: "rakesh",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: true,
  },
  {
    id: 2,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 2,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 3,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 4,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 5,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 6,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 7,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 8,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 9,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 10,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 11,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 12,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 13,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 14,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 15,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 16,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
  {
    id: 17,
    name: "kk",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    admin: false,
  },
];

const index = () => {
  const numColumns = 3;

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#f2f0e4" }}>
      <View
        style={[
          tw`h-full`,
          {
            backgroundColor: "#f2f0e4",
          },
        ]}
      >
        <View
          style={tw`flex flex-row py-6 px-4 items-center justify-between mb-2`}
        >
          <View style={tw`flex-row  items-center`}>
            <Icon name="chevron-down-outline" type="ionicon" size={32} />
            <Text style={tw`text-lg font-medium`}>Hallway</Text>
          </View>
          <View style={tw`flex-row  items-center`}>
            <TouchableOpacity>
              <Icon name="document-outline" type="ionicon" size={26} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                }}
                style={[tw`rounded-full ml-8`, { height: 40, width: 40 }]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`py-4 rounded-t-3xl bg-white h-full relative`}>
          <View
            style={tw`flex flex-row justify-between items-center px-8 flex-wrap `}
          >
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-gray-800 font-medium uppercase`}>
                Telugu house
              </Text>
              <TouchableOpacity style={tw`pl-2`}>
                <Icon
                  size={14}
                  name="home"
                  type="font-awesome"
                  color="#27ae61"
                />
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row`}>
              <TouchableOpacity style={tw`pr-4`}>
                <Icon
                  size={20}
                  name="ellipsis-h"
                  type="font-awesome"
                  color="#3f3f3f"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon size={18} name="lock" type="font-awesome" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={tw`text-lg font-semibold py-1 px-8`}>
            Codenames Game Mode On
          </Text>
          <View style={tw`mt-4 mb-4 ml-8 flex-row h-4/6`}>
            <FlatList
              data={formatData(data, numColumns)}
              keyExtractor={(item) => item.id}
              numColumns={numColumns}
              renderItem={({ item: { name, image, admin } }) => (
                <View style={tw``}>
                  <Member name={name} image={image} admin={admin} />
                </View>
              )}
            />
          </View>
          <View style={tw`absolute inset-x-0 bottom-28`}>
            <View
              style={tw`flex flex-row justify-between items-center px-8 flex-wrap `}
            >
              <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity
                  // onPress={() => navigation.navigate("JoinedRoom")}
                  style={[
                    tw`flex flex-row justify-between px-4 py-2  items-center  rounded-full w-40 bg-gray-200`,
                  ]}
                >
                  <Text style={tw`text-base`}>✌🏽</Text>
                  <Text
                    style={tw`text-red-400 font-semibold text-center text-base`}
                  >
                    Leave quietly
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={tw`flex flex-row  items-center`}>
                <TouchableOpacity
                  style={tw`bg-gray-100 z-50 p-1 rounded-full shadow-sm mr-3`}
                >
                  <Icon
                    size={28}
                    name="add-outline"
                    type="ionicon"
                    color="#3f3f3f"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`bg-gray-100 z-50 p-1 rounded-full shadow-sm`}
                >
                  <Icon
                    size={28}
                    name="hand-left-outline"
                    type="ionicon"
                    color="#3f3f3f"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
