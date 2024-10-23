import { View, Text } from "react-native";
import React from "react";
import { colors, styles } from "../styles/styles";
import HomeEmpty from "../components/HomeEmpty";
import AddTaskButton from "../components/AddTaskButton";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.taskify25,
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 20 }}>Hello,</Text>
        {/* vv replace with username? vv */}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>John Doe</Text>
      </View>

      {/* If no tasks, show HomeEmpty */}
      <HomeEmpty />
      <AddTaskButton />
    </View>
  );
};

export default HomeScreen;
