import { StyleSheet, Text, View } from "react-native";

export default function MypageScreen() {
  return (
    <View style={styles.container}>
      <Text>Mypage</Text>
    </View>
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
