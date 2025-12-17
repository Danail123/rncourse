import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
// import { ScrollView } from "react-native/types_generated/index";
import GoalItem from "./components/GoalItem";
import InputContainer from "./components/InputContainer";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const appHandleAdd = (goalText) => {
    setGoalList((goalList) => [
      ...goalList,
      { text: goalText, id: Math.random().toString() },
    ]);
  };

  const handleDelete = (itemId) => {
    // setGoalList((goalList) => goalList.filter((item) => item.id !== itemId));
    console.log("delete");
  };

  return (
    <View style={styles.appContainer}>
      <InputContainer onAddGoalProp={appHandleAdd} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return <GoalItem item={itemData.item} onDelete={handleDelete} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={true}
        ></FlatList>
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
    padding: 30,
  },
  goalsContainer: {
    width: "100%",
    flex: 5,
    outlineColor: "#fff",
    outlineWidth: 1,
  },
});
