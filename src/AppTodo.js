import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AppTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value) {
      onSubmit(value)
      setValue('');
    } else {
      Alert.alert('Input must not be empty')
    }
  }

  return (
    <View style={styles.AppTodoBlock}>
      <TextInput 
        onChangeText={setValue} 
        value={value} 
        style={styles.textInput}
        placeholder='Enter your task name'
        autoCorrect={false}
        autoCapital='none'
      />
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
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: "65%",
    height: 35,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  btnWrapper: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: '20%', 
    color: '#000'
  }
})