import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
 
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
      <StatusBar 
        animated={true}
        hidden={false}
        statusBarStyle='dark-content'
      />
      <Navbar title="Todo App!"/>
      <View style={styles.wrappListContainer}>
        <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo}/>
      </View>
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
