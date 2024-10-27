import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { colors } from "../styles/styles";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";

interface Task {
  id: string;
  text: string;
  description: string;
  completed: boolean;
  priority: string;
  date: Date | null;
}

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <View style={styles.taskContainer}>
      {/* Header ของ Task */}
      <View style={styles.taskHeader}>
        <Text style={styles.taskHeaderText}>
          {task.completed ? "Finished" : "In Progress"}
        </Text>
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* เนื้อหาของ Task */}
      <View style={styles.taskCard}>
        <View style={styles.taskInfo}>
          <Checkbox
            status={task.completed ? "checked" : "unchecked"}
            onPress={() => toggleTaskCompletion(task.id)}
            color="#1b3b36"
          />
          <View style={styles.taskDetails}>
            <Text
              style={task.completed ? styles.taskTextComplete : styles.taskText}
            >
              {task.text}
            </Text>
            <Text style={styles.taskTime}>
              {task.date ? moment(task.date).format("MMM D, YYYY") : ""}
            </Text>
          </View>
          <View style={styles.priorityBadge}>
            <Text style={styles.priorityText}>{task.priority}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#E9ECEF",
    borderRadius: 10,
    marginVertical: 8,
    paddingBottom: 10,
    borderColor: "#CBD5E0",
    borderWidth: 1,
  },
  taskHeader: {
    backgroundColor: "#1b3b36",
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
    flex: 1,
  },
  priorityBadge: {
    backgroundColor: "#1b3b36",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: "auto",
  },
  priorityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default TaskItem;
