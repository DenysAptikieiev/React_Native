import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Navbar } from './src/Navbar';
import { AppTodo } from './src/AppTodo';
import { Todo } from './src/Todo';
 
export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodo = { 
      id: Date.now().toString(),
      title: title,
     }
     setTodos(prev => [...prev, newTodo]);
  }

  return (
    <View style={styles.container}>
      <Navbar title="Todo App!"/>
      <View>
        <AppTodo onSubmit={addTodo}/>
        <Todo todos={todos}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06251E',
  }
});
