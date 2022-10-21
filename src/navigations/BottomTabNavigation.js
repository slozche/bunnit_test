import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import CalendarScreen from "../screens/Calendar";
import LibraryScreen from "../screens/Library";
import MypageScreen from "../screens/Mypage";

export default function BottomTabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
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
  );
}
