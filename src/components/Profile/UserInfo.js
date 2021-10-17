import React from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const UserInfo = ({
  route: {
    params: { user },
  },
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f0e4" }}>
      <View style={tw`flex flex-row justify-end px-6 pt-4 items-center`}>
        <TouchableOpacity>
          <Icon
            style={tw`pr-4`}
            size={30}
            name="ellipsis-h"
            type="font-awesome"
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
            <TouchableOpacity>
              <Image
                source={{
                  uri: user?.photoURL,
                }}
                style={[tw`rounded-full h-24 w-24`]}
              />
            </TouchableOpacity>
            <Button
              style={tw`mt-auto`}
              type="outline"
              title="Follow"
              buttonStyle={{ height: 35, borderRadius: 25, borderWidth: 2 }}
              titleStyle={{ fontSize: 14, marginLeft: 2 }}
              icon={
                <Icon
                  name="person-add"
                  type="ionicon"
                  color="#2288dd"
                  size={15}
                />
              }
            />
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
    </SafeAreaView>
  );
};

export default UserInfo;
