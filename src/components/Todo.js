import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export const Todo = ({ id, title, removeTodo }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => removeTodo(id)}>
      <View style={styles.todo}>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight> 
  )
}

const styles = StyleSheet.create({
  todo: {
    width: 350,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 4,
  },
})