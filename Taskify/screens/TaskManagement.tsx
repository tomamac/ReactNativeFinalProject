import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';

export default function TaskManagement() {

  const [tasksList, setTaskList] = useState<{
    text: string;
    completed: boolean
  }[]>([]);
  const [taskName, setTaskName] = useState<string>('');

  const addTask = () => {
    if (taskName.length > 0 && taskName.trim() !== '') {
      setTaskList([...tasksList, { text: taskName, completed: false }]);
      setTaskName('');
    }
  };

  const deleteTask = (index: number) => {
    setTaskList(tasksList.filter((_, item) => item !== index));
  };

  const toggleTaskCompletion = (index: number) => {
    setTaskList(tasksList.map((tasks, i) => i === index ? { ...tasks, completed: !tasks.completed } : tasks));
  };

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={taskName}
        onChangeText={setTaskName}
        onSubmitEditing={addTask}
        returnKeyType="done"
        blurOnSubmit={true}
      />
      <Button title="Add Task" onPress={addTask}/>
      <FlatList
        data={tasksList}
        renderItem={({ item, index }) => (
          <TaskItem
            task={item}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 60,
    color: 'black',
    fontFamily: 'WorkSans',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});