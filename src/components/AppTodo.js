import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  Pressable,
} from "react-native";
import { Button } from '../UI/Button/Button';
import { THEME } from "../UI/theme";

export const AppTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Input must not be empty");
    }
  };

  return (
    <View style={styles.AppTodoBlock}>
      <TextInput
        onChangeText={setValue}
        value={value}
        style={styles.textInput}
        placeholder="Enter your task name"
        autoCorrect={false}
        autoCapital="none"
      />
      <Button
        event={pressHandler}
        styleButton={styles.button}
        styleText={styles.textBtn}
        title="Add"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  AppTodoBlock: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    width: "80%",
    height: 35,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: "20%",
    height: 35,
    color: "#000",
    backgroundColor: THEME.SUCCESS_COLOR,
  },
  textBtn: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 18,
  },
});
