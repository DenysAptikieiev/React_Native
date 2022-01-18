import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AppTodo} from '../components/AppTodo';
import {Todo} from '../components/Todo';

export const MainScreen = ({addTodo, todos, removeTodo}) => { 
  return (
    <View style={styles.todosBlock}>
      <AppTodo onSubmit={addTodo}/>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => {
            return (
              <Todo 
                id={item.id} 
                title={item.title} 
                removeTodo={removeTodo}
                />)
              }
            }
        />
    </View>
  )
};

const styles = StyleSheet.create({
  todosBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

