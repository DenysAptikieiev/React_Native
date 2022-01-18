import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }
    setTodos(prev => [...prev, newTodo]);
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(item => item.id != id));
  }

  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    const todo = todos.find(item => item.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo}/>
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
    maxHeight: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
