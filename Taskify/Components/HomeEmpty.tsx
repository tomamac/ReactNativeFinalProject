import { View, Text, Image } from "react-native";
import React from "react";
import { styles, colors } from "../styles/styles";

const HomeEmpty = () => {
  return (
    <View style={[styles.centerContainer, { marginVertical: "auto" }]}>
      <Image
        source={require("../assets/HomeEmpty.png")}
        style={{
          width: "70%",
          height: undefined,
          aspectRatio: 1,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          fontSize: 20,
          color: colors.taskify75,
          textAlign: "center",
          lineHeight: 40,
        }}
      >
        What do you want to do today?{"\n"}Tap + to add your tasks
      </Text>
    </View>
  );
};

export default HomeEmpty;
