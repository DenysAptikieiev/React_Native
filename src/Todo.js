import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Todo = ({todos}) => {
  return (
    <View style={styles.todo}>
      {todos.map((todo) => {
        return( <Text 
          style={styles.todoTitle}
          key={todo.id}
          >{todo.title}</Text>)
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  todoTitle: {
    width: 335,
    height: 115,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.18,
    backgroundColor: '#FFF',
    marginBottom: 14,
    color: '#000',
    borderRadius: 4,
  }
})