import NetInfo from "@react-native-community/netinfo";

export const checkConnected = () => {
  return NetInfo.fetch().then((state) => {
    return state.isConnected;
  });
};
