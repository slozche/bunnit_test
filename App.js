import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabNavigation from "./src/navigations/BottomTabNavigation";

export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <BottomTabNavigation></BottomTabNavigation>
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
