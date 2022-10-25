import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";

export default function CalendarScreen() {
  const [date, setDate] = useState(() => moment());

  const makeCalendar = () => {
    const startWeek = date.clone().startOf("month").week();
    const endWeek =
      date.clone().endOf("month").week() === 1
        ? 53
        : date.clone().endOf("month").week();

    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {Array(7)
            .fill()
            .map((ele, idx) => {
              let current = date
                .clone()
                .week(week)
                .startOf("week")
                .add(idx, "days");

              let isSelected =
                date.format("YYYYMMDD") === current.format("YYYYMMDD") ? 1 : 0;

              let isGrayed =
                current.format("MM") !== date.format("MM") ? "gray" : "";

              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    borderStyle: "solid",
                    borderWidth: isSelected,
                    borderRadius: 100,
                    borderColor: "blue",
                  }}
                  onPress={(event) => {
                    setDate(current);
                  }}
                >
                  <Text style={{ color: isGrayed }}>{current.format("D")}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      );
    }

    return calendar;
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", height: 40 }}>
        <TouchableOpacity
          onPress={() => setDate(date.clone().subtract(30, "days"))}
        >
          <MaterialIcons name="navigate-before" size={24} color="blue" />
        </TouchableOpacity>
        <Text>{date.format("MMMM YYYY")}</Text>
        <TouchableOpacity onPress={() => setDate(date.clone().add(30, "days"))}>
          <MaterialIcons name="navigate-next" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((ele, idx) => {
          let dayColor;
          if (ele === "Sun") {
            dayColor = "red";
          } else if (ele === "Sat") {
            dayColor = "blue";
          } else {
            dayColor = "gray";
          }
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: 30,
              }}
            >
              <Text style={{ color: dayColor }}>{ele}</Text>
            </View>
          );
        })}
      </View>
      {makeCalendar()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  selected: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: "100%",
  },
  grayed: { color: "gray" },
});
