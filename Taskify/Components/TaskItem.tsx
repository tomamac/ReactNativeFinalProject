import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { colors } from "../styles/styles";
import TaskModal from "./TaskModal";
import PriorityModal from "./PriorityModal";

interface TaskItemProps {
  task: { text: string; completed: boolean };
  index: number;
  toggleTaskCompletion: (index: number) => void;
  deleteTask: (index: number) => void;

  priority: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  index,
  toggleTaskCompletion,
  deleteTask,
  priority,
}) => {
  return (
    <View style={styles.taskContainer}>
      {/* Header ของ Task */}
      <View style={styles.taskHeader}>
        <Text style={styles.taskHeaderText}>In Progress (1 Task)</Text>
        <TouchableOpacity onPress={() => deleteTask(index)}>
          <Text style={styles.taskHeaderText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* เนื้อหาของ Task */}
      <View style={styles.taskCard}>
        <View style={styles.taskInfo}>
          <Checkbox
            status={task.completed ? "checked" : "unchecked"}
            onPress={() => toggleTaskCompletion(index)}
            color="#1b3b36"
          />
          <View style={styles.taskDetails}>
            <Text
              style={task.completed ? styles.taskTextComplete : styles.taskText}
            >
              {task.text}
            </Text>
            <Text style={styles.taskTime}>Today At 16:45</Text>
          </View>
          <View style={styles.priorityBadge}>
            <Text style={styles.priorityText}>{priority}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#E9ECEF", // สีพื้นหลังอ่อนๆ สำหรับกรอบนอก
    borderRadius: 10,
    marginVertical: 8,
    paddingBottom: 10,
    borderColor: "#CBD5E0", // สีเทาอ่อนสำหรับเส้นขอบกรอบนอก
    borderWidth: 1,
  },
  taskHeader: {
    backgroundColor: "#1b3b36", // สีพื้นหลังของ header
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  taskHeaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskCard: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  taskInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  taskText: {
    color: "#1b3b36",
    fontSize: 16,
  },
  taskTextComplete: {
    color: "#1b3b36",
    fontSize: 16,
    textDecorationLine: "line-through",
  },
  taskTime: {
    color: "#888",
    fontSize: 12,
    marginTop: 2,
  },

  taskDetails: {
    // เพิ่มส่วนนี้เพื่อกำหนดสไตล์ของ taskDetails
    flex: 1, // ให้ taskDetails ขยายเต็มพื้นที่ที่เหลือ
  },

  priorityBadge: {
    backgroundColor: "#1b3b36",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: "auto", // จัดปุ่ม Priority ไปทางขวาสุด
  },
  priorityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default TaskItem;
