import { View, Text } from "react-native";
import React, { useState } from "react";
import { colors, styles } from "../styles/styles";
import HomeEmpty from "../components/HomeEmpty";
import AddTaskButton from "../components/AddTaskButton";
import TaskModal from "../components/TaskModal";

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false); // สร้างสถานะสำหรับ Modal

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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

      {/* แสดง TaskModal */}
      <TaskModal visible={isModalVisible} onClose={closeModal} />

      {/* ส่งฟังก์ชัน openModal ไปยัง AddTaskButton */}
      <AddTaskButton onPress={openModal} />
    </View>
  );
};

export default HomeScreen;
