import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { calendarTheme, colors, styles } from "../styles/styles";
import CalendarEmpty from "../components/CalendarEmpty";
import AddTaskButton from "../components/AddTaskButton";
import moment from "moment";
import {
  CalendarProvider,
  DateData,
  ExpandableCalendar,
} from "react-native-calendars";
import { DayCalculation } from "../function/DayCalculation";

const CalendarScreen = (): React.JSX.Element => {
  const today = moment().format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.taskify25,
        paddingTop: 20,
      }}
    >
      {/*https://wix.github.io/react-native-calendars/docs/Intro*/}
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

        {/* If no tasks, show CalendarEmpty */}

        <CalendarEmpty />
      </CalendarProvider>

      <AddTaskButton />
    </View>
  );
};

export default CalendarScreen;
