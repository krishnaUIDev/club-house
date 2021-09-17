// import React from "react";
// import { StyleSheet, Text, View, Button } from "react-native";

// const index = ({ onCheck }) => {
//   return (
//     <View>
//       <Text>Failed</Text>
//       <Button title="Reload Page" onPress={() => onCheck()} />
//     </View>
//   );
// };

// export default index;

import React, { Component } from "react";
import LottieView from "lottie-react-native";
import { Text, View, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default class Index extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View
        style={[
          tw`h-full flex items-center justify-center relative`,
          { backgroundColor: "#f2f0e4", flex: 1 },
        ]}
      >
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          source={require("../animations/noConnection.json")}
        />
        <View style={tw`absolute inset-x-0 bottom-24 h-16 items-center`}>
          <TouchableOpacity
            onPress={() => this.props.onCheck()}
            style={[
              tw`px-4 py-2  items-center  rounded-full w-40`,
              { backgroundColor: "#27ae61" },
            ]}
          >
            <Text style={tw`text-white text-center text-xl`}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
