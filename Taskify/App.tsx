import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles, colors } from "./styles/styles";
import HomeEmpty from "./components/HomeEmpty";
import TaskManagement from "./screens/TaskManagement";

export default function App() {
  return (
    <View style={[{ backgroundColor: colors.taskify25 }]}>
      {/* <HomeEmpty /> */}
      <TaskManagement />
      <StatusBar style="auto" />
    </View>
  );
}
