import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, styles } from "../styles/styles";
import TasksEmpty from "../components/TasksEmpty";
import AddTaskButton from "../components/AddTaskButton";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const TasksScreen = () => {
  const [searchTasks, setSearchTasks] = useState("");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.taskify25,
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
          backgroundColor: colors.taskify50,
          borderRadius: 50,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name={"filter"} size={25} color={colors.taskify100} />
        </TouchableOpacity>
        <TextInput
          style={{
            paddingLeft: 10,
            height: 60,
            width: "85%",
            color: colors.taskify100,
            fontSize: 16,
          }}
          value={searchTasks}
          onChangeText={setSearchTasks}
          placeholder="Search your tasks"
          placeholderTextColor={colors.taskify100}
        />
        <FontAwesome name="search" size={20} color={colors.taskify100} />
      </View>

      {/* If no tasks, show TasksEmpty */}
      <TasksEmpty />
      <AddTaskButton />
    </View>
  );
};

export default TasksScreen;
