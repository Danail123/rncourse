import { StatusBar } from "expo-status-bar";
//import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  // const [goalList, setGoalList] = useState([]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="type goal"
          placeholdrTextColor={"#fff"}
        />
        <View style={styles.buttonContainer}>
          <Button title="add goal" />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.listText}>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
    color: "#fff",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#ff0000",
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
  },
  inputField: {
    width: "60%",
    borderWidth: 1,
    borderColor: "red",
    color: "#fff",
  },
  buttonContainer: {
    minWidth: 80,
  },
  goalsContainer: {
    flex: 5,
  },
  listText: {
    color: "#fff",
  },
});
