import { View, Text, Image } from "react-native";
import React from "react";
import { colors, styles } from "../styles/styles";

const CalendarEmpty = () => {
  return (
    <View style={[styles.centerContainer, { marginVertical: "auto" }]}>
      <Image
        source={require("../assets/CalendarEmpty.png")}
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
        You have a free day{"\n"}Tap + to add your tasks
      </Text>
    </View>
  );
};

export default CalendarEmpty;
