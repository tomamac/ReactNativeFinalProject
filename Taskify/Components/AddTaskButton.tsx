import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors, styles } from "../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddTaskButton = () => {
  return (
    <TouchableOpacity
      style={[
        styles.centerContainer,
        {
          borderRadius: 100,
          position: "absolute",
          right: 20,
          bottom: 20,
          backgroundColor: colors.taskify75,
          width: 60,
          height: 60,
        },
      ]}
    >
      <Ionicons name={"add"} size={30} color={colors.taskify25} />
    </TouchableOpacity>
  );
};

export default AddTaskButton;
