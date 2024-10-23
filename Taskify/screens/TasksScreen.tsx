import { View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import TasksEmpty from "../components/TasksEmpty";
import AddTaskButton from "../components/AddTaskButton";

const TasksScreen = () => {
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
        {/* Replace with View with textinput and icon and filter button
        with position absolute placed inside textinput
        see also: https://stackoverflow.com/questions/40935381/how-can-i-put-an-icon-inside-a-textinput-in-react-native
      */}
        <Text style={{ fontSize: 20 }}>Hello,</Text>
        {/* vv replace with username? vv */}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>John Doe</Text>
      </View>

      {/* If no tasks, show TasksEmpty */}
      <TasksEmpty />
      <AddTaskButton />
    </View>
  );
};

export default TasksScreen;
