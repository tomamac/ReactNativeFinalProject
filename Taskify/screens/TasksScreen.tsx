import React, { useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { colors } from "../styles/styles";
import TasksEmpty from "../components/TasksEmpty";
import AddTaskButton from "../components/AddTaskButton";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import TaskModal from "../components/TaskModal";
import TaskItem from "../components/TaskItem";
import FilterModal from "../components/FliterModal";
import { TasksContext } from "../components/TaskContext";

const TasksScreen = () => {
  const { tasksList, addTask, toggleTaskCompletion, deleteTask } = useContext(TasksContext)!;
  const [searchTasks, setSearchTasks] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState(false);
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

  const handleAddTask = (taskName: string, description: string, priority: string, date: Date | null) => {
    addTask(taskName, description, priority, date);
    closeModal();
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

export default TasksScreen;
