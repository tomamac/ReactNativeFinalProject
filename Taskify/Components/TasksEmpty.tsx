import { View, Text, Image } from "react-native";
import React from "react";
import { colors, styles } from "../styles/styles";

const TasksEmpty = () => {
  return (
    <View style={[styles.centerContainer, { marginVertical: "auto" }]}>
      <Image
        source={require("../assets/TasksEmpty.png")}
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
        All your tasks will be stored here{"\n"}Tap + to add your tasks
      </Text>
    </View>
  );
};

export default TasksEmpty;
