import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ handleAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleChangeText}
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
        />
        <View style={styles.buttonsWrapper}>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                enteredGoal.length > 0 && handleAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    flex: 1,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    marginBottom: 20,
  },
  buttonsWrapper: {
    width: "60%",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
  },
  button: {
    width: "40%",
  },
});
