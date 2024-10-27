import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { colors, styles } from '../styles/styles';
import TaskModal from '../components/TaskModal';
import AddTaskButton from '../components/AddTaskButton';
import HomeEmpty from '../components/HomeEmpty';

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<{ name: string; description: string }[]>([]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddTask = (taskName: string, description: string) => {
    setTasks([...tasks, { name: taskName, description }]);
    closeModal();
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
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>John Doe</Text>
      </View>

      {tasks.length === 0 ? (
        <HomeEmpty />
      ) : (
        tasks.map((task, index) => (
          <View key={index} style={styles.taskCard}>
            <Text style={styles.taskHeader}>{task.name}</Text>
            <Text style={styles.taskHeaderText}>{task.description}</Text>
          </View>
        ))
      )}

      <TaskModal visible={isModalVisible} onClose={closeModal} onSave={handleAddTask} />

      <AddTaskButton onPress={openModal} />
    </View>
  );
};

export default HomeScreen;