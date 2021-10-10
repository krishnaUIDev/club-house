import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SetImage = ({ styles, uri }) => (
  <Image
    source={{
      uri: uri,
    }}
    style={[tw`rounded-full ${styles}`]}
  />
);

const Welcome = () => {
  const navigation = useNavigation();
  // return (
  //   <View
  //     style={[
  //       tw`flex items-center justify-center h-full relative`,
  //       { backgroundColor: "#f2f0e4" },
  //     ]}
  //   >
  //     <Icon
  //       name="hand-sparkles"
  //       size={36}
  //       type="font-awesome-5"
  //       color="#517fa4"
  //     />
  //     <Text
  //       style={[
  //         tw`font-extrabold text-opacity-25`,
  //         { color: "#454237", fontSize: 45 },
  //       ]}
  //     >
  //       Clubhouse
  //     </Text>
  //     <View style={tw`absolute inset-x-0 bottom-4 h-28 items-center`}>
  //       <TouchableOpacity
  //         onPress={() => navigation.navigate("LoginScreen")}
  //         style={[
  //           tw`flex flex-row justify-between px-4 py-3  items-center  rounded-full w-48`,
  //           { backgroundColor: "#5576ab" },
  //         ]}
  //       >
  //         <Text style={tw`text-white text-center text-xl`}>🎉 Welcome in!</Text>
  //         <Icon
  //           name="long-arrow-right"
  //           type="font-awesome"
  //           color="white"
  //           size={16}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
  return (
    <SafeAreaView style={[tw`h-full`, { backgroundColor: "#f2f0e4" }]}>
      <View style={tw`h-3/5 relative`}>
        <View style={tw`absolute`}>
          <SetImage
            styles="h-10 w-10 mt-16 ml-16"
            uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
          <SetImage
            styles="h-32 w-32 ml-36 -mt-8"
            uri="https://fedspendingtransparency.github.io/assets/img/user_personas/repurposer_mug.jpg"
          />
          <SetImage
            styles="h-24 w-24 -ml-5 -mt-10"
            uri="https://image.cnbcfm.com/api/v1/image/106544012-1589903334649gettyimages-1197127417.jpeg?v=1589904464&w=1600&h=900"
          />
          <SetImage
            styles="h-14 w-14 ml-80 -mt-16"
            uri="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          />
          <SetImage
            styles="h-16 w-16 mt-16 -ml-6"
            uri="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
          />
          <SetImage
            styles="h-12 w-12 -mt-32 ml-24"
            uri="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142"
          />
          <SetImage
            styles="h-20 w-20 -mt-10 ml-48"
            uri="https://i.insider.com/60c1df2b23393a00188e25da?width=1136&format=jpeg"
          />
        </View>
      </View>
      <Text style={tw`text-xl font-semibold text-center`}>
        Welcome to our freedom {"\n"} clubhouse app
      </Text>
      <Text style={tw`text-sm font-normal text-center mt-6`}>
        Talk any person of your {"\n"} mother language
      </Text>
      <View style={tw`absolute inset-x-0 bottom-0 h-24 items-center`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={[
            tw`flex flex-row justify-between px-4 py-3  items-center  rounded-full w-48`,
            { backgroundColor: "#5576ab" },
          ]}
        >
          <Text style={tw`text-white text-center text-xl`}>🎉 Welcome in!</Text>
          <Icon
            name="long-arrow-right"
            type="font-awesome"
            color="white"
            size={16}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
