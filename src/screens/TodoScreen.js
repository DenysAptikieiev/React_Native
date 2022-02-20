import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../UI/Button/Button';
import { THEME } from '../UI/theme.js';
import { AppCard } from '../UI/AppCard/AppCard';
import { ModalScreen } from "../components/ModalScreen";

export const TodoScreen = ({ todo, goBack, onRemove, onSave }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const saveHandler = title => {
    onSave(todo.id, title);
    setModalVisible(false)
  }

  return (
    <View>
      <ModalScreen
        visible={modalVisible}
        closeModal={setModalVisible}
        value={todo.title}
        onSave={saveHandler}
      />
      <AppCard>
        <Text style={styles.todoTitle}>{todo.title}</Text>
        <Button
          title='Edit'
          styleButton={styles.editButton}
          styleText={styles.textBtn}
          event={() => setModalVisible(true)}
        />
      </AppCard>

      <View style={styles.containerButtons}>
        <Button
          title="Back"
          event={() => goBack()}
          styleButton={styles.backButton}
          styleText={styles.textBtn}
        />
        <Button
          title="Delete"
          event={() => onRemove(todo.id)}
          styleButton={styles.deleteButton}
          styleText={styles.textBtn}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  todoTitle: {
    textAlign: 'center',
    fontSize: 28,
    color: "#FFFFFF"
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 55,
    height: 35,
    backgroundColor: THEME.SUCCESS_COLOR,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: '45%',
    height: 35,
    color: "#000",
    backgroundColor: THEME.SUCCESS_COLOR,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: '45%',
    height: 35,
    color: "#000",
    backgroundColor: THEME.DANGER_COLOR,
  },
  textBtn: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 18,
  },
});

