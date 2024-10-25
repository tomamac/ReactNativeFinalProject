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
  const [selectedDay, setSelectedDay] = useState<string>('Sun.');

  const handleSave = () => {
    // save task
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide" // ใช้ slide เพื่อให้โมดอลเลื่อนขึ้นจากล่าง
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
            <View style={styles.leftIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="calendar-outline" size={24} color="#06331D" />
                <Text style={styles.iconText}>{selectedDay}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="bookmark-outline" size={24} color="#06331D" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.iconButtonRight} onPress={handleSave}>
              <Ionicons name="send" size={30} color="#06331D" />
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
    justifyContent: 'flex-end', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: '100%', 
    padding: 20,
    backgroundColor: '#D0E8E6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#06331D',
    fontWeight: 'bold',
  },
});

export default TaskModal;
