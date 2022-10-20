import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

// Home Compornent
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

// Calendar Compornent
function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
}

// Library Compornent
function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
    </View>
  );
}

// Mypage Compornent
function MypageScreen() {
  return (
    <View style={styles.container}>
      <Text>Mypage</Text>
    </View>
  );
}

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "HOE",
              headerShown: false,
              tabBarIcon: () => (
                <SimpleLineIcons name="home" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              title: "CALENDAR",
              headerShown: false,
              tabBarIcon: () => (
                <FontAwesome5 name="calendar-alt" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Library"
            component={LibraryScreen}
            options={{
              title: "LIBRARY",
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="library-outline" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Mypage"
            component={MypageScreen}
            options={{
              title: "MY PAGE",
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
