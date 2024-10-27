import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { colors, styles } from '../styles/styles';
import TaskModal from '../components/TaskModal';
import AddTaskButton from '../components/AddTaskButton';
import HomeEmpty from '../components/HomeEmpty';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [tasksList, setTaskList] = useState<{ text: string; description: string ;completed: boolean }[]>([]);
  const [taskName, setTaskName] = useState<string>('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addTask = (taskName: string, description: string) => {
    if(taskName.trim()){
      setTaskList([...tasksList, { text: taskName, description: description, completed: false }]);
      setTaskName('')
    }
    closeModal();
  };

  const toggleTaskCompletion = (index: number) => {
    setTaskList(tasksList.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (index: number) => {
    setTaskList(tasksList.filter((_, i) => i !== index));
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
          renderItem={({ item , index }) => (
            <TaskItem
              task={item}
              index={index}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <TaskModal visible={isModalVisible} onClose={closeModal} onSave={addTask} />
      <AddTaskButton onPress={openModal} />
    </View>
  );
};

export default HomeScreen;