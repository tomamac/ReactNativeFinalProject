import { TouchableOpacity } from "react-native";
import React from "react";
import { colors, styles } from "../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

interface AddTaskButtonProps {
  onPress: () => void;
}
const AddTaskButton = ({ onPress }: AddTaskButtonProps) => {
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
      onPress={onPress} // เพิ่ม onPress เพื่อเรียกฟังก์ชันเปิด Modal
    >
      <Ionicons name={"add"} size={30} color={colors.taskify25} />
    </TouchableOpacity>
  );
};

export default AddTaskButton;
