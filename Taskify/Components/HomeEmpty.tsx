import { View, Text, Image } from "react-native";
import React from "react";
import { styles, colors } from "../styles/styles";

const HomeEmpty = () => {
  return (
    <View style={[styles.centerContainer, { height: "100%", zIndex:0 }]}>
      <Image
        source={require("../assets/HomeEmpty.png")}
        style={{ width: "50%", height: undefined, aspectRatio: 1 }}
      />
      <Text>What do you want to do today?</Text>
      <Text>Tap + to add your tasks</Text>
    </View>
  );
};

export default HomeEmpty;
