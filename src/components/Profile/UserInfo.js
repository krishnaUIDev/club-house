import React from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { getUserDetails } from "../../slices/userSlice";

const UserInfo = () => {
  const navigation = useNavigation();
  const user = useSelector(getUserDetails);

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f0e4" }}>
      <View style={tw`flex-row justify-between px-3`}>
        <TouchableOpacity>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color="#000"
            size={30}
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </TouchableOpacity>
        <View style={tw`flex flex-row content-center`}>
          <Icon
            style={tw`pr-6`}
            size={30}
            name="share-outline"
            type="ionicon"
            color="#000"
          />
        </View>
      </View>
      <View style={[tw`flex h-full px-6 py-4`]}>
        <View style={tw`flex items-center`}>
          <TouchableOpacity>
            <Image
              source={{
                uri: user?.image,
              }}
              style={[tw`rounded-3xl h-24 w-24`]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tw`text-lg font-bold pt-2`}>{user?.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tw`text-base font-normal pb-6`}>@Krishna</Text>
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
