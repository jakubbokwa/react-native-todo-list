import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const handleAddGoal = (goalTitle) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const handleRemoveGoal = (id) => {
    setCourseGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonWrapper}>
        <Button
          title="Add New Goal"
          onPress={() => {
            setIsAddMode(!isAddMode);
          }}
        />
      </View>
      <GoalInput
        onCancel={cancelGoalAdditionHandler}
        visible={isAddMode}
        handleAddGoal={handleAddGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={() => {
              handleRemoveGoal(itemData.item.id);
            }}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  buttonWrapper: {
    marginBottom: 10,
  },
});
