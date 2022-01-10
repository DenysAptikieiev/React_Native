import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AppTodo = ({onSubmit}) => {
  const pressHandler = () => {
    onSubmit('test todo')
  }
  return (
    <View style={styles.AppTodoBlock}>
      <TextInput style={styles.textInput}/>
      <View style={styles.btnWrapper}>
        <Button 
          onPress={pressHandler} 
          title='Add'
          color='#6F8780'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  AppTodoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: "80%",
    height: 35,
    backgroundColor: "#FFF"
  },
  btnWrapper: {
    width: '20%', 
    color: '#000'
  }
})