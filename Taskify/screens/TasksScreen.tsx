import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { colors, styles } from "../styles/styles";
import TasksEmpty from "../components/TasksEmpty";
import AddTaskButton from "../components/AddTaskButton";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import TaskModal from "../components/TaskModal";
import TaskItem from "../components/TaskItem";
import FilterModal from "../components/FliterModal";

const TasksScreen = () => {
  const [searchTasks, setSearchTasks] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [tasksList, setTaskList] = useState<{ text: string; description: string; completed: boolean, priority: string }[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openFilterModal = () => {
    setFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false);
  };

  const addTask = (taskName: string, description: string, priority: string) => {
    if (taskName.trim()) {
      setTaskList([...tasksList, { text: taskName, description: description, completed: false, priority }]);
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

  const filteredTasks = tasksList.filter(task =>
    task.text.toLowerCase().includes(searchTasks.toLowerCase())
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.taskify25,
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
          backgroundColor: colors.taskify50,
          borderRadius: 50,
          paddingHorizontal: 20,
        }}
      >
        <FilterModal visible={isFilterModalVisible} onClose={closeFilterModal} />
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={openFilterModal}
        >
          <Ionicons name={"filter"} size={25} color={colors.taskify100} />
        </TouchableOpacity>
        <TextInput
          style={{
            paddingLeft: 10,
            height: 60,
            width: "85%",
            color: colors.taskify100,
            fontSize: 16,
          }}
          value={searchTasks}
          onChangeText={setSearchTasks}
          placeholder="Search your tasks"
          placeholderTextColor={colors.taskify100}
        />
        <FontAwesome name="search" size={20} color={colors.taskify100} />
      </View>

      {tasksList.length === 0 ? (
        <TasksEmpty />
      ) : (
        <FlatList
          data={filteredTasks}
          renderItem={({ item, index }) => (
            <TaskItem
              task={item}
              index={index}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
              priority={item.priority}
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

export default TasksScreen;