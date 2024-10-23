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
});

export { styles, colors };
