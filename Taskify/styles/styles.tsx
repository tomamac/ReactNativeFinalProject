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
  taskCard: {
    backgroundColor: '#1b3b36',
    borderRadius: 12,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskHeaderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'line-through', // Optional for completed tasks
  },
  taskTime: {
    color: '#888',
    fontSize: 12,
    marginLeft: 8,
  },
  priorityBadge: {
    backgroundColor: '#00695c',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  priorityText: {
    color: '#fff',
    fontSize: 12,
  }
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
