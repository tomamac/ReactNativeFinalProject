import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TaskModalProps {
  visible: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ visible, onClose }) => {
  const [taskName, setTaskName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSave = () => {
    // Logic สำหรับการบันทึก task
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Input Task Name"
            value={taskName}
            onChangeText={setTaskName}
          />
          <TextInput
            style={styles.input}
            placeholder="Description Task"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="calendar-outline" size={24} color="black" />
              <Text>วันที่</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="bookmark-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
              <Ionicons name="arrow-forward-circle-outline" size={30} color="black" />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#e0f2f1', // สีพื้นหลังตามภาพตัวอย่าง
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default TaskModal;
