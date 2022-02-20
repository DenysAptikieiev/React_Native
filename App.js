import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

const loadAplication = async () => {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);
  const [isReady, setIsReady] = useState(false);

  if(isReady) {
    return (<AppLoading 
      startAsync={loadAplication} 
      onError={error => console.log(error)}
      onFinish={() => setIsReady(true)}
      />)
  }

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }
    setTodos(prev => [...prev, newTodo]);
  }

  const removeTodo = id => {
    const todo = todos.find(item => item.id === id);
    Alert.alert(
      'Delete todo',
      `Are you sure you want to delete ${todo.title}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destrctive',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelablr: false }
    )
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(item => {
      if(item.id === id) {
        item.title = title
      }
      return item
    }))
  }

  const editTodo = id => {
    const todo = todos.find(item => item.id === id);
    console.log(todo);
  }

  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    const todo = todos.find(item => item.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo} onRemove={removeTodo} onSave={updateTodo}/>
  }

  return (
    <View style={styles.container}>
      <Navbar title="Todo App!" />
      <View style={styles.wrappListContainer}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06251E',
  },
  wrappListContainer: {
    maxHeight: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
