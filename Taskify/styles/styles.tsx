import { StyleSheet } from "react-native";

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

export { styles, colors };
