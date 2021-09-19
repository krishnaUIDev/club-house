import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

const ScheduledRooms = () => {
  return (
    <TouchableOpacity>
      <View
        style={[
          tw`mx-10 px-4 py-4 rounded-2xl`,
          { backgroundColor: "#e7e4d5" },
        ]}
      >
        <View
          style={[
            tw`flex-row items-center justify-evenly flex-wrap`,
            { flexShrink: 0 },
          ]}
        >
          <Text>9:00AM</Text>
          <View>
            <Text style={tw`text-gray-500 text-xs font-medium uppercase`}>
              TELUGU HOUSE
            </Text>
            <Text style={tw`text-gray-800 text-sm`}>Ekkada unna pannaei</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ScheduledRooms;
