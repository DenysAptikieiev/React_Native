import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {AppTodo} from '../components/AppTodo';
import {Todo} from '../components/Todo';
// import noItems from '../../assets/images/noItems.png'
export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => { 

  return (
    <View style={styles.todosBlock}>
      <AppTodo onSubmit={addTodo}/>

        { todos.length ? 
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => {
            return (
              <Todo 
                id={item.id} 
                title={item.title} 
                onOpen={openTodo}
                />)
              }
            }
        /> : <Image 
                style={styles.noItemsImage} 
                source={require('../../assets/images/noItems.png')} 
              />}

    </View>
  )
};

const styles = StyleSheet.create({
  todosBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsImage: {
    width: 120,
    height: 120,
    marginTop: '50%',
  }
})

