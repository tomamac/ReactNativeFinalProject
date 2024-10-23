import { View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import CalendarEmpty from "../components/CalendarEmpty";
import AddTaskButton from "../components/AddTaskButton";

const CalendarScreen = () => {
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
        {/* Replace with React Native Calendar 
        https://wix.github.io/react-native-calendars/docs/Intro
        */}
        <Text style={{ fontSize: 20 }}>Hello,</Text>
        {/* vv replace with username? vv */}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>John Doe</Text>
      </View>

      {/* If no tasks, show CalendarEmpty */}
      <CalendarEmpty />
      <AddTaskButton />
    </View>
  );
};

export default CalendarScreen;
