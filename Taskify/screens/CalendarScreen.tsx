import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { calendarTheme, colors } from "../styles/styles";
import CalendarEmpty from "../components/CalendarEmpty";
import AddTaskButton from "../components/AddTaskButton";
import moment from "moment";
import {
  CalendarProvider,
  DateData,
  ExpandableCalendar,
} from "react-native-calendars";
import { DayCalculation } from "../function/DayCalculation";
import TaskModal from "../components/TaskModal";
import TaskItem from "../components/TaskItem";
import { TasksContext } from "../components/TaskContext";

const CalendarScreen = (): React.JSX.Element => {
  const { tasksList, addTask, toggleTaskCompletion, deleteTask } = useContext(TasksContext)!;
  const today = moment().format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
  const [isModalVisible, setModalVisible] = useState(false);

  const renderHeader = (date: any) => {
    return (
      <TouchableOpacity
        style={[{ width: "100%", height: 20, alignContent: "flex-start" }]}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: colors.taskify100,
          }}
        >
          {DayCalculation(selectedDate, today)}
        </Text>
      </TouchableOpacity>
    );
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddTask = (taskName: string, description: string, priority: string, date: Date | null) => {
    addTask(taskName, description, priority, date || new Date(selectedDate));
    closeModal();
  };

  const tasksForSelectedDate = tasksList.filter(task => {
    if (!task.date) return false;
    return moment(task.date).format('YYYY-MM-DD') === selectedDate;
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.taskify25,
        paddingTop: 20,
      }}
    >
      <CalendarProvider
        date={selectedDate}
        onMonthChange={(day: DateData) =>
          day.month - 1 === moment().month() && day.year === moment().year()
            ? setSelectedDate(today)
            : setSelectedDate(day.dateString)
        }
      >
        <ExpandableCalendar
          theme={calendarTheme()}
          style={[
            { borderBottomWidth: 3, borderBottomColor: colors.taskify50 },
          ]}
          allowShadow={false}
          hideKnob={true}
          renderHeader={renderHeader}
          onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
          markedDates={{
            [today]: {
              selected: true,
              selectedColor: colors.taskify50,
              selectedTextColor: colors.taskify100,
            },
            [selectedDate]: {
              selected: true,
              selectedColor: colors.taskify100,
              selectedTextColor: "#FFF",
            },
          }}
          hideArrows={true}
        />
        <View style={{ marginTop: 30 ,marginHorizontal: 20}}>
        {tasksForSelectedDate.length === 0 ? (
          <CalendarEmpty />
        ) : (
          <FlatList
            data={tasksForSelectedDate}
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
        </View>
      </CalendarProvider>

      <TaskModal visible={isModalVisible} onClose={closeModal} onSave={handleAddTask} />

      <AddTaskButton onPress={openModal} />
    </View>
  );
};

export default CalendarScreen;
