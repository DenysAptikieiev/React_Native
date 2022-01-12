import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export const Todo = ({ title }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert(title)}>
      <View style={styles.todo}>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight> 
  )
}

const styles = StyleSheet.create({
  todo: {
    width: 333,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
  },
})