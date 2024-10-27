import { StyleSheet } from "react-native";
import { Theme } from "react-native-calendars/src/types";

const colors = {
  taskify100: "#16423C", //Primary Buttons, Labels (Text)
  taskify75: "#6A9C89", //Secondary Buttons, Highlight
  taskify50: "#C4DAD2", //Component Background color
  taskify25: "#E9EFEC", //Background color
};

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  debugBorder: {
    borderColor: "red",
    borderWidth: 1,
  },
  debugBackground: {
    backgroundColor: "red",
  },
  focusedTab: {
    borderTopColor: colors.taskify100,
    borderTopWidth: 2,
    height: "100%",
    width: "100%",
    paddingTop: 16,
    alignItems: "center",
  },
  unfocusedTab: {
    borderTopColor: colors.taskify50,
    borderTopWidth: 2,
    height: "100%",
    width: "100%",
    paddingTop: 16,
    alignItems: "center",
  },
});

function calendarTheme(): Theme {
  return {
    backgroundColor: colors.taskify25,
    calendarBackground: colors.taskify25,
    textSectionTitleColor: colors.taskify100,
    textSectionTitleDisabledColor: colors.taskify100,
    selectedDayBackgroundColor: "#0000",
    selectedDayTextColor: colors.taskify100,
    todayTextColor: "#00adf5",
    dayTextColor: colors.taskify100,
    textDisabledColor: "#d9e1e8",
    dotColor: "#00adf5",
    selectedDotColor: "#ffffff",
    arrowColor: "orange",
    disabledArrowColor: "#d9e1e8",
    // monthTextColor: "blue",
    indicatorColor: "blue",
    textDayHeaderFontWeight: 'bold',
    textDayHeaderFontSize: 16,
    // textDayFontFamily: "monospace",
    // textMonthFontFamily: "monospace",
    // textDayHeaderFontFamily: "monospace",
    // textDayFontWeight: "300",
    // textMonthFontWeight: "bold",
    // textDayHeaderFontWeight: "300",
    // textDayFontSize: 16,
    // textMonthFontSize: 16,
    // textDayHeaderFontSize: 16,
  };
}

export { styles, colors, calendarTheme };
