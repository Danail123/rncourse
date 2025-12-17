import { StyleSheet, Text, Pressable, View, Platform } from "react-native";
function GoalItem(props) {
  console.log(Platform.OS);
  return (
    <View style={styles.listView}>
      <Pressable
        android_ripple={{ color: "#red" }}
        onPress={props.onDelete.bind(this, props.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listView: {
    margin: 8,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#307d06",
  },
  pressedItem: {
    opacity: 0.5,
  },
  listText: {
    padding: 5,
    color: "#fff",
  },
});
