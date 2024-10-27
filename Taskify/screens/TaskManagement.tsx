import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, StatusBar } from 'react-native';
import TaskItem from '../components/TaskItem';

function TaskManagement() {
  const [tasksList, setTaskList] = useState<{ text: string; completed: boolean }[]>([]);
  const [taskName, setTaskName] = useState<string>('');

  const addTask = () => {
    if (taskName.trim()) {
      setTaskList([...tasksList, { text: taskName, completed: false }]);
      setTaskName('');
    }
  };

  const toggleTaskCompletion = (index: number) => {
    setTaskList(tasksList.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello, John Doe</Text>
      <Text style={styles.subHeader}>Your Task, Today</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={taskName}
        onChangeText={setTaskName}
        onSubmitEditing={addTask}
        returnKeyType="done"
        blurOnSubmit={true}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasksList}
        renderItem={({ item, index }) => (
          <TaskItem
            task={item}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default TaskManagement;