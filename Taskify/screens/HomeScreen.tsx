import React, { useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { colors } from '../styles/styles';
import TaskModal from '../components/TaskModal';
import AddTaskButton from '../components/AddTaskButton';
import HomeEmpty from '../components/HomeEmpty';
import TaskItem from '../components/TaskItem';
import { TasksContext } from '../components/TaskContext';

const HomeScreen = () => {
  const { tasksList, addTask, toggleTaskCompletion, deleteTask } = useContext(TasksContext)!;
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddTask = (taskName: string, description: string, priority: string, date: Date | null) => {
    addTask(taskName, description, priority, date);
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

      {tasksList.length === 0 ? (
        <HomeEmpty />
      ) : (
        <FlatList
          data={tasksList}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}

      <TaskModal visible={isModalVisible} onClose={closeModal} onSave={handleAddTask} />
      <AddTaskButton onPress={openModal} />
    </View>
  );
};

export default HomeScreen;
