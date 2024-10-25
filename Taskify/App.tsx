import { SafeAreaView, View } from "react-native";
import { colors, styles } from "./styles/styles";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CalendarScreen from "./screens/CalendarScreen";
import TasksScreen from "./screens/TasksScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TaskManagement from "./screens/TaskManagement";
import ProfileScreen from "./screens/ProfileScreen";

function HomeTab() {
  return <HomeScreen />;
}

function CalendarTab() {
  return <CalendarScreen />;
}

function TasksTab() {
  return <TasksScreen />;
}

function ProfileTab() {
  return <ProfileScreen />;
}

const Tab = createBottomTabNavigator();

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 30, backgroundColor: colors.taskify25 }}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "";
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Calendar") {
                iconName = focused
                  ? "calendar-number"
                  : "calendar-number-outline";
              } else if (route.name === "Tasks") {
                iconName = focused ? "clipboard" : "clipboard-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }
              // You can return any component that you like here!​
              return focused ? (
                <View style={styles.focusedTab}>
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              ) : (
                <View style={styles.unfocusedTab}>
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              );
            },
            tabBarStyle: {
              backgroundColor: colors.taskify25,
              height: 80,
              paddingBottom: 8,
            },
            tabBarLabelStyle: {
              color: colors.taskify100,
              fontSize: 18,
            },
            tabBarActiveTintColor: colors.taskify100,
            tabBarInactiveTintColor: colors.taskify100,
          })}
        >
          <Tab.Screen name="Home" component={HomeTab} />
          <Tab.Screen name="Calendar" component={CalendarTab} />
          <Tab.Screen name="Tasks" component={TasksTab} />
          <Tab.Screen name="Profile" component={ProfileTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    // <SignUpScreen />
  );
}
