import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = ({ title, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 3,
    padding: 6,
    backgroundColor: "#00a0ff",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
