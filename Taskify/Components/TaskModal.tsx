import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/styles";

interface TaskModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (taskName: string, description: string) => void; // New prop
}

const TaskModal = ({ visible, onClose, onSave }: TaskModalProps) => {
  const [taskName, setTaskName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("Sun.");

  const handleSave = () => {
    if (taskName.trim() && description.trim()) {
      onSave(taskName, description); // Pass data back to parent
      setTaskName("");
      setDescription("");
      onClose();
    }
  };

  const inputRef = React.useRef<any>();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      onShow={() => {
        setTimeout(() => {
          inputRef.current?.blur();
          inputRef.current?.focus();
        }, 50);
      }}
    >
      <View style={styles.modalBackground}>
        <TouchableOpacity
          style={{ flex: 1, width: "100%" }}
          onPress={onClose}
        ></TouchableOpacity>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Input Task Name"
            value={taskName}
            onChangeText={setTaskName}
            ref={inputRef}
          />
          <TextInput
            style={styles.input}
            placeholder="Description Task"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.iconContainer}>
            <View style={styles.leftIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color={colors.taskify100}
                />
                <Text style={styles.iconText}>{selectedDay}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons
                  name="bookmark-outline"
                  size={24}
                  color={colors.taskify100}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.iconButtonRight}
              onPress={handleSave}
            >
              <Ionicons name="send" size={30} color={colors.taskify100} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.taskify50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  iconButtonRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
    color: colors.taskify100,
    fontWeight: "bold",
  },
});

export default TaskModal;